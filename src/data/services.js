const services = [
  {
    id: 1,
    nombre: "Manicura tradicional",
    descripcion:
      "Renová tus manos con una manicura clásica que incluye limpieza, limado y esmaltado con una amplia gama de colores. Ideal para quienes buscan elegancia y cuidado diario.",
    precio: 3000,
    stock: 10,
    imagen: "/img/manicura.jpg",
    categoria: "unas",
  },
  {
    id: 2,
    nombre: "Manicura semipermanente",
    descripcion:
      "Lucí uñas perfectas durante semanas con nuestro esmaltado semipermanente. Acabado brillante, sin astillas y con una duración de hasta 15 días. ¡Decile chau al esmalte descascarado!",
    precio: 5000,
    stock: 8,
    imagen: "/img/manicura_semipermanente.jpg",
    categoria: "unas",
  },
  {
    id: 3,
    nombre: "Esmaltado permanente en pies",
    descripcion:
      "Disfrutá de pies impecables por mucho más tiempo. Nuestro esmaltado permanente en pies asegura un acabado prolijo, resistente y perfecto para toda ocasión.",
    precio: 4500,
    stock: 6,
    imagen: "/img/esmaltado_pies.jpg",
    categoria: "unas",
  },
  {
    id: 4,
    nombre: "Esculpidas en acrílico",
    descripcion:
      "Transformá tus manos con uñas esculpidas en acrílico. Elegí el largo y diseño que más te guste y obtené un look sofisticado, resistente y personalizado.",
    precio: 7000,
    stock: 5,
    imagen: "/img/unas.avif",
    categoria: "unas",
  },
  {
    id: 5,
    nombre: "Depilación de cejas con cera",
    descripcion:
      "Definí tu mirada con un diseño profesional de cejas. Utilizamos cera tibia hipoalergénica para lograr una forma natural, armoniosa y sin irritaciones.",
    precio: 1500,
    stock: 12,
    imagen: "/img/cera_cejas.avif",
    categoria: "depilacion",
  },
  {
    id: 6,
    nombre: "Depilación cavado completo",
    descripcion:
      "Sentite segura y cómoda con nuestra depilación de cavado total. Técnica rápida, delicada y efectiva para una piel suave y sin vellos por semanas.",
    precio: 4000,
    stock: 10,
    imagen: "/img/depilacion_cavado.webp",
    categoria: "depilacion",
  },
  {
    id: 7,
    nombre: "Depilación piernas completas",
    descripcion:
      "Lográ unas piernas suaves y radiantes con nuestra depilación integral. Utilizamos productos de alta calidad para asegurar resultados duraderos y confortables.",
    precio: 6000,
    stock: 8,
    imagen: "/img/depilacion_piernas.jpg",
    categoria: "depilacion",
  },
  {
    id: 8,
    nombre: "Depilación facial",
    descripcion:
      "Eliminá el vello no deseado del rostro con nuestra depilación facial precisa. Ideal para bozo, mentón y mejillas, dejando tu piel suave y limpia al instante.",
    precio: 2000,
    stock: 10,
    imagen: "/img/depilacion_facial.webp",
    categoria: "depilacion",
  },
  {
    id: 9,
    nombre: "Limpieza facial profunda",
    descripcion:
      "Renová tu piel con una limpieza profunda que elimina impurezas, puntos negros y células muertas. Ideal para recuperar la frescura y luminosidad natural del rostro.",
    precio: 5500,
    stock: 6,
    imagen: "/img/limpieza_facial.webp",
    categoria: "facial",
  },
  {
    id: 10,
    nombre: "Hidratación facial intensiva",
    descripcion:
      "Devolvé la vitalidad a tu rostro con una hidratación profunda a base de mascarillas y principios activos. Tu piel quedará suave, nutrida y con un brillo saludable.",
    precio: 5000,
    stock: 7,
    imagen: "/img/hidratacion_facial.avif",
    categoria: "facial",
  },
  {
    id: 11,
    nombre: "Lifting facial sin cirugía",
    descripcion:
      "Tratamiento rejuvenecedor no invasivo que tonifica la piel, atenúa arrugas y redefine el óvalo facial. Resultados visibles desde la primera sesión.",
    precio: 9500,
    stock: 4,
    imagen: "/img/lifting_facial.jpg",
    categoria: "facial",
  },
  {
    id: 12,
    nombre: "Masaje descontracturante",
    descripcion:
      "Liberá el estrés y la tensión muscular con este masaje que actúa sobre zonas clave del cuerpo. Ideal para dolores de espalda, cuello y hombros.",
    precio: 7000,
    stock: 5,
    imagen: "/img/masajes_relajantes.jpg",
    categoria: "corporal",
  },
  {
    id: 13,
    nombre: "Drenaje linfático manual",
    descripcion:
      "Mejorá tu circulación, reducí la retención de líquidos y sentite más liviana con este masaje terapéutico suave y relajante. Excelente complemento para tratamientos estéticos.",
    precio: 8000,
    stock: 5,
    imagen: "/img/drenaje_linfatico.jpg",
    categoria: "corporal",
  },
  {
    id: 14,
    nombre: "Tratamiento reductor de abdomen",
    descripcion:
      "Modelá tu figura con sesiones que combinan masajes localizados, productos reafirmantes y técnicas específicas. Ideal para reducir medidas en zona abdominal.",
    precio: 9000,
    stock: 4,
    imagen: "/img/tratamiento_abdomen.webp",
    categoria: "corporal",
  },
  {
    id: 15,
    nombre: "Radiofrecuencia facial",
    descripcion:
      "Estimula la producción de colágeno y mejora la firmeza de la piel con este tratamiento de última generación. Ideal para combatir flacidez sin cirugía.",
    precio: 8500,
    stock: 5,
    imagen: "/img/radiofrecuencia.avif",
    categoria: "facial",
  },
  {
    id: 16,
    nombre: "Peeling químico suave",
    descripcion:
      "Renová la textura de tu piel con este tratamiento que elimina células muertas, manchas superficiales y deja el rostro suave y luminoso.",
    precio: 7500,
    stock: 4,
    imagen: "/img/peeling_quimico.jpg",
    categoria: "facial",
  },
  {
    id: 17,
    nombre: "Depilación axilas",
    descripcion:
      "Lográ axilas suaves y sin irritación con nuestra técnica rápida y efectiva. Ideal para lucir prendas sin preocuparte por el vello.",
    precio: 1800,
    stock: 10,
    imagen: "/img/depilacion_axilas.avif",
    categoria: "depilacion",
  },
  {
    id: 18,
    nombre: "Kapping en gel",
    descripcion:
      "Fortalecé tus uñas naturales con un recubrimiento en gel transparente o color, que aporta brillo, firmeza y un acabado profesional.",
    precio: 6000,
    stock: 6,
    imagen: "/img/kapping.webp",
    categoria: "unas",
  },
  {
    id: 19,
    nombre: "Tratamiento anticelulitis",
    descripcion:
      "Mejorá la textura de tu piel con un tratamiento focalizado que combate la celulitis mediante masajes, productos térmicos y técnicas drenantes.",
    precio: 8500,
    stock: 5,
    imagen: "/img/celulitis.jpg",
    categoria: "corporal",
  },
  {
    id: 20,
    nombre: "Exfoliación corporal",
    descripcion:
      "Eliminá células muertas y renová tu piel con una exfoliación corporal completa. Ideal para antes del verano o eventos especiales.",
    precio: 6000,
    stock: 7,
    imagen: "/img/exfoliacion.jpg",
    categoria: "corporal",
  },
];

function exportarTodosLosServicios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(services);
    }, 2000);
  });
}

function exportarServicioPorId(id) {
  return new Promise((resolve, reject) => {
    const servicio = services.find((service) => service.id === Number(id));
    setTimeout(() => {
      if (servicio) {
        resolve(servicio);
      } else {
        reject(new Error("Servicio no encontrado"));
      }
    }, 2000);
  });
}

export { exportarTodosLosServicios, exportarServicioPorId };
