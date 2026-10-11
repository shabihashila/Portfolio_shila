const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');navigation.classList.remove('open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.nav-group'))closeMenu();});
const tabs=[...document.querySelectorAll('[role=tab]')];
function selectTab(tab){tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=tabs[(index+1)%tabs.length];if(event.key==='ArrowLeft')next=tabs[(index+tabs.length-1)%tabs.length];if(event.key==='Home')next=tabs[0];if(event.key==='End')next=tabs[tabs.length-1];if(next){event.preventDefault();selectTab(next);next.focus();}});});
const projects=[...document.querySelectorAll('.project-card')];
const filters=[...document.querySelectorAll('[data-filter]')];
filters.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;let count=0;projects.forEach(project=>{project.hidden=filter!=='all'&&project.dataset.category!==filter;if(!project.hidden)count++;});filters.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});document.querySelector('#filter-status').textContent=`Showing ${count} ${count===1?'project':'projects'}.`;}));
const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/';
document.querySelectorAll('[data-scramble]').forEach(element=>{const original=element.textContent;element.setAttribute('aria-label',original);let timer;function reset(){clearInterval(timer);element.textContent=original;}element.addEventListener('pointerenter',()=>{if(motionPreference.matches)return;let frame=0;clearInterval(timer);timer=setInterval(()=>{element.textContent=original.split('').map((char,index)=>index<frame/2?char:letters[Math.floor(Math.random()*letters.length)]).join('');frame++;if(frame>=original.length*2)reset();},35);});element.addEventListener('pointerleave',reset);element.addEventListener('blur',reset);motionPreference.addEventListener('change',reset);});
const copyButton=document.querySelector('#copy-email');
copyButton.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('parvin.shabiha234@gmail.com');status.textContent='✓ Email copied to clipboard.';}catch{status.textContent='parvin.shabiha234@gmail.com';}});
