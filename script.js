const consejos = [
    {
        titulo: "1. Plantación adecuada",
        descripcion: "Una correcta plantación es crucial para el desarrollo saludable del árbol.",
        imagen: "Imágenes/consejo1.jpg",
        detalles: [
            "Elegir una ubicación con suficiente espacio y luz solar.",
            "Plantar en un suelo bien drenado y enriquecido con materia orgánica.",
            "Realizar un hoyo de al menos 1 metro de diámetro y 80 cm de profundidad, rellenándolo con tierra y humus de lombriz.",
            "Evitar heladas, asegurándose de que la plantación se realice en épocas adecuadas."
        ],
        imagenModal: "Imágenes/consejo1.jpg"
    },
    {
        titulo: "2. Riego eficiente",
        descripcion: "El riego debe adaptarse a la especie y condiciones climáticas.",
        imagen: "Imágenes/consejo2.jpg",
        detalles: [
            "Proporcionar riego constante en el primer año.",
            "Ajustar la frecuencia según la especie y la estación.",
            "Evitar el encharcamiento, especialmente en especies sensibles como los cerezos y ciruelos.",
            "Usar riego por goteo o microaspersores para una distribución eficiente del agua."
        ],
        imagenModal: "Imágenes/consejo2.jpg"
    },
    {
        titulo: "3. Poda regular",
        descripcion: "La poda permite un crecimiento saludable y mejora la producción de frutos.",
        imagen: "Imágenes/consejo3.jpg",
        detalles: [
            "Podar anualmente para eliminar ramas secas, enfermas o mal ubicadas.",
            "Realizar la poda en noviembre, durante el reposo vegetativo.",
            "Favorecer la entrada de luz y aire al interior del árbol.",
            "En frutales jóvenes, equilibrar el crecimiento entre la copa y las raíces mediante podas ligeras."
        ],
        imagenModal: "Imágenes/consejo3.jpg"
    },
    {
        titulo: "4. Fertilización adecuada",
        descripcion: "Los frutales consumen grandes cantidades de nutrientes, por lo que se recomienda una fertilización adecuada.",
        imagen: "Imágenes/consejo4.png",
        detalles: [
            "Aplicar abono orgánico en invierno, como compost, humus de lombriz o estiércol.",
            "Utilizar fertilizantes específicos en primavera y durante la formación del fruto.",
            "Evitar el exceso de fertilizantes químicos que puedan afectar el equilibrio del suelo."
        ],
        imagenModal: "Imágenes/consejo4.png"
    },
    {
        titulo: "5. Protección contra plagas y enfermedades",
        descripcion: "Las plagas y enfermedades pueden afectar la salud del frutal y su producción.",
        imagen: "Imágenes/consejo5.jpg",
        detalles: [
            "Inspeccionar regularmente los árboles en busca de signos de infestación.",
            "Aplicar tratamientos preventivos con productos naturales o químicos según sea necesario.",
            "Utilizar trampas y depredadores naturales para el control de plagas.",
            "Mantener la zona libre de malezas y restos vegetales que puedan albergar patógenos."
        ],
        imagenModal: "Imágenes/consejo5.jpg"
    },
    {
        titulo: "6. Injertos en frutales",
        descripcion: "El injerto es una técnica utilizada para mejorar las características del árbol.",
        imagen: "Imágenes/consejo6.jpg",
        detalles: [
            "Permite combinar variedades resistentes y productivas.",
            "Favorece la adaptación a condiciones específicas del suelo y clima.",
            "Mejora la calidad y cantidad de frutos."
        ],
        imagenModal: "Imágenes/consejo6.jpg"
    },
    {
        titulo: "7. Protección contra heladas",
        descripcion: "Las heladas pueden afectar gravemente la floración y producción de los frutales.",
        imagen: "Imágenes/consejo7.jpeg",
        detalles: [
            "Monitorear las previsiones meteorológicas.",
            "Utilizar cobertores plásticos o lonas durante las noches más frías.",
            "Implementar calentadores en huertos de gran escala.",
            "Evitar la poda tardía para no estimular brotes sensibles a bajas temperaturas."
        ],
        imagenModal: "Imágenes/consejo7.jpeg"
    },
    {
        titulo: "8. Mantenimiento invernal",
        descripcion: "El invierno es una época ideal para realizar tareas de mantenimiento.",
        imagen: "Imágenes/consejo8.jpg",
        detalles: [
            "Plantar nuevos árboles.",
            "Eliminar malas hierbas alrededor del tronco.",
            "Abonar con materia orgánica para fortalecer el árbol.",
            "Enderezar los troncos de frutales jóvenes para evitar deformaciones."
        ],
        imagenModal: "Imágenes/consejo8.jpg"
    }
];

