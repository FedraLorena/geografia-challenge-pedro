const practicaRaw = [
`¿Qué estudia la Geografía?|Relación entre sociedades, territorio y ambiente|Solo los nombres de capitales|Solo los fenómenos atmosféricos|Estudia cómo se organiza el espacio y quiénes lo transforman.
¿Qué representa mejor la globalización?|Conexiones más intensas entre lugares distantes|Producción exclusivamente local|Igualdad económica entre los países|Las conexiones crecen aunque persistan diferencias.
¿Qué es el mineral antes de refinarlo?|Materia prima|Producto electrónico terminado|Servicio logístico|El mineral es el insumo que después se transforma.
¿Todo celular enviado a Argentina pasa por Panamá?|No|Sí|La ruta depende del origen, el destino y las decisiones de transporte.
¿Por qué una economía puede tener influencia mundial?|Combina capacidades como tecnología, mercados y financiamiento|La extensión territorial la garantiza|Solo cuenta el número de habitantes|El poder depende de varias capacidades y de cómo se combinan.`,
`Una empresa fabrica piezas en un país y ensambla en otro. ¿Qué dimensión muestra principalmente?|Económica|Cultural|Política|Organiza inversiones y producción a través de fronteras.
Una fábrica compra piezas en varios países. ¿Qué ventaja obtiene y qué problema puede tener si se corta una ruta?|Acceso a proveedores y exposición a interrupciones externas|Producción en varios países elimina cualquier dependencia|El comercio beneficia por igual a todos|La interdependencia puede ampliar opciones y transmitir problemas.
PBI de 900 millones y 3 millones de habitantes. ¿Cuánto da por persona?|=300|900 ÷ 3 = 300 unidades por persona.
La producción física queda igual y duplican todos los precios. ¿Qué PBI aumenta?|Nominal|Real|Ambos necesariamente|El nominal usa precios corrientes. El real descuenta su cambio.
A produce 1.000 con 10 personas y B produce 800 con 4. ¿Quién tiene mayor PBI per cápita?|B|A|Son iguales|A tiene 100 por persona y B tiene 200.
Si el PBI por persona es alto, ¿podés asegurar que los ingresos están repartidos de forma pareja?|No|Sí|El promedio puede esconder diferencias grandes entre hogares.`,
`¿Qué significa bipolaridad?|Dos grandes polos rivales|Dos países sin aliados|El mismo sistema en ambos polos|EE. UU. y la URSS lideraron redes de alianzas, con países también fuera de ellas.
¿Qué muestra el lanzamiento del Sputnik?|Competencia científica y política|Un acuerdo para unificar economías|Un episodio de la crisis cubana|La carrera espacial servía para demostrar capacidades tecnológicas.
Ordená estos episodios.|>Revolución cubana de 1959/Cuarentena naval de octubre de 1962/Acuerdo para retirar misiles|La revolución fue antecedente, la cuarentena fue una decisión durante la crisis y el retiro fue parte del arreglo.
¿Qué cambio en las relaciones de Cuba ayudó a que se llegara a la crisis de 1962?|Acercamiento cubano-soviético tras la revolución|Retiro de misiles soviéticos de Cuba|Creación posterior de la línea directa|El acercamiento precedió al despliegue. Los otros hechos fueron parte de la resolución o sus consecuencias.
¿Qué acordaron Estados Unidos y la URSS sobre los misiles en Cuba y Turquía?|Retiro soviético de Cuba y compromiso estadounidense respecto de Turquía|Permanencia de los misiles soviéticos y ocupación de Cuba|Retiro estadounidense de Europa y ruptura cubano-soviética|El retiro de misiles de Turquía se acordó de manera reservada.
¿Qué volvió tan peligrosa la crisis?|Proximidad de armas nucleares y riesgo de escalada|Una disputa comercial sin dimensión militar|Solo la diferencia de sistemas económicos|Decisiones militares y errores de cálculo podían provocar una guerra nuclear.`,
`¿Dónde queda la península coreana?|Asia oriental|Asia meridional|Asia occidental|Está entre China y Japón, con una corta frontera rusa en el norte.
¿Para qué se usó el paralelo 38 en 1945?|Para separar zonas de ocupación|Para trazar un tratado de paz|Para establecer un mercado común|La URSS administró el norte y Estados Unidos el sur.
Ordená el proceso.|>Fin de la ocupación japonesa/Formación de dos gobiernos/Comienzo de la guerra/Armisticio|1945 → 1948 → 1950 → 1953.
¿Qué estableció el armisticio?|Cese de combates y zona desmilitarizada|Reunificación inmediata|Tratado definitivo de paz|El armisticio creó condiciones para frenar la guerra y dejó la división.
¿Qué diferencia hay entre lo que produce y vende Corea del Sur y cómo se organiza la producción en Corea del Norte?|El Sur desarrolló industria exportadora y el Norte conserva fuerte dirección estatal|Ambos dependen por igual de exportar semiconductores|El comercio con China explica por sí solo ambos sistemas|Historia, políticas y relaciones internacionales configuraron trayectorias diferentes.
¿Qué vínculo internacional es correcto?|China intervino del lado del Norte y EE. UU. apoyó al Sur|EE. UU. intervino del lado del Norte|China dirigió las fuerzas de la ONU en Corea|La guerra local quedó conectada con la rivalidad internacional.`,
`Elegí el país en el mapa: Brasil.|@BRA,IND,ZAF,RUS|Brasil ocupa gran parte de Sudamérica y limita con Argentina.
Elegí el país en el mapa: Rusia.|@RUS,CHN,IND,BRA|Rusia se extiende a través del norte de Eurasia.
Elegí el país en el mapa: India.|@IND,ZAF,CHN,BRA|India se encuentra en Asia meridional.
Elegí el país en el mapa: China.|@CHN,IND,RUS,ZAF|China se ubica en Asia oriental, al norte y al este de India.
Elegí el país en el mapa: Sudáfrica.|@ZAF,BRA,IND,CHN|Sudáfrica ocupa el extremo sur de África.
Completá el cuadro emparejando países y actividades.|~Brasil:soja y mineral de hierro/Rusia:petróleo y gas/India:informática y genéricos/China:manufacturas y electrónica/Sudáfrica:platino y carbón|Son especializaciones destacadas. Cada país combina varias actividades.
¿Qué hace la Unión Europea en común que los BRICS no hacen del mismo modo?|La UE tiene un mercado único e instituciones comunes con poderes propios|BRICS impone una moneda común a sus miembros|La UE funciona solo como foro de diálogo|BRICS coordina gobiernos y tiene un banco de desarrollo, con menor integración que la UE.
Argentina fue invitada y entró al foro. ¿Es correcto?|No|Sí|Fue invitada en 2023 y decidió no ingresar.
¿Cuál muestra dos vínculos comerciales de Argentina?|Autopartes con Brasil y productos agropecuarios con China|Autopartes y soja se intercambian exclusivamente dentro de BRICS|China y Brasil integran juntos el Mercosur|Brasil es un vecino y socio regional. China es un mercado importante y proveedor de manufacturas.
¿Qué indica un PBI grande en un país de BRICS?|Un gran volumen de producción|Ingresos altos para todos los hogares|Igualdad social garantizada|Para evaluar desigualdad hacen falta datos sobre distribución y condiciones de vida.`,
`¿Qué componente puede incorporar tantalio?|Capacitor|Pantalla de vidrio|Carcasa plástica|El tantalio permite construir capacitores pequeños.
Coltán y cobalto son nombres del mismo material.|Falso|Verdadero|El coltán contiene minerales con tantalio y niobio. El cobalto es otro elemento.
Ordená la cadena.|>Extracción/Concentración del mineral/Refinación/Fabricación de capacitores/Ensamblaje del equipo|Cada etapa transforma o acerca el insumo al producto final.
¿Qué problema ambiental puede surgir del lavado del mineral?|Sedimentos en cursos de agua|Aumento automático del caudal|Recuperación del suelo sin intervención|El sedimento puede afectar ecosistemas y usuarios del agua.
Una empresa no sabe de qué mina salió el mineral. ¿Qué puede hacer para saber de dónde viene y cómo se trabajó allí?|Verificar procedencia y condiciones de trabajo|Aceptar solo una declaración verbal|Cambiar el nombre del material en la factura|La trazabilidad y otras verificaciones permiten identificar riesgos y corregirlos.
¿Por qué el trabajo infantil puede persistir?|Pobreza, falta de oportunidades educativas e insuficiente control|Porque todos los productores usan trabajo infantil|Porque el mineral exige mano de obra infantil|Es un problema social y de derechos que aparece en ciertas cadenas y puede prevenirse.`,
`¿Qué es Dubái?|Una ciudad y un emirato de EAU|Un Estado independiente en el Índico|La capital federal de EAU|Dubái pertenece a EAU. Abu Dabi es la capital federal.
¿Qué vía conecta el golfo con aguas hacia el Índico?|Estrecho de Ormuz|Estrecho de Malaca|Canal de Suez|Ormuz comunica el golfo Pérsico con el golfo de Omán.
Ordená la transformación.|>Gobierno de la familia Al Maktoum/Descubrimiento de petróleo/Formación de EAU/Creación de Emirates/Inauguración del Burj Khalifa|Las fechas son 1833, 1966, 1971, 1985 y 2010.
¿Por qué el petróleo fue importante?|Aportó ingresos iniciales para financiar infraestructura|Explica por sí solo toda la economía actual|Reemplazó de manera definitiva el comercio|Parte de los ingresos se invirtieron en actividades que diversificaron la economía.
Si comparás el antiguo puerto del Creek con Jebel Ali, ¿cómo cambió el comercio marítimo de Dubái?|De puerto comercial tradicional a logística de gran escala|De industrialización a desaparición del comercio|De centro aéreo a puerto exclusivamente pesquero|La función comercial continuó y amplió sus redes y capacidad.
¿Cuándo comenzó la Expo 2020?|2021|2020|2010|Se aplazó por la pandemia y conservó su nombre.`,
`¿Qué distingue políticamente a Singapur?|Es un Estado independiente|Es un emirato de Malasia|Es una provincia de Indonesia|Se separó de Malasia y alcanzó la independencia en 1965.
¿Qué explica el valor de su ubicación?|Acceso a una ruta entre el Índico y Asia oriental|Control del acceso al Caribe|Proximidad al estrecho de Ormuz|Los estrechos de Malaca y de Singapur enlazan grandes rutas marítimas.
Singapur ya tenía un puerto bien ubicado. ¿Qué inversión lo ayudó además a atraer fábricas?|Inversión en educación técnica e infraestructura|Dependencia exclusiva de rentas minerales|Eliminar la industria exportadora|Capacitación e infraestructura ayudaron a atraer inversiones y desarrollar industria.
¿Qué actividad tienen en común Singapur y Dubái?|Logística y conexión de pasajeros y carga|Extracción intensiva de petróleo local|Administración de un canal interoceánico|Puertos y aeropuertos conectan sus economías con redes globales.
Relacioná cada ciudad con una infraestructura.|~Singapur:Changi/Dubái:Jebel Ali|Changi es un aeropuerto de Singapur y Jebel Ali un puerto de Dubái.
¿Por qué el tamaño de Singapur importa?|El espacio limitado obliga a planificar usos y abastecimiento|Determina por sí solo que su economía sea pequeña|Evita la necesidad de importar|Un territorio reducido puede tener grandes flujos comerciales y necesita planificar suelo y recursos.`,
`¿Qué conecta el canal?|Cuenca atlántica por el Caribe y Pacífico|Índico y Pacífico|Mar Mediterráneo y mar Rojo|La entrada atlántica está en el Caribe y la otra en el Pacífico.
Ordená la cronología.|>Inicio de obras francesas/Reanudación estadounidense/Inauguración/Tratados Torrijos–Carter/Control pleno panameño/Ampliación|1881 → 1904 → 1914 → 1977 → 1999 → 2016.
Relacioná problemas de obra y respuestas.|~Malaria y fiebre amarilla:control de mosquitos/Derrumbes en Culebra:retiro de material y manejo de taludes/Relieve del istmo:diseño con lago y esclusas|Cada respuesta redujo un problema diferente. Los costos sociales y ambientales persistieron.
El barco ya entró a la esclusa. Cuando se abre la válvula, ¿por qué entra agua a la cámara?|Diferencia de altura y gravedad|Motores que levantan el barco|La marea del Pacífico en todas las cámaras|El agua fluye desde un nivel superior y el buque flota.
¿En qué momento se abre la compuerta de salida?|Cuando se igualan los niveles a ambos lados|Apenas termina de entrar el buque|Mientras los niveles todavía se separan|Igualar niveles reduce la diferencia de presión y permite el paso.
¿Qué distingue a Panamá de Suez?|Panamá usa esclusas y Suez es esencialmente a nivel del mar|Suez tiene que elevar barcos al lago Gatún|Ambos usan el mismo sistema de esclusas|Panamá requiere superar el desnivel interior.
Por la sequía, un barco muy cargado se hunde más de lo que permite el canal. ¿Qué puede hacer la naviera?|Reducir carga o evaluar otra ruta|Agregar carga para disminuir la profundidad del barco|Ignorar el nivel de los embalses|Una menor carga puede reducir el calado y permitir el paso.
¿Por qué no existe un peaje único?|Varía con el tipo, capacidad o carga del buque y servicios|Solo cambia con la bandera|Es igual para todo tránsito de carga|La Autoridad del Canal aplica estructuras de tarifas distintas.`
];
const examenRaw = `Un fabricante argentino usa piezas de tres países. Si se atrasa un envío, puede frenar la producción local. ¿Qué concepto explica esa relación?|Interdependencia|Soberanía territorial|Bipolaridad|La dependencia mutua transmite cambios por la cadena.
PBI de 2.400 millones y población de 6 millones. Calculá el PBI per cápita.|=400|El cálculo es 2.400 ÷ 6 = 400 unidades por persona.
Este año se hicieron más productos y también subieron los precios. ¿Qué indicador te permite comparar cuánto se produjo sin confundirlo con la suba de precios?|PBI real|PBI nominal|Población total|El real descuenta el efecto de cambios de precios.
¿Por qué un promedio alto puede coexistir con pobreza?|Los ingresos pueden estar concentrados|El promedio asegura ingresos iguales|Solo se contabilizan exportaciones|Un indicador por persona no revela la distribución.
¿Qué pasó en 1991 que ayuda a entender por qué terminó la Guerra Fría?|Disolución de la Unión Soviética|Independencia de Singapur|Tratados Torrijos–Carter|La desaparición de uno de los polos marcó el cierre del período.
En Cuba, ¿qué hecho fue parte de la negociación?|Compromiso estadounidense de no invasión|Separación de Singapur y Malasia|Incorporación de Cuba a Estados Unidos|Fue uno de los elementos públicos del arreglo de 1962.
¿Qué papel tuvieron otros países en la división de Corea y en la guerra que vino después?|Zonas de ocupación y apoyo exterior a los bandos|Su independencia en 1965|El comercio de perlas|La ocupación y la guerra reflejaron la competencia soviético-estadounidense y la intervención china.
¿Qué dejó pendiente el acuerdo de 1953?|Una paz definitiva|La suspensión de los combates|La delimitación de una zona desmilitarizada|Hubo armisticio, pero no un tratado de paz que lo reemplazara.
¿Qué herramienta de los BRICS financia proyectos de desarrollo?|Nuevo Banco de Desarrollo|Banco Central Europeo|Autoridad del Canal|El NBD financia infraestructura y desarrollo sostenible.
¿Qué categoría describe a Vietnam en el registro institucional BRICS de junio de 2026?|País asociado|Integrante histórico|Miembro pleno desde 2024|El registro separa socios de miembros plenos.
¿Qué relación país–sector es correcta?|India–servicios informáticos|Brasil–economía dependiente solo del gas|Sudáfrica–economía sin minería|India desarrolló una importante industria de servicios tecnológicos.
¿Por qué interesa el tantalio a fabricantes electrónicos?|Permite construir capacitores compactos|Se usa principalmente como relleno plástico de carcasas|Es otro nombre del cobalto|Cumple funciones en componentes de los circuitos.
¿Qué información aporta la trazabilidad?|Origen y recorrido de un lote|Distribución de ingresos de todo el país|Peaje de cada barco|Permite reconstruir eslabones y orientar verificaciones.
Antes de que crecieran el turismo, la logística y otros servicios, ¿qué actividades ya generaban ingresos en Dubái?|Comercio histórico e ingresos petroleros iniciales|Independencia de Malasia|Construcción del canal de Suez en el emirato|El comercio era previo al petróleo y los ingresos facilitaron inversiones.
¿Qué diferencia a Singapur de Dubái?|Singapur es soberano y Dubái integra EAU|Singapur es una provincia y Dubái un Estado soberano|Ambos integran EAU|Tienen un papel logístico parecido y categorías políticas distintas.
¿Qué ubicación corresponde a Singapur?|Sudeste asiático, cerca de Malaca|Asia occidental, cerca de Ormuz|Centroamérica, en el Caribe|Está al sur de la península malaya.
¿Qué pasa al llenar una cámara de Panamá?|Suben agua y barco|El barco se eleva con una grúa|El lago baja hasta el nivel del mar durante cada tránsito|El barco flota sobre el nivel ascendente de la cámara.
Si falta agua en los embalses de Panamá, ¿cómo puede terminar costando más enviar mercadería?|Restringe carga o tránsitos y puede inducir desvíos|Eleva automáticamente la capacidad del canal|Aumenta la profundidad de las cámaras|El agua embalsada es condición operativa del tránsito.
¿Cuándo asumió Panamá el control pleno?|1999|1977|2016|Los tratados son de 1977 y la ampliación de 2016.
¿Qué diferencia presenta un canal frente a un puerto de transbordo?|El canal abre un paso y el puerto permite transferir carga|Cumplen siempre exactamente la misma función|Solo el puerto permite la navegación|Ambos organizan flujos pero resuelven necesidades logísticas diferentes.
Elegí un celular. ¿De dónde puede venir uno de sus materiales, dónde se transforma y cómo llega a quien lo compra? Explicá un riesgo que pueda aparecer en el recorrido.|?Identificá materia prima, transformación industrial y destino. Vinculá un riesgo laboral o ambiental con una decisión de empresas o gobiernos.
Compará las trayectorias de Dubái y Singapur.|?Ubicá ambos, diferenciá su condición política y explicá dos decisiones o infraestructuras que reforzaron su posición comercial.
¿Cómo intervino la rivalidad entre Estados Unidos y la URSS en Corea y en Cuba? Explicá qué pasó y cómo se frenaron los enfrentamientos en cada caso.|?Mencioná los dos polos y explicá cómo actuaron en cada caso. Distinguí guerra y armisticio en Corea de crisis y negociación en Cuba.
Un país tiene minerales; otro fabrica productos con ellos; un tercero controla una ruta muy usada. ¿Cómo puede ganar influencia cada uno? Usá dos casos del curso.|?Usá al menos dos ejemplos entre BRICS, coltán y Panamá. Distinguí producción, tecnología, rutas e influencia. Podés explicar un límite del PBI per cápita.`;
const leerPreguntas = raw => raw.trim().split('\n').map(line => {
 const [prompt, first, ...rest] = line.split('|');
 const modes = {'=':'number','>':'order','~':'match','@':'map','?':'open'};
 const type = modes[first[0]];
 return type ? {prompt,type,data:first.slice(1),hint:rest[0]} :
 {prompt,type:'choice',data:[first,...rest.slice(0,-1)],hint:rest.at(-1)};
});
const practica = practicaRaw.map(leerPreguntas);
const examen = leerPreguntas(examenRaw);

