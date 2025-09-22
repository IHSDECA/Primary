
async function loadSite(){
  let data = window.__FALLBACK__;
  try{
    const res = await fetch('./content/site.json',{cache:'no-store'});
    if(res.ok){ data = {...data, ...(await res.json())}; }
  }catch(e){}
  render(data);
}
function $(s,root=document){return root.querySelector(s);}
function el(tag, cls){ const e=document.createElement(tag); if(cls) e.className=cls; return e; }

function render(data){
  $('#clubName').textContent = data.clubName;
  $('#subtitle').textContent = `${data.tagline} · ${data.schoolYear}`;

  // Advisors
  const advRoot = $('#advisors'); advRoot.innerHTML='';
  (data.advisors||[]).forEach(a=>{
    const c=el('div','card');
    c.innerHTML = `<h3>${a.name||''}</h3>
      ${a.room?`<div class="small muted">Room ${a.room}</div>`:''}
      ${a.email?`<p><a href="mailto:${a.email}">${a.email}</a></p>`:''}`;
    advRoot.appendChild(c);
  });

  // Officers
  const offRoot = $('#officers'); offRoot.innerHTML='';
  (data.officers||[]).forEach(o=>{
    const c=el('div','card');
    c.innerHTML = `<h3>${o.name||''}</h3><div class="muted">${o.role||''}</div>
      ${o.email?`<p><a href="mailto:${o.email}">${o.email}</a></p>`:''}`;
    offRoot.appendChild(c);
  });

  // FAQ
  const faqRoot = $('#faq'); faqRoot.innerHTML='';
  (data.faq||[]).forEach(f=>{
    const c=el('div','card');
    c.innerHTML = `<h3>${f.q||''}</h3><p>${f.a||''}</p>`;
    faqRoot.appendChild(c);
  });

  // Social links
  const socRoot = $('#social'); socRoot.innerHTML='';
  (data.social||[]).forEach(s=>{
    const li=el('li'); li.className='small';
    li.innerHTML = `<a href="${s.href||'#'}">${s.label||s.platform||'Link'}</a>`;
    socRoot.appendChild(li);
  });

  // Footer year
  $('#year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', loadSite);
