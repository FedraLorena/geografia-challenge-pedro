const nuevasClases = ampliacion.map(unit=>unit.split('\n').map(line=>line.split('|')));
const etapas = ['Comprender','Aplicar','Razonar y argumentar'];
const objetivosBase = [
 ['Seguir la cadena internacional de un celular sin confundir los puntos de producción y las rutas posibles'],
 ['Distinguir las cuatro dimensiones de la globalización en una cadena internacional','Calcular PBI por habitante y distinguir el crecimiento de la producción de la inflación'],
 ['Explicar cómo dos superpotencias organizaron alianzas y compitieron sin enfrentarse en una guerra general','Reconstruir el orden de los hechos y explicar por qué el acuerdo redujo el riesgo nuclear'],
 ['Explicar por qué la ocupación de 1945 terminó en dos Estados y una frontera militar','Comparar dos trayectorias económicas y políticas con ejemplos de cada Corea'],
 ['Explicar quiénes formaron BRICS y qué mecanismos usan para cooperar','Relacionar los recursos y la industria de Brasil con su comercio con Argentina','Relacionar la extensión y los recursos energéticos de Rusia con su influencia','Explicar cómo la diversidad de actividades de India se refleja en el mundo','Vincular manufactura, tecnología y comercio chino con Argentina','Relacionar la posición y minería sudafricanas con su papel regional y distinguir categorías de participación'],
 ['Distinguir el coltán, el tantalio y el cobalto en una cadena tecnológica','Ordenar el recorrido de un lote desde la extracción hasta el ensamblaje','Explicar causas y consecuencias de los riesgos laborales y ambientales','Proponer medidas de trazabilidad, control y reciclaje para un caso concreto'],
 ['Ubicar Dubái en tres escalas y explicar su acceso al Índico','Relacionar comercio tradicional, petróleo e inversiones con una secuencia de fechas','Explicar cómo se diversificó la economía y qué función cumplen puerto y aeropuerto','Usar diez hechos urbanos para explicar cambios en la costa, el empleo y la conectividad'],
 ['Explicar la posición comercial de una ciudad-Estado junto a Malaca','Relacionar políticas de educación e infraestructura con las exportaciones','Comparar la soberanía y las funciones comerciales de Dubái y Singapur'],
 ['Explicar cómo el istmo permite acortar determinadas rutas marítimas','Distinguir quién promovió, construyó, inauguró y asumió el control del canal','Relacionar problemas técnicos, sanitarios y laborales con las respuestas de obra','Predecir cómo se mueve el agua y qué compuerta debe estar abierta en cada paso','Evaluar el efecto de los peajes y las sequías sobre una ruta comercial'],
 ['Explicar cómo una cadena tecnológica reúne recursos, industria, transporte, comercio y decisiones políticas']
];
const baseOral = [[0],[1,3],[5,8],[9,11],[12,14,31,31,14,15],[17,18,19,20],[22,21,21,22],[23,23,24],[25,27,26,25,28],[30]];
const practicasOrales = [
 [0,1,2,30,31],[1,2,3,4,31],[5,6,7,8,9],[10,9,11,5,7],[12,13,15,14,16],[17,18,19,20,30],[22,21,24,29,31],[23,24,21,29,30],[25,26,27,28,29],[0,9,30,29,31]
];
function leccionesNivel(n) {
 const base = niveles[n][2].map(([title,body,example,,key],i)=>({
  title,objective:objetivosBase[n][i],body,example,key,oral:oral[baseOral[n][i]].slice(0,2)
 }));
 const more = nuevasClases[n].map(([title,objective,body,example,question,model])=>({title,objective,body,example,oral:[question,model]}));
 if(n===1) return more;
 if(n===2) {
  more[7].key='cuba'; more[9].key='tlCuba';
  return more;
 }
 if(n===0) return [...more,...base];
 if(n===3) return [more[0],base[0],more[1],base[1],more[2]];
 if(n===4) return [more[0],base[0],more[1],...base.slice(1)];
 if(n===5) return [base[0],more[0],...base.slice(1),more[1]];
 if(n===6) { more[2].example=base[3].example+' '+more[2].example; return [more[0],...base.slice(0,3),more[1],more[2]]; }
 if(n===7) return [base[0],more[0],base[1],more[1],base[2]];
 if(n===8) return [base[0],more[0],base[1],base[2],more[1],base[3],more[2],base[4],more[3]];
 return [...base,...more];
}
const curso = niveles.map((_,n)=>leccionesNivel(n));
const referenciasEj = [
 [3,3,1,3,3],[1,5,8,7,8,9],[2,3,7,5,8,7],[0,0,2,1,3,2],
 [3,4,5,6,7,7,2,1,6,6],[0,0,2,3,5,3],[0,1,2,3,5,2],[0,3,2,4,4,2],[0,2,3,5,5,5,6,7]
];
const etapasEj = [
 [0,0,1,2,2],[0,2,1,1,1,2],[0,1,1,2,1,2],[0,0,1,0,2,2],[0,0,0,0,0,1,2,0,2,2],
 [0,0,1,2,2,2],[0,0,1,2,2,1],[0,0,2,2,1,2],[0,1,1,1,1,2,2,2]
];
const examRefs = [[1,5],[1,8],[1,7],[1,9],[2,9],[2,8],[3,0],[3,1],[4,2],[4,7],[4,5],[5,0],[5,5],[6,3],[7,4],[7,0],[8,5],[8,6],[8,4],[7,3],[5,2],[7,4],[2,7],[9,1]];
function destino(n,i) {
 const [unit,lesson]=n===9?examRefs[i]:[n,referenciasEj[n][i]];
 return [unit,lesson,curso[unit][lesson].title];
}
const repaso = (n,i) => {
 const [unit,lesson,title]=destino(n,i);
 return unit===n?'<button type="button" data-jump="clase-'+lesson+'">Repasar '+title+'</button>':'<a href="#nivel-'+unit+'/clase-'+lesson+'">Repasar '+title+' ↗</a>';
};
const eventos = [
 ['Una crecida corta un puente por el que pasan alimentos. ¿Qué consecuencias tendría para dos ciudades?', 'La que produce puede perder ventas y la que compra puede recibir menos alimentos. Un camino alternativo ayuda, pero requiere tiempo y capacidad.'],
 ['Un país produce 2 % más, pero su población crece 4 %. ¿Ahora produce más o menos por persona? Explicá cómo lo sabés.', 'El promedio baja. La producción crece, pero menos que la población. Dividir 1,02 por 1,04 da cerca de 0,981: una caída de alrededor del 1,9 %.'],
 ['Dos potencias rivales reciben información contradictoria en una crisis. ¿Qué decisión reduce el riesgo?', 'Mantener comunicación directa permite contrastar qué ocurrió y explicar intenciones. La crisis cubana muestra cómo eso puede acompañar una negociación.'],
 ['Un mapa dibuja toda la frontera actual de Corea sobre el paralelo 38. ¿Cómo revisarías la afirmación?', 'Distinguiría el paralelo usado para dividir ocupaciones en 1945 de la línea militar vinculada al armisticio de 1953. Están próximas y no coinciden exactamente.'],
 ['Dos fuentes cuentan distinto los miembros de BRICS. ¿Qué comprobarías?', 'Compararía fecha y criterios. Miraría si cuentan socios, invitados o miembros plenos y si describen como formalizada la adhesión saudita.'],
 ['Una firma tiene la dirección de una mina y recibe una denuncia de trabajo infantil. ¿Qué debería comprobar?', 'Verificaría el lote y la procedencia, contrastaría la denuncia con fuentes independientes y buscaría medidas que protejan a niños y trabajadores. La dirección sola es trazabilidad parcial.'],
 ['Crece el turismo y sube el consumo de agua. ¿Qué indicadores usarías para analizar ese cambio?', 'Miraría empleo e ingresos turísticos y, además, demanda de agua, energía para desalinizarla y acceso a vivienda y servicios.'],
 ['Una empresa necesita transferir carga entre buques que viajan entre Asia oriental y el Índico. ¿Qué hace útil el puerto de Singapur?', 'La cercanía a Malaca y la capacidad de sus terminales facilitan conectar servicios. La posición se aprovecha mediante inversiones, formación y coordinación logística.'],
 ['Un buque no puede pasar con el calado habitual. ¿Qué opciones evaluaría la naviera?', 'Podría cargar menos, esperar o desviarse. Compararía costos, demoras y capacidad. El agua disponible limita las opciones, incluso si el canal acorta la distancia.'],
 ['Una sequía encarece el transporte de componentes. ¿Cómo se relacionan los mercados, la infraestructura y el bienestar?', 'La menor capacidad de una vía modifica costos y plazos de una cadena. El efecto sobre la población depende de cómo cambian precios, empleo e ingresos y de quién absorbe esos costos.']
];
function preguntaLibre(question,model,label='Ver respuesta orientativa') {
 return '<div class="oral-card"><p><b>'+question+'</b></p><label>Ordená tus ideas<textarea rows="2"></textarea></label><details><summary>'+label+'</summary><p>'+model+'</p></details></div>';
}
function bloqueOral(n) {
 const guide='<p>Empezá por decir dónde pasa y quién participa. Contá qué lo causó y qué cambió. Elegí un ejemplo que ayude a entender por qué importa el lugar.</p>';
 return '<section class="paper" id="hablar"><h2>'+(n===9?'Simulacro oral':'Práctica oral del nivel')+'</h2>'+guide+'<details><summary>Rúbrica de autoevaluación</summary><p>Para cada criterio marcá «logrado», «parcial» o «a repasar». Volvé a contar la respuesta después de ajustar un punto.</p><ul>'+rúbrica.map(([name,criterion])=>'<li><b>'+name+'.</b> '+criterion+'</li>').join('')+'</ul></details>'+
 ['Pregunta inicial','Explicación','Causas y consecuencias','Integración'].map((label,i)=>'<h3>'+label+'</h3>'+oralCard(practicasOrales[n][i],false)).join('')+
 '<h3>Una situación nueva</h3>'+preguntaLibre(...eventos[n])+
 (n===9?'<h3>Banco completo de preguntas</h3>'+oral.map((_,i)=>i).filter(i=>!practicasOrales[n].slice(0,4).includes(i)).map(i=>oralCard(i,false)).join(''):'')+'</section>';
}
function bloquesClase(n) {
 const items=curso[n];
 return items.map((l,i)=>{
 const terms=glosario[l.title] || [];
 const qitems=(n<9?referenciasEj[n]:examRefs.map(([u,j])=>u===9?j:-1)).flatMap((j,k)=>j===i?[k]:[]);
 const overview = qitems.length ? qitems.map(k=>'<button data-jump="q-'+k+'">Ejercicio '+(k+1)+'</button>').join(' ') : '';
 return '<details class="lesson" id="clase-'+i+'" '+(i===0?'open':'')+'><summary><span class="lesson-num">'+pad(i+1)+'</span>'+l.title+'</summary><div class="lesson-body">'+
 narrarClase(n,i,l,terms)+
 relatoVisual(n,i)+pausaRelato(n,i)+
 (overview?'<section class="study-check"><h3>Comprobá que entendiste</h3>'+overview+'</section>':'')+
 '<section class="study-oral"><h3>Explicalo con tus palabras</h3>'+preguntaLibre(...l.oral)+'</section>'+continuarRelato(n,i,items)+'</div></details>';
 }).join('');
}
const conexiones = [
 'Los componentes de un celular enlazan esta introducción con la minería y el comercio que estudiarás después.',
 'El volumen de producción permite comparar economías BRICS, mientras otros indicadores ayudan a entender cómo vive su población.',
 'Las alianzas y los conflictos indirectos ayudan a entender cómo se dividió Corea.',
 'La intervención extranjera en Corea muestra cómo la bipolaridad se tradujo en fronteras y alianzas territoriales.',
 'La cooperación y las inversiones conectan las capacidades de cada país con el comercio y el PBI.',
 'Seguir un lote de mineral permite identificar dependencias y decisiones en la misma cadena internacional.',
 'La diversificación y el transporte permiten comparar la trayectoria de Dubái con la de Singapur.',
 'Dubái y Singapur coordinan movimientos de carga. El canal de Panamá cumple otra función en la red al conectar cuencas.',
 'Una interrupción en Panamá ejemplifica la interdependencia: las demoras locales se propagan a productores y consumidores.',
 'Para explicar un caso, vinculá el territorio y sus actores con las decisiones que explican una consecuencia concreta.'
];
function solucion(q,seed) {
 if(q.type==='choice') return q.data[0];
 if(q.type==='map') return 'Marcador '+'ABCD'[mapOptions(q,seed).indexOf(q.data.split(',')[0])];
 if(q.type==='number') return q.data;
 return seq(q).map(text=>text.replace(':',' → ')).join(' · ');
}
function explicarOpciones(q,seed) {
 if(q.type==='open') return '';
 if(q.type==='choice') {
  return '<details><summary>Revisar las alternativas</summary><p><b>Respuesta:</b> '+esc(q.data[0])+'. '+esc(q.hint)+'</p><ul>'+
   (contraste[q.prompt]||[]).map((reason,i)=>'<li><b>'+esc(opcionVisible(q.data[i+1]))+'</b>. '+esc(reason)+'</li>').join('')+'</ul></details>';
 }
 if(q.type==='map') return '<p><b>Respuesta:</b> '+solucion(q,seed)+' · '+points[q.data.split(',')[0]][2]+'.</p>';
 return '<p><b>Resolución:</b> '+esc(solucion(q,0))+'</p>';
}
const contraste = {
 'La producción física queda igual y duplican todos los precios. ¿Qué PBI aumenta?':['El real mantiene los precios de referencia y las cantidades no cambiaron.','Ambos podrían aumentar si también creciera la producción física.'],
 'A produce 1.000 con 10 personas y B produce 800 con 4. ¿Quién tiene mayor PBI per cápita?':['A tiene mayor PBI total, pero 1.000 ÷ 10 = 100 por persona.','Los promedios serían iguales si la producción y la población mantuvieran la misma proporción. Aquí 100 y 200 difieren.'],
 '¿Qué cambio en las relaciones de Cuba ayudó a que se llegara a la crisis de 1962?':['El retiro fue parte del arreglo, posterior al descubrimiento de los misiles.','La línea directa se estableció en 1963 tras la crisis.'],
 '¿Qué dejó pendiente el acuerdo de 1953?':['El armisticio sí suspendió el combate.','El acuerdo sí delimitó la zona desmilitarizada.'],
 'El barco ya entró a la esclusa. Cuando se abre la válvula, ¿por qué entra agua a la cámara?':['El agua entra por la diferencia de altura. El llenado normal no necesita bombas.','El agua de las cámaras se regula con compuertas y válvulas. La abastece la cuenca interior.'],
 'Por la sequía, un barco muy cargado se hunde más de lo que permite el canal. ¿Qué puede hacer la naviera?':['Repartir el peso puede cambiar cómo se inclina el barco, pero no resuelve por sí solo un exceso de carga.','Un horario con menos tráfico puede reducir la espera. El barco igual debe respetar el límite de calado.']
};

