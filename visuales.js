const points = {
 BRA:[-52,-12,'Brasil'],RUS:[69,60,'Rusia'],IND:[79,22,'India'],CHN:[104,35,'China'],ZAF:[25,-29,'Sudáfrica'],
 COD:[24,-3,'R. D. del Congo'],ARE:[54.3,24.2,'EAU'],DXB:[55.27,25.2,'Dubái'],SGP:[103.82,1.35,'Singapur'],
 PAN:[-79.75,9.12,'Panamá'],ARG:[-64,-35,'Argentina'],USA:[-99,39,'EE. UU.'],CUB:[-79.5,22,'Cuba'],
 PRK:[127,40,'Corea del Norte'],KOR:[127.7,36.5,'Corea del Sur'],JPN:[139,37,'Japón'],
 OMN:[57.7,21.5,'Omán'],SAU:[45,23,'Arabia Saudita'],IRN:[54,32,'Irán'],HOR:[56.4,26.6,'Ormuz'],
 AUH:[54.37,24.45,'Abu Dabi'],SHJ:[55.41,25.36,'Sharjah'],MYS:[102,3.4,'Malasia'],IDN:[101,-.5,'Indonesia'],
 MLA:[101.4,2.65,'Estrecho de Malaca'],COLON:[-79.91,9.36,'Colón'],GAT:[-79.9,9.17,'Gatún'],CITY:[-79.52,8.98,'Ciudad de Panamá']
};
const historicos = ['BRA','RUS','IND','CHN','ZAF'];
const ampliados = ['EGY','ETH','ARE','IRN','IDN'];
const socios = ['BLR','BOL','CUB','KAZ','MYS','NGA','THA','UGA','UZB','VNM'];
const encuadres = {
 mundo:[[-180,-61,180,85],['BRA','RUS','IND','CHN','ZAF','COD','DXB','PAN','SGP','ARG'],[
 [-109,53,'AMÉRICA DEL NORTE'],[-54,-24,'AMÉRICA DEL SUR'],[17,56,'EUROPA'],[18,9,'ÁFRICA'],[101,53,'ASIA'],[137,-27,'OCEANÍA'],[-139,6,'PACÍFICO'],[-35,32,'ATLÁNTICO'],[77,-27,'ÍNDICO']]],
 brics:[[-180,-60,180,84],historicos,[]],
 fria:[[-180,-4,180,84],['USA','CUB','RUS'],[]],
 corea:[[120,30,144,45],['PRK','KOR','CHN','JPN'],[[124,35,'Mar Amarillo'],[133,39,'Mar del Japón']]],
 congo:[[-21,-36,55,38],['COD'],[[5,25,'ÁFRICA'],[-10,-10,'ATLÁNTICO']]],
 golfo:[[36,13,61,32],['SAU','ARE','OMN','IRN','HOR'],[[50,27,'Golfo Pérsico'],[58,16,'Mar Arábigo']]],
 local:[[53.9,23.9,56.05,25.8],['DXB','AUH','SHJ'],[[54.5,25.55,'Golfo Pérsico']]],
 singapur:[[96,-4,111,8],['MLA','SGP','MYS','IDN'],[[108,5,'Mar de China Meridional']]],
 panama:[[-80.45,8.6,-79.15,9.65],['COLON','GAT','CITY'],[[-79.48,9.51,'Mar Caribe'],[-79.8,8.72,'Pacífico']]]
};
const antiguaURSS = ['RUS','UKR','BLR','MDA','EST','LVA','LTU','GEO','ARM','AZE','KAZ','TKM','KGZ','UZB','TJK'];
function mapa(key, options = []) {
 const [bounds, pins, labels] = encuadres[key];
 const [west,south,east,north] = bounds;
 const w = 840, h = Math.round(w * (north-south)/(east-west) / Math.cos((north+south)*Math.PI/360));
 const xy = ([x,y]) => [((x-west)*w/(east-west)).toFixed(1),((north-y)*h/(north-south)).toFixed(1)];
 const paths = geografia.map(([id,polys]) => {
  const color = key==='brics' ? historicos.includes(id)?'historico':ampliados.includes(id)?'nuevo':socios.includes(id)?'socio':id==='SAU'?'discutido':'' : colorTerritorio(key,id);
  return polys.filter(poly=>poly.some(([x,y])=>x>west-12&&x<east+12&&y>south-12&&y<north+12) ||
    (Math.min(...poly.map(p=>p[0]))<west && Math.max(...poly.map(p=>p[0]))>east && Math.min(...poly.map(p=>p[1]))<north && Math.max(...poly.map(p=>p[1]))>south))
   .map(poly=>'<path class="tierra '+color+'" d="M'+poly.map(p=>xy(p).join(',')).join('L')+'Z"/>').join('');
 }).join('');
 const chosen = options.length ? options : pins;
 const marks = chosen.filter(id=>points[id][0]>=west&&points[id][0]<=east&&points[id][1]>=south&&points[id][1]<=north)
  .map((id)=> {
   const [x,y] = xy(points[id]); const name = options.length ? 'ABCD'[options.indexOf(id)] : key==='fria'&&id==='RUS'?'Antigua URSS':points[id][2];
   const offset = id==='DXB' && key==='local' ? 21 : id==='BRA'&&key==='mundo' ? -14:4;
   const end = ['JPN','IRN','HOR','SHJ','CITY','SGP','DXB'].includes(id);
   return '<circle cx="'+x+'" cy="'+y+'" r="6"/><text class="pin" x="'+(+x+(end?-10:10))+'" y="'+(+y+offset)+'" text-anchor="'+(end?'end':'start')+'">'+name+'</text>';
  }).join('');
 const route = key==='panama' ? '<polyline class="canal" points="'+[[-79.93,9.38],[-79.91,9.27],[-79.91,9.17],[-79.79,9.11],[-79.68,9.11],[-79.60,9.07],[-79.59,9.01],[-79.55,8.95]].map(p=>xy(p).join(',')).join(' ')+'"/>' : '';
 const parallel = key==='corea' ? '<line x1="0" x2="'+w+'" y1="'+xy([west,38])[1]+'" y2="'+xy([west,38])[1]+'" stroke="#6434a4" stroke-width="2" stroke-dasharray="8 6"/><text class="pin" x="12" y="'+(+xy([west,38])[1]-9)+'">38° N</text>' : '';
 const legend = options.length ? 'Marcadores de la actividad.' : key==='brics' ? '<b class="l-h">● Históricos</b> · <b class="l-n">● Nuevos miembros</b> · <b class="l-s">● Socios</b> · <b class="l-d">● Arabia Saudita: estatus discrepante</b>. Corte documental: junio de 2026.' : key==='fria' ? leyendasTematicas.fria : key==='panama' ? '<b class="l-h">● Panamá</b> · <b class="l-s">━ Canal</b>. Trazo generalizado del canal. La escala de Natural Earth simplifica la costa.' : leyendasTematicas[key] || 'Ubicaciones aproximadas a esta escala.';
 return '<figure class="map">'+(!options.length?'<p>'+lecturaMapa[key][0]+'</p>':'')+'<svg role="img" aria-label="Mapa de '+key+(options.length?' con cuatro marcadores':'')+'" viewBox="0 0 '+w+' '+h+'">'+paths+route+parallel+labels.map(([a,b,t])=>{const [x,y]=xy([a,b]);return '<text class="region" x="'+x+'" y="'+y+'" text-anchor="middle">'+t+'</text>';}).join('')+marks+'</svg><figcaption>'+legend+' Base Natural Earth (dominio público).'+(!options.length?interpretacionMapa(key):'')+'</figcaption></figure>';
}
const tiempo = {
 tlCuba:[['1945','Termina la Segunda Guerra Mundial'],['1957','Sputnik y carrera espacial'],['1959','Revolución cubana'],['1961','Invasión fallida de Bahía de Cochinos'],['Oct. 1962','Misiles, cuarentena y negociación'],['1963','Se establece la línea directa Washington–Moscú'],['1991','Disolución de la Unión Soviética']],
 tlDubai:[['1833','Comienza el gobierno Al Maktoum'],['Siglo XIX','Comercio marítimo y perlas'],['1958','Asume Sheikh Rashid'],['1966','Descubrimiento de petróleo'],['1969','Primeras exportaciones petroleras'],['1971','Formación de EAU'],['1979','Apertura del Dubai World Trade Centre'],['1985','Creación de Emirates'],['2010','Inauguración del Burj Khalifa'],['2021','Comienza Expo 2020']],
 tlPanama:[['1513','Balboa llega al Pacífico tras cruzar el istmo'],['Siglo XIX','Crece el interés por acortar rutas comerciales'],['1879','Francia impulsa el proyecto de Lesseps'],['1881','Comienzan las principales obras francesas'],['1889','Fracasa la compañía por problemas financieros y de obra'],['1903','Panamá se separa de Colombia y firma un tratado con EE. UU.'],['1904','EE. UU. retoma el proyecto'],['15/08/1914','Inauguración del canal'],['1977','Tratados Torrijos–Carter'],['31/12/1999','Panamá asume el control pleno'],['2016','Se inaugura la ampliación']]
};
const comparaciones = {
 compCorea:[['Dimensión','Corea del Norte','Corea del Sur'],['Capital','Pionyang','Seúl'],['Política','Régimen autoritario de partido dominante','Democracia multipartidaria'],['Economía','Fuerte dirección estatal y mercados parciales','Mercado con industria exportadora'],['Vínculos','China es un socio importante','Alianza con EE. UU. y comercio con China'],['Condiciones de vida','Restricciones de acceso a alimentos y energía. Datos limitados.','Acceso más amplio a infraestructura y servicios, con desigualdades.']],
 compDubai:[['Dimensión','Dubái','Singapur'],['Ubicación','Golfo Pérsico, vía Ormuz','Sudeste asiático, cerca de Malaca'],['Condición política','Ciudad y emirato de EAU','Ciudad-Estado independiente'],['Recursos','Ingresos petroleros iniciales','Escasos recursos propios'],['Trayectoria','Comercio marítimo, petróleo, diversificación','Puerto histórico, industrialización exportadora, finanzas'],['Transportes','Jebel Ali y aeropuerto internacional de Dubái','Puerto de Singapur y aeropuerto de Changi'],['Economía y flujos','Logística, turismo, construcción, comercio y servicios','Transbordo, industria, finanzas, tecnología y turismo']],
 problemas:[['Problema','Consecuencia','Respuesta'],['Relieve montañoso','Excavación costosa','Lago y esclusas'],['Lluvias y derrumbes en Culebra','Bloqueo de frentes de obra','Manejo de taludes y retiro de material'],['Malaria y fiebre amarilla','Enfermedades y muertes','Control de mosquitos y saneamiento'],['Falta de fondos franceses','Quiebra en 1889','Reanudación estadounidense en 1904'],['Miles de trabajadores','Necesidad de alojamiento y coordinación','Campamentos y redes ferroviarias, con desigualdad laboral'],['Represamiento y excavación','Inundaciones y cambios ecológicos','Creación de un lago navegable con costos ambientales']]
};
const pasos = [
 ['Entrada','El buque entra desde el tramo bajo. La cámara y ese tramo tienen el mismo nivel.',106,120,true,false],
 ['Cierre','Se cierra la compuerta de entrada. El barco queda flotando dentro de la cámara.',188,120,false,false],
 ['Ingreso de agua','Se abren válvulas. El agua llega por conductos desde el nivel superior por gravedad.',188,106,false,false],
 ['Ascenso','El agua sube y el barco flota con ella. La salida sigue cerrada durante el llenado.',188,79,false,false],
 ['Igualación','Con los niveles igualados se abre la compuerta de salida.',188,63,false,true],
 ['Paso al tramo alto','El barco avanza hacia el tramo superior. En el canal real hay varias cámaras hasta Gatún.',365,63,false,true],
 ['Descenso','Del otro lado del lago se repite el proceso a la inversa. Las cámaras descargan agua por gravedad y el barco desciende al océano de destino.',640,120,false,true]
];
function diagramaEsclusa() {
 return '<div class="lock" data-lock="0"><svg role="img" aria-label="Corte esquemático de una esclusa de ascenso y otra de descenso" viewBox="0 0 760 182"><rect class="agua" x="0" y="120" width="125" height="44"/><rect class="agua" data-water x="125" y="120" width="171" height="44"/><rect class="agua" x="296" y="63" width="201" height="101"/><rect class="agua" data-down x="497" y="63" width="120" height="101"/><rect class="agua" x="617" y="120" width="143" height="44"/><path class="suelo" d="M0 164H125V150H296V110H497V150H617V164H760V182H0Z"/><path class="gate" data-in d="M125 89V150"/><path class="gate" data-out d="M296 40V111"/><path class="gate" data-down-in d="M497 40V110"/><path class="gate" data-down-out d="M617 89V150"/><g class="buque" data-ship><path d="M-24 -8H26L19 4H-16Z"/><path d="M-11 -14H9V-8H-11Z"/></g><text x="18" y="38">Océano</text><text x="146" y="38">Ascenso</text><text x="339" y="38">Nivel superior</text><text x="509" y="38">Descenso</text><text x="649" y="38">Océano</text></svg><p data-steptext aria-live="polite"></p><button data-step="-1">Anterior</button> <button data-step="1">Siguiente paso</button> <button data-step="0">Repetir</button></div>';
}
function visual(key) {
 if (!key) return '';
 if (key==='cuba') return mapa('fria')+visual('tlCuba');
 if (key==='dubai') return '<details open><summary>Mundo</summary>'+mapa('mundo')+'</details><details><summary>Península arábiga y golfo</summary>'+mapa('golfo')+'</details><details><summary>Dubái dentro de EAU</summary>'+mapa('local')+'</details>';
 if (tiempo[key]) return '<ol class="timeline">'+tiempo[key].map(([a,b],i)=>'<li><details '+(i===0?'open':'')+'><summary><b>'+a+'</b><span>'+b+'</span></summary><p>'+impactoFechas[key][i]+'</p></details></li>').join('')+'</ol>';
 if (comparaciones[key]) {
  const [head,...rows] = comparaciones[key];
  return '<div class="comparison">'+rows.map(([topic,...values],i)=>'<details '+(i===0?'open':'')+'><summary>'+topic+'</summary><dl>'+values.map((v,j)=>'<div><dt>'+head[j+1]+'</dt><dd>'+v+'</dd></div>').join('')+'</dl></details>').join('')+'</div>';
 }
 if (key==='esclusas') return diagramaEsclusa();
 if (key==='red') return '<div class="network">'+['Recursos naturales','Industria','Tecnología','Transporte','Comercio internacional','Poder económico'].map(v=>'<span>'+v+'</span>').join('')+'</div>';
 return mapa(key);
}
function colorTerritorio(key,id) {
 if(key==='fria') return antiguaURSS.includes(id)?'historico':id==='USA'?'distinto':id==='CUB'?'discutido':'';
 if(key==='corea') return id==='PRK'?'distinto':id==='KOR'?'historico':'';
 if(key==='singapur') return id==='MYS'?'historico':id==='IDN'?'nuevo':'';
 if((key==='congo'&&id==='COD')||(['golfo','local'].includes(key)&&id==='ARE')||(key==='panama'&&id==='PAN')) return 'historico';
 return '';
}
const leyendasTematicas = {
 fria:'<b class="l-h">● Antigua URSS</b> · <b class="l-c">● Estados Unidos</b> · <b class="l-d">● Cuba</b>. La extensión soviética se aproxima agrupando las exrepúblicas. Los contornos son actuales y los colores señalan territorios, no alianzas.',
 corea:'<b class="l-c">● Corea del Norte</b> · <b class="l-h">● Corea del Sur</b>. Contornos actuales. La línea discontinua marca el paralelo 38, referencia de ocupación en 1945.',
 congo:'<b class="l-h">● República Democrática del Congo</b>. El color identifica al país, no la extensión de la minería.',
 golfo:'<b class="l-h">● Emiratos Árabes Unidos</b>. Los puntos señalan países o pasos de referencia.',
 local:'<b class="l-h">● Emiratos Árabes Unidos</b>. Los puntos señalan ciudades, no límites de emiratos.',
 singapur:'<b class="l-h">● Malasia</b> · <b class="l-n">● Indonesia</b>. El punto de Singapur señala la ciudad-Estado; su superficie es muy pequeña a esta escala.'
};
const impactoFechas = {
 tlCuba:['En Europa, la derrota alemana abrió la discusión sobre quién controlaría los territorios ocupados.','Desde la URSS, el satélite mostró capacidad científica y proyectó prestigio internacional.','En Cuba, la caída de Batista abrió reformas y cambió las relaciones con Estados Unidos.','En la costa cubana, el fracaso del desembarco reforzó el temor a otra invasión.','La cercanía de Cuba a Florida elevó la tensión. El acuerdo abrió el retiro de los misiles.','El enlace buscó reducir demoras y malentendidos entre las dos capitales.','Las repúblicas soviéticas pasaron a organizarse como Estados independientes.'],
 tlDubai:['El nuevo gobierno consolidó un asentamiento en torno al Creek.','El Creek conectaba el trabajo costero con compradores del exterior.','El gobierno impulsó obras para ampliar la capacidad comercial del emirato.','El hallazgo abrió una fuente de ingresos que luego ayudó a financiar obras.','Dubái empezó a vender petróleo en el exterior y sumó recursos para invertir.','La federación dio un marco político común a los emiratos.','El centro amplió la capacidad para recibir ferias y negocios internacionales.','La aerolínea fortaleció las conexiones aéreas de pasajeros y carga.','La torre muestra el peso de la construcción y la promoción urbana.','Tras el aplazamiento por la pandemia, la exposición reunió visitantes y empresas hasta 2022.'],
 tlPanama:['El cruce del istmo mostró a los europeos la cercanía entre ambas costas.','El aumento del comercio volvió más valioso un paso entre cuencas.','La idea francesa buscaba un paso que evitara el rodeo por Sudamérica.','El corte del terreno puso a prueba el diseño a nivel del mar.','Las dificultades financieras, técnicas y sanitarias impidieron completar el proyecto.','El tratado redefinió quién tenía derechos sobre la zona canalera.','El proyecto incorporó el lago y las esclusas para salvar el desnivel.','El tránsito inaugural abrió una ruta regular entre el Caribe y el Pacífico.','Los tratados fijaron cómo y cuándo se transferiría el control.','Panamá quedó a cargo de la operación y de los ingresos del canal.','Agua Clara y Cocolí abrieron el paso a buques más grandes.']
};
