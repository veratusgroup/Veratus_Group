#!/usr/bin/env python3
"""Render the site's canonical static shell into explicit public pages only."""
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
CONFIG=json.loads((ROOT/'tools/public-pages.json').read_text())
def render(template,prefix,current):
 text=template.replace('{{ROOT}}',prefix)
 def mark(m):
  tag=m.group(0);href=re.search(r'href="([^"]+)"',tag)
  if href and href.group(1).removesuffix('index.html')==(prefix+current).removesuffix('index.html'):return tag[:-1]+' aria-current="page">'
  return tag
 return re.sub(r'<a\b[^>]*>',mark,text)
for page in CONFIG['pages']:
 rel=Path(page['path']);assert not rel.is_absolute() and '..' not in rel.parts
 file=ROOT/rel;text=file.read_text();prefix='../'*len(rel.parent.parts)
 if 'site-shell.css' not in text:text=text.replace('</head>','<link rel="stylesheet" href="'+prefix+'assets-v2/site-shell.css">\n</head>')
 if page['mode']=='demo':file.write_text(text);continue
 main=re.search(r'<main\b([^>]*)>',text);assert main,file
 idmatch=re.search(r'\bid="([^"]+)"',main.group(1))
 mainid=idmatch.group(1) if idmatch else 'main'
 if not idmatch:text=text[:main.start()]+main.group(0)[:-1]+' id="main">'+text[main.end():]
 header=render((ROOT/'_includes/header.html').read_text(),prefix,str(rel))
 footer=render((ROOT/'_includes/footer.html').read_text(),prefix,str(rel))
 header='<!-- VERATUS:SITE-HEADER -->\n<a class="site-skip" href="#'+mainid+'">Skip to content</a>\n'+header+'\n<!-- /VERATUS:SITE-HEADER -->'
 footer='<!-- VERATUS:SITE-FOOTER -->\n'+footer+'\n<!-- /VERATUS:SITE-FOOTER -->'
 if '<!-- VERATUS:SITE-HEADER -->' in text:
  text=re.sub(r'<!-- VERATUS:SITE-HEADER -->.*?<!-- /VERATUS:SITE-HEADER -->',lambda _:header,text,flags=re.S)
 else:
  # Existing skip links outside main are replaced by the one canonical control.
  text=re.sub(r'<a\b[^>]*class="(?:skip|skip-link)"[^>]*>.*?</a>','',text,count=1,flags=re.S)
  pattern=r'<nav class="bar">.*?</nav>' if '<nav class="bar">' in text else r'<header\b[^>]*>.*?</header>'
  text,count=re.subn(pattern,lambda _:header,text,count=1,flags=re.S);assert count==1,file
 if '<!-- VERATUS:SITE-FOOTER -->' in text:text=re.sub(r'<!-- VERATUS:SITE-FOOTER -->.*?<!-- /VERATUS:SITE-FOOTER -->',lambda _:footer,text,flags=re.S)
 else:text,count=re.subn(r'<footer\b[^>]*>.*?</footer>',lambda _:footer,text,count=1,flags=re.S);assert count==1,file
 assert '{{ROOT}}' not in text
 file.write_text(text)
print('Rendered '+str(len(CONFIG['pages']))+' explicit '+CONFIG['site']+' pages')
