// Datos para los consejos (con placeholders para imágenes)
const consejos = [
    {
        titulo: "1. Plantación adecuada",
        descripcion: "Una correcta plantación es crucial para el desarrollo saludable del árbol.",
        imagen: "Imágenes/consejo1.jpg", // Ruta de la imagen
        detalles: [
            "Elegir una ubicación con suficiente espacio y luz solar.",
            "Plantar en un suelo bien drenado y enriquecido con materia orgánica.",
            "Realizar un hoyo de al menos 1 metro de diámetro y 80 cm de profundidad, rellenándolo con tierra y humus de lombriz.",
            "Evitar heladas, asegurándose de que la plantación se realice en épocas adecuadas."
        ],
        imagenModal: "Imágenes/consejo1.jpg" // Ruta de la imagen en el modal
    },
    {
        titulo: "2. Riego eficiente",
        descripcion: "El riego debe adaptarse a la especie y condiciones climáticas.",
        imagen: "Imágenes/consejo2.jpg", // Ruta de la imagen
        detalles: [
            "Proporcionar riego constante en el primer año.",
            "Ajustar la frecuencia según la especie y la estación.",
            "Evitar el encharcamiento, especialmente en especies sensibles como los cerezos y ciruelos.",
            "Usar riego por goteo o microaspersores para una distribución eficiente del agua."
        ],
        imagenModal: "Imágenes/consejo2.jpg" // Ruta de la imagen en el modal
    },
    {
        titulo: "3. Poda regular",
        descripcion: "La poda permite un crecimiento saludable y mejora la producción de frutos.",
        imagen: "Imágenes/consejo3.jpg", // Ruta de la imagen
        detalles: [
            "Podar anualmente para eliminar ramas secas, enfermas o mal ubicadas.",
            "Realizar la poda en noviembre, durante el reposo vegetativo.",
            "Favorecer la entrada de luz y aire al interior del árbol.",
            "En frutales jóvenes, equilibrar el crecimiento entre la copa y las raíces mediante podas ligeras."
        ],
        imagenModal: "Imágenes/consejo3.jpg" // Ruta de la imagen en el modal
    },
    {
        titulo: "4. Fertilización adecuada",
        descripcion: "Los frutales consumen grandes cantidades de nutrientes, por lo que se recomienda una fertilización adecuada.",
        imagen: "Imágenes/consejo4.png", // Ruta de la imagen
        detalles: [
            "Aplicar abono orgánico en invierno, como compost, humus de lombriz o estiércol.",
            "Utilizar fertilizantes específicos en primavera y durante la formación del fruto.",
            "Evitar el exceso de fertilizantes químicos que puedan afectar el equilibrio del suelo."
        ],
        imagenModal: "Imágenes/consejo4.png" // Ruta de la imagen en el modal
    },
    {
        titulo: "5. Protección contra plagas y enfermedades",
        descripcion: "Las plagas y enfermedades pueden afectar la salud del frutal y su producción.",
        imagen: "Imágenes/consejo5.jpg", // Ruta de la imagen
        detalles: [
            "Inspeccionar regularmente los árboles en busca de signos de infestación.",
            "Aplicar tratamientos preventivos con productos naturales o químicos según sea necesario.",
            "Utilizar trampas y depredadores naturales para el control de plagas.",
            "Mantener la zona libre de malezas y restos vegetales que puedan albergar patógenos."
        ],
        imagenModal: "Imágenes/consejo5.jpg" // Ruta de la imagen en el modal
    },
    {
        titulo: "6. Injertos en frutales",
        descripcion: "El injerto es una técnica utilizada para mejorar las características del árbol.",
        imagen: "Imágenes/consejo6.jpg", // Ruta de la imagen
        detalles: [
            "Permite combinar variedades resistentes y productivas.",
            "Favorece la adaptación a condiciones específicas del suelo y clima.",
            "Mejora la calidad y cantidad de frutos."
        ],
        imagenModal: "Imágenes/consejo6.jpg" // Ruta de la imagen en el modal
    },
    {
        titulo: "7. Protección contra heladas",
        descripcion: "Las heladas pueden afectar gravemente la floración y producción de los frutales.",
        imagen: "Imágenes/consejo7.jpeg", // Ruta de la imagen
        detalles: [
            "Monitorear las previsiones meteorológicas.",
            "Utilizar cobertores plásticos o lonas durante las noches más frías.",
            "Implementar calentadores en huertos de gran escala.",
            "Evitar la poda tardía para no estimular brotes sensibles a bajas temperaturas."
        ],
        imagenModal: "Imágenes/consejo7.jpeg" // Ruta de la imagen en el modal
    },
    {
        titulo: "8. Mantenimiento invernal",
        descripcion: "El invierno es una época ideal para realizar tareas de mantenimiento.",
        imagen: "Imágenes/consejo8.jpg", // Ruta de la imagen
        detalles: [
            "Plantar nuevos árboles.",
            "Eliminar malas hierbas alrededor del tronco.",
            "Abonar con materia orgánica para fortalecer el árbol.",
            "Enderezar los troncos de frutales jóvenes para evitar deformaciones."
        ],
        imagenModal: "Imágenes/consejo8.jpg" // Ruta de la imagen en el modal
    }
];

// Función para generar tarjetas de consejos
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

// Función para mostrar detalles en el modal
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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generarConsejos(); // Genera las tarjetas de consejos
});