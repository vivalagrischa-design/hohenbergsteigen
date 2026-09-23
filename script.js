const data={
himalaya:{k:"NEPAL · HIMALAYA",t:"Himalaya & Nepal",x:"Hohe Berge, tiefe Begegnungen. Trekking, Kultur und Expeditionen – getragen von langjähriger Erfahrung und persönlichen Beziehungen vor Ort.",i:"assets/highcamp.jpg"},
central:{k:"KIRGISTAN · ZENTRALASIEN",t:"Weite, die verändert.",x:"Pik Lenin, endlose Täler und echte Gastfreundschaft. Zentralasien für Menschen, die nicht einfach Sehenswürdigkeiten abhaken wollen.",i:"assets/hero.jpg"},
expedition:{k:"EXPEDITIONEN",t:"Hoch hinaus.",x:"Von 6000ern bis zu den höchsten Bergen der Welt: sorgfältig vorbereitet, lokal verankert und mit Respekt vor Berg und Mensch.",i:"assets/camp.jpg"},
trek:{k:"TREKKING · KULTUR",t:"Zu Fuss näher dran.",x:"Langsamer reisen. Mehr sehen. Menschen treffen. Landschaften und Kulturen erleben, die im Vorbeifahren unsichtbar bleiben.",i:"assets/village.jpg"},
ski:{k:"SKITOUREN",t:"Spuren ins Unbekannte.",x:"Schnee, Vulkane, Weite. Skitouren fernab der bekannten Routen – für starke Erlebnisse statt voller Pisten.",i:"assets/kamchatka.jpg"},
individual:{k:"INDIVIDUELLE REISEN",t:"Deine Idee. Unsere Erfahrung.",x:"Du hast ein Ziel, eine verrückte Idee oder nur eine Sehnsucht? Wir entwickeln daraus eine Reise, die zu dir passt – statt dich in ein Paket zu stecken.",i:"assets/portrait.jpg"}};
const keys=Object.keys(data), modal=document.querySelector('.modal'); let current=0;
function show(key){current=keys.indexOf(key);let d=data[key];modal.querySelector('.modal-img').src=d.i;modal.querySelector('.modal-kicker').textContent=d.k;modal.querySelector('h2').textContent=d.t;modal.querySelector('.modal-text').textContent=d.x;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.travel-card').forEach(c=>c.onclick=()=>show(c.dataset.key));
document.querySelector('.close').onclick=close;
document.querySelector('.prev').onclick=()=>show(keys[(current-1+keys.length)%keys.length]);
document.querySelector('.next').onclick=()=>show(keys[(current+1)%keys.length]);
addEventListener('keydown',e=>{if(e.key==='Escape')close()});
document.querySelector('.menu').onclick=()=>document.querySelector('.nav').classList.toggle('open');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));