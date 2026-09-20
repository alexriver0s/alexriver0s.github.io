/* ============================================================
   i18n.js — Internacionalización (i18n = "internationalization",
   18 letras entre la i y la n).

   Cómo funciona:
   1. Cada texto de la web tiene en el HTML un atributo data-i18n
      con una CLAVE, por ejemplo data-i18n="hero.titulo".
   2. Acá abajo hay un diccionario por idioma: clave -> texto.
   3. Al elegir un idioma, el script recorre el HTML, busca cada
      clave y reemplaza el texto.

   Para AGREGAR un idioma: copiás un bloque entero, cambiás el
   código de idioma y traducís los valores. Nada más.
   Para CAMBIAR un texto: lo editás en los SEIS idiomas.
   ============================================================ */

const IDIOMAS = {

  /* ================= ESPAÑOL (original) ================= */
  es: {
    'doc.title': 'Alex Riveros | Soporte Técnico IT en Asunción',
    'doc.desc': 'Servicio técnico IT en Asunción y Gran Asunción: diagnóstico, redes y WiFi, Microsoft 365, cámaras de seguridad y soporte remoto. Para empresas, comercios y particulares.',
    'nav.servicios': 'Servicios', 'nav.proceso': 'Cómo trabajo', 'nav.sobre': 'Sobre mí', 'nav.agendar': 'Agendar',
    'aria.menu': 'Abrir menú', 'aria.idioma': 'Seleccionar idioma', 'aria.whatsapp': 'Escribir por WhatsApp',
    'hero.kicker': 'Asunción y Gran Asunción',
    'hero.titulo': 'Soporte Técnico IT para empresas',
    'hero.sub': 'Diagnóstico y mantenimiento de equipos, redes y WiFi, correo corporativo con Microsoft 365, cámaras de seguridad y soporte remoto para el día a día. Atiendo empresas, comercios y particulares en Asunción y Gran Asunción.',
    'hero.cta1': 'Agendar una visita', 'hero.cta2': 'Ver servicios y precios',
    'srv.kicker': 'Servicios', 'srv.titulo': 'Qué puedo resolverte',
    'srv.intro': 'Cada trabajo se cotiza con alcance definido por escrito antes de comenzar. Sabés qué incluye, cuánto cuesta y cuándo se ejecuta.',
    'srv.desde': 'Desde', 'srv.nota': '¿Necesitás algo que no está en la lista? Escribime por WhatsApp.',
    'diag.etiqueta': 'Empezá por acá', 'diag.titulo': 'Diagnóstico IT',
    'diag.texto': 'Relevo el estado real de tu tecnología y te entrego un <strong>informe escrito</strong>: qué tenés, qué está fallando, qué riesgos corrés y en qué orden conviene resolverlo. En lenguaje claro y con prioridades definidas.',
    'diag.li1': 'Relevamiento de equipos, red y conectividad', 'diag.li2': 'Revisión de seguridad básica y respaldos',
    'diag.li3': 'Informe con recomendaciones priorizadas', 'diag.li4': 'Documentación de tu infraestructura para tu archivo',
    'diag.precioDet': 'Visita de hasta 2 horas · oficinas de hasta 10 equipos', 'diag.cta': 'Agendar diagnóstico',
    'rem.titulo': 'Soporte remoto agendado',
    'rem.texto': 'Resolución remota de los problemas del día a día, sin esperar una visita. Contratás un paquete de horas y las usás cuando las necesites, en sesiones agendadas.',
    'rem.li1': 'Altas, bajas y permisos de usuarios en Microsoft 365', 'rem.li2': 'Configuración de correo, Teams y SharePoint',
    'rem.li3': 'Resolución de problemas de equipos y software', 'rem.li4': 'Reporte de las horas consumidas en cada sesión',
    'rem.precioDet': 'Bolsa de 5 horas · se consumen por sesión', 'rem.cta': 'Consultar disponibilidad',
    'cam.titulo': 'Cámaras de seguridad',
    'cam.texto': 'Instalación, configuración y puesta a punto de sistemas de videovigilancia, con acceso remoto desde tu celular. Trabajo con las marcas más usadas del mercado, tanto en instalaciones nuevas como en sistemas que dejaron de funcionar.',
    'cam.li1': 'Instalación de cámaras y grabador (NVR o DVR)', 'cam.li2': 'Configuración de acceso remoto seguro',
    'cam.li3': 'Ajuste de grabación, calidad y días de retención', 'cam.li4': 'Diagnóstico y recuperación de sistemas existentes',
    'cam.precioDet': 'Por cámara instalada y configurada', 'cam.cta': 'Pedir presupuesto',
    'part.kicker': 'Comercios y particulares', 'part.titulo': 'El mismo servicio, a tu escala',
    'part.texto': 'El mismo servicio técnico, dimensionado a lo que necesitás. Comercios, estaciones de servicio, consultorios, o una computadora que dejó de funcionar como debería.',
    'part.li1': 'Reparación y puesta a punto de computadoras', 'part.li2': 'Instalación de impresoras y periféricos',
    'part.li3': 'WiFi que se corta o no llega a todos lados', 'part.li4': 'Limpieza de virus y recuperación de archivos',
    'part.li5': 'Respaldo de fotos y documentos importantes', 'part.li6': 'Cámaras de seguridad para tu local o casa',
    'part.precioDet': 'Visita de hasta 1 hora y media', 'part.cta': 'Agendar una visita',
    'proc.kicker': 'El proceso', 'proc.titulo': 'Cómo trabajo',
    'proc.p1t': 'Agendás', 'proc.p1d': 'Elegís día y hora desde el calendario, o me escribís por WhatsApp. Te confirmo por correo.',
    'proc.p2t': 'Diagnostico', 'proc.p2d': 'Relevo en sitio tus equipos, tu red y tu seguridad. Todo cambio que afecte la operación se planifica y se coordina antes de ejecutarse.',
    'proc.p3t': 'Te entrego un plan', 'proc.p3d': 'Recibís un informe escrito con los hallazgos y el plan de acción, ordenado por prioridad y costo.',
    'proc.p4t': 'Ejecutamos', 'proc.p4d': 'Definís qué se resuelve y cuándo. Los trabajos aprobados se agendan con fecha cerrada y presupuesto firme.',
    'sob.kicker': 'Sobre mí', 'sob.titulo': 'Con quién estás trabajando',
    'sob.p1': 'Soy Alex Riveros, analista de soporte e infraestructura IT en Asunción. Hace más de cuatro años que administro la tecnología de empresas: desde la mesa de ayuda diaria hasta redes, servidores de video y entornos de Microsoft 365.',
    'sob.p2': 'Curso el último año de Ingeniería Informática y cuento con certificaciones oficiales de los fabricantes de los equipos que administro.',
    'sob.linkedin': 'Ver mi perfil en LinkedIn', 'sob.certs': 'Certificaciones',
    'ag.kicker': 'Agenda', 'ag.titulo': 'Reservá tu visita',
    'ag.intro': 'Elegí el día y la hora que te sirva. Vas a recibir la confirmación por correo con todos los datos.',
    'ag.pendiente': 'Escribime por WhatsApp y te paso los horarios disponibles.<br>Coordinamos día, hora y alcance del trabajo en el momento.',
    'ag.wa': 'Escribir por WhatsApp',
    'ag.alt': '¿Preferís correo? <a href="mailto:alex.riveros004@gmail.com">alex.riveros004@gmail.com</a>',
    'pie.nombre': 'Alex Riveros — Soporte Técnico IT', 'pie.detalle': 'Asunción y Gran Asunción, Paraguay',
    'pie.legal': '© <span id="anio"></span> Alex Riveros. Todos los derechos reservados.'
  },

  /* ================= GUARANÍ (jopara) =================
     BORRADOR — pendiente de revisión por hablante nativo.
     Criterio: estructura guaraní con préstamos del castellano
     para los términos técnicos, que es como se habla realmente.
     ==================================================== */
  gn: {
    'doc.title': 'Alex Riveros | Pytyvõ Técnico IT Paraguaýpe',
    'doc.desc': 'Servicio técnico IT Paraguaýpe ha ijerére: diagnóstico, red ha WiFi, Microsoft 365, cámara de seguridad ha soporte remoto. Empresa, negocio ha opavavépe g̃uarã.',
    'nav.servicios': 'Tembiapo', 'nav.proceso': 'Mba\'éichapa amba\'apo', 'nav.sobre': 'Che rehegua', 'nav.agendar': 'Ejerure ára',
    'aria.menu': 'Embojuruja menu', 'aria.idioma': 'Eiporavo ñe\'ẽ', 'aria.whatsapp': 'Ehai WhatsApp rupive',
    'hero.kicker': 'Paraguaýpe ha ijerére',
    'hero.titulo': 'Pytyvõ Técnico IT empresakuérape g̃uarã',
    'hero.sub': 'Diagnóstico ha mantenimiento nde máquina, red ha WiFi-pe, correo corporativo Microsoft 365 ndive, cámara de seguridad ha soporte remoto ko\'ẽreíre. Amba\'apo empresa, negocio ha opavave ndive Paraguaýpe ha ijerére.',
    'hero.cta1': 'Ejerure peteĩ visita', 'hero.cta2': 'Ehecha tembiapo ha hepykue',
    'srv.kicker': 'Tembiapo', 'srv.titulo': 'Mba\'épa ikatu amoĩporã ndéve',
    'srv.intro': 'Opa tembiapo oñemoĩ presupuesto-pe kuatiáre oñepyrũ mboyve. Reikuaáta mba\'épa oike, mboýpa hepy ha araka\'épa ojejapóta.',
    'srv.desde': 'Guive', 'srv.nota': 'Reikotevẽpa ambue mba\'e ndaipóriva ko listápe? Ehai chéve WhatsApp rupive.',
    'diag.etiqueta': 'Eñepyrũ ko\'ápe', 'diag.titulo': 'Diagnóstico IT',
    'diag.texto': 'Ahecha mba\'éichapa oĩ añetehápe nde tecnología ha ame\'ẽ ndéve peteĩ <strong>informe kuatiáre</strong>: mba\'épa rereko, mba\'épa ndoikoporãi, mba\'e riesgo-pa rerekova ha mba\'e ordenpa iporãve emoĩporã. Ñe\'ẽ hesakãvape ha prioridad-kuéra ndive.',
    'diag.li1': 'Máquina, red ha conectividad rehegua relevamiento', 'diag.li2': 'Seguridad básica ha respaldo jehechajey',
    'diag.li3': 'Informe recomendación-kuéra prioridad rupi', 'diag.li4': 'Nde infraestructura documentación nde archivo-pe g̃uarã',
    'diag.precioDet': 'Visita 2 aravo peve · oficina 10 máquina peve', 'diag.cta': 'Ejerure diagnóstico',
    'rem.titulo': 'Soporte remoto ára ojeporavóva',
    'rem.texto': 'Amoĩporã mombyrýgui umi problema ko\'ẽreíre oikóva, ndereha\'arõi mo\'ãi peteĩ visita. Rejogua peteĩ paquete de horas ha reipuru reikotevẽ jave, sesión oñemoĩva ára rupi.',
    'rem.li1': 'Usuario pyahu, ñemboguete ha permiso Microsoft 365-pe', 'rem.li2': 'Correo, Teams ha SharePoint moĩporã',
    'rem.li3': 'Máquina ha software problema ñemoĩporã', 'rem.li4': 'Reporte mboy aravópa ojeporu sesión ñavõ',
    'rem.precioDet': 'Paquete 5 aravo · ojeporu sesión rupi', 'rem.cta': 'Eporandu disponibilidad',
    'cam.titulo': 'Cámara de seguridad',
    'cam.texto': 'Instalación, configuración ha moĩporã sistema de videovigilancia-pe, acceso remoto nde celular-gui. Amba\'apo umi marca ojeporuvévape, tahína instalación pyahu térã sistema ndoikovéivape.',
    'cam.li1': 'Cámara ha grabador (NVR térã DVR) ñemohenda', 'cam.li2': 'Acceso remoto seguro moĩporã',
    'cam.li3': 'Grabación, calidad ha mboy ára oñeñongatu moĩporã', 'cam.li4': 'Sistema oĩmava diagnóstico ha ñemoingovejey',
    'cam.precioDet': 'Cámara ñavõ oñemohenda ha oñemoĩporãva', 'cam.cta': 'Ejerure presupuesto',
    'part.kicker': 'Negocio ha opavave', 'part.titulo': 'Upe servicio voi, nde escala-pe',
    'part.texto': 'Upe servicio técnico voi, oñemoĩva reikotevẽháicha. Negocio, estación de servicio, consultorio, térã peteĩ computadora ndoikovéiva iporãháicha.',
    'part.li1': 'Computadora ñemyatyrõ ha moĩporã', 'part.li2': 'Impresora ha periférico ñemohenda',
    'part.li3': 'WiFi oikytĩva térã ndog̃uahẽiva opa hendápe', 'part.li4': 'Virus ñemopotĩ ha archivo ñeguenohẽjey',
    'part.li5': 'Ta\'anga ha kuatia iñimportanteva respaldo', 'part.li6': 'Cámara de seguridad nde local térã nde róga peg̃uarã',
    'part.precioDet': 'Visita 1 aravo ha mbyte peve', 'part.cta': 'Ejerure peteĩ visita',
    'proc.kicker': 'Tape', 'proc.titulo': 'Mba\'éichapa amba\'apo',
    'proc.p1t': 'Rejerure ára', 'proc.p1d': 'Reiporavo ára ha aravo calendario-gui, térã rehai chéve WhatsApp rupive. Añemoneĩ ndéve correo rupive.',
    'proc.p2t': 'Ahecha', 'proc.p2d': 'Ahecha upe hendápe nde máquina, nde red ha nde seguridad. Opa mba\'e oñemoambuéva operación-pe oñemboguapy ha oñemoĩ peteĩ ñe\'ẽme ojejapo mboyve.',
    'proc.p3t': 'Ame\'ẽ ndéve peteĩ plan', 'proc.p3d': 'Rehupyty peteĩ informe kuatiáre ojejuhúva ha plan de acción ndive, prioridad ha hepykue rupi.',
    'proc.p4t': 'Jajapo', 'proc.p4d': 'Nde ere mba\'épa ojejapóta ha araka\'e. Tembiapo oñemoneĩva oñemoĩ ára hatã ha presupuesto hatã ndive.',
    'sob.kicker': 'Che rehegua', 'sob.titulo': 'Máva ndive remba\'apo',
    'sob.p1': 'Che ha\'e Alex Riveros, analista de soporte ha infraestructura IT Paraguaýpe. Irundy ary rasami che amoñangareko empresa-kuéra tecnología: mesa de ayuda ko\'ẽreígui red, servidor de video ha Microsoft 365 peve.',
    'sob.p2': 'Aike che ary paha Ingeniería Informática-pe ha areko certificación oficial umi fabricante che amoñangarekóva equipo-gui.',
    'sob.linkedin': 'Ehecha che perfil LinkedIn-pe', 'sob.certs': 'Certificación',
    'ag.kicker': 'Ára', 'ag.titulo': 'Ejerure nde visita',
    'ag.intro': 'Eiporavo ára ha aravo ndéve iporãva. Rehupytýta confirmación correo rupive opa marandu ndive.',
    'ag.pendiente': 'Ehai chéve WhatsApp rupive ha ame\'ẽta ndéve umi aravo oĩva.<br>Ñamoĩ peteĩ ñe\'ẽme ára, aravo ha mba\'épa ojejapóta.',
    'ag.wa': 'Ehai WhatsApp rupive',
    'ag.alt': 'Reipotavépa correo? <a href="mailto:alex.riveros004@gmail.com">alex.riveros004@gmail.com</a>',
    'pie.nombre': 'Alex Riveros — Pytyvõ Técnico IT', 'pie.detalle': 'Paraguay ha ijerére, Paraguay',
    'pie.legal': '© <span id="anio"></span> Alex Riveros. Opa derecho oñeñongatu.'
  },

  /* ================= ENGLISH ================= */
  en: {
    'doc.title': 'Alex Riveros | IT Support Services in Asunción',
    'doc.desc': 'IT support in Asunción and Greater Asunción: assessments, networking and WiFi, Microsoft 365, security cameras and remote support. For companies, retail businesses and individuals.',
    'nav.servicios': 'Services', 'nav.proceso': 'How I work', 'nav.sobre': 'About', 'nav.agendar': 'Book',
    'aria.menu': 'Open menu', 'aria.idioma': 'Select language', 'aria.whatsapp': 'Message on WhatsApp',
    'hero.kicker': 'Asunción and Greater Asunción',
    'hero.titulo': 'IT Support for Businesses',
    'hero.sub': 'Hardware assessment and maintenance, networking and WiFi, corporate email with Microsoft 365, security cameras and day-to-day remote support. Serving companies, retail businesses and individuals across Asunción and Greater Asunción.',
    'hero.cta1': 'Book a visit', 'hero.cta2': 'View services and pricing',
    'srv.kicker': 'Services', 'srv.titulo': 'What I can solve for you',
    'srv.intro': 'Every job is quoted with a written scope before work begins. You know what is included, what it costs and when it will be done.',
    'srv.desde': 'From', 'srv.nota': 'Need something that is not on this list? Message me on WhatsApp.',
    'diag.etiqueta': 'Start here', 'diag.titulo': 'IT Assessment',
    'diag.texto': 'I assess the real state of your technology and deliver a <strong>written report</strong>: what you have, what is failing, what risks you are exposed to and the order in which it should be addressed. In plain language, with clear priorities.',
    'diag.li1': 'Inventory of equipment, network and connectivity', 'diag.li2': 'Review of basic security and backups',
    'diag.li3': 'Report with prioritised recommendations', 'diag.li4': 'Infrastructure documentation for your records',
    'diag.precioDet': 'Up to a 2-hour visit · offices with up to 10 devices', 'diag.cta': 'Book an assessment',
    'rem.titulo': 'Scheduled Remote Support',
    'rem.texto': 'Remote resolution of day-to-day issues, without waiting for an on-site visit. You purchase a block of hours and use them as needed, in scheduled sessions.',
    'rem.li1': 'User creation, removal and permissions in Microsoft 365', 'rem.li2': 'Email, Teams and SharePoint configuration',
    'rem.li3': 'Troubleshooting of devices and software', 'rem.li4': 'Report of hours used in each session',
    'rem.precioDet': 'Block of 5 hours · drawn down per session', 'rem.cta': 'Check availability',
    'cam.titulo': 'Security Cameras',
    'cam.texto': 'Installation, configuration and tuning of video surveillance systems, with remote access from your phone. I work with the most widely used brands on the market, both for new installations and for systems that have stopped working.',
    'cam.li1': 'Camera and recorder (NVR or DVR) installation', 'cam.li2': 'Secure remote access configuration',
    'cam.li3': 'Recording, quality and retention settings', 'cam.li4': 'Diagnosis and recovery of existing systems',
    'cam.precioDet': 'Per camera installed and configured', 'cam.cta': 'Request a quote',
    'part.kicker': 'Retail and individuals', 'part.titulo': 'The same service, at your scale',
    'part.texto': 'The same technical service, sized to what you actually need. Shops, service stations, private practices, or a computer that has stopped working the way it should.',
    'part.li1': 'Computer repair and tune-up', 'part.li2': 'Printer and peripheral installation',
    'part.li3': 'WiFi that drops or does not reach everywhere', 'part.li4': 'Virus removal and file recovery',
    'part.li5': 'Backup of important photos and documents', 'part.li6': 'Security cameras for your shop or home',
    'part.precioDet': 'Up to a 90-minute visit', 'part.cta': 'Book a visit',
    'proc.kicker': 'The process', 'proc.titulo': 'How I work',
    'proc.p1t': 'You book', 'proc.p1d': 'Pick a day and time from the calendar, or message me on WhatsApp. I confirm by email.',
    'proc.p2t': 'I assess', 'proc.p2d': 'I survey your equipment, network and security on site. Any change affecting operations is planned and agreed before it is carried out.',
    'proc.p3t': 'You get a plan', 'proc.p3d': 'You receive a written report with the findings and an action plan, ordered by priority and cost.',
    'proc.p4t': 'We execute', 'proc.p4d': 'You decide what gets resolved and when. Approved work is scheduled with a fixed date and a firm quote.',
    'sob.kicker': 'About', 'sob.titulo': 'Who you are working with',
    'sob.p1': 'I am Alex Riveros, an IT support and infrastructure analyst based in Asunción. For over four years I have managed business technology: from the daily help desk to networks, video servers and Microsoft 365 environments.',
    'sob.p2': 'I am in my final year of Computer Engineering and hold official certifications from the manufacturers of the equipment I administer.',
    'sob.linkedin': 'View my LinkedIn profile', 'sob.certs': 'Certifications',
    'ag.kicker': 'Booking', 'ag.titulo': 'Book your visit',
    'ag.intro': 'Pick the day and time that suits you. You will receive a confirmation by email with all the details.',
    'ag.pendiente': 'Message me on WhatsApp and I will send you the available times.<br>We agree on the day, time and scope of the work right away.',
    'ag.wa': 'Message on WhatsApp',
    'ag.alt': 'Prefer email? <a href="mailto:alex.riveros004@gmail.com">alex.riveros004@gmail.com</a>',
    'pie.nombre': 'Alex Riveros — IT Support', 'pie.detalle': 'Asunción and Greater Asunción, Paraguay',
    'pie.legal': '© <span id="anio"></span> Alex Riveros. All rights reserved.'
  },

  /* ================= PORTUGUÊS ================= */
  pt: {
    'doc.title': 'Alex Riveros | Suporte Técnico de TI em Assunção',
    'doc.desc': 'Suporte técnico de TI em Assunção e Grande Assunção: diagnóstico, redes e WiFi, Microsoft 365, câmeras de segurança e suporte remoto. Para empresas, comércios e particulares.',
    'nav.servicios': 'Serviços', 'nav.proceso': 'Como trabalho', 'nav.sobre': 'Sobre mim', 'nav.agendar': 'Agendar',
    'aria.menu': 'Abrir menu', 'aria.idioma': 'Selecionar idioma', 'aria.whatsapp': 'Falar pelo WhatsApp',
    'hero.kicker': 'Assunção e Grande Assunção',
    'hero.titulo': 'Suporte Técnico de TI para empresas',
    'hero.sub': 'Diagnóstico e manutenção de equipamentos, redes e WiFi, e-mail corporativo com Microsoft 365, câmeras de segurança e suporte remoto para o dia a dia. Atendo empresas, comércios e particulares em Assunção e Grande Assunção.',
    'hero.cta1': 'Agendar uma visita', 'hero.cta2': 'Ver serviços e preços',
    'srv.kicker': 'Serviços', 'srv.titulo': 'O que posso resolver para você',
    'srv.intro': 'Cada trabalho é orçado com escopo definido por escrito antes de começar. Você sabe o que inclui, quanto custa e quando será executado.',
    'srv.desde': 'A partir de', 'srv.nota': 'Precisa de algo que não está na lista? Me escreva pelo WhatsApp.',
    'diag.etiqueta': 'Comece por aqui', 'diag.titulo': 'Diagnóstico de TI',
    'diag.texto': 'Levanto o estado real da sua tecnologia e entrego um <strong>relatório por escrito</strong>: o que você tem, o que está falhando, quais riscos corre e em que ordem convém resolver. Em linguagem clara e com prioridades definidas.',
    'diag.li1': 'Levantamento de equipamentos, rede e conectividade', 'diag.li2': 'Revisão de segurança básica e backups',
    'diag.li3': 'Relatório com recomendações priorizadas', 'diag.li4': 'Documentação da sua infraestrutura para seu arquivo',
    'diag.precioDet': 'Visita de até 2 horas · escritórios com até 10 equipamentos', 'diag.cta': 'Agendar diagnóstico',
    'rem.titulo': 'Suporte remoto agendado',
    'rem.texto': 'Resolução remota dos problemas do dia a dia, sem esperar por uma visita. Você contrata um pacote de horas e as usa quando precisar, em sessões agendadas.',
    'rem.li1': 'Criação, exclusão e permissões de usuários no Microsoft 365', 'rem.li2': 'Configuração de e-mail, Teams e SharePoint',
    'rem.li3': 'Resolução de problemas de equipamentos e software', 'rem.li4': 'Relatório das horas consumidas em cada sessão',
    'rem.precioDet': 'Pacote de 5 horas · consumidas por sessão', 'rem.cta': 'Consultar disponibilidade',
    'cam.titulo': 'Câmeras de segurança',
    'cam.texto': 'Instalação, configuração e ajuste de sistemas de videomonitoramento, com acesso remoto pelo celular. Trabalho com as marcas mais usadas do mercado, tanto em instalações novas quanto em sistemas que pararam de funcionar.',
    'cam.li1': 'Instalação de câmeras e gravador (NVR ou DVR)', 'cam.li2': 'Configuração de acesso remoto seguro',
    'cam.li3': 'Ajuste de gravação, qualidade e dias de retenção', 'cam.li4': 'Diagnóstico e recuperação de sistemas existentes',
    'cam.precioDet': 'Por câmera instalada e configurada', 'cam.cta': 'Solicitar orçamento',
    'part.kicker': 'Comércios e particulares', 'part.titulo': 'O mesmo serviço, na sua escala',
    'part.texto': 'O mesmo serviço técnico, dimensionado ao que você precisa. Comércios, postos de combustível, consultórios, ou um computador que parou de funcionar como deveria.',
    'part.li1': 'Reparo e otimização de computadores', 'part.li2': 'Instalação de impressoras e periféricos',
    'part.li3': 'WiFi que cai ou não chega em todos os cantos', 'part.li4': 'Remoção de vírus e recuperação de arquivos',
    'part.li5': 'Backup de fotos e documentos importantes', 'part.li6': 'Câmeras de segurança para seu comércio ou casa',
    'part.precioDet': 'Visita de até 1 hora e meia', 'part.cta': 'Agendar uma visita',
    'proc.kicker': 'O processo', 'proc.titulo': 'Como trabalho',
    'proc.p1t': 'Você agenda', 'proc.p1d': 'Escolhe dia e horário no calendário, ou me escreve pelo WhatsApp. Confirmo por e-mail.',
    'proc.p2t': 'Eu diagnostico', 'proc.p2d': 'Levanto no local seus equipamentos, sua rede e sua segurança. Toda mudança que afete a operação é planejada e combinada antes de ser executada.',
    'proc.p3t': 'Entrego um plano', 'proc.p3d': 'Você recebe um relatório por escrito com os achados e o plano de ação, ordenado por prioridade e custo.',
    'proc.p4t': 'Executamos', 'proc.p4d': 'Você define o que será resolvido e quando. Os trabalhos aprovados são agendados com data fechada e orçamento firme.',
    'sob.kicker': 'Sobre mim', 'sob.titulo': 'Com quem você está trabalhando',
    'sob.p1': 'Sou Alex Riveros, analista de suporte e infraestrutura de TI em Assunção. Há mais de quatro anos administro a tecnologia de empresas: do help desk diário a redes, servidores de vídeo e ambientes Microsoft 365.',
    'sob.p2': 'Curso o último ano de Engenharia da Computação e possuo certificações oficiais dos fabricantes dos equipamentos que administro.',
    'sob.linkedin': 'Ver meu perfil no LinkedIn', 'sob.certs': 'Certificações',
    'ag.kicker': 'Agenda', 'ag.titulo': 'Agende sua visita',
    'ag.intro': 'Escolha o dia e o horário que funcionar para você. Você receberá a confirmação por e-mail com todos os dados.',
    'ag.pendiente': 'Me escreva pelo WhatsApp e eu envio os horários disponíveis.<br>Combinamos dia, horário e escopo do trabalho na hora.',
    'ag.wa': 'Falar pelo WhatsApp',
    'ag.alt': 'Prefere e-mail? <a href="mailto:alex.riveros004@gmail.com">alex.riveros004@gmail.com</a>',
    'pie.nombre': 'Alex Riveros — Suporte Técnico de TI', 'pie.detalle': 'Assunção e Grande Assunção, Paraguai',
    'pie.legal': '© <span id="anio"></span> Alex Riveros. Todos os direitos reservados.'
  },

  /* ================= FRANÇAIS ================= */
  fr: {
    'doc.title': 'Alex Riveros | Support Technique Informatique à Asuncion',
    'doc.desc': 'Support informatique à Asuncion et dans le Grand Asuncion : diagnostic, réseaux et WiFi, Microsoft 365, caméras de sécurité et assistance à distance. Pour entreprises, commerces et particuliers.',
    'nav.servicios': 'Services', 'nav.proceso': 'Ma méthode', 'nav.sobre': 'À propos', 'nav.agendar': 'Réserver',
    'aria.menu': 'Ouvrir le menu', 'aria.idioma': 'Choisir la langue', 'aria.whatsapp': 'Écrire sur WhatsApp',
    'hero.kicker': 'Asuncion et Grand Asuncion',
    'hero.titulo': 'Support Informatique pour entreprises',
    'hero.sub': 'Diagnostic et maintenance du matériel, réseaux et WiFi, messagerie professionnelle avec Microsoft 365, caméras de sécurité et assistance à distance au quotidien. J\'interviens auprès des entreprises, des commerces et des particuliers à Asuncion et dans le Grand Asuncion.',
    'hero.cta1': 'Réserver une intervention', 'hero.cta2': 'Voir les services et les tarifs',
    'srv.kicker': 'Services', 'srv.titulo': 'Ce que je peux résoudre pour vous',
    'srv.intro': 'Chaque intervention est chiffrée avec un périmètre défini par écrit avant de commencer. Vous savez ce qui est inclus, ce que cela coûte et quand ce sera réalisé.',
    'srv.desde': 'À partir de', 'srv.nota': 'Vous avez besoin de quelque chose qui n\'est pas dans la liste ? Écrivez-moi sur WhatsApp.',
    'diag.etiqueta': 'Commencez ici', 'diag.titulo': 'Audit informatique',
    'diag.texto': 'Je relève l\'état réel de votre informatique et je vous remets un <strong>rapport écrit</strong> : ce que vous avez, ce qui dysfonctionne, les risques encourus et dans quel ordre il convient d\'y remédier. En langage clair et avec des priorités définies.',
    'diag.li1': 'Inventaire du matériel, du réseau et de la connectivité', 'diag.li2': 'Revue de la sécurité de base et des sauvegardes',
    'diag.li3': 'Rapport avec recommandations hiérarchisées', 'diag.li4': 'Documentation de votre infrastructure pour vos archives',
    'diag.precioDet': 'Intervention jusqu\'à 2 heures · bureaux jusqu\'à 10 postes', 'diag.cta': 'Réserver un audit',
    'rem.titulo': 'Assistance à distance planifiée',
    'rem.texto': 'Résolution à distance des problèmes du quotidien, sans attendre un déplacement. Vous achetez un forfait d\'heures et vous les utilisez selon vos besoins, lors de sessions planifiées.',
    'rem.li1': 'Création, suppression et droits des utilisateurs dans Microsoft 365', 'rem.li2': 'Configuration de la messagerie, de Teams et de SharePoint',
    'rem.li3': 'Résolution des problèmes de matériel et de logiciels', 'rem.li4': 'Rapport des heures consommées à chaque session',
    'rem.precioDet': 'Forfait de 5 heures · décompté par session', 'rem.cta': 'Vérifier les disponibilités',
    'cam.titulo': 'Caméras de sécurité',
    'cam.texto': 'Installation, configuration et mise au point de systèmes de vidéosurveillance, avec accès à distance depuis votre téléphone. Je travaille avec les marques les plus répandues du marché, aussi bien pour les installations neuves que pour les systèmes hors service.',
    'cam.li1': 'Installation de caméras et d\'enregistreur (NVR ou DVR)', 'cam.li2': 'Configuration d\'un accès distant sécurisé',
    'cam.li3': 'Réglage de l\'enregistrement, de la qualité et de la rétention', 'cam.li4': 'Diagnostic et remise en service de systèmes existants',
    'cam.precioDet': 'Par caméra installée et configurée', 'cam.cta': 'Demander un devis',
    'part.kicker': 'Commerces et particuliers', 'part.titulo': 'Le même service, à votre échelle',
    'part.texto': 'Le même service technique, dimensionné à vos besoins réels. Commerces, stations-service, cabinets, ou un ordinateur qui ne fonctionne plus comme il le devrait.',
    'part.li1': 'Réparation et optimisation d\'ordinateurs', 'part.li2': 'Installation d\'imprimantes et de périphériques',
    'part.li3': 'WiFi qui coupe ou ne couvre pas tout', 'part.li4': 'Suppression de virus et récupération de fichiers',
    'part.li5': 'Sauvegarde de photos et documents importants', 'part.li6': 'Caméras de sécurité pour votre local ou votre domicile',
    'part.precioDet': 'Intervention jusqu\'à 1 heure 30', 'part.cta': 'Réserver une intervention',
    'proc.kicker': 'Le processus', 'proc.titulo': 'Ma méthode',
    'proc.p1t': 'Vous réservez', 'proc.p1d': 'Choisissez un jour et une heure dans le calendrier, ou écrivez-moi sur WhatsApp. Je confirme par courriel.',
    'proc.p2t': 'Je diagnostique', 'proc.p2d': 'Je relève sur place votre matériel, votre réseau et votre sécurité. Tout changement affectant l\'exploitation est planifié et convenu avant d\'être exécuté.',
    'proc.p3t': 'Je vous remets un plan', 'proc.p3d': 'Vous recevez un rapport écrit avec les constats et le plan d\'action, classé par priorité et par coût.',
    'proc.p4t': 'Nous exécutons', 'proc.p4d': 'Vous décidez ce qui est résolu et quand. Les travaux validés sont planifiés à date ferme et à devis ferme.',
    'sob.kicker': 'À propos', 'sob.titulo': 'Avec qui vous travaillez',
    'sob.p1': 'Je suis Alex Riveros, analyste support et infrastructure informatique à Asuncion. Depuis plus de quatre ans, j\'administre l\'informatique d\'entreprises : du support quotidien aux réseaux, serveurs vidéo et environnements Microsoft 365.',
    'sob.p2': 'Je suis en dernière année de génie informatique et je détiens les certifications officielles des fabricants des équipements que j\'administre.',
    'sob.linkedin': 'Voir mon profil LinkedIn', 'sob.certs': 'Certifications',
    'ag.kicker': 'Rendez-vous', 'ag.titulo': 'Réservez votre intervention',
    'ag.intro': 'Choisissez le jour et l\'heure qui vous conviennent. Vous recevrez une confirmation par courriel avec toutes les informations.',
    'ag.pendiente': 'Écrivez-moi sur WhatsApp et je vous envoie les créneaux disponibles.<br>Nous convenons du jour, de l\'heure et du périmètre sur le moment.',
    'ag.wa': 'Écrire sur WhatsApp',
    'ag.alt': 'Vous préférez le courriel ? <a href="mailto:alex.riveros004@gmail.com">alex.riveros004@gmail.com</a>',
    'pie.nombre': 'Alex Riveros — Support Informatique', 'pie.detalle': 'Asuncion et Grand Asuncion, Paraguay',
    'pie.legal': '© <span id="anio"></span> Alex Riveros. Tous droits réservés.'
  },

  /* ================= 中文（简体） ================= */
  zh: {
    'doc.title': 'Alex Riveros | 亚松森 IT 技术支持服务',
    'doc.desc': '亚松森及大亚松森地区的 IT 技术支持：系统检测、网络与 WiFi、Microsoft 365、安防监控摄像头及远程支持。服务对象包括企业、商铺和个人。',
    'nav.servicios': '服务项目', 'nav.proceso': '工作流程', 'nav.sobre': '关于我', 'nav.agendar': '预约',
    'aria.menu': '打开菜单', 'aria.idioma': '选择语言', 'aria.whatsapp': '通过 WhatsApp 联系',
    'hero.kicker': '亚松森及大亚松森地区',
    'hero.titulo': '面向企业的 IT 技术支持',
    'hero.sub': '设备检测与维护、网络与 WiFi、基于 Microsoft 365 的企业邮箱、安防监控摄像头，以及日常远程技术支持。服务范围覆盖亚松森及大亚松森地区的企业、商铺和个人客户。',
    'hero.cta1': '预约上门服务', 'hero.cta2': '查看服务与价格',
    'srv.kicker': '服务项目', 'srv.titulo': '我能为您解决什么',
    'srv.intro': '每项工作在开始前都会以书面形式确定服务范围并提供报价。您清楚知道包含哪些内容、费用多少以及何时执行。',
    'srv.desde': '起价', 'srv.nota': '需要列表之外的服务？请通过 WhatsApp 联系我。',
    'diag.etiqueta': '从这里开始', 'diag.titulo': 'IT 系统检测',
    'diag.texto': '我会实地评估您信息系统的真实状况，并提交一份<strong>书面报告</strong>：您现有哪些设备、哪些出现故障、面临哪些风险，以及应按什么顺序处理。语言通俗易懂，并明确标注优先级。',
    'diag.li1': '设备、网络与连接状况盘点', 'diag.li2': '基础安全与数据备份检查',
    'diag.li3': '附优先级排序建议的检测报告', 'diag.li4': '供您存档的基础设施技术文档',
    'diag.precioDet': '上门服务最长 2 小时 · 适用于 10 台设备以内的办公室', 'diag.cta': '预约系统检测',
    'rem.titulo': '预约制远程支持',
    'rem.texto': '远程解决日常技术问题，无需等待上门。您购买小时套餐，按需在预约时段内使用。',
    'rem.li1': 'Microsoft 365 用户的新增、删除与权限管理', 'rem.li2': '邮箱、Teams 与 SharePoint 配置',
    'rem.li3': '设备与软件故障排查', 'rem.li4': '每次服务的工时消耗报告',
    'rem.precioDet': '5 小时套餐 · 按次扣减', 'rem.cta': '查询可预约时间',
    'cam.titulo': '安防监控摄像头',
    'cam.texto': '视频监控系统的安装、配置与调试，支持手机远程查看。可处理市场上主流品牌的设备，既承接新装项目，也修复已停止工作的系统。',
    'cam.li1': '摄像头与录像主机（NVR 或 DVR）安装', 'cam.li2': '安全远程访问配置',
    'cam.li3': '录像方式、画质与存储天数设置', 'cam.li4': '现有系统的故障诊断与恢复',
    'cam.precioDet': '按已安装并配置完成的摄像头计价', 'cam.cta': '索取报价',
    'part.kicker': '商铺与个人客户', 'part.titulo': '同样的服务，适配您的规模',
    'part.texto': '同样的技术服务，按您的实际需求配置。商铺、加油站、诊所，或是一台运行不正常的电脑，都在服务范围内。',
    'part.li1': '电脑维修与性能优化', 'part.li2': '打印机及外设安装',
    'part.li3': 'WiFi 断线或信号覆盖不全', 'part.li4': '病毒清除与文件恢复',
    'part.li5': '重要照片与文件备份', 'part.li6': '店铺或住宅安防监控',
    'part.precioDet': '上门服务最长 1.5 小时', 'part.cta': '预约上门服务',
    'proc.kicker': '服务流程', 'proc.titulo': '工作流程',
    'proc.p1t': '您预约', 'proc.p1d': '在日历上选择日期和时间，或通过 WhatsApp 联系我。我会以邮件确认。',
    'proc.p2t': '我检测', 'proc.p2d': '我会实地检查您的设备、网络与安全状况。任何影响业务运行的变更，均会在实施前完成规划并与您确认。',
    'proc.p3t': '交付方案', 'proc.p3d': '您将收到一份书面报告，包含检测结果与行动方案，按优先级和费用排序。',
    'proc.p4t': '执行实施', 'proc.p4d': '由您决定处理哪些项目以及何时处理。已确认的工作将安排确定日期，并提供固定报价。',
    'sob.kicker': '关于我', 'sob.titulo': '为您服务的是谁',
    'sob.p1': '我是 Alex Riveros，亚松森的 IT 支持与基础设施分析师。四年多来，我一直负责企业信息技术的运维管理：从日常服务台到网络、视频服务器和 Microsoft 365 环境。',
    'sob.p2': '我目前就读计算机工程专业最后一年，并持有所运维设备原厂颁发的官方认证。',
    'sob.linkedin': '查看我的领英主页', 'sob.certs': '专业认证',
    'ag.kicker': '预约', 'ag.titulo': '预约您的服务',
    'ag.intro': '选择适合您的日期和时间。您将收到包含全部信息的邮件确认。',
    'ag.pendiente': '请通过 WhatsApp 联系我，我会告知可预约的时间。<br>我们当场确定日期、时间和服务范围。',
    'ag.wa': '通过 WhatsApp 联系',
    'ag.alt': '更习惯用邮件？<a href="mailto:alex.riveros004@gmail.com">alex.riveros004@gmail.com</a>',
    'pie.nombre': 'Alex Riveros — IT 技术支持', 'pie.detalle': '巴拉圭，亚松森及大亚松森地区',
    'pie.legal': '© <span id="anio"></span> Alex Riveros. 保留所有权利。'
  }
};

