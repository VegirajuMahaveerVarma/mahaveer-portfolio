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

document.querySelectorAll('a[href^="#"]').forEach((link)=>{
  link.addEventListener('click',(event)=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});