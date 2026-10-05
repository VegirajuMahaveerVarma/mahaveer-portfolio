const revealItems=document.querySelectorAll('.section,.ticker,.comms');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach((el)=>observer.observe(el));

const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('#site-nav a').forEach((link)=>{
  link.addEventListener('click',()=>nav.classList.remove('open'));
});

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-link')];
const sectionObserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      links.forEach((link)=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach((section)=>sectionObserver.observe(section));

document.querySelectorAll('a[href^="#"]').forEach((link)=>{
  link.addEventListener('click',(event)=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