/* ============================================================
   MOTOR DE TRADUCCIÓN
   ============================================================ */
const IDIOMA_POR_DEFECTO = 'es';
const CLAVE_GUARDADA = 'idiomaPreferido';

function aplicarIdioma(codigo) {
  const t = IDIOMAS[codigo] || IDIOMAS[IDIOMA_POR_DEFECTO];

  // Texto plano
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = t[el.dataset.i18n];
    if (v) el.textContent = v;
  });

  // Texto que contiene etiquetas HTML (negritas, enlaces, saltos)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = t[el.dataset.i18nHtml];
    if (v) el.innerHTML = v;
  });

  // Etiquetas para lectores de pantalla
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const v = t[el.dataset.i18nAria];
    if (v) el.setAttribute('aria-label', v);
  });

  // Título de la pestaña y descripción para buscadores
  if (t['doc.title']) document.title = t['doc.title'];
  const desc = document.querySelector('meta[name="description"]');
  if (desc && t['doc.desc']) desc.setAttribute('content', t['doc.desc']);

  // Atributo lang del documento: lo usan los lectores de pantalla
  // para elegir la pronunciación correcta.
  document.documentElement.lang = codigo;

  // El año del pie vive dentro de un texto traducible, así que se
  // vuelve a escribir cada vez que se cambia de idioma.
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  try { localStorage.setItem(CLAVE_GUARDADA, codigo); } catch (e) { /* modo privado */ }
}

function idiomaInicial() {
  // 1) El que el visitante eligió la vez anterior
  try {
    const guardado = localStorage.getItem(CLAVE_GUARDADA);
    if (guardado && IDIOMAS[guardado]) return guardado;
  } catch (e) { /* localStorage bloqueado */ }

  // 2) El idioma configurado en su navegador
  const navegador = (navigator.language || '').slice(0, 2).toLowerCase();
  if (IDIOMAS[navegador]) return navegador;

  // 3) Español
  return IDIOMA_POR_DEFECTO;
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('selectorIdioma');
  const inicial = idiomaInicial();
  selector.value = inicial;
  aplicarIdioma(inicial);
  selector.addEventListener('change', (e) => aplicarIdioma(e.target.value));
});
