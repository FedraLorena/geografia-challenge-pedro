const integrar = [
["¿Cómo puede la globalización conectar al mundo y al mismo tiempo generar desigualdad?","Una multinacional puede comprar insumos en el Congo y coordinar distribución desde un puerto como Dubái. El vínculo genera trabajo en ambos lugares, pero el poder de fijar condiciones y los costos no se reparten por igual. Compará los riesgos de extracción con los ingresos que reciben empresas de servicios y con las diferencias entre trabajadores dentro de Dubái."],
["¿Cómo sigue influyendo la Guerra Fría en la organización del mundo actual?","En Corea, las ocupaciones llevaron a dos gobiernos y el armisticio dejó una frontera militar. En Cuba, la proximidad a Estados Unidos volvió más peligrosa una alianza con la URSS. La disolución soviética cambió las alianzas y mercados, pero quedaron fronteras, instituciones y disputas que siguieron caminos distintos."],
["¿Por qué algunos territorios se convirtieron en potencias económicas?","China combinó reformas, inversión y fábricas costeras. Singapur invirtió en educación, suelo industrial y un puerto de transbordo. Corea del Sur orientó crédito y formación a exportaciones industriales. En cada caso, la ubicación creó oportunidades y las decisiones convirtieron esas oportunidades en capacidades."],
["¿Cómo se relaciona el coltán del Congo con un teléfono celular?","El mineral se extrae y vende, luego se refina para obtener tantalio. La fábrica de un componente puede usarlo en un condensador y otra planta ensamblar el equipo. Los ingresos se reparten entre varias etapas. Parte de los riesgos laborales y ambientales queda cerca de la mina, por eso importa rastrear los lotes."],
["¿Por qué Singapur y Panamá son estratégicos para el comercio mundial?","Singapur concentra conexiones cerca de Malaca y permite transferir carga entre barcos. Panamá permite que un mismo buque cambie de cuenca mediante esclusas. El puerto depende de frecuencia y coordinación; el canal depende además del agua dulce y las dimensiones del buque."],
["¿Qué representan los BRICS en la transformación del poder económico mundial?","La industrialización china y el peso regional de otros integrantes muestran que hay varios centros económicos. Por medio de BRICS, los gobiernos buscan más voz y formas de financiar proyectos. Tener intereses coincidentes en crédito o comercio no implica compartir todas las decisiones de política exterior."],
["¿Cuándo puede un recurso natural convertirse en un problema de poder?","Si grupos armados o intermediarios controlan minas y caminos, pueden quedarse con parte del ingreso y financiar violencia. Ese resultado depende de las instituciones y los conflictos de la región. Seguir el mineral y verificar condiciones permite intervenir en parte del problema."],
["¿Cómo se transmite una crisis ambiental a través del comercio?","Si llueve menos en Panamá, hay menos agua para operar y abastecer a la población. Las restricciones pueden cambiar capacidad, tiempos y precios. Una fábrica que depende de piezas importadas tiene menos margen si guarda poco stock. Ahí se conectan ambiente, rutas y organización del trabajo."]
];
const practicaRefuerzo = [
 [["Con el mismo PBI total, ¿qué cambia si se duplica la población?","El PBI por persona cae a la mitad. Se divide el mismo valor por el doble de habitantes. Eso no dice qué pasó con la distribución de los ingresos."],["¿Por qué las conexiones crecen de manera desigual?","Algunos lugares concentran rutas, conocimiento y financiamiento. En otros, un acceso caro o lento dificulta llegar a proveedores y mercados."],["¿Cómo influyó 1973 en las decisiones industriales?","La energía más cara aumentó costos y estimuló cambios en transporte, consumo de combustible y producción. Las técnicas flexibles ya tenían antecedentes."]],
 [["¿Qué diferencia hay entre COMECON, Plan Marshall y OTAN?","COMECON organizaba cooperación económica socialista. El Plan Marshall financió reconstrucción occidental y la OTAN estableció compromisos de defensa."],["¿Por qué Berlín quedó dividida y qué cambió en 1989?","Las potencias vencedoras repartieron la ocupación. El Muro cerró una vía de salida en 1961 y su apertura en 1989 reflejó una crisis política más amplia."],["¿Por qué un armisticio explica la frontera sin resolver la disputa?","El de 1953 fijó una línea militar y frenó los combates. No resolvió quién debía gobernar la península ni produjo una paz definitiva."]],
 [["¿Qué diferencia hay entre el nombre BRIC y el foro?","El nombre comparaba economías en 2001. El foro surgió cuando sus gobiernos decidieron reunirse y cooperar."],["¿Cómo cambiaron las reformas de 1978 la ubicación de la industria china?","La apertura a inversión y mercados impulsó zonas manufactureras costeras conectadas a puertos. Con inversión y aprendizaje se ampliaron los sectores tecnológicos."],["¿Usar una moneda nacional en un intercambio equivale a crear una moneda de BRICS?","Cada operación puede pactar una moneda y seguir expuesta a variaciones del cambio. Una moneda común implicaría otro acuerdo institucional."]],
 [["¿Qué relación hay entre coltán y tantalio?","El primero es un material mineral; el segundo es un elemento que se puede obtener al procesarlo."],["¿Por qué importa la cercanía de Kivu a fronteras?","Los pasos conectan minas con mercados y también pueden facilitar circuitos informales. Conviene comprobar dónde se extrajo el lote y por dónde pasó."],["¿Por qué exportar más minerales no asegura bienestar?","La renta puede concentrarse y los costos quedar en la zona minera. El resultado depende de instituciones, seguridad, inversión y reparto del ingreso."]],
 [["¿Qué cambió cuando Dubái invirtió ingresos petroleros en infraestructura?","Amplió puertos y transporte y pudo atraer empresas, viajeros y servicios. Eso diversificó una economía que ya comerciaba antes."],["¿Qué muestra Palm Jumeirah sobre la transformación territorial?","El capital y las obras pueden crear suelo costero y cambiar sus usos. Esas intervenciones también afectan el espacio marino."],["¿Qué evidencia buscarías para explicar desigualdad urbana?","Compararía vivienda, transporte, tiempos de viaje y derechos laborales. Las experiencias de distintos trabajadores no son idénticas."]],
 [["¿Qué hace un puerto de transbordo?","Conecta servicios descargando contenedores de un buque para embarcarlos en otro."],["¿Cómo aprovechó Singapur su ubicación después de 1965?","La combinó con educación, infraestructura y atracción de empresas para fabricar y exportar. La cercanía a Malaca por sí sola no generaba esos empleos."],["¿Qué tienen en común Singapur y Corea del Sur y dónde difieren?","Ambos impulsaron educación y exportaciones. Corea del Sur desarrolló conglomerados industriales; Singapur combinó inversión extranjera, servicios y funciones portuarias."]],
 [["¿Para qué sirven las esclusas?","Suben al buque hasta el nivel del lago y lo bajan hacia la salida. Superan el desnivel del terreno."],["¿En qué se diferencian 1914, 1999 y 2016?","Son la inauguración, la transferencia completa del control y la ampliación, respectivamente."],["¿Cómo puede una sequía cambiar el precio de una entrega?","Un buque puede cargar menos, esperar o desviarse. Cualquiera de esas decisiones puede cambiar el costo por unidad o el plazo."]]
];