const guias = [
    {
        titulo: "1. Propagación",
        descripcion: "Para propagar árboles frutales de alta calidad se requiere experiencia y habilidades especiales.",
        imagen: "Imágenes/guia1.jpg",
        detalles: [
            "Es mejor dejar la propagación en manos de viveristas.",
            "Los mejores árboles para comprar son aquéllos cuidadosamente seleccionados e injertados.",
            "Los árboles injertados son copias idénticas de la planta madre."
        ],
        imagenModal: "Imágenes/guia1.jpg"
    },
    {
        titulo: "2. Siembra",
        descripcion: "Se deben tomar cuidados especiales para sembrar plántulas o variedades injertadas.",
        imagen: "Imágenes/guia2.jpg",
        detalles: [
            "Haga un agujero el doble de profundo que las raíces de la plántula.",
            "Mezcle una cantidad generosa de composta y fertilizante con el suelo antes de colocar la planta.",
            "Mientras se sostiene la planta, rellene el agujero con tierra y más composta.",
            "Si el área es húmeda, siembre el árbol en un montículo de tierra más alto que la superficie general del suelo.",
            "Si el área es seca, siembre el frutal en una cavidad más baja que el suelo de alrededor."
        ],
        imagenModal: "Imágenes/guia2.jpg"
    },
    {
        titulo: "3. Espacio entre árboles frutales",
        descripcion: "Siembre los árboles dejando espacio entre ellos para reducir la competencia.",
        imagen: "Imágenes/guia3.jpg",
        detalles: [
            "Observe un ejemplar adulto del árbol que quiere sembrar para hacerse una idea del espacio que ocupará.",
            "Mantenga una distancia adecuada entre árboles para evitar la competencia por nutrientes y luz."
        ],
        imagenModal: "Imágenes/guia3.jpg"
    },
    {
        titulo: "4. Control de plagas y enfermedades",
        descripcion: "Los árboles frutales estarán mejor preparados para resistir plagas y enfermedades si están plantados en condiciones favorables.",
        imagen: "Imágenes/guia4.png",
        detalles: [
            "Plante los árboles en condiciones adecuadas: luz solar, sombra, protección, drenaje y tipo de suelo.",
            "Practique una buena higiene agrícola: pode las ramas muertas y no lleve al huerto plantas infectadas.",
            "Inspeccione regularmente los árboles en busca de signos de plagas o enfermedades."
        ],
        imagenModal: "Imágenes/guia4.png"
    },
    {
        titulo: "5. Cultivo de frutales",
        descripcion: "Los árboles frutales crecerán y producirán mejor si reciben los cuidados necesarios.",
        imagen: "Imágenes/guia5.jpg",
        detalles: [
            "Podas: Al sembrar, seleccione ramas fuertes superiores para que se conviertan en el tronco del árbol.",
            "Pode las ramas que están muy cerca o rozándose entre ellas para permitir la circulación de aire y luz.",
            "Fertilización: Aplique 2 kg de composta al plantar y luego cada cuatro meses.",
            "Evite fertilizar durante la floración; aplique fertilizante antes de la floración y cuando el fruto esté medio maduro.",
            "Riegos: Los frutales jóvenes necesitan riegos diarios durante la temporada seca en los dos primeros años."
        ],
        imagenModal: "Imágenes/guia5.jpg"
    }
];

