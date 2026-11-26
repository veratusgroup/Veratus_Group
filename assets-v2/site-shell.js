/* Same-document navigation keeps native links and moves focus out of the closed menu. */
(function(){
  'use strict';
  function page(path){return path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';}
  document.querySelectorAll('.site-menu').forEach(function(menu){
    menu.addEventListener('click',function(event){
      var link=event.target.closest('a[href]');
      if(!link || !menu.contains(link) || event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target!=='_self'))return;
      var destination=new URL(link.href,location.href);
      if(destination.origin!==location.origin || page(destination.pathname)!==page(location.pathname) || destination.search!==location.search || !destination.hash)return;
      var id;try{id=decodeURIComponent(destination.hash.slice(1));}catch(_){return;}
      var target=document.getElementById(id);if(!target)return;
      menu.open=false;
      var temporary=!target.hasAttribute('tabindex');
      if(temporary){target.setAttribute('tabindex','-1');target.addEventListener('blur',function(){target.removeAttribute('tabindex');},{once:true});}
      target.focus({preventScroll:true});
    });
  });
})();
