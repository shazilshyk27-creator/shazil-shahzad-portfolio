const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.08});
document.querySelectorAll('.hero-copy,.hero-visual,.skill-card,.project,.timeline-item,.certificate,.edu-row').forEach(el=>{
  el.classList.add('reveal'); observer.observe(el);
});