const beneficios = [
    {
        titulo: "1. Mejora de la calidad del aire y reducción de la contaminación",
        descripcion: "Los árboles frutales absorben dióxido de carbono (CO₂), liberan oxígeno y filtran contaminantes del aire como partículas en suspensión y gases nocivos. Además, reducen el efecto de isla de calor en las ciudades al proporcionar sombra y humedad, ayudando a mitigar los efectos del cambio climático.",
        imagen: "Imágenes/beneficio1.jpg",
        imagenModal: "Imágenes/beneficio1.jpg"
    },
    {
        titulo: "2. Conservación de la biodiversidad y protección de especies",
        descripcion: "Estos árboles sirven de hábitat y fuente de alimento para una gran variedad de animales, incluyendo aves, abejas y mariposas, promoviendo la polinización y el equilibrio ecológico. La presencia de polinizadores es esencial para la producción de frutos y, en consecuencia, para la seguridad alimentaria.",
        imagen: "Imágenes/beneficio2.jpg",
        imagenModal: "Imágenes/beneficio2.jpg"
    },
    {
        titulo: "3. Enriquecimiento y protección del suelo",
        descripcion: "Los árboles frutales contribuyen a mejorar la estructura del suelo mediante la descomposición de sus hojas y frutos, lo que incrementa su fertilidad. Además, sus raíces ayudan a prevenir la erosión y mejoran la retención de agua, lo que beneficia a otros cultivos y plantas cercanas.",
        imagen: "Imágenes/beneficio3.jpeg",
        imagenModal: "Imágenes/beneficio3.jpeg"
    },
    {
        titulo: "4. Producción de alimentos saludables y autosuficiencia",
        descripcion: "El cultivo de árboles frutales permite el acceso a frutas frescas y orgánicas, ricas en vitaminas, minerales y antioxidantes. Esto fomenta una alimentación saludable y reduce la dependencia de productos industrializados, que a menudo contienen pesticidas y conservantes.",
        imagen: "Imágenes/beneficio4.jpg",
        imagenModal: "Imágenes/beneficio4.jpg"
    },
    {
        titulo: "5. Impacto económico positivo",
        descripcion: "Los árboles frutales pueden ser una fuente de ingresos adicionales a través de la venta de frutas y productos derivados. Asimismo, contribuyen al ahorro familiar al reducir el gasto en la compra de frutas y pueden aumentar el valor de las propiedades donde se encuentran.",
        imagen: "Imágenes/beneficio5.jpg",
        imagenModal: "Imágenes/beneficio5.jpg"
    },
    {
        titulo: "6. Fomento de la agricultura urbana y la educación ambiental",
        descripcion: "Plantar árboles frutales en entornos urbanos ayuda a sensibilizar a la población sobre la importancia de la producción local de alimentos y la sostenibilidad. Además, brinda la oportunidad de enseñar a niños y adultos sobre agricultura, ciclos de cultivo y el impacto del ser humano en el medio ambiente.",
        imagen: "Imágenes/beneficio6.jpg",
        imagenModal: "Imágenes/beneficio6.jpg"
    },
    {
        titulo: "7. Beneficios psicológicos y sociales",
        descripcion: "La presencia de árboles en el entorno urbano contribuye al bienestar mental, reduciendo el estrés y mejorando la calidad de vida. Su sombra y belleza crean espacios agradables para la convivencia, fortaleciendo el sentido de comunidad.",
        imagen: "Imágenes/beneficio7.jpg",
        imagenModal: "Imágenes/beneficio7.jpg"
    },
    {
        titulo: "8. Sostenibilidad y reducción de la huella de carbono",
        descripcion: "El consumo de frutas cultivadas localmente reduce la demanda de productos comercialmente distribuidos, lo que disminuye el uso de plásticos para empaques y la contaminación generada por el transporte de larga distancia. Esto convierte a los árboles frutales en una alternativa ecológica y sustentable.",
        imagen: "Imágenes/beneficio8.png",
        imagenModal: "Imágenes/beneficio8.png"
    }
];