const root = document.getElementById('refuerzo-ejes');
const reveal = ([q,a]) => '<details class="oral-card"><summary>'+q+'</summary><p>'+a+'</p></details>';
const oralPractice = (items) => '<p>Respondé en voz alta antes de abrir el modelo. Revisá si nombraste actores y lugares, explicaste una causa y mostraste una consecuencia con un ejemplo.</p>'+items.map(reveal).join('');
refuerzoEjes.forEach(([title, units, text], index) => {
 const n=index+1;
 const lessons=units.flatMap(unit => curso[unit].map((lesson,i) => ({lesson, text:edicionPorNivel[unit][i]})));
 const examples=lessons.map(({lesson,text})=>'<details class="oral-card"><summary>'+lesson.title+'</summary>'+text.split('|').map(p=>'<p>'+p+'</p>').join('')+(lesson.key?visual(lesson.key):'')+'</details>').join('');
 const questions=practicaRefuerzo[index];
 root.insertAdjacentHTML('beforeend','<section class="paper" id="eje-'+n+'"><h2>Eje '+n+' · '+title+'</h2>'+text.split('\n').map(p=>'<p>'+p+'</p>').join('')+
 (n===1?'<p><a href="#produccion">Ver la clase sobre Revolución Industrial, fordismo y toyotismo</a></p><p><b>PBI de 2025 · práctica escolar.</b> Compará Argentina, Arabia Saudita, México, Polonia, Australia, Países Bajos, Croacia, Marruecos, Francia y Reino Unido. Inglaterra participa como selección, pero el FMI publica el agregado para Reino Unido. Tomá el mismo año y edición del <a href="https://www.imf.org/external/datamapper/datasets/WEO">FMI</a>, registrá PBI nominal, PBI PPA y población y compará el orden. Relacioná, por ejemplo, agroindustria argentina, petróleo saudita, manufactura mexicana, minería australiana, logística neerlandesa, turismo croata, industria polaca, fosfatos marroquíes, servicios británicos y manufactura y servicios franceses.</p>'+reveal(['A tiene PBI nominal de 600.000 millones y 40 millones de personas. B tiene 480.000 millones y 20 millones. ¿Cuál tiene mayor tamaño y cuál mayor promedio?','A tiene mayor PBI total. A: 600.000 ÷ 40 = 15.000 por persona. B: 480.000 ÷ 20 = 24.000. B tiene mayor promedio. Para comparar poder de compra habría que usar la misma unidad PPA para ambos.']):'')+
 '<h3>Clases y recursos para profundizar</h3>'+examples+'<h3>Comprobá tu comprensión</h3>'+reveal(questions[0])+'<h3>Práctica oral</h3>'+oralPractice(questions)+'</section>');
});
root.insertAdjacentHTML('beforeend','<section class="paper" id="eje-8"><h2>Eje 8 · Integración y coloquio oral</h2><p>Ante cada caso ubicá el territorio, seguí el proceso y explicá quién puede decidir y quién vive el efecto. En un celular, el mineral, la industria y el puerto cumplen funciones distintas. En Corea y Cuba, la posición y las alianzas produjeron efectos territoriales diferentes. En ambos tipos de casos conviene empezar por un ejemplo y cerrar con lo que permite comparar.</p><h3>Simulacro integrador</h3>'+oralPractice(integrar)+'</section>');
const atlasPoints = {
 florida:[-81.7,27.6,'Florida'], kivuN:[29, -1,'Kivu del Norte'], kivuS:[28.4,-3.1,'Kivu del Sur'],
 ruanda:[29.9,-2,'Ruanda'], uganda:[32.3,1.5,'Uganda'], egipto:[30,27,'Egipto'],
 etiopia:[40,9,'Etiopía'], suez:[32.35,30.45,'Canal de Suez']
};
function atlasMap(key) {
 const entries = key==='congo' ? ['kivuN','kivuS','ruanda','uganda','egipto','etiopia','ZAF'] : key==='fria' ? ['florida'] : key==='mundo' ? ['suez','CUB'] : [];
 const config=encuadres[key];
 // Conservá las etiquetas originales. Ubicaciones próximas quedan en la clave numerada.
 const positions=entries.map(name=>atlasPoints[name]||points[name]);
 const [west,south,east,north]=config[0];
 const height=Math.round(840*(north-south)/(east-west)/Math.cos((north+south)*Math.PI/360));
 const markers=positions.map(([lon,lat,name])=>'<circle cx="'+((lon-west)*840/(east-west))+'" cy="'+((north-lat)*height/(north-south))+'" r="5" data-atlas-name="'+name+'"/>').join('');
 return mapa(key).replace('</svg>',markers+'</svg>');
}
const places=[
 ['América y rutas','mundo','Cuba queda al sur de Florida. Panamá conecta el Caribe y el Pacífico. Brasil ocupa gran parte de América del Sur. Un envío de Asia a la costa atlántica americana puede cruzar Panamá, según origen y destino.'],
 ['Cuba y Florida','fria','La cercanía entre la isla y Florida ayuda a explicar el impacto del despliegue de 1962. El mapa aproxima la extensión soviética con contornos actuales.'],
 ['Península de Corea','corea','Entre China y Japón, compará el paralelo 38 con la frontera militar posterior a la guerra.'],
 ['África y los Grandes Lagos','congo','Buscá la RDC en África central. Kivu del Norte y Kivu del Sur quedan en su extremo oriental, alrededor de la zona del lago Kivu y cerca de Ruanda y Uganda. Egipto está al noreste de África, Etiopía en el Cuerno y Sudáfrica al sur.'],
 ['BRICS','brics','Compará Brasil, Rusia, India, China y Sudáfrica. El color permite distinguir categorías a la fecha indicada en la leyenda.'],
 ['Dubái y el golfo Pérsico','golfo','De Dubái se puede salir por Ormuz hacia el Índico. Para ir a Europa por mar, una ruta posible continúa por el mar Rojo y Suez.'],
 ['Malaca y Singapur','singapur','Malaca corre entre Sumatra y la península malaya. Singapur queda cerca de la salida hacia Asia oriental.'],
 ['Panamá y Gatún','panama','Seguí el recorrido desde Colón. Gatún queda entre las costas. Las esclusas elevan o bajan los barcos alrededor del lago.']
];
root.insertAdjacentHTML('beforeend','<section class="paper" id="ubicaciones"><h2>Ubicaciones en el planisferio</h2>'+places.map(([name,key,note])=>'<details class="oral-card"><summary>'+name+'</summary>'+atlasMap(key)+'<p>'+note+'</p></details>').join('')+'<h3>Práctica de ubicación</h3>'+[['¿Qué paso une las rutas del Índico y Asia oriental cerca de Singapur?',places[6][2]],['¿Dónde buscarías Kivu y por qué importan las fronteras?',places[3][2]],['¿Dónde mirarías para entender el riesgo percibido por Estados Unidos en 1962?',places[1][2]]].map(reveal).join('')+'</section>');
root.insertAdjacentHTML('beforeend','<section class="paper" id="guia"><h2>Guía rápida y mapa conceptual</h2><ol>'+[
 'Globalización → industria y consumo. Las cadenas reparten el trabajo. PBI y PBI por habitante miden producción, mientras bienestar también depende del reparto y de los servicios.',
 'Guerra Fría → fronteras y alianzas. Seguí 1945, Berlín, Cuba, Corea y 1991. La rivalidad deja huellas que duran más que el enfrentamiento.',
 'Industria → nuevas potencias. China ganó capacidad manufacturera y tecnológica; BRICS organiza cooperación en un mundo con varios centros de poder.',
 'Consumo → extracción. La demanda de componentes conecta con tantalio, trabajo, conflictos y ambiente en determinados lugares de la RDC.',
 'Ubicación + decisiones → Dubái. Petróleo e inversión ampliaron servicios, con desafíos urbanos de vivienda, agua y trabajo.',
 'Rutas + inversión → Singapur. Malaca ofrece cercanía a flujos y el puerto hub permite intercambiar carga; la educación y la industria ampliaron el empleo.',
 'Relieve + agua → Panamá. El lago y las esclusas permiten cambiar de cuenca; una sequía puede alterar costos y entregas lejos de allí.'
 ].map(t=>'<li>'+t+'</li>').join('')+'</ol><h3>Entrenamiento oral</h3><button type="button" id="sortear">Elegir otra pregunta</button><div id="azar" aria-live="polite">'+reveal(integrar[0])+'</div></section>');
const lock = root.querySelector('.lock');
if (lock) {
 const render = () => {
  const i=Number(lock.dataset.lock);
  const [title,desc,x,y,entry,exit]=pasos[i];
  const water=lock.querySelector('[data-water]');
  water.setAttribute('y',y);
  water.setAttribute('height',164-y);
  const down=lock.querySelector('[data-down]');
  down.setAttribute('y',i===6?120:63);
  down.setAttribute('height',i===6?44:101);
  lock.querySelector('[data-ship]').style.transform='translate('+x+'px,'+y+'px)';
  for(const [name,on] of [['in',entry],['out',exit],['down-in',i===5],['down-out',i===6]])lock.querySelector('[data-'+name+']').classList.toggle('raised',on);
  lock.querySelector('[data-steptext]').textContent=(i+1)+' · '+title+'. '+desc;
  lock.querySelector('[data-step="-1"]').disabled=i===0;
  lock.querySelector('[data-step="1"]').disabled=i===pasos.length-1;
 };
 lock.addEventListener('click',e=>{
  const button=e.target.closest('[data-step]');
  if(!button)return;
  const step=Number(button.dataset.step);
  lock.dataset.lock=step===0?0:Number(lock.dataset.lock)+step;
  render();
 });
 render();
}
let last=0;
document.getElementById('sortear').addEventListener('click',()=>{last=(last+1+Math.floor(Math.random()*(integrar.length-1)))%integrar.length;document.getElementById('azar').innerHTML=reveal(integrar[last]);});


