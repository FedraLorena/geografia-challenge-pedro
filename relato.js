const puentes = [
 'El viaje del celular depende de conexiones a distancia. En el próximo nivel vamos a ver cómo crecieron esas conexiones y cómo medir lo que se produce.',
 'Ya vimos que producir mucho da capacidades, aunque diga poco sobre cómo viven las familias. En 1945 se abre otra pregunta: ¿cómo se reparte el poder cuando termina una guerra mundial?',
 'Volvamos unos años atrás. Antes de la crisis de Cuba, la rivalidad ya se había convertido en una guerra en Corea. Allí cambió la frontera y quedaron dos Estados.',
 'Las alianzas de Corea nacieron en el mundo bipolar. Tras la disolución soviética cambió el escenario. Los BRICS surgieron después como foro de cooperación económica y política, con gobiernos que mantienen intereses distintos.',
 'Acercá el mapa otra vez. En lugar de comparar países completos, sigamos un material que va de un territorio productor a fábricas y consumidores en distintos lugares.',
 'La mina y la fábrica pueden estar a miles de kilómetros. En Dubái vamos a ver qué trabajo hace una ciudad que recibe carga y la distribuye a otros mercados.',
 'Dubái usó el comercio y los ingresos del petróleo para ampliar sus conexiones. Cerca de Malaca, Singapur construyó una posición comercial fuerte con otra historia y otras decisiones.',
 'En Singapur, un contenedor puede cambiar de barco para seguir su viaje. En Panamá, el propio buque atraviesa una franja de tierra para pasar de una cuenca a otra.',
 'Una sequía en Panamá puede afectar una fábrica lejos de allí. Esa conexión reúne dos preguntas que ya trabajaste: quién toma las decisiones y cómo se mueve lo que usamos.',
 'Elegí un caso del examen y explicá la relación en voz alta. Después compará tu argumento con los casos y mapas del recorrido.'
];

const pausas = {
 '1-8':['Dos países tienen el mismo PBI. En uno vive el doble de gente. ¿Cuál tiene mayor PBI por persona?','El menos poblado. Si dividís el mismo total por el doble de personas, el promedio baja a la mitad.'],
 '2-7':['¿Por qué la misma ubicación preocupaba a Washington y a La Habana?','Washington tenía las instalaciones soviéticas cerca. La Habana estaba cerca de un país desde el cual se había apoyado un intento de invasión.'],
 '3-2':['¿Por qué hace falta mirar dos momentos distintos al explicar la división?','En 1945 se separaron zonas de ocupación. En 1953 se acordó otra línea para detener la guerra.'],
 '8-5':['Si el barco está abajo y el agua del otro lado está más alta, ¿qué hay que hacer antes de abrir la compuerta de salida?','Llenar la cámara hasta igualar los niveles. El barco sube al flotar sobre el agua que entra.']
};
function relatoVisual(n,i) {
 if(n===5&&i===2) {
  return '<div class="network" aria-label="Del mineral al teléfono">'+
   ['Mina','Concentración','Refinación','Capacitor','Ensamblaje','Venta'].map(stage=>'<span>'+stage+'</span>').join('')+'</div>';
 }
 if(n===1&&i===8) {
  return '<table><caption>Dos países imaginarios</caption><thead><tr><th scope="col">País</th><th scope="col">PBI</th><th scope="col">Habitantes</th><th scope="col">PBI por persona</th></tr></thead><tbody>'+
   '<tr><th scope="row">A</th><td>900 millones</td><td>3 millones</td><td>900 ÷ 3 = 300</td></tr>'+
   '<tr><th scope="row">B</th><td>800 millones</td><td>2 millones</td><td>800 ÷ 2 = 400</td></tr></tbody></table>';
 }
 return '';
}
function pausaRelato(n,i) {
 const pause=pausas[n+'-'+i];
 if(!pause) return '';
 const [question,answer]=pause;
 return '<div class="study-pause"><p><strong>'+esc(question)+'</strong></p><details><summary>Ver explicación</summary><p>'+esc(answer)+'</p></details></div>';
}
function continuarRelato(n,i,items) {
 const next=items[i+1];
 if(next) return '<p><button type="button" data-jump="clase-'+(i+1)+'">Seguir con '+esc(next.title)+' →</button></p>';
 return '<aside class="story-example"><h3>Lo esencial para recordar</h3><p>'+esc(clavesEstudio[n])+'</p></aside><p class="story-bridge">'+esc(puentes[n])+'</p><p><button type="button" data-jump="hablar">Contalo con tus palabras</button> <button type="button" data-jump="evaluacion">Ir a '+(n===9?'la evaluación':'los ejercicios')+'</button></p>';
}

function narrarClase(n,i,lesson,terms) {
 const [first, ...rest]=edicionPorNivel[n][i].split('|');
 const glossary=terms.map(([term,definition])=>'<p class="story-term"><strong>'+term+'.</strong> '+definition+'</p>').join('');
 const illustration=visual(lesson.key);
 const split=first.indexOf('. ');
 const opening='<p class="story-opening">'+esc(first.slice(0,split+1))+'</p>';
 const prose='<p class="story-copy">'+esc(first.slice(split+2))+'</p>';
 const continuation=rest.map(p=>'<p class="story-copy">'+esc(p)+'</p>').join('');
 if(n===2&&i===0) return opening+prose+postguerra()+continuation;
 if(lesson.key==='esclusas') return opening+illustration+prose+glossary;
 return opening+prose+glossary+illustration+continuation;
}

function postguerra() {
 const steps = [
  ['1945','Termina la guerra en Europa','Los ejércitos aliados ocupan Alemania.'],
  ['1945','Alemania y Berlín quedan repartidas','Berlín se divide en sectores dentro de la zona soviética.'],
  ['1949','Se forman dos Estados alemanes','La división territorial pasa a tener una forma política duradera.']
 ];
 return '<figure class="postwar"><figcaption>De la ocupación a la división de Alemania</figcaption><ol>'+
 steps.map(([year,event,impact])=>'<li><b>'+year+'</b><strong>'+event+'</strong><span>'+impact+'</span></li>').join('')+'</ol></figure>';
}