const arbolesFrutales = [
    {
        nombre: "Manzano (Malus domestica)",
        imagen: "Imágenes/manzano.jpg",
        imagenModal: "Imágenes/manzano.jpg",
        caracteristicas: {
            fruto: "Manzanas, variedad de colores (rojo, verde, amarillo).",
            altura: "3-4 metros.",
            hojas: "Verdes, ovaladas.",
            floracion: "Blanca o rosada en primavera.",
            clima: "Templado, frío en invierno.",
            suelo: "Bien drenado, ligeramente ácido."
        },
        cuidados: {
            riego: "Necesita riego moderado.",
            poda: "Poda anual para mejorar la producción.",
            fertilizacion: "Fertilización en primavera.",
            plagas: "Protección contra plagas (pulgones, orugas)."
        },
        plantado: "Mejor en otoño o primavera. Espacio entre árboles: 2-3 metros."
    },
    {
        nombre: "Peral (Pyrus)",
        imagen: "Imágenes/peral.jpg",
        imagenModal: "Imágenes/peral.jpg",
        caracteristicas: {
            fruto: "Peras, variedad de formas (ovaladas, redondas).",
            altura: "4-5 metros.",
            hojas: "Verdes, dentadas.",
            floracion: "Blancas, en primavera.",
            clima: "Templado, frío en invierno.",
            suelo: "Suelto, bien drenado."
        },
        cuidados: {
            riego: "Riego regular, pero no en exceso.",
            poda: "Poda en invierno para eliminar ramas secas.",
            fertilizacion: "Fertilización al inicio de la primavera.",
            plagas: "Controlar plagas (cochinillas, pulgones)."
        },
        plantado: "Mejor en otoño. Espacio entre árboles: 3-4 metros."
    },
    {
        nombre: "Cítricos (Citrus)",
        imagen: "Imágenes/citricos.jpg",
        imagenModal: "Imágenes/citricos.jpg",
        caracteristicas: {
            fruto: "Naranjas, limones, pomelos, mandarinas.",
            altura: "3-6 metros, dependiendo de la variedad.",
            hojas: "Verdes, brillantes, alargadas.",
            floracion: "Blancas o blancas-rosadas, en primavera.",
            clima: "Cálido, subtropical.",
            suelo: "Rico en nutrientes, bien drenado."
        },
        cuidados: {
            riego: "Riego frecuente en climas secos.",
            poda: "Poda para formar copa abierta.",
            fertilizacion: "Fertilización regular con abono específico para cítricos.",
            plagas: "Protección contra plagas como ácaros y cochinillas."
        },
        plantado: "Mejor en primavera. Espacio entre árboles: 4-5 metros."
    },
    {
        nombre: "Cerezo (Prunus avium)",
        imagen: "Imágenes/cerezo.jpg",
        imagenModal: "Imágenes/cerezo.jpg",
        caracteristicas: {
            fruto: "Cerezas rojas o negras.",
            altura: "4-6 metros.",
            hojas: "Verdes, ovadas, brillantes.",
            floracion: "Blanca, en primavera.",
            clima: "Frío, resistente a heladas.",
            suelo: "Ácido y bien drenado."
        },
        cuidados: {
            riego: "Riego moderado.",
            poda: "Poda para eliminar ramas muertas.",
            fertilizacion: "Fertilización en primavera.",
            plagas: "Protección contra hongos como la moniliosis."
        },
        plantado: "Mejor en otoño o principios de primavera. Espacio entre árboles: 4-5 metros."
    },
    {
        nombre: "Almendro (Prunus dulcis)",
        imagen: "Imágenes/almendro.jpg",
        imagenModal: "Imágenes/almendro.jpg",
        caracteristicas: {
            fruto: "Almendras, secas o verdes.",
            altura: "3-4 metros.",
            hojas: "Alargadas, finas.",
            floracion: "Rosas o blancas, en invierno o principios de primavera.",
            clima: "Cálido, mediterráneo.",
            suelo: "Seco, bien drenado."
        },
        cuidados: {
            riego: "Poca agua, resiste sequías.",
            poda: "Poda anual para eliminar ramas muertas.",
            fertilizacion: "Fertilización baja en nitrógeno.",
            plagas: "Protección contra plagas como la polilla de la almendra."
        },
        plantado: "Mejor en otoño. Espacio entre árboles: 3-4 metros."
    },
    {
        nombre: "Durazno o Melocotonero (Prunus persica)",
        imagen: "Imágenes/durazno.jpg",
        imagenModal: "Imágenes/durazno.jpg",
        caracteristicas: {
            fruto: "Duraznos o melocotones, jugosos y dulces.",
            altura: "4-5 metros.",
            hojas: "Largas, de color verde claro.",
            floracion: "Rosas o rojas, en primavera.",
            clima: "Templado, frío en invierno.",
            suelo: "Rico, bien drenado."
        },
        cuidados: {
            riego: "Riego frecuente, pero no en exceso.",
            poda: "Poda de ramas muertas y en exceso.",
            fertilizacion: "Fertilización en primavera.",
            plagas: "Protección contra plagas (mosca de la fruta, pulgones)."
        },
        plantado: "Mejor en primavera. Espacio entre árboles: 3-4 metros."
    },
    {
        nombre: "Higueras (Ficus carica)",
        imagen: "Imágenes/higuera.jpg",
        imagenModal: "Imágenes/higuera.jpg",
        caracteristicas: {
            fruto: "Higos, dulces y jugosos.",
            altura: "3-5 metros.",
            hojas: "Grandes, lobuladas.",
            floracion: "Inconspicua, en el interior del fruto.",
            clima: "Templado y cálido.",
            suelo: "Suelto, bien drenado."
        },
        cuidados: {
            riego: "Riego moderado.",
            poda: "Poda para controlar el tamaño.",
            fertilizacion: "Fertilización ligera en primavera.",
            plagas: "Resistente a enfermedades, pero susceptible a hongos en ambientes muy húmedos."
        },
        plantado: "Mejor en primavera o verano. Espacio entre árboles: 4-5 metros."
    },
    {
        nombre: "Granado (Punica granatum)",
        imagen: "Imágenes/granado.jpg",
        imagenModal: "Imágenes/granado.jpg",
        caracteristicas: {
            fruto: "Granadas, con semillas jugosas.",
            altura: "3-5 metros.",
            hojas: "Alargadas, verdes.",
            floracion: "Rojas o anaranjadas, en verano.",
            clima: "Cálido, seco.",
            suelo: "Ligero y bien drenado."
        },
        cuidados: {
            riego: "Riego regular en climas secos.",
            poda: "Poda ligera para mantener forma.",
            fertilizacion: "Fertilización ligera, no en exceso.",
            plagas: "Resistente a plagas y enfermedades."
        },
        plantado: "Mejor en primavera. Espacio entre árboles: 3 metros."
    },
    {
        nombre: "Kiwi (Actinidia deliciosa)",
        imagen: "Imágenes/kiwi.jpg",
        imagenModal: "Imágenes/kiwi.jpg",
        caracteristicas: {
            fruto: "Kiwis, pequeños y peludos.",
            altura: "Enredadera, hasta 9 metros de altura.",
            hojas: "Grandes, ovaladas.",
            floracion: "Blanca, en primavera.",
            clima: "Templado, requiere frío invernal.",
            suelo: "Ácido, bien drenado."
        },
        cuidados: {
            riego: "Necesita riego constante.",
            poda: "Poda para controlar el crecimiento.",
            fertilizacion: "Fertilización en primavera y otoño.",
            plagas: "Protección contra heladas y plagas (moscas de la fruta)."
        },
        plantado: "Mejor en primavera. Espacio entre plantas: 2-3 metros."
    },
    {
        nombre: "Ciruelo (Prunus domestica)",
        imagen: "Imágenes/ciruelo.jpg",
        imagenModal: "Imágenes/ciruelo.jpg",
        caracteristicas: {
            fruto: "Ciruelas, moradas, rojas o amarillas.",
            altura: "4-6 metros.",
            hojas: "Verdes, ovaladas, dentadas.",
            floracion: "Blanca o rosada, en primavera.",
            clima: "Templado.",
            suelo: "Suelto, bien drenado."
        },
        cuidados: {
            riego: "Riego moderado.",
            poda: "Poda para mejorar la ventilación.",
            fertilizacion: "Fertilización moderada.",
            plagas: "Protección contra plagas como pulgones y moscas de la fruta."
        },
        plantado: "Mejor en otoño o primavera. Espacio entre árboles: 3-4 metros."
    }
];

