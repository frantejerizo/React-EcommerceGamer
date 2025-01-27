# Ecommerce Gamer - PlayZone

## Descripción del Proyecto

PlayZone es un sitio web desarrollado con React que ofrece un catálogo de juegos para la venta. Este proyecto implementa las operaciones básicas de CRUD (Crear, Leer, Actualizar, Borrar) para gestionar los juegos y proporciona una experiencia responsive y accesible para los usuarios. 

El sitio está dividido en dos tipos de usuarios:
- **Administrador**: Puede agregar, editar y borrar juegos desde una página de administración.
- **Usuario visitante**: Puede visualizar los juegos en un catálogo, buscar juegos por nombre y ver sus detalles.

## Páginas del Sitio

### Página Principal
- Muestra el catálogo de juegos previamente cargados desde la página de administración.
- Incluye un filtro para buscar juegos por su nombre.

### Página de Administración
- Contiene una tabla con los juegos cargados.
- Permite agregar, leer, borrar y editar juegos.
- Solo accesible para usuarios administradores.

### Página de Detalle
- Muestra información detallada de un juego seleccionado, incluyendo:
  - Código único.
  - Nombre.
  - Precio.
  - Categoría (sandbox, simulación, fabricación, construcción, aventura, etc.).
  - Imagen cargada desde una URL.
  - Descripción.
  - Requisitos del sistema.
  - Desarrollador.

### Página Acerca de Nosotros
- Contiene información sobre el equipo de desarrollo, una frase representativa y una galería con las fotos o avatares y los nombres de los integrantes del equipo.

### Página Error 404
- Diseñada para manejar errores de navegación.
- Aparece al intentar acceder a rutas no existentes.

### Página de Login
- Permite a los usuarios administradores iniciar sesión para gestionar los juegos.

## Herramientas y Tecnologías
- **React**: Framework principal para el desarrollo del sitio.
- **JSON-Server**: Utilizado como backend para el almacenamiento de datos.
- **React-Router**: Implementación de rutas protegidas para el acceso exclusivo de administradores.
- **Responsiveness**: Diseño adaptable a diferentes dispositivos.
- **GitHub**: Herramienta de control de versiones y colaboración.
- **Netlify/GitHub Pages**: Publicación del sitio.

## Organización del Proyecto
- **Panel de Taiga**: Gestión del proyecto utilizando un tablero grupal.
- **Scrum**: Asignación de un Scrum Master para coordinar el desarrollo del proyecto.

## Requisitos de Evaluación
- Estructura limpia y organizada del proyecto.
- Validación de formularios.
- Archivo README con la descripción completa del proyecto.
- Implementación correcta de CRUD y rutas protegidas.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/frantejerizo/React-EcommerceGamer.git
   ```

2. Ve al directorio del proyecto:
   ```bash
   cd React-EcommerceGamer
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Instala e inicia el servidor JSON:
   ```bash
   npm install -g json-server@0.17.4
   json-server --watch db.json
   ```

5. Inicia la aplicación:
   ```bash
   npm run dev
   ```

6. Abre tu navegador en `http://localhost:5173` para ver el sitio en funcionamiento.

## Créditos

Este proyecto fue desarrollado por el equipo:

- **Tejerizo Francisco**: Footer, Navbar, FormularioJuegos, estructura del proyecto, README, hotfix general del proyecto.
- **José Ignacio Ramón**: CarrouselInicio, CatalogoJuegos, JuegoInicio.
- **Tomas Pando**: Administrador, JuegoAdministrador.
- **Juan Stegmayer**: DetalleJuego, AcercaNosotros.

Agradecimientos especiales a los instructores y compañeros que apoyaron el desarrollo de este proyecto.

---

¡Gracias por revisar nuestro proyecto! 🚀