const opcionesEnClase = {
 'Solo los nombres de capitales':'La ubicación de ciudades y capitales en un mapa, sin estudiar cómo se formaron',
 'Solo los fenómenos atmosféricos':'El clima de cada zona, sin considerar cómo vive la gente allí',
 'Producción exclusivamente local':'El aumento de la producción en cada país por separado',
 'Igualdad económica entre los países':'La reducción de las diferencias de ingresos entre países',
 'Producción en varios países elimina cualquier dependencia':'Puede elegir entre más proveedores, así que el corte de una ruta afecta principalmente a quienes venden las piezas',
 'El comercio beneficia por igual a todos':'Consigue precios más bajos y un corte del transporte afecta más al precio que a la cantidad que puede fabricar',
 'Motores que levantan el barco':'Bombas que empujan el agua hacia la cámara',
 'La marea del Pacífico en todas las cámaras':'Cambios en el nivel del mar producidos por las mareas',
 'Agregar carga para disminuir la profundidad del barco':'Repartir el peso dentro del barco sin cambiar la carga total',
 'Ignorar el nivel de los embalses':'Mantener toda la carga y reservar un horario con menos tráfico',
 'Eleva automáticamente la capacidad del canal':'Obliga a reorganizar horarios, pero permite transportar la misma cantidad por viaje sin demoras',
 'Aumenta la profundidad de las cámaras':'Afecta los viajes por el lago, pero las esclusas pueden funcionar igual con el agua del mar',
 'Su independencia en 1965':'La formación de los dos Estados fue una decisión coreana sin intervención de las potencias',
 'El comercio de perlas':'La rivalidad influyó en la guerra, pero la división de 1945 fue obra de Japón',
 'Aceptar solo una declaración verbal':'Pedirle al vendedor que confirme el origen y aceptar su palabra',
 'Cambiar el nombre del material en la factura':'Revisar solo la factura de la última venta, aunque no identifique la mina'
};
const opcionVisible = value => opcionesEnClase[value] || value;