const navigation = [...document.querySelectorAll('.refuerzo nav a')];
const panels = navigation.map(link => document.getElementById(link.hash.slice(1)));
const feature = document.getElementById('produccion');
panels[0].append(feature);

function showRefuerzo() {
 const hash = location.hash;
 const index = navigation.findIndex(link => link.hash === hash);
 const anchor = document.getElementById(hash.slice(1));
 const selected = index >= 0 ? index : Math.max(0, panels.findIndex(panel => anchor && panel.contains(anchor)));
 panels.forEach((panel,i)=>{panel.hidden=i!==selected;});
 navigation.forEach((link,i)=>{
  if(i===selected) link.setAttribute('aria-current','location');
  else link.removeAttribute('aria-current');
 });
 document.getElementById('refuerzo-actual').textContent=panels[selected].querySelector('h2').textContent;
 if(anchor && !anchor.hidden) anchor.scrollIntoView({block:'start'});
}
window.addEventListener('hashchange',showRefuerzo);
showRefuerzo();

const svgNS='http://www.w3.org/2000/svg';
document.querySelectorAll('.refuerzo .map svg').forEach(svg=>{
 const [, ,width,height]=svg.getAttribute('viewBox').split(/\s+/).map(Number);
 const labels=[...svg.querySelectorAll('text, [data-atlas-name]')];
 if(!labels.length)return;
 const references=document.createElement('ol');
 references.className='map-references';
 references.setAttribute('aria-label','Referencias del mapa');
 const occupied=[];
 svg.setAttribute('role','group');
 labels.forEach((label,i)=>{
  const name=label.dataset.atlasName||label.textContent.trim();
  const dots=[...svg.querySelectorAll('circle:not([data-atlas-name])')];
  const isPin=label.classList.contains('pin') && name!=='38° N';
  const lx=Number(label.getAttribute(label.dataset.atlasName?'cx':'x'));
  const ly=Number(label.getAttribute(label.dataset.atlasName?'cy':'y'));
  const closest=isPin?dots.find(dot=>Math.abs(Number(dot.getAttribute('cx'))-lx)===10&&Math.abs(Number(dot.getAttribute('cy'))-ly)<=21):null;
  const x=closest?Number(closest.getAttribute('cx')):lx;
  const y=closest?Number(closest.getAttribute('cy')):ly;
  const safeX=Math.max(20,Math.min(width-20,x));
  const safeY=Math.max(20,Math.min(height-20,y));
  let point;
  for(let ring=0;!point&&ring<10;ring++){
   for(let k=0;k<(ring?12:1);k++){
    const angle=k*Math.PI/6;
    const nx=safeX+ring*37*Math.cos(angle),ny=safeY+ring*37*Math.sin(angle);
    if(nx>=20&&nx<=width-20&&ny>=20&&ny<=height-20&&occupied.every(([px,py])=>Math.hypot(nx-px,ny-py)>=37)){point=[nx,ny];break;}
   }
  }
  const [bx,by]=point||[safeX,safeY];
  occupied.push([bx,by]);
  const item=document.createElement('li');
  item.id='map-ref-'+document.querySelectorAll('.map-references').length+'-'+i;
  item.textContent=name;
  references.append(item);
  const marker=document.createElementNS(svgNS,'a');
  marker.setAttribute('href','#'+item.id);
  marker.setAttribute('aria-label',name);
  marker.classList.add('map-reference-marker');
  if(Math.hypot(x-bx,y-by)>5){
   const stem=document.createElementNS(svgNS,'line');
   for(const [key,value] of Object.entries({x1:x,y1:y,x2:bx,y2:by})) stem.setAttribute(key,value);
   marker.append(stem);
  }
  const circle=document.createElementNS(svgNS,'circle');
  for(const [key,value] of Object.entries({cx:bx,cy:by,r:16}))circle.setAttribute(key,value);
  const number=document.createElementNS(svgNS,'text');
  number.setAttribute('x',bx);number.setAttribute('y',by);
  number.textContent=i+1;
  marker.append(circle,number);
  label.remove();
  svg.append(marker);
 });
 svg.after(references);
});
