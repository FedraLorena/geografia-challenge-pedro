const main = document.querySelector('main');
const storageKey = 'geografia-challenge-pedro-v1';
const emptyState = () => ({passed:{}, attempts:{}, answers:{}, notes:{}, oral:{}, graded:{}});
let state = emptyState();
try { state = {...state,...JSON.parse(localStorage.getItem(storageKey) || '{}')}; } catch {}
const estudiante = state;
let revision = false;
function save() {
 if(revision) return true;
 try { localStorage.setItem(storageKey, JSON.stringify(state)); return true; }
 catch { const status = document.querySelector('#storage'); if(status) status.textContent='Este navegador no permite guardar el avance para la próxima sesión.'; return false; }
}
const tags = ['Orientación','Economía','Geopolítica','Geopolítica','Cooperación','Recursos','Ciudades','Ciudades','Logística','Integración'];
const symbols = ['◎','↗','◐','◫','✳','◇','▥','⊞','≈','✦'];
const total = practica.reduce((n,arr)=>n+arr.length,0);
const available = n => revision || n===0 || Boolean(state.passed[n-1]);
const levelURL = n => '#nivel-'+n;
const pad = n => String(n).padStart(2,'0');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function home() {
 const done = Object.keys(estudiante.passed).length;
 const next = niveles.findIndex((_,i)=>!state.passed[i]);
 return '<section class="hero"><div class="hero-text"><p class="kicker">Geografía · 4.º año</p><h1>El mundo<br><em>conectado<span>.</span></em></h1><p>Pedro, explorá cómo los recursos, la historia y las rutas comerciales conectan territorios. Prepará tu coloquio paso a paso.</p><a class="primary" href="'+levelURL(next<0?9:next)+'">'+(done===0?'Empezar el recorrido':next<0?'Volver al coloquio':'Continuar estudiando')+' <span aria-hidden="true">↗</span></a></div><div class="hero-map">'+mapa('mundo')+'</div></section>'+
 '<section class="route" id="ruta"><div class="routehead"><div><h2>Tu recorrido</h2><p>'+total+' ejercicios de práctica · '+oral.length+' preguntas orales</p></div><div class="progress"><b>'+done+' de 10 niveles aprobados</b><progress value="'+done+'" max="10">'+done+'</progress></div></div><div class="grid">'+niveles.map(([title,desc],i)=>{
 const disabled = !available(i);
 return '<'+(disabled?'div':'a')+' class="tile theme-'+i+(disabled?' locked':'')+'" '+(disabled?'':'href="'+levelURL(i)+'"')+'><div><span class="icon" aria-hidden="true">'+symbols[i]+'</span><span class="tile-state">'+(revision?'Para revisar':state.passed[i]?'✓ Aprobado':disabled?'Bloqueado':'Disponible')+'</span></div><p class="kicker">Nivel '+pad(i)+' · '+tags[i]+'</p><h3>'+title+'</h3><p>'+desc+'</p></'+(disabled?'div':'a')+'>';
 }).join('')+'</div><p class="muted">Aprobá cada nivel con al menos un 75 % para habilitar el siguiente.</p></section>';
}
const sources = [
 ['BRICS · Documentos y registro de junio de 2026',[
 ['Presidencia de Brasil','https://brics.br/en/about-the-brics'],['Banco Central de Brasil','https://www.bcb.gov.br/en/about/brics-en'],['Banco de Rusia','https://www.cbr.ru/eng/about_br/ip/momo/brics/'],['Ministerio de Minas y Energía de Brasil','https://www.gov.br/mme/pt-br/atos-internacionais/organismos-internacionais/brics'],['PREVIC · junio de 2026','https://www.gov.br/previc/pt-br/noticias/previc-participa-de-seminario-do-brics'],['Nuevo Banco de Desarrollo','https://www.ndb.int/about-ndb/']]],
 ['Economía y población', [['BEA · Cómo se mide el PBI','https://www.bea.gov/resources/learning-center/what-to-know-gdp'],['Banco Mundial · Indicadores de los cinco BRICS históricos','https://data.worldbank.org/?locations=CN-IN-RU-BR-ZA'],['SingStat · Población y superficie','https://www.singstat.gov.sg/find-data/get-latest-data']]],
 ['Historia y península coreana',[['Oficina del Historiador · Bahía de Cochinos','https://history.state.gov/milestones/1961-1968/bay-of-pigs'],['Oficina del Historiador · Crisis de los misiles','https://history.state.gov/milestones/1961-1968/cuban-missile-crisis'],['ONU · Texto del armisticio de Corea','https://peacemaker.un.org/korea-armistice53'],['OIEA · Resolución sobre Corea del Norte, 2025','https://www.iaea.org/sites/default/files/gc/gc69-res13.pdf']]],
 ['Coltán',[['USGS · Niobio y tantalio','https://www.usgs.gov/centers/national-minerals-information-center/niobium-and-tantalum-statistics-and-information'],['USGS · Informe mineral','https://pubs.usgs.gov/publication/pp1802M'],['OIT · República Democrática del Congo','https://webapps.ilo.org/clodashboard/country/1A/COD']]],
 ['Dubái y Singapur',[['Gobierno de EAU · Dubái','https://u.ae/en/about-the-uae/the-seven-emirates/Dubai'],['Cancillería de EAU · Historia','https://www.mofa.gov.ae/en/the-uae/history'],['Visit Dubai · Cronología','https://www.visitdubai.com/en/-/media/Files/guides/dubai-mini-guide-04-cultural-explorer.pdf'],['Biblioteca Nacional de Singapur · Independencia','https://www.nlb.gov.sg/main/article-detail?cmsuuid=139cd6b7-7672-4163-9640-db47447e9399'],['Biblioteca Nacional de Singapur · Historia marítima','https://curiocity.nlb.gov.sg/digital-stories/singapore-maritime-odyssey/singapore-maritime-odyssey-after-independence/']]],
 ['Lecturas de la revisión final',[['Cuba · Estudio histórico de la Biblioteca del Congreso','https://tile.loc.gov/storage-services/master/frd/frdcstdy/cu/cubacountrystudy00huds/cubacountrystudy00huds.pdf'],['Pacto de Varsovia · Oficina del Historiador','https://history.state.gov/milestones/1953-1960/warsaw-treaty'],['Armisticio de Corea · Archivos Nacionales de Estados Unidos','https://www.archives.gov/milestone-documents/armistice-agreement-restoration-south-korean-state'],['Corea · Conferencia de Ginebra','https://history.state.gov/historicaldocuments/frus1955-57v23p2/d1'],['Cuba · Historia de las relaciones diplomáticas','https://history.state.gov/countries/cuba'],['Nuevo Banco de Desarrollo · Historia','https://www.ndb.int/about-ndb/history/'],['BRICS · Registro brasileño de agosto de 2026','https://www.gov.br/portos-e-aeroportos/pt-br/assuntos/noticias/2026/08/brasil-apresenta-ao-banco-do-brics-projetos-de-infraestrutura-em-busca-de-novas-fontes-de-financiamento'],['Singapur · Industrialización de Jurong','https://curiocity.nlb.gov.sg/digital-stories/jurong/jurong-industrial-estate-development/']]],
 ['Canal de Panamá',[['Autoridad del Canal · Sequía y abastecimiento de agua','https://pancanal.com/canal-mantiene-medidas-para-garantizar-disponibilidad-de-agua/'],['Autoridad del Canal · Historia','https://pancanal.com/conoce-la-historia-del-canal-de-panama/'],['Preguntas frecuentes','https://pancanal.com/preguntas-frecuentes/'],['Diseño de las esclusas','https://pancanal.com/diseno-de-las-esclusas/'],['Centro de visitantes · Historia','https://visitcanalpanama.com/es/historia/'],['Calculadora oficial de peajes','https://calculadora.pancanal.com/']]],
 ['Cartografía',[['Natural Earth · Límites nacionales 1:110 millones','https://www.naturalearthdata.com/downloads/110m-cultural-vectors/110m-admin-0-countries/'],['Natural Earth · Dominio público','https://www.naturalearthdata.com/about/terms-of-use/']]]
];
const videos = {6:['https://youtu.be/MYtdTTrk1pE','https://youtu.be/aLX0N0Bsxpo','https://youtu.be/NbzLF57VAz0'],8:['https://youtube.com/shorts/7qfce2wzrTs','https://youtu.be/MA6smaKqxkg']};
const link = (name,url) => '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+name+' ↗</a>';
function showSources() {
 return '<section class="reading" id="fuentes"><a class="back" href="#ruta">← Recorrido</a><h1>Fuentes consultadas</h1>'+sources.map(([name,refs])=>'<section class="paper"><h2>'+name+'</h2><ul>'+refs.map(([title,url])=>'<li>'+link(title,url)+'</li>').join('')+'</ul></section>').join('')+'</section>';
}
function chapter(n) {
 const [title,desc]=niveles[n];
 if (!available(n)) return '<section class="reading"><a class="back" href="#ruta">← Recorrido</a><h1>'+title+'</h1><p>Aprobá el nivel anterior con al menos un 75 % para acceder.</p></section>';
 return '<section class="reading theme-'+n+'"><a class="back" href="#ruta">← Recorrido</a><p class="kicker">Nivel '+pad(n)+' · '+tags[n]+'</p><h1>'+title+'</h1><p class="intro">'+desc+'</p><nav class="jump" aria-label="Ir a"><button data-jump="clases">Microclases</button><button data-jump="evaluacion">'+(n===9?'Examen escrito':'Ejercicios')+'</button>'+'<button data-jump="hablar">Práctica oral</button>'+'</nav><div id="clases">'+
 bloquesClase(n)+'</div>'+
 (videos[n]?'<section class="paper"><h2>Material audiovisual de la profesora</h2><ul>'+videos[n].map((url,i)=>'<li>'+link('Video '+(i+1),url)+'</li>').join('')+'</ul>'+(n===8?link('Calculadora oficial de peajes','https://calculadora.pancanal.com/'):'')+'</section>':'')+
 bloqueOral(n)+
 '<section class="paper" id="evaluacion"><h2>'+(n===9?'Examen escrito integrador':'Ejercicios del nivel')+'</h2><p>'+(n===9?'20 preguntas cerradas y 4 abiertas. Las abiertas tienen criterios para revisar con un adulto y quedan fuera del porcentaje automático.':'Necesitás al menos 75 % de respuestas correctas. Si hace falta, repasá tus errores y volvé a intentar.')+'</p>'+quiz(n)+'<h3>Razoná con un caso</h3><p>Prepará un argumento y comparalo con el modelo. Esta respuesta queda fuera de la nota automática.</p>'+preguntaLibre(...casosGeograficos[n])+'</section></section>';
}
function oralCard(i,single) {
 const [question,model,keywords] = oral[i];
 const status = state.oral[i] || '';
 return '<details class="oral-card" '+(single?'open':'')+'><summary>'+(single?'':pad(i+1)+' · ')+question+'<small data-oral-label="'+i+'">'+(status?' · '+status:'')+'</small></summary><div><button data-think="'+i+'">Pensar mi respuesta</button><label class="sr" for="notes-'+i+'">Mis ideas</label><textarea id="notes-'+i+'" data-notes="'+i+'" placeholder="Escribí tus ideas…" rows="3">'+esc(state.notes[i])+'</textarea><details><summary>Ver respuesta orientativa</summary><p>'+model+'</p><p><b>Conceptos esenciales</b> '+keywords+'</p></details><div class="oral-buttons"><button data-oral="'+i+'" data-status="Lo pude explicar" aria-pressed="'+(status==='Lo pude explicar')+'">Lo pude explicar</button> <button data-oral="'+i+'" data-status="Necesito repasar" aria-pressed="'+(status==='Necesito repasar')+'">Necesito repasar</button></div></div></details>';
}
function shuffled(values,seed) {
 const arr = [...values];
 for (let i=arr.length-1;i>0;i--) {
  seed = (Math.imul(seed,1664525)+1013904223)>>>0;
  const j = seed%(i+1);
  [arr[i],arr[j]]=[arr[j],arr[i]];
 }
 return arr;
}
const seq = q => q.data.split('/');
function quiz(n) {
 const questions=n===9?examen:practica[n];
 return '<form id="quiz" data-level="'+n+'">'+etapas.map((label,step)=>'<h3>'+label+'</h3>'+questions.map((q,i)=>((n===9?(i<5?0:i<15?1:2):etapasEj[n][i])===step?quizQuestion(q,n,i):'')).join('')).join('')+
 '<div class="actions"><button class="primary" type="submit">Corregir respuestas</button><button type="button" data-reset="'+n+'">Reiniciar ejercicios</button></div><div id="result" aria-live="polite" tabindex="-1">'+resultHTML(n)+'</div></form>';
}
function quizQuestion(q,n,i) {
 const k=n+'-'+i, value=state.answers[k], seed=111+n*197+i*127+Number(state.attempts[n]||0)*211;
 const choice = q.type==='choice'||q.type==='map';
 let fields = '';
 if (choice) {
  const opts = q.type==='map'?['A','B','C','D']:shuffled(q.data,seed);
  if(q.type==='map') fields += mapa('brics',mapOptions(q,seed));
  fields += '<div class="options">'+opts.map(opt=>'<label><input type="radio" name="'+k+'" data-answer="'+k+'" value="'+esc(opt)+'" '+(value===opt?'checked':'')+'> '+esc(opcionVisible(opt))+'</label>').join('')+'</div>';
 } else if(q.type==='number') {
  fields = '<label>Tu resultado <input inputmode="numeric" data-answer="'+k+'" value="'+esc(value)+'"></label>';
 } else if(q.type==='open') {
  fields = '<label class="sr" for="open-'+i+'">Tu respuesta</label><textarea id="open-'+i+'" data-answer="'+k+'" rows="4" placeholder="Escribí tu explicación…">'+esc(value)+'</textarea><details><summary>Ver criterios de corrección</summary><p>'+q.data+'</p></details>';
 } else {
  const pairs = q.type==='order'?seq(q).map((item,j)=>['Posición '+(j+1),item]):seq(q).map(s=>s.split(':'));
  const opts = shuffled(pairs.map(p=>p[1]),seed);
  fields = '<div class="selects">'+pairs.map(([label],j)=>'<label>'+label+'<select data-answer="'+k+'" data-part="'+j+'"><option value="">Elegí una opción</option>'+opts.map(opt=>'<option '+(value?.[j]===opt?'selected':'')+'>'+esc(opt)+'</option>').join('')+'</select></label>').join('')+'</div>';
 }
 const feedback=state.graded[n]?.checks[i];
 if (revision && q.type!=='open') fields += '<details><summary>Ver solución</summary><p>'+solucion(q,seed)+'</p><p>'+q.hint+'</p>'+repaso(n,i)+'</details>';
 return '<fieldset class="question" id="q-'+i+'" tabindex="-1"><legend>'+pad(i+1)+' · '+q.prompt+'</legend>'+fields+(typeof feedback==='boolean'?'<p class="feedback '+(feedback?'correct':'wrong')+'"><b>'+(feedback?'Correcto.':'Para repasar.')+'</b> '+q.hint+'</p>'+explicarOpciones(q,seed)+repaso(n,i):'')+'</fieldset>';
}
const mapOptions = (q,seed) => shuffled(q.data.split(','),seed);
function isCorrect(q,value,seed) {
 if(q.type==='choice') return value===q.data[0];
 if(q.type==='number') return String(value??'').trim()!=='' && Number(String(value).trim().replace(',','.'))===Number(q.data);
 if(q.type==='map') return 'ABCD'[mapOptions(q,seed).indexOf(q.data.split(',')[0])]===value;
 const expected=q.type==='order'?seq(q):seq(q).map(p=>p.split(':')[1]);
 return expected.every((item,j)=>value?.[j]===item);
}
function resultHTML(n) {
 const grade=state.graded[n];
 if(!grade) return '';
 const errors=grade.checks.flatMap((v,i)=>v===false?[i]:[]);
 return '<div class="score '+(grade.passed?'correct':'wrong')+'"><strong>'+grade.correct+' de '+grade.total+' · '+(grade.correct/grade.total*100).toLocaleString('es-AR',{maximumFractionDigits:1})+' %</strong><p>'+(revision?'Resultado de prueba en modo revisión.':grade.passed?n===9?'Examen escrito aprobado.':'Nivel aprobado. Se habilitó '+niveles[n+1][0]+'.':'Repasá las explicaciones y corregí tus respuestas para volver a intentar.')+'</p>'+errors.map(i=>'<button type="button" data-jump="q-'+i+'">Repasar '+(i+1)+'</button>').join(' ')+(grade.passed&&n<9&&!revision?'<a class="primary" href="'+levelURL(n+1)+'">Siguiente nivel →</a>':'')+'</div>';
}
function applyStep(box,i) {
 const [title,desc,x,y,entry,exit]=pasos[i];
 box.dataset.lock=i;
 const water=box.querySelector('[data-water]');
 water.setAttribute('y',y);
 water.setAttribute('height',164-y);
 const down=box.querySelector('[data-down]');
 down.setAttribute('y',i===6?120:63);
 down.setAttribute('height',i===6?44:101);
 box.querySelector('[data-ship]').style.transform='translate('+x+'px,'+y+'px)';
 for(const [selector,open] of [['in',entry],['out',exit],['down-in',i===5],['down-out',i===6]]) box.querySelector('[data-'+selector+']').classList.toggle('raised',open);
 box.querySelector('[data-steptext]').innerHTML='<b>Paso '+(i+1)+' de '+pasos.length+' · '+title+'</b><br>'+desc+'<br><small>Nivel en la cámara de ascenso: '+(y===120?'bajo, igual al tramo de entrada':y===63?'alto, igual al tramo superior':'intermedio, ambas compuertas cerradas')+'.</small>';
 box.querySelector('[data-step="-1"]').disabled=i===0;
 box.querySelector('[data-step="1"]').disabled=i===pasos.length-1;
}
function route() {
 const hash=location.hash;
 const found=hash.match(/^#nivel-([0-9])(?:\/(clase-[0-9]+))?$/);
 main.innerHTML = (revision?'<p class="review-banner" role="status">Modo revisión activo · práctica independiente del avance de Pedro</p>':'')+(found ? chapter(Number(found[1])) : hash==='#fuentes'?showSources():home())+'<p class="storage" id="storage" role="status"></p>';
 main.querySelectorAll('.lock').forEach(box=>applyStep(box,0));
 save();
 if(found?.[2]) jump(found[2]);
 else if(hash==='#ruta') document.querySelector('#ruta')?.scrollIntoView();
 else if(hash==='#main') main.focus();
 else window.scrollTo(0,0);
}
function jump(id) {
 const item=document.getElementById(id);
 if (!item) return;
 if(item.matches('details')) item.open=true;
 item.scrollIntoView({block:'start'});
 if(item.matches('fieldset')) item.focus({preventScroll:true});
}
main.addEventListener('click',e=>{
 const el=e.target.closest('button');
 if(!el) return;
 const d=el.dataset;
 if (d.jump) jump(d.jump);
 if (d.step!==undefined) {
  const box=el.closest('.lock');
  applyStep(box,d.step==='0'?0:Number(box.dataset.lock)+Number(d.step));
 }
 if (d.think!==undefined) document.getElementById('notes-'+d.think).focus();
 if (d.oral!==undefined) {
  state.oral[d.oral]=d.status;
  el.parentElement.querySelectorAll('[data-oral]').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));
  main.querySelector('[data-oral-label="'+d.oral+'"]').textContent=' · '+d.status;
  save();
 }
 if (d.reset!==undefined && confirm('¿Reiniciar los ejercicios de este nivel? Se conservan los niveles aprobados y tus notas orales.')) {
  const n=Number(d.reset);
  for(const k of Object.keys(state.answers)) if(k.startsWith(n+'-')) delete state.answers[k];
  delete state.graded[n];
  state.attempts[n]=(state.attempts[n]||0)+1;
  save();
  document.querySelector('#quiz').outerHTML=quiz(n);
  jump('evaluacion');
 }
});
main.addEventListener('input',e=>{
 const el=e.target,d=el.dataset;
 if(d.notes!==undefined) state.notes[d.notes]=el.value;
 else if(d.answer!==undefined) {
  if(d.part!==undefined) (state.answers[d.answer] ||= {})[d.part]=el.value;
  else state.answers[d.answer]=el.value;
 } else return;
 save();
});
main.addEventListener('submit',e=>{
 if(e.target.id!=='quiz') return;
 e.preventDefault();
 const n=Number(e.target.dataset.level);
 const qs=n===9?examen:practica[n];
 const checks=qs.map((q,i)=>q.type==='open'?null:isCorrect(q,state.answers[n+'-'+i],111+n*197+i*127+Number(state.attempts[n]||0)*211));
 const total=checks.filter(v=>v!==null).length, correct=checks.filter(Boolean).length;
 const passed=correct*4>=total*3;
 state.graded[n]={checks,total,correct,passed};
 if(passed && !revision) state.passed[n]=true;
 save();
 e.target.outerHTML=quiz(n);
 const result=document.querySelector('#result');
 result.focus();
});
document.getElementById('modo').addEventListener('click',function(){
 revision=!revision;
 state=revision?emptyState():estudiante;
 this.setAttribute('aria-pressed',String(revision));
 this.textContent=revision?'Volver al modo estudiante':'Modo revisión';
 route();
});
window.addEventListener('hashchange',route);
route();

