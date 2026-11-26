/* Selected game preview. User pause survives selection and automatic visibility changes. */
(function(){
  'use strict';
  var screen=document.getElementById('screen'),slider=document.getElementById('islider'),control=document.getElementById('previewPlayback'),status=document.getElementById('previewStatus');
  if(!screen || !slider || !control)return;
  var tag=document.getElementById('mTag'),name=document.getElementById('mName'),slogan=document.getElementById('mSlogan'),get=document.getElementById('mGet');
  var phone=screen.parentElement,selected=0,userPaused=reduce,inView=false,pageActive=true,failed=false;
  var landscape={lost:1,echo:1},hasClip={apex:1,triagles:1,eclipse:1,rune:1,nibwell:1,anagrail:1,echo:1};
  function active(){return screen.children[selected];}
  function wantsPlayback(layer){return layer===active() && !userPaused && inView && !document.hidden && pageActive;}
  function updateControl(){
    var layer=active(),video=layer && layer.tagName==='VIDEO';
    control.hidden=!video;
    control.textContent=video && !layer.paused?'Pause preview':'Play preview';
    status.textContent=!video?'Still image preview.':failed?'Preview paused. Select Play preview to try again.':userPaused?'Preview paused.':!inView || document.hidden || !pageActive?'Preview paused while out of view.':'';
  }
  function sync(){
    [].forEach.call(screen.children,function(layer){
      if(layer.tagName!=='VIDEO')return;
      if(wantsPlayback(layer)){
        layer.preload='auto';
        if(layer.paused){var request=layer.play();if(request && request.catch)request.catch(function(){if(layer===active() && wantsPlayback(layer)){failed=true;updateControl();}});}
      }else layer.pause();
    });
    updateControl();
  }
  GAMES.forEach(function(game,i){
    var layer;
    if(hasClip[game.id]){
      layer=document.createElement('video');layer.src='assets-v2/preview/'+game.id+'.mp4';layer.muted=true;layer.loop=true;layer.playsInline=true;layer.preload='none';layer.poster='assets-v2/preview/'+game.id+'-1.jpg';layer.setAttribute('aria-label',game.name+' game preview');
      layer.addEventListener('play',function(){if(!wantsPlayback(layer))layer.pause();updateControl();});
      layer.addEventListener('pause',updateControl);
    }else{layer=document.createElement('img');layer.src='assets-v2/preview/'+game.id+'-1.jpg';layer.alt=game.name;layer.loading='lazy';}
    layer.className='layer';screen.appendChild(layer);
    var button=document.createElement('button');button.className='ic';button.type='button';button.setAttribute('aria-label',game.name);
    button.innerHTML='<img src="assets-v2/icons/'+game.id+'.png" alt="">';
    button.addEventListener('click',function(){select(i);});button.addEventListener('mouseenter',function(){select(i);});slider.appendChild(button);
  });
  function select(i){
    selected=i;failed=false;var game=GAMES[i];phone.classList.toggle('land',!!landscape[game.id]);
    [].forEach.call(screen.children,function(layer,j){layer.classList.toggle('on',j===i);});
    [].forEach.call(slider.children,function(button,j){button.classList.toggle('on',j===i);button.setAttribute('aria-pressed',String(j===i));});
    tag.textContent='Veratus Games · '+(game.android?'iOS · Android':'iOS');name.textContent=game.name;name.style.color=game.a;slogan.textContent=game.line;
    var ios='<a class="badge" href="'+game.ios+'" target="_blank" rel="noopener"><img src="assets-v2/badges/app-store-badge.svg" alt="Download on the App Store"></a>';
    var android=game.android?'<a class="badge" href="'+game.android+'" target="_blank" rel="noopener"><img src="assets-v2/badges/google-play-badge.svg" alt="Get it on Google Play"></a>':'<span class="soon">iOS first · Android soon</span>';
    get.innerHTML=ios+android;sync();
  }
  control.addEventListener('click',function(){var layer=active();if(!layer || layer.tagName!=='VIDEO')return;userPaused=!layer.paused;failed=false;sync();});
  document.addEventListener('visibilitychange',sync);
  document.addEventListener('veratusmotionchange',function(){if(reduce)userPaused=true;sync();});
  window.addEventListener('pagehide',function(){pageActive=false;sync();});window.addEventListener('pageshow',function(){pageActive=true;sync();});
  if('IntersectionObserver' in window){var observer=new IntersectionObserver(function(entries){inView=entries[0].isIntersecting;sync();},{threshold:0});observer.observe(phone);}
  else{var checkView=function(){var box=phone.getBoundingClientRect();var visible=box.bottom>0 && box.top<window.innerHeight;if(visible!==inView){inView=visible;sync();}};window.addEventListener('scroll',checkView,{passive:true});window.addEventListener('resize',checkView);checkView();}
  select(0);
})();
