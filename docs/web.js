document.addEventListener('click',function(e){
  var t=e.target,src=null;
  if(t.tagName==='IMG'&&(t.closest('figure')||t.closest('.shot'))) src=t.src;
  else if(t.classList&&t.classList.contains('zoom')) src=t.dataset.full;
  if(!src) return;
  var d=document.createElement('div');d.className='lb';d.innerHTML='<img src="'+src+'" alt=">';
  d.onclick=function(){d.remove()};document.body.appendChild(d);
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var l=document.querySelector('.lb');if(l)l.remove()}});

document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="http"]');if(!a||/\.exe(\?|$)/i.test(a.href)||a.hostname===location.hostname)return;a.target='_blank';a.rel='noopener noreferrer';});

(function(){
  if(!document.getElementById('recorrido')) return;
  var links=[].slice.call(document.querySelectorAll('nav a.l'));
  var map=[['#recorrido','recorrido'],['#descarga','descarga'],['#novedades','novedades'],['#faq','faq']];
  function set(h){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')===h)})}
  function upd(){
    var cur='';
    map.forEach(function(m){var e=document.getElementById(m[1]);if(e&&e.getBoundingClientRect().top<=140)cur=m[0]});
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur='#faq';
    set(cur);
  }
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);addEventListener('load',upd);
  links.forEach(function(a){a.addEventListener('click',function(){var h=a.getAttribute('href');if(h&&h.charAt(0)==='#')set(h)})});
  upd();
})();