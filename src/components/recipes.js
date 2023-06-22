const recipes = [
  {
    id: 1,
    nombre: 'Pollo al horno',
    ingredientes: ['Pollo', 'Limón', 'Tomillo'],
    categoria: 'Cena',
    descripcion: 'Un delicioso pollo al horno con hierbas',
    favorito: false,
    imagen: '../img/pollo-al-horno.jpg',
    tiempoPreparacion: '1 hora',
    porciones: 4,
    dificultad: 'Fácil',
    pasos: [
      'Precalienta el horno a 180°C.',
      'Lava el pollo y sécalo con papel absorbente.',
      'Coloca el pollo en una bandeja para horno y exprime el limón sobre él.',
      'Espolvorea el tomillo sobre el pollo y sazona con sal y pimienta al gusto.',
      'Hornea el pollo durante 45 minutos o hasta que esté dorado y bien cocido.',
      'Retira del horno y deja reposar unos minutos antes de servir.'
    ]
  },
  {
    id: 2,
    nombre: 'Pasta Carbonara',
    ingredientes: ['Spaghetti', 'Huevos', 'Queso Parmesano', 'Tocino'],
    categoria: 'Cena',
    descripcion: 'Una cremosa pasta Carbonara italiana',
    favorito: false,
    imagen: '../img/pasta-carbonara.jpg',
    tiempoPreparacion: '30 minutos',
    porciones: 2,
    dificultad: 'Media',
    pasos: [
      'Cocina los spaghetti al dente según las instrucciones del paquete.',
      'En una sartén grande, cocina el tocino hasta que esté crujiente. Retira el exceso de grasa.',
      'En un tazón aparte, bate los huevos y añade el queso parmesano rallado. Mezcla bien.',
      'Escurre los spaghetti cocidos y añádelos a la sartén con el tocino.',
      'Retira la sartén del fuego y agrega la mezcla de huevo y queso. Remueve rápidamente para que el calor de la pasta cocine los huevos y se forme una salsa cremosa.',
      'Sirve la pasta carbonara caliente y espolvorea más queso parmesano por encima si lo deseas.'
    ]
  },
  {
    id: 3,
    nombre: 'Ensalada César',
    ingredientes: ['Lechuga', 'Queso Parmesano', 'Crutones', 'Aderezo César'],
    categoria: 'Almuerzo',
    descripcion: 'Una refrescante ensalada César',
    favorito: false,
    imagen: '../img/ensalada-cesar.jpg',
    tiempoPreparacion: '15 minutos',
    porciones: 2,
    dificultad: 'Fácil',
    pasos: [
      'Lava y seca las hojas de lechuga. Trocéalas y colócalas en un bol grande.',
      'Agrega queso parmesano rallado y crutones a la lechuga.',
      'Prepara el aderezo César siguiendo las instrucciones del envase o hazlo casero mezclando aceite de oliva, jugo de limón, ajo picado, mostaza, anchoas y queso parmesano rallado.',
      'Vierte el aderezo sobre la ensalada y mezcla bien para cubrir todos los ingredientes.',
      'Sirve la ensalada César como acompañamiento o como plato principal.'
    ]
  },
  {
    id: 4,
    nombre: 'Tacos de Pescado',
    ingredientes: ['Pescado', 'Tortillas de Maíz', 'Pico de Gallo'],
    categoria: 'Cena',
    descripcion: 'Deliciosos tacos de pescado con pico de gallo',
    favorito: false,
    imagen: '../img/tacos-de-pescado.jpg',
    tiempoPreparacion: '30 minutos',
    porciones: 4,
    dificultad: 'Fácil',
    pasos: [
      'Corta el pescado en filetes delgados y sazónalos con sal y pimienta.',
      'Calienta una sartén grande con un poco de aceite y cocina los filetes de pescado hasta que estén dorados y cocidos.',
      'Calienta las tortillas de maíz en una plancha o sartén caliente.',
      'Prepara el pico de gallo picando tomate, cebolla, cilantro y chile al gusto. Exprime jugo de limón y añade sal al gusto.',
      'Rellena las tortillas con los filetes de pescado y agrega pico de gallo por encima.',
      'Sirve los tacos de pescado con limón y salsa picante si lo deseas.'
    ]
  },
  {
    id: 5,
    nombre: 'Sopa de Tomate',
    ingredientes: ['Tomates', 'Cebolla', 'Ajo', 'Caldo de Pollo'],
    categoria: 'Almuerzo',
    descripcion: 'Una sopa de tomate reconfortante',
    favorito: false,
    imagen: '../img/sopa-de-tomate.jpg',
    tiempoPreparacion: '40 minutos',
    porciones: 6,
    dificultad: 'Fácil',
    pasos: [
      'En una olla grande, calienta un poco de aceite de oliva y cocina la cebolla y el ajo picados hasta que estén dorados.',
      'Agrega los tomates pelados y troceados a la olla. Cocina por unos minutos hasta que los tomates se ablanden.',
      'Añade el caldo de pollo y lleva la mezcla a ebullición. Reduce el fuego y cocina a fuego lento durante 20-30 minutos para que los sabores se mezclen.',
      'Retira la olla del fuego y utiliza una licuadora o una batidora de inmersión para procesar la sopa hasta obtener una consistencia suave.',
      'Vuelve a calentar la sopa y sazona con sal y pimienta al gusto.',
      'Sirve la sopa de tomate caliente con un poco de crema fresca o crutones por encima si lo deseas.'
    ]
  },
  {
    id: 6,
    nombre: 'Hamburguesa Clásica',
    ingredientes: ['Pan de Hamburguesa', 'Carne de Res', 'Queso', 'Lechuga', 'Tomate', 'Cebolla'],
    categoria: 'Cena',
    descripcion: 'Una jugosa hamburguesa clásica',
    favorito: false,
    imagen: '../img/hamburguesa-clasica.jpg',
    tiempoPreparacion: '30 minutos',
    porciones: 4,
    dificultad: 'Fácil',
    pasos: [
      'Divide la carne de res en porciones y forma hamburguesas del tamaño deseado.',
      'Calienta una parrilla o sartén grande a fuego medio-alto.',
      'Cocina las hamburguesas de 3 a 5 minutos por cada lado, dependiendo del grado de cocción deseado.',
      'Mientras tanto, corta los panes de hamburguesa por la mitad y tuéstalos ligeramente.',
      'Coloca una rebanada de queso sobre cada hamburguesa y deja que se derrita.',
      'Arma las hamburguesas colocando la carne con queso sobre la mitad inferior del pan, y agrega lechuga, tomate y cebolla al gusto.',
      'Cubre con la otra mitad del pan y sirve las hamburguesas calientes.'
    ]
  },
  {
    id: 7,
    nombre: 'Arroz Frito',
    ingredientes: ['Arroz', 'Huevos', 'Zanahoria', 'Cebolla', 'Salsa de Soja'],
    categoria: 'Cena',
    descripcion: 'Un clásico arroz frito chino',
    favorito: false,
    imagen: '../img/arroz-frito.jpg',
    tiempoPreparacion: '40 minutos',
    porciones: 4,
    dificultad: 'Media',
    pasos: [
      'Cocina el arroz según las instrucciones del paquete y déjalo enfriar.',
      'En un wok o sartén grande, calienta un poco de aceite y cocina la cebolla y la zanahoria picadas hasta que estén tiernas.',
      'Empuja las verduras hacia un lado del wok y agrega los huevos batidos al espacio vacío. Remueve rápidamente hasta que los huevos estén cocidos y revueltos.',
      'Añade el arroz cocido al wok y mezcla bien con las verduras y los huevos.',
      'Agrega salsa de soja al gusto y continúa revolviendo para que el arroz se mezcle con la salsa y se caliente por completo.',
      'Sirve el arroz frito caliente como plato principal o como acompañamiento de otros platos asiáticos.'
    ]
  },
  {
    id: 8,
    nombre: 'Gazpacho',
    ingredientes: ['Tomates', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de Oliva'],
    categoria: 'Almuerzo',
    descripcion: 'Un refrescante gazpacho español',
    favorito: false,
    imagen: '../img/gazpacho.jpg',
    tiempoPreparacion: '20 minutos',
    porciones: 4,
    dificultad: 'Fácil',
    pasos: [
      'Pela y trocea los tomates, el pepino y el pimiento.',
      'En un procesador de alimentos o licuadora, agrega los tomates, el pepino, el pimiento, el ajo picado y un poco de aceite de oliva. Tritura hasta obtener una mezcla suave.',
      'Si deseas un gazpacho más líquido, puedes añadir un poco de agua fría.',
      'Refrigera el gazpacho durante al menos 1 hora para que esté bien frío.',
      'Sirve el gazpacho en cuencos o vasos individuales y decora con trozos de pepino y pimiento si lo deseas.',
      'Disfruta del gazpacho como un refrescante plato de verano.'
    ]
  },
  {
    id: 9,
    nombre: 'Lasagna',
    ingredientes: ['Pasta para Lasagna', 'Carne Molida', 'Salsa de Tomate', 'Queso Ricotta', 'Queso Mozzarella', 'Queso Parmesano'],
    categoria: 'Cena',
    descripcion: 'Una lasagna italiana cargada de queso',
    favorito: false,
    imagen: '../img/lasagna.jpg',
    tiempoPreparacion: '1 hora 30 minutos',
    porciones: 8,
    dificultad: 'Media',
    pasos: [
      'Cocina la carne molida en una sartén grande hasta que esté dorada. Escurre el exceso de grasa.',
      'Agrega salsa de tomate a la carne molida y cocina a fuego lento durante unos minutos para que los sabores se mezclen.',
      'Precalienta el horno a 180°C.',
      'En un molde para horno, coloca una capa de pasta para lasagna, seguida de una capa de carne molida con salsa, una capa de queso ricotta y una capa de queso mozzarella. Repite el proceso hasta que se acaben los ingredientes, terminando con una capa de queso mozzarella y queso parmesano rallado.',
      'Cubre el molde con papel de aluminio y hornea durante 30 minutos. Luego, retira el papel de aluminio y hornea por otros 15-20 minutos hasta que el queso esté dorado y burbujeante.',
      'Deja reposar la lasagna durante unos minutos antes de cortarla y servirla.'
    ]
  }
];
export default recipes;