function generarConsejos() {
    const container = document.getElementById('consejos-container');
    container.innerHTML = consejos.map((consejo, index) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${consejo.imagen}" alt="${consejo.titulo}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${consejo.titulo}</h3>
                    <p class="card-text">${consejo.descripcion}</p>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="mostrarDetalles(${index})">Leer más</button>
                </div>
            </div>
        </div>
    `).join('');
}

function mostrarDetalles(index) {
    const consejo = consejos[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div>
            <h4>${consejo.titulo}</h4>
            <h5>Recomendaciones:</h5>
            <ol>
                ${consejo.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
            </ol>
            <img src="${consejo.imagenModal}" alt="${consejo.titulo}" class="img-fluid mt-3">
        </div>
    `;
}

function generarGuias() {
    const container = document.getElementById('guias-container');
    container.innerHTML = guias.map((guia, index) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${guia.imagen}" alt="${guia.titulo}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${guia.titulo}</h3>
                    <p class="card-text">${guia.descripcion}</p>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="mostrarDetallesGuias(${index})">Leer más</button>
                </div>
            </div>
        </div>
    `).join('');
}

function mostrarDetallesGuias(index) {
    const guia = guias[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div>
            <h4>${guia.titulo}</h4>
            <h5>Recomendaciones:</h5>
            <ol>
                ${guia.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
            </ol>
            <img src="${guia.imagenModal}" alt="${guia.titulo}" class="img-fluid mt-3">
        </div>
    `;
}

function generarBeneficios() {
    const container = document.getElementById('beneficios-container');
    container.innerHTML = beneficios.map((beneficio, index) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${beneficio.imagen}" alt="${beneficio.titulo}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${beneficio.titulo}</h3>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="mostrarDetallesBeneficios(${index})">Leer más</button>
                </div>
            </div>
        </div>
    `).join('');
}

function mostrarDetallesBeneficios(index) {
    const beneficio = beneficios[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div>
            <h4>${beneficio.titulo}</h4>
            <p>${beneficio.descripcion}</p>
            <img src="${beneficio.imagenModal}" alt="${beneficio.titulo}" class="img-fluid mt-3">
        </div>
    `;
}

function generarArbolesFrutales() {
    const container = document.getElementById('arboles-container');
    container.innerHTML = arbolesFrutales.map((arbol, index) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${arbol.imagen}" alt="${arbol.nombre}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${arbol.nombre}</h3>
                    <button class="btn btn-success me-2 mb-2" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="mostrarCaracteristicas(${index})">Características</button>
                    <button class="btn btn-success me-2 mb-2" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="mostrarCuidados(${index})">Cuidados</button>
                    <button class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="mostrarPlantado(${index})">Plantado</button>
                </div>
            </div>
        </div>
    `).join('');
}

function mostrarCaracteristicas(index) {
    const arbol = arbolesFrutales[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div>
            <h4>${arbol.nombre}</h4>
            <h5>Características:</h5>
            <ul>
                <li><strong>Fruto:</strong> ${arbol.caracteristicas.fruto}</li>
                <li><strong>Altura:</strong> ${arbol.caracteristicas.altura}</li>
                <li><strong>Hojas:</strong> ${arbol.caracteristicas.hojas}</li>
                <li><strong>Floración:</strong> ${arbol.caracteristicas.floracion}</li>
                <li><strong>Clima:</strong> ${arbol.caracteristicas.clima}</li>
                <li><strong>Suelo:</strong> ${arbol.caracteristicas.suelo}</li>
            </ul>
            <img src="${arbol.imagenModal}" alt="${arbol.nombre}" class="img-fluid mt-3">
        </div>
    `;
}

function mostrarCuidados(index) {
    const arbol = arbolesFrutales[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div>
            <h4>${arbol.nombre}</h4>
            <h5>Cuidados:</h5>
            <ul>
                <li><strong>Riego:</strong> ${arbol.cuidados.riego}</li>
                <li><strong>Poda:</strong> ${arbol.cuidados.poda}</li>
                <li><strong>Fertilización:</strong> ${arbol.cuidados.fertilizacion}</li>
                <li><strong>Plagas:</strong> ${arbol.cuidados.plagas}</li>
            </ul>
            <img src="${arbol.imagenModal}" alt="${arbol.nombre}" class="img-fluid mt-3">
        </div>
    `;
}

function mostrarPlantado(index) {
    const arbol = arbolesFrutales[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div>
            <h4>${arbol.nombre}</h4>
            <h5>Plantado:</h5>
            <p>${arbol.plantado}</p>
            <img src="${arbol.imagenModal}" alt="${arbol.nombre}" class="img-fluid mt-3">
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    generarConsejos();
    generarGuias();
    generarBeneficios();
    generarArbolesFrutales();
});