const $=id=>document.getElementById(id),M=Math;
const NL=30,foeOf=l=>[l%5==4?"👑 Cara do Busão (Chefe "+((l+1)/5)+")":"Cara do Busão"+(l?" Nv"+(l+1):""),"photo"];
const DIFF=[["😴 Fácil",.6,.7],["😎 Normal",1,1],["🔥 Difícil",2.2,2],["💀 Insano",5,4]];
const CH=[{n:"Chad Clássico",c:0,m:1,e:"🗿",d:1},{n:"Babuíno Chad",c:60,m:1.6,e:"🐒",d:1},{n:"Galinha Mogadora",c:600,m:2.2,e:"🐔",d:2},{n:"Caramelo Chad",c:2500,m:3,e:"🐕",d:2},{n:"Gigachad",c:15e3,m:4.5,e:"💎",d:3},{n:"Lobo Sigma",c:8e4,m:7,e:"🐺",d:3},{n:"Troface",c:5e5,m:11,e:"🤪",d:4},{n:"Garoto 67",c:4e6,m:18,e:"6️⃣7️⃣",d:4},{n:"Magnata Dourado",c:5e7,m:30,e:"🤑",d:5},{n:"Mogador Supremo",c:1e9,m:60,e:"👹",d:5}];
const UP=[
{n:"Mewing",d:"+1/toque • mandíbula",c:15,g:1.35,t:1},{n:"Academia",d:"+6/toque • corpo forte",c:120,g:1.4,t:6},
{n:"Óculos escuros",d:"+2/s • estilo",c:60,g:1.3,a:2},{n:"Whey",d:"+15/s • massa",c:500,g:1.35,a:15},
{n:"Aura Sigma",d:"+90/s • aura brilha",c:3500,g:1.4,a:90},{n:"Creatina",d:"+40/toque • volume",c:9000,g:1.5,t:40},
{n:"Jawline Lendária",d:"+500/s • queixo dourado",c:25000,g:1.45,a:500},{n:"Rizz Infinito",d:"+4k/s • corações",c:150000,g:1.5,a:4000},
{n:"Mogger",d:"+400/toque • corrente de ouro",c:2.5e5,g:1.5,t:400},{n:"Aura Suprema",d:"+25k/s • aura roxa",c:1.2e6,g:1.5,a:25000},
{n:"PlayStation Power",d:"+4k/toque • △○✕□",c:5e6,g:1.55,t:4000},{n:"Aura Troface",d:"+200k/s • trolls em órbita",c:2e7,g:1.55,a:2e5},
{n:"Xbox Turbo",d:"+1,5M/s • Ⓧ verde",c:1e8,g:1.6,a:1.5e6},{n:"Mogador Interior",d:"+50k/toque • olhos vermelhos",c:6e8,g:1.6,t:5e4}];
const MSG=["🗿 Mandíbula esculpida!","💪 Mais forte!","🕶️ Óculos escuros!","🥤 Whey na mão!","🌟 Aura Sigma!","💉 Creatina: volume!","👑 Jawline lendária!","💘 Rizz infinito!","⛓️ MOGGER!","🔮 Aura Suprema!","🎮 PlayStation Power!","🤪 Aura Troface!","🟢 Xbox Turbo!","👁️ Mogador Interior!"];
const PW=[["⚡","Alpha",300],["👁️","Laser",200],["💥","Boom",350]];
const TR=[["🏆","Ouro","#ffd23f","Zerou o jogo"],["🥈","Prata","#cfd8dc","Zerou no Fácil"],["💎","Diamante","#4df","Zerou no Difícil"],["🟣","Insano","#b36bff","Zerou no Insano"],["⚡","Relâmpago","#3af","Zerou em menos de 12 min"],["🐢","Tartaruga","#4c4","Zerou em mais de 45 min"],["💰","Acumulador","#ff69b4","Terminou com 25%+ da aura guardada"],["💸","Gastador","#f80","Terminou com menos de 3% da aura"],["🌈","Lendário","#fff","5+ fatalities na mesma run"]];
const AU=[{n:"Sem aura",e:"🌫️",c:0,m:1},{n:"Aura Cinza",e:"🩶",c:2e3,m:1.2},{n:"Aura Azul",e:"🔵",c:4e4,m:1.6},{n:"Aura Saiyajin",e:"⚡",c:8e5,m:2.5},{n:"Fogo Heatblast",e:"🔥",c:1.5e7,m:4}];
const AUS=[[0,0,0],[10,2,1],[25,5,3],[60,25,20],[110,40,60]];
function stats(){let v=100+S.sv*20,f=S.sf*3,o=S.so*3;UP.forEach((u,i)=>{const n=S.n[i];v+=n*(3+2*i);if(u.t)f+=n*(1+i*.6);else o+=n*(1+i*.6);f+=n*.3;o+=n*.3});const c=CH[S.sel].m,a=AUS[S.au||0];v+=c*8+a[0];f+=c*.9+a[1];o+=c*.9+a[2];return[M.round(v),M.round(f),M.round(o)]}
const SK=["sv","sf","so"],sc=i=>M.ceil([40,60,60][i]*M.pow([1.3,1.35,1.35][i],S[SK[i]]));
const sp=(e,st,sz)=>`<span class="pr" style="${st};font-size:${sz}px">${e}</span>`;
const rain=(arr,n,t)=>Array.from({length:n},(_,i)=>sp(PK(arr),`animation:fall ${t+M.random()*.5}s ${i*.05}s both;left:${i*(96/n)}%;top:-15%`,46)).join("");
const FV=[
["FATALITY!",()=>[["🪑",12],["📺",20],["🎮 △○✕□",28],["🟢Ⓧ",36]].map((p,i)=>sp(p[0],`animation:fly .9s ${i*.12}s both;left:-25%;top:${p[1]+10}%`,52)).join("")+sp("🚌💨","animation:bus 1s .2s both;top:2%",70)],
["BRUTALITY!",()=>rain(["📺","🎮","🪑","💿"],14,.7)],
["MOGALITY!",()=>sp("👁️👁️","left:12%;top:20%;animation:pop .4s both",70)+Array.from({length:6},(_,i)=>sp("⚡",`left:${20+i*12}%;top:${30+(i%2)*12}%;animation:fl .5s ${i*.08}s both`,50)).join("")],
["CHADALITY!",()=>sp("🚄💨","animation:bus .8s both;top:55%",90)+sp("🚄💨","animation:bus .8s .25s both;top:5%",70)],
["NUKALITY!",()=>sp("💥","left:18%;top:30%;animation:grow 1.1s both",80)+sp("🍄","left:20%;top:40%;animation:pop .7s .3s both",80)],
["COXINHALITY!",()=>rain(["🍗"],10,.8)+sp("💰","left:20%;top:40%;animation:pop .6s .3s both",70)],
["SIGMALITY!",()=>sp("🐺","left:10%;top:22%;animation:pop .5s both",90)+sp("🌕","left:50%;top:3%;animation:pop .5s .2s both",60)],
["BYE BYE!!",()=>sp("👋","left:15%;top:25%;animation:wave .4s infinite alternate",90)+sp("🚌💨","animation:bus .9s .2s both;top:2%",60)]];
const TF='<path d="M50 6C20 6 8 30 10 55c2 28 20 42 40 42s38-14 40-42C92 30 80 6 50 6z" fill="#fff" stroke="#000" stroke-width="3"/><path d="M24 40q10-10 22-2M76 40q-10-10-22-2" stroke="#000" stroke-width="4" fill="none"/><circle cx="36" cy="50" r="4"/><circle cx="64" cy="50" r="4"/><path d="M16 64q34 38 68 0q-34 8-68 0z" fill="#fff" stroke="#000" stroke-width="3"/>';
const RN=(a,b)=>a+M.random()*(b-a),PK=a=>a[M.random()*a.length|0];
let S,tab=0;
function fresh(){return{l:0,aura:0,tap:1,auto:0,n:UP.map(()=>0),own:[1,0,0,0,0,0,0,0,0,0],sel:0,taps:0,aT:0,cd:[0,0,0],pz:0,diff:1,au:0,aown:[1,0,0,0,0],sv:0,sf:0,so:0,hpP:0,fails:0,tot:0,t0:Date.now(),tr:{},fat:0}}
function hpOf(l){return M.round(120*M.pow(1.62,l)*DIFF[S?S.diff:1][1])}
function load(){try{const s=JSON.parse(localStorage.getItem("mogchad3"));if(s&&s.n&&s.n.length==UP.length)return s}catch(_){}return null}
function save(){try{localStorage.setItem("mogchad3",JSON.stringify(S))}catch(_){}}
const mult=()=>CH[S.sel].m*AU[S.au||0].m*(S.dm||1);
const fmt=n=>n>=1e9?(n/1e9).toFixed(1)+"B":n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e3?(n/1e3).toFixed(1)+"k":M.floor(n);
const cost=i=>M.ceil(UP[i].c*M.pow(UP[i].g,S.n[i]));
let ac=null;
function A(){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state=="suspended")ac.resume();return S&&S.set!==0&&!(S.mute)}catch(e){return 0}}
function snd(f,d=.08,ty="square"){if(!A())return;const o=ac.createOscillator(),v=ac.createGain();o.type=ty;o.frequency.value=f;v.gain.value=.05;o.connect(v);v.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}
function nz(d,f,ty,vol){if(!A())return;const b=ac.createBuffer(1,ac.sampleRate*d,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(M.random()*2-1)*(1-i/a.length);const s=ac.createBufferSource(),fl=ac.createBiquadFilter(),v=ac.createGain();s.buffer=b;fl.type=ty;fl.frequency.value=f;v.gain.value=vol;s.connect(fl);fl.connect(v);v.connect(ac.destination);s.start()}
const boomS=()=>{nz(.7,160,"lowpass",.9);snd(60,.4,"sine")},splashS=()=>nz(.5,2500,"highpass",.35);
function say(t,p,l){if(!A())return;try{const u=new SpeechSynthesisUtterance(t);u.lang=l||"en-US";u.pitch=p;u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
function fxB(x,y,a,n){for(let i=0;i<n;i++){const e=document.createElement("span");e.className="pt";e.textContent=PK(a);e.style.cssText=`left:${x}px;top:${y}px;--dx:${RN(-130,130)}px;--dy:${RN(-150,60)}px`;$("fx").appendChild(e);setTimeout(()=>e.remove(),800)}}
function setFoe(){const k=foeOf(M.min(S.l,NL-1))[1],f=$("foe");f.className=S.l%5==4?"boss":"";f.innerHTML=k=="photo"?'<img src="'+$("ph").src+'">':k=="troll"?'<svg viewBox="0 0 100 100">'+TF+'</svg>':k=="67"?'<b class="n67">67</b>':'<span>'+k+'</span>'}
function float(t,x,y){const e=document.createElement("div");e.className="fl";e.textContent=t;e.style.left=x+"px";e.style.top=y+"px";$("fx").appendChild(e);setTimeout(()=>e.remove(),900)}
function drawMe(){
 const [m,a,g,w,s,cr,j,rz,mg,as,ps,tf,xb,it]=S.n,T=S.sel,N=M.min;
 const bulk=N(a,14)+N(w,10)*.6+N(cr,8)*.9+N(mg,6)*.8+N(it,5);
 const sh=38+bulk*3,bi=7+N(a,14)*1.5+N(w,10)*.7+N(cr,8)*1.2+N(mg,6)+N(it,5);
 const hu=[0,4,7,8,9].includes(T),jw=20+N(m,12)*3+N(j,10)*3+(T==4?14:0),ch=136+N(m,12)*1.5+N(j,10)*2+(T==4?6:0),nk=16+bulk*1.1;
 const hair=["#e8c24a",0,0,0,"#151515",0,0,"#6b4a2e","#ffd700","#7a2cff"][T];
 const body=["url(#bd)","#6b4a2e","#f4f4f4","#c98e4f","url(#bd)","#7d8590","#fff","url(#bd)","url(#bd)","url(#bd)"][T];
 const tor=T==8?"#b8860b":T==9?"#2b0a4a":"#111",nm=mg?"MOGGER":["CHAD","BABUÍNO","GALINHA","CARAMELO","GIGACHAD","SIGMA","TROLL","67","MAGNATA","SUPREMO"][T];
 let o=`<defs><linearGradient id="sk" x1="0" x2="1"><stop offset="0" stop-color="#f6c9a0"/><stop offset=".55" stop-color="#e0a373"/><stop offset="1" stop-color="#b9764d"/></linearGradient><linearGradient id="bd" x1="0" x2="1"><stop offset="0" stop-color="#e9b189"/><stop offset="1" stop-color="#a8683f"/></linearGradient><radialGradient id="ag"><stop offset=".5" stop-color="#ffcf3f" stop-opacity=".4"/><stop offset="1" stop-color="#ff3f81" stop-opacity="0"/></radialGradient><radialGradient id="ag2"><stop offset=".4" stop-color="#9b3fff" stop-opacity=".5"/><stop offset="1" stop-color="#9b3fff" stop-opacity="0"/></radialGradient></defs>`;
 o+=`<ellipse cx="100" cy="298" rx="${sh+30}" ry="9" fill="#000" opacity=".4"/>`;
 if(s>0||T==9){const r=100+s*16;o+=`<circle cx="100" cy="150" r="${r}" fill="url(#ag)"><animate attributeName="r" values="${r};${r+18};${r}" dur="1.2s" repeatCount="indefinite"/></circle>`}
 if(as>0||T==9||it>0){const r=130+as*14;o+=`<circle cx="100" cy="150" r="${r}" fill="url(#ag2)"><animate attributeName="r" values="${r};${r+26};${r}" dur=".9s" repeatCount="indefinite"/></circle>`}
 if(S.au==1)o+=`<circle cx="100" cy="150" r="150" fill="#9aa" opacity=".28"><animate attributeName="r" values="140;168;140" dur="2s" repeatCount="indefinite"/></circle>`+[0,1,2].map(i=>`<ellipse cx="${20+i*80}" cy="260" rx="40" ry="16" fill="#bbb" opacity=".4"><animate attributeName="cy" values="270;70" dur="${2+i*.4}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0" dur="${2+i*.4}s" repeatCount="indefinite"/></ellipse>`).join("");
 if(S.au==2)o+=`<circle cx="100" cy="150" r="150" fill="#18f" opacity=".3"><animate attributeName="r" values="135;170;135" dur=".8s" repeatCount="indefinite"/></circle><circle cx="100" cy="150" r="115" fill="none" stroke="#6cf" stroke-width="4"><animate attributeName="opacity" values="1;.2;1" dur=".6s" repeatCount="indefinite"/></circle>`;
 if(S.au==3)o+=`<path d="M100 -30 L128 60 L170 0 L160 100 L215 60 L190 170 L240 170 L180 230 L200 300 L100 270 L0 300 L20 230 L-40 170 L10 170 L-15 60 L40 100 L30 0 L72 60Z" fill="#ffe14d" opacity=".6"><animate attributeName="opacity" values=".4;.85;.4" dur=".35s" repeatCount="indefinite"/></path><polyline points="-20,40 15,90 0,100 40,170" stroke="#fff" stroke-width="3" fill="none"><animate attributeName="opacity" values="0;1;0;0" dur=".5s" repeatCount="indefinite"/></polyline><polyline points="220,40 185,90 200,100 160,170" stroke="#9ef" stroke-width="3" fill="none"><animate attributeName="opacity" values="0;0;1;0" dur=".5s" repeatCount="indefinite"/></polyline>`;
 for(let i=0;i<N(rz,3);i++)o+=`<text x="${-30+i*120}" y="90" font-size="26">💘<animate attributeName="y" values="110;30" dur="${1.6+i*.4}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="${1.6+i*.4}s" repeatCount="indefinite"/></text>`;
 for(let i=0;i<N(tf,3);i++)o+=`<g transform="translate(${-50+i*125} ${40+i*30}) scale(.38)">${TF}<animate attributeName="opacity" values=".4;1;.4" dur="${1+i*.3}s" repeatCount="indefinite"/></g>`;
 if(ps>0)o+=`<text x="-52" y="130" font-size="20" font-weight="900"><tspan fill="#4af">△</tspan><tspan fill="#f55">○</tspan><tspan fill="#8cf">✕</tspan><tspan fill="#f9c">□</tspan><animate attributeName="y" values="130;110;130" dur="1.5s" repeatCount="indefinite"/></text>`;
 if(xb>0)o+=`<g><circle cx="250" cy="120" r="17" fill="#107c10"/><text x="250" y="128" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">X</text><animateTransform attributeName="transform" type="translate" values="0 0;0 -14;0 0" dur="1.3s" repeatCount="indefinite"/></g>`;
 for(const d of[-1,1]){const x=100+d*(sh+4);o+=`<rect x="${x-bi*.7}" y="165" width="${bi*1.4}" height="125" rx="${bi*.7}" fill="${body}"/><circle cx="${x}" cy="205" r="${bi}" fill="${body}"/><circle cx="${x+d*bi*.3}" cy="200" r="${bi*.5}" fill="#000" opacity=".15"/>`;if(a>=4)o+=`<path d="M${x-d*3} 190 q${d*6} 15 0 30" stroke="#b86b4a" stroke-width="2" fill="none"/>`}
 o+=`<path d="M${100-sh} 300 Q${100-sh-8} 185 ${100-sh+30} 158 L${100+sh-30} 158 Q${100+sh+8} 185 ${100+sh} 300Z" fill="${tor}"/><path d="M${100-nk-6} 150 L100 215 L${100+nk+6} 150Z" fill="#fff"/>`;
 if(a>=2)o+=`<path d="M${100-sh+34} 170 Q100 196 ${100+sh-34} 170" stroke="#444" stroke-width="3" fill="none"/>`;
 if(mg>0)o+=`<path d="M${100-nk-4} 150 Q100 205 ${100+nk+4} 150" stroke="#ffd23f" stroke-width="5" fill="none"/><circle cx="100" cy="199" r="9" fill="#ffd23f" stroke="#a80" stroke-width="2"/>`;
 o+=`<text x="100" y="285" text-anchor="middle" font-size="${nm.length>6?18:22}" font-weight="900" fill="#ffcf3f">${nm}</text><rect x="${100-nk}" y="115" width="${nk*2}" height="45" fill="${body}"/><rect x="${100-nk}" y="115" width="${nk*2}" height="45" fill="#000" opacity=".18"/>`;
 if(w>=1||a>=3)o+=`<path d="M${100-nk} 140 L${100-sh+10} 165 L${100+sh-10} 165 L${100+nk} 140Z" fill="${body}"/>`;
 if(w>=1)o+=`<g transform="translate(${100-sh-bi-6} 235) rotate(-12)"><rect width="26" height="46" rx="5" fill="#2a7de1"/><rect y="-8" width="26" height="10" rx="3" fill="#fff"/><text x="13" y="30" font-size="9" font-weight="900" text-anchor="middle" fill="#fff">WHEY</text></g>`;
 const gold=j>0?`stroke="#ffcf3f" stroke-width="${2+N(j,6)}"`:"",hasG=g>=1,eye=it>0?`<circle cx="78" cy="72" r="12" fill="#f00" opacity=".45"/><circle cx="122" cy="72" r="12" fill="#f00" opacity=".45"/>`:"";
 if(T==1){const rw=28+N(m,12)*1.4+N(j,10);
  o+=`<ellipse cx="100" cy="68" rx="62" ry="64" fill="#4a3320"/><ellipse cx="100" cy="85" rx="46" ry="54" fill="#8a6a48" ${gold}/><ellipse cx="100" cy="112" rx="${rw}" ry="${26+N(m,12)}" fill="#c49a78"/><path d="M${100-rw} 86 L${100-rw-10} 122 L${100-rw+10} 118Z" fill="#3f78d8"/><path d="M${100+rw} 86 L${100+rw+10} 122 L${100+rw-10} 118Z" fill="#3f78d8"/><ellipse cx="94" cy="102" rx="3" ry="5" fill="#5a2a2a"/><ellipse cx="106" cy="102" rx="3" ry="5" fill="#5a2a2a"/><rect x="60" y="56" width="80" height="13" rx="6" fill="#33210f"/>`;
  if(!hasG)o+=`<circle cx="80" cy="76" r="5" fill="#1a0f05"/><circle cx="120" cy="76" r="5" fill="#1a0f05"/>`;
  o+=`<path d="M84 ${ch-8} Q100 ${ch+2} 116 ${ch-8}" stroke="#3a1a1a" stroke-width="4" fill="none"/><path d="M90 ${ch-6} l4 10 4 -9zM110 ${ch-6} l-4 10 -4 -9z" fill="#fff"/>`}
 else if(T==5){o+=`<path d="M52 70 L58 6 L90 30Z M148 70 L142 6 L110 30Z" fill="#6c737d"/><path d="M60 62 Q100 -4 140 62 L128 108 L100 ${ch+8} L72 108Z" fill="#8b929c" ${gold}/><path d="M80 96 L100 ${ch+8} L120 96 Q100 82 80 96Z" fill="#d3d8de"/><ellipse cx="100" cy="${ch+2}" rx="9" ry="6" fill="#0a0a0a"/>`;
  if(!hasG)o+=`<path d="M64 74 L92 80 L84 66Z M136 74 L108 80 L116 66Z" fill="#ffd23f"/>`;o+=`<path d="M88 ${ch-4} l4 10 4 -9zM112 ${ch-4} l-4 10 -4 -9z" fill="#fff"/>`}
 else if(T==2){o+=`<ellipse cx="100" cy="78" rx="46" ry="54" fill="#fff" stroke="#ddd" stroke-width="2" ${gold}/><path d="M78 28 q6-20 14-4 q8-18 14 0 q8-14 14 4z" fill="#e33"/><path d="M90 92 L110 92 L100 114Z" fill="#fa0"/><path d="M95 114 q5 16 10 0z" fill="#e33"/>`;if(!hasG)o+=`<circle cx="80" cy="72" r="5"/><circle cx="120" cy="72" r="5"/><circle cx="82" cy="70" r="1.7" fill="#fff"/><circle cx="122" cy="70" r="1.7" fill="#fff"/>`}
 else if(T==3){o+=`<ellipse cx="52" cy="70" rx="14" ry="32" fill="#7a4a22" transform="rotate(12 52 70)"/><ellipse cx="148" cy="70" rx="14" ry="32" fill="#7a4a22" transform="rotate(-12 148 70)"/><ellipse cx="100" cy="80" rx="48" ry="52" fill="#c98e4f" ${gold}/><ellipse cx="100" cy="106" rx="26" ry="20" fill="#ecd0a4"/><ellipse cx="100" cy="96" rx="9" ry="6" fill="#111"/><path d="M94 118 q6 18 12 0z" fill="#f47"/>`;if(!hasG)o+=`<circle cx="78" cy="68" r="5"/><circle cx="122" cy="68" r="5"/>`}
 else if(T==6)o+=`<g transform="translate(36 -2) scale(1.28)">${TF}</g>`;
 else{o+=`<ellipse cx="50" cy="78" rx="7" ry="13" fill="#d89a6a"/><ellipse cx="150" cy="78" rx="7" ry="13" fill="#b9764d"/><path d="M52 65 Q52 16 100 16 Q148 16 148 65 L${100+jw} 112 L${100+jw*.7} ${ch} L${100-jw*.7} ${ch} L${100-jw} 112Z" fill="url(#sk)" ${gold}/><path d="M${100-jw} 112 L${100-jw*.7} ${ch} L${100+jw*.7} ${ch} L${100+jw} 112 Q100 ${ch-30} ${100-jw} 112Z" fill="#000" opacity=".17"/>`;
  if(m>=2)o+=`<path d="M62 92 Q72 110 86 120 M138 92 Q128 110 114 120" stroke="#9a5a36" stroke-width="${1+N(m,6)*.6}" fill="none" opacity=".55"/>`;
  o+=`<path d="M48 62 Q54 4 100 8 Q150 4 152 62 Q132 32 100 38 Q70 32 48 62Z" fill="${hair}"/><path d="M100 76 L95 100 Q100 105 105 100" stroke="#a5683f" stroke-width="3" fill="none"/>`;
  if(!hasG)o+=`<ellipse cx="78" cy="72" rx="9" ry="5" fill="#fff"/><ellipse cx="122" cy="72" rx="9" ry="5" fill="#fff"/><circle cx="78" cy="72" r="3.8" fill="${T==9?"#f22":"#3b6a8c"}"/><circle cx="122" cy="72" r="3.8" fill="${T==9?"#f22":"#3b6a8c"}"/><path d="M64 62 L92 63M136 62 L108 63" stroke="#2a1a0a" stroke-width="5"/>`;
  o+=`<path d="M84 ${ch-27} Q100 ${ch-36} 116 ${ch-27} Q100 ${ch-17} 84 ${ch-27}Z" fill="#b5594a"/>`;
  if(T==9)o+=`<path d="M62 24 L72 0 L86 16 L100 -6 L114 16 L128 0 L138 24Z" fill="#ffd23f" stroke="#a80" stroke-width="2"/>`;
  if(T==8)o+=`<circle cx="122" cy="72" r="13" fill="none" stroke="#ffd23f" stroke-width="3"/>`}
 o+=eye;
 if(S.au==3&&hu)o+=`<path d="M48 62 L40 20 L66 40 L72 0 L90 34 L100 -10 L112 34 L130 0 L134 40 L160 20 L152 62Q132 32 100 38Q70 32 48 62Z" fill="#ffe14d" stroke="#f90" stroke-width="2"/>`;
 if(S.au==4)o+=`<circle cx="100" cy="150" r="140" fill="#f60" opacity=".22"><animate attributeName="r" values="130;155;130" dur=".5s" repeatCount="indefinite"/></circle>`+[[100,14,62],[58,44,40],[142,44,40],[16,170,46],[184,170,46],[40,260,42],[160,260,42],[100,160,38],[100,240,36]].map((p,i)=>`<text x="${p[0]}" y="${p[1]}" font-size="${p[2]}" text-anchor="middle">🔥<animate attributeName="y" values="${p[1]};${p[1]-14};${p[1]}" dur="${.4+i*.07}s" repeatCount="indefinite"/></text>`).join("");
 if(hasG){const gw=N(g,6),c=gw>=3?"#ffcf3f":"#000";o+=`<rect x="${60-gw}" y="60" width="${34+gw}" height="${22+gw}" rx="8" fill="#000" stroke="${c}" stroke-width="3"/><rect x="106" y="60" width="${34+gw}" height="${22+gw}" rx="8" fill="#000" stroke="${c}" stroke-width="3"/><line x1="94" y1="68" x2="106" y2="68" stroke="${c}" stroke-width="3"/><path d="M68 66 l12 0 -8 8z" fill="#fff" opacity=".6"/>`;if(gw>=4)o+=`<path d="M135 52 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3z" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="1.4s" repeatCount="indefinite"/></path>`}
 o+=`<ellipse cx="78" cy="46" rx="26" ry="34" fill="#fff" opacity=".13"/><path d="M${100-sh} 300 Q${100-sh-8} 185 ${100-sh+30} 158" stroke="#fff" stroke-opacity=".3" stroke-width="3" fill="none"/><path d="M${100+sh-30} 158 Q${100+sh+8} 185 ${100+sh} 300" stroke="#000" stroke-opacity=".25" stroke-width="6" fill="none"/>`;
 $("me").innerHTML=o}
function pop(t){const e=$("me");e.classList.remove("bump");void e.getBoundingClientRect();e.classList.add("bump");float(t,30,50)}
function render(){
 const ss=stats();if(S.mx!==undefined&&ss[0]>S.mx)S.hpP+=ss[0]-S.mx;S.mx=ss[0];S.hpP=M.min(S.hpP,ss[0]);$("pfill").style.width=M.max(0,S.hpP)/ss[0]*100+"%";$("ptxt").textContent="❤️ "+fmt(M.max(0,S.hpP))+"/"+fmt(ss[0])+" · 💪 "+fmt(ss[1])+" · 🔥 "+fmt(ss[2]);
 const fn=foeOf(M.min(S.l,NL-1))[0];
 $("lv").textContent="Fase "+M.min(S.l+1,NL)+"/"+NL+" – "+fn+" · "+DIFF[S.diff][0];
 $("aura").innerHTML="✨ "+fmt(S.aura)+"<br><small style='font-size:.62rem'>x"+M.round(mult()*10)/10+" · "+fmt(S.tap*mult()*(1+stats()[1]*.02))+"/toque · "+fmt(S.auto*mult()*(1+stats()[2]*.02))+"/s</small>";
 $("dots").innerHTML=Array.from({length:NL},(_,i)=>`<i class="${i<S.l?"d":i%5==4?"c":""}"></i>`).join("");
 const r=M.max(0,S.hp)/S.max;$("fill").style.width=r*100+"%";$("hpt").textContent=fmt(M.max(0,S.hp))+" / "+fmt(S.max);
 $("foe").style.filter=`grayscale(${(1-r)*.9})`;
 for(let i=0;i<3;i++){const b=$("pw"+i);b.disabled=S.cd[i]>0;b.textContent=S.cd[i]>0?"⏳"+M.ceil(S.cd[i]/10):PW[i][0]}
 const p=$("panel");
 if(tab==0){UP.forEach((u,i)=>{let b=$("u"+i);if(!b){b=document.createElement("button");b.id="u"+i;b.onclick=()=>buy(i);p.appendChild(b)}b.className="up"+(S.aura>=cost(i)?" ok":"");b.innerHTML=`<b>${u.n} (${S.n[i]})</b>${u.d}<br><small>❤️+${3+2*i} ${u.t?"💪":"🔥"}+${(1+i*.6).toFixed(1)}</small> ✨ ${fmt(cost(i))}`})}
 else if(tab==1){if(!$("dh")){const h=document.createElement("div");h.id="dh";h.style.cssText="grid-column:1/-1;display:flex;gap:4px";h.innerHTML=DIFF.map((d,i)=>`<button class="up" id="df${i}" style="flex:1;text-align:center;min-height:0" onclick="setDiff(${i})">${d[0]}<br><small>HP x${d[1]} · prêmio x${d[2]}</small></button>`).join("");p.appendChild(h)}
  DIFF.forEach((d,i)=>$("df"+i).className="up"+(S.diff==i?" eq":""));
  CH.forEach((c,i)=>{let b=$("c"+i);if(!b){b=document.createElement("button");b.id="c"+i;b.onclick=()=>pick(i);p.appendChild(b)}b.className="up"+(S.sel==i?" eq":S.own[i]||S.aura>=c.c?" ok":"");b.innerHTML=`<b>${c.e} ${c.n}</b>Dano x${c.m} · ${"⭐".repeat(c.d)} <small>❤️+${M.round(c.m*8)}</small><br>${S.sel==i?"✅ Equipado":S.own[i]?"Equipar":"Comprar ✨ "+fmt(c.c)}`})}
 else if(tab==3){AU.forEach((a,i)=>{let b=$("a"+i);if(!b){b=document.createElement("button");b.id="a"+i;b.onclick=()=>pickAu(i);p.appendChild(b)}b.className="up"+(S.au==i?" eq":S.aown[i]||S.aura>=a.c?" ok":"");b.innerHTML=`<b>${a.e} ${a.n}</b>Dano x${a.m} <small>❤️+${AUS[i][0]} 💪+${AUS[i][1]} 🔥+${AUS[i][2]}</small><br>${S.au==i?"✅ Ativa":S.aown[i]?"Ativar":"Comprar ✨ "+fmt(a.c)}`})}
 else if(tab==4){[["❤️ Vida","+20 vida máxima"],["💪 Força","+3 força (dano por toque)"],["🔥 Fogo","+3 fogo (dano automático)"]].forEach((x,i)=>{let b=$("st"+i);if(!b){b=document.createElement("button");b.id="st"+i;b.onclick=()=>buyS(i);p.appendChild(b)}b.className="up"+(S.aura>=sc(i)?" ok":"");b.innerHTML=`<b>${x[0]} (${S[SK[i]]})</b>${x[1]}<br>✨ ${fmt(sc(i))}`});let sm=$("sm");if(!sm){sm=document.createElement("div");sm.id="sm";sm.className="up";sm.style.cssText="grid-column:1/-1;opacity:1";p.appendChild(sm)}sm.innerHTML=`<b>Seus atributos</b>❤️ Vida máx.: ${fmt(ss[0])} · 💪 Força: ${fmt(ss[1])} (+${fmt(ss[1]*2)}% toque) · 🔥 Fogo: ${fmt(ss[2])} (+${fmt(ss[2]*2)}% auto)<br><small>Tudo que você compra (upgrade, personagem, aura) também dá vida, força e fogo. Errar um fatality tira vida: cada erro seguido dói mais.</small>`;if(!$("dvb")){const d=document.createElement("button");d.id="dvb";d.className="up";d.style.cssText="grid-column:1/-1;opacity:.45;min-height:0;text-align:center";d.textContent="🛠️ Menu desenvolvedor";d.onclick=devOpen;p.appendChild(d)}}}
function buyS(i){const c=sc(i);if(S.aura<c)return;S.aura-=c;S[SK[i]]++;snd(700,.1);save();render()}
function pickAu(i){if(!S.aown[i]){if(S.aura<AU[i].c)return;S.aura-=AU[i].c;S.aown[i]=1}S.au=i;drawMe();pop(AU[i].e+" "+AU[i].n+"!");save();render()}
function setDiff(i){S.diff=i;S.hp=S.max=hpOf(S.l);save();render()}
function setTab(t){tab=t;[0,1,2,3,4].forEach(i=>$("t"+i).className=i==t?"on":"");$("panel").innerHTML=t==2?TR.map((x,i)=>`<div class="up ${S.tr[i]?"eq":""}" style="${S.tr[i]?"":"opacity:.4"}"><b style="color:${x[2]}">${x[0]} ${x[1]}</b>${x[3]}<br>${S.tr[i]?"✅ Conquistado":"🔒 Bloqueado"}</div>`).join(""):"";render()}
[0,1,2,3,4].forEach(i=>$("t"+i).onclick=()=>setTab(i));
function buy(i){const c=cost(i);if(S.aura<c)return;S.aura-=c;S.n[i]++;if(UP[i].t)S.tap+=UP[i].t;if(UP[i].a)S.auto+=UP[i].a;drawMe();pop(MSG[i]);save();render()}
function pick(i){if(!S.own[i]){if(S.aura<CH[i].c)return;S.aura-=CH[i].c;S.own[i]=1}S.sel=i;drawMe();pop(CH[i].e+" "+CH[i].n+"!");save();render()}
function dmg(v,txt,x,y,crit){if(S.pz||S.l>=NL)return;S.hp-=v;S.aura+=v;S.tot+=v;if(txt&&x!==undefined)float(txt,x,y);if(S.hp<=0)clear(crit);else render()}
function clear(crit){
 const b=M.round(10*M.pow(1.55,S.l)*DIFF[S.diff][2]),boss=S.l%5==4;
 S.aura+=b;S.tot+=b;S.pz=1;S.l++;S.hp=0;float("MOGADO! +"+fmt(b)+" ✨",50,40);save();render();
 if(boss||crit||M.random()<.3)startQte();else{mogOk();setTimeout(next,1000)}}
function mogOk(){$("fat").innerHTML="<h2 style='color:#00e5ff;text-shadow:0 0 18px #0ff,3px 3px 0 #000'>MOGADO! 🕶️</h2>";$("fat").style.display="block";boomS();fxB(180,160,["🎉","✨","🕶️","💎"],12);say("mogado",.8,"pt-BR")}
function next(){$("fat").style.display="none";S.pz=0;{const mx=stats()[0];S.hpP=M.min(mx,S.hpP+mx*.1)}if(S.l>=NL){finish();return}S.hp=S.max=hpOf(S.l);setFoe();render()}
let qs=null,qd=null;
const ARW={up:"⬆️ ARRASTE PRA CIMA!",down:"⬇️ ARRASTE PRA BAIXO!",side:"↔️ ARRASTE PRO LADO!"};
function startQte(){qs={seq:[PK(["up","down"]),"side"],i:0};showQ()}
function showQ(){const q=$("qte");q.style.display="flex";q.innerHTML=`<small style="color:#f55;font-weight:900">💀 FINALIZE! 💀</small><div class="qt">${ARW[qs.seq[qs.i]]}</div><div class="qb"><i style="animation:qb 1.4s linear forwards"></i></div><small>${qs.i+1}/2</small>`;snd(900,.12);clearTimeout(qs.to);const t=setTimeout(()=>qEnd(0),1400);if(qs)qs.to=t}
function qEnd(ok){if(!qs)return;clearTimeout(qs.to);qs=null;$("qte").style.display="none";if(ok){S.fat++;S.fails=0;showFat();setTimeout(next,1300)}else{S.fails=(S.fails||0)+1;const mx=stats()[0],loss=S.god?0:M.round(mx*.1*S.fails);S.hpP-=loss;float("FALHOU! -"+fmt(loss)+" ❤️ (x"+S.fails+")",40,100);snd(120,.3,"sawtooth");$("stage").classList.add("sh");setTimeout(()=>$("stage").classList.remove("sh"),450);if(S.hpP<=0){S.hpP=0;render();ko();return}mogOk();setTimeout(next,1100)}}
{const st=$("stage");st.addEventListener("pointerdown",e=>{if(qs)qd={x:e.clientX,y:e.clientY}});
st.addEventListener("pointerup",e=>{if(!qs||!qd)return;const dx=e.clientX-qd.x,dy=e.clientY-qd.y;qd=null;if(M.hypot(dx,dy)<45)return;const d=M.abs(dy)>M.abs(dx)?(dy<0?"up":"down"):(dx<0?"left":"right"),w=qs.seq[qs.i];if(d==w||w=="side"&&(d=="left"||d=="right")){qs.i++;if(qs.i>=2)qEnd(1);else showQ()}else qEnd(0)})}
function showFat(){const v=PK(FV);
 $("fat").innerHTML="<h2>"+v[0]+"</h2>"+v[1]()+sp("🕶️","right:8%;top:34%;animation:pop .6s .3s both",90);
 $("fat").style.display="block";$("stage").classList.add("sh");setTimeout(()=>$("stage").classList.remove("sh"),450);
 boomS();setTimeout(()=>{splashS();fxB(200,200,["💥","⭐","✨","💎"],16)},250);say(v[0].toLowerCase().replace(/[^a-z ]/g,""),.4);setTimeout(()=>say("bye bye",.7),600)}
function ko(){$("ko").classList.add("on");boomS();say("bye bye",.5)}
function hardReset(){const d=S.diff,tr=S.tr;S=fresh();S.diff=d;S.tr=tr;$("ko").classList.remove("on");save();start(S)}
let devOK=0,devAuto=0;
const DEV=[
[()=>"💰 +1 Milhão de aura",()=>{S.aura+=1e6}],
[()=>"💰 +1 Bilhão de aura",()=>{S.aura+=1e9}],
[()=>"💰 +1 Trilhão de aura",()=>{S.aura+=1e12}],
[()=>"🧬 Liberar todos os personagens",()=>{S.own=CH.map(()=>1)}],
[()=>"🔥 Liberar todas as auras",()=>{S.aown=AU.map(()=>1)}],
[()=>"⬆️ Upgrades +10 cada",()=>{UP.forEach((u,i)=>{S.n[i]+=10;if(u.t)S.tap+=u.t*10;if(u.a)S.auto+=u.a*10})}],
[()=>"❤️💪🔥 Atributos +100 cada",()=>{S.sv+=100;S.sf+=100;S.so+=100}],
[()=>"⚔️ Dano x2 (atual x"+(S.dm||1)+")",()=>{S.dm=(S.dm||1)*2}],
[()=>"🛡️ Invencível: "+(S.god?"LIGADO":"DESLIGADO")+" (e cura total)",()=>{S.god=!S.god;S.hpP=stats()[0]}],
[()=>"🖱️ Autoclique: "+(devAuto?"LIGADO":"DESLIGADO"),()=>{devAuto=!devAuto}],
[()=>"💀 Matar o adversário agora",()=>{if(!S.pz)dmg(S.hp+1,"",undefined,undefined,false)}],
[()=>"⏭️ Pular para a próxima fase",()=>{if(!S.pz&&S.l<NL-1){S.l++;S.hp=S.max=hpOf(S.l);setFoe()}}],
[()=>"🏆 Liberar todos os troféus",()=>{TR.forEach((_,i)=>S.tr[i]=1)}]];
function devOpen(){$("dev").classList.add("on");devDraw()}
function devDraw(){const b=$("dvl");if(!devOK){b.innerHTML='<input id="dpw" type="password" inputmode="numeric" maxlength="8" placeholder="Senha" style="padding:12px;border-radius:12px;border:2px solid #00e5ff;background:#0a1730;color:#fff;font-size:1.2rem;text-align:center"><button class="btn" style="margin:0" onclick="devPw()">ENTRAR</button>';return}
 b.innerHTML=DEV.map((x,i)=>`<button class="btn" style="margin:0;font-size:.92rem;padding:10px 14px;width:100%" onclick="devDo(${i})">${x[0]()}</button>`).join("")}
function devPw(){const e=$("dpw");if(e.value=="2468"){devOK=1;devDraw()}else{e.value="";e.placeholder="❌ Senha incorreta"}}
function devDo(i){DEV[i][1]();save();drawMe();render();devDraw()}
setInterval(()=>{if(devAuto&&S&&!S.pz&&!$("menu").classList.contains("on")&&!$("win").classList.contains("on")&&!$("ko").classList.contains("on")&&!$("dev").classList.contains("on"))tap(null)},100);
function finish(){const t=(Date.now()-S.t0)/6e4,r=S.aura/M.max(1,S.tot),d=S.diff,e=[0];if(d==0)e.push(1);if(d==2)e.push(2);if(d==3)e.push(3);if(t<12)e.push(4);if(t>45)e.push(5);if(r>=.25)e.push(6);if(r<.03)e.push(7);if(S.fat>=5)e.push(8);
 e.forEach(i=>S.tr[i]=1);save();$("wt").innerHTML=e.map(i=>`<div class="tc" style="border-color:${TR[i][2]};color:${TR[i][2]}"><span>${TR[i][0]}</span><b>Troféu ${TR[i][1]}</b><small>${TR[i][3]}</small></div>`).join("");$("win").classList.add("on");boomS();say("bye bye",.7)}
function tap(e){if(S.pz)return;S.taps++;const crit=S.taps%10==0,v=S.tap*mult()*(1+stats()[1]*.02)*(S.aT>0?5:1)*(crit?3:1);
 const r=$("stage").getBoundingClientRect();const px=(e&&e.clientX?e.clientX:r.left+r.width/2)-r.left-20,py=(e&&e.clientY?e.clientY:r.top+r.height/2)-r.top-30;
 $("foe").classList.add("hit");$("me").classList.add("tap");setTimeout(()=>{$("foe").classList.remove("hit");$("me").classList.remove("tap")},80);
 if(navigator.vibrate)try{navigator.vibrate(crit?30:8)}catch(_){}
 snd(300+M.random()*200,.05);if(crit){splashS();fxB(px,py,["💥","⭐","✨"],8)}else if(S.taps%3==0)fxB(px,py,["💥","✨"],2);
 dmg(v,(crit?"CRIT! ":"+")+fmt(v),M.max(10,px),M.max(10,py),crit)}
function usePw(i){if(S.cd[i]>0||S.pz)return;S.cd[i]=PW[i][2];
 if(i==0){S.aT=80;pop("⚡ MODO ALPHA x5!");snd(900,.3,"sawtooth")}
 if(i==1){const v=(S.tap*10+S.auto*3)*mult();snd(1600,.4,"sawtooth");fxB(150,120,["👁️","⚡"],8);dmg(v,"👁️ LASER "+fmt(v),110,90,true)}
 if(i==2){const v=M.max(S.max*.06,S.tap*mult()*20);boomS();$("stage").classList.add("sh");setTimeout(()=>$("stage").classList.remove("sh"),500);fxB(150,120,["💥","🔥"],10);dmg(v,"💥 BOOM "+fmt(v),110,90,false)}
 render()}
[0,1,2].forEach(i=>$("pw"+i).onclick=()=>usePw(i));
$("tapbtn").onclick=tap;$("stage").onclick=tap;
setInterval(()=>{if(!S||$("menu").classList.contains("on")||$("win").classList.contains("on")||S.pz)return;if(S.aT>0)S.aT--;for(let i=0;i<3;i++)if(S.cd[i]>0)S.cd[i]--;if(S.hpP>0){const mx=stats()[0];S.hpP=M.min(mx,S.hpP+mx*.0003)}if(S.auto)dmg(S.auto*mult()*(1+stats()[2]*.02)/10);else render()},100);
setTimeout(()=>$("menu").classList.add("on"),3000);
function start(s){S=s;S.hp=S.max=hpOf(S.l);S.aT=0;S.cd=[0,0,0];S.pz=0;S.au=S.au||0;S.aown=S.aown||[1,0,0,0,0];S.sv=S.sv||0;S.sf=S.sf||0;S.so=S.so||0;S.fails=S.fails||0;{const mx=stats()[0];S.hpP=S.hpP>0?M.min(S.hpP,mx):mx;S.mx=mx}S.diff=S.diff??1;S.tot=S.tot||0;S.tr=S.tr||{};S.t0=Date.now();$("panel").innerHTML="";setFoe();drawMe();render()}
$("play").onclick=()=>{start(load()||fresh());$("menu").classList.remove("on")};
$("again").onclick=()=>{$("win").classList.remove("on");hardReset()};$("retry").onclick=hardReset;$("newg").onclick=()=>{S=load()||fresh();hardReset();$("menu").classList.remove("on")};
S=fresh();setFoe();drawMe();render();