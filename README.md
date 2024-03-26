# CoffeeShop App

CoffeeShop es una aplicación e-commerce desarrollada en React Native, orientada a la venta de productos relacionados con el café. La aplicación está diseñada para ofrecer una experiencia fluida y fácil de usar a los usuarios, permitiéndoles explorar y comprar una variedad de productos de café.

## Funcionalidades Principales

La aplicación cuenta con las siguientes secciones principales:

### 1. Autenticación
La primera pantalla de la aplicación donde los usuarios pueden iniciar sesión con sus credenciales existentes o crear una nueva cuenta. La autenticación se gestiona mediante Firebase Auth, lo que garantiza un proceso seguro y confiable.

### 2. Tienda
En esta sección, los usuarios pueden explorar diferentes categorías de productos relacionados con el café. En este caso, los productos están categorizados por la región del producto. Una vez seleccionada la categoría, el usuario puede utilizar el buscador para encontrar un producto específico, y puede agregar los productos al carrito directamente desde la card de cada uno, o se puede ingresar al detalle de cada producto.

### 3. Carrito
Aquí los usuarios pueden ver los productos que han seleccionado para comprar, así como modificar la cantidad de cada producto o eliminarlos del carrito. En esta pantalla, aparecen más detalles sobre la compra, como el precio final y la cantidad seleccionada, junto con un botón de confirmación, que guarda la orden del usuario.

### 4. Órdenes
En esta sección, se muestran las órdenes generadas por el usuario, proporcionando detalles como el importe de cada orden, el código identificativo y el tiempo transcurrido desde la fecha de creación de la orden. 

### 5. Perfil
Los usuarios pueden acceder a su perfil, donde se les permite cambiar imagen de perfil, mediante la cámara o accediendo a la galería del dispositivo. Se puede configurar la dirección guardada por usuario, utilizando la ubicación del dispositivo, y permitiendo que el usuario pueda editar la dirección (en caso de que sea necesario). Para la visualización, se utiliza *Google Maps API*, para generar un mapa estático. Se integra también *Google Geocoding API*, que permite una visualización amigable para el usuario de las coordenadas de ubicacion, gracias al *Reverse Geocoding*.

## Librerías Utilizadas

- **react-navigation**: Para la navegación entre las diferentes pantallas de la aplicación.
- **reduxjs/toolkit** y **react-redux**: Para la gestión del estado de la aplicación, especialmente útil en el carrito de compras y la información del usuario.
- **toastify-react-native**: Para mostrar notificaciones al usuario, por ejemplo, cuando se agrega un producto al carrito.
- **yup**: Para la validación de formularios en la autenticación y otras partes de la aplicación.
- **expo-image-picker**: Para capturar imágenes desde la cámara o la galería del dispositivo para el perfil de usuario.
- **expo-file-system**: Para acceder al sistema de archivos del dispositivo, necesario para el almacenamiento de imágenes de perfil.
- **expo-location**: Para acceder a la ubicación del dispositivo y permitir que los usuarios configuren su dirección en el perfil.
- **expo-sqlite**: Para realizar consultas SQL en la base de datos local, utilizado para persistir la sesión del usuario.
- **expo-font**: Para utilizar fuentes personalizadas en la aplicación, mejorando la experiencia visual.

## Base de Datos y Almacenamiento

La aplicación utiliza Firebase para la base de datos, específicamente Realtime Database para almacenar información, y Firebase Auth para la autenticación. Además, se utiliza SQLite para guardar la sesión del usuario de manera local, garantizando la persistencia de la información del usuario en el dispositivo.

## Instalación

1. Clona el repositorio: 
`git clone https://github.com/NKrein/native-ecomm.git`
2. Instala las dependencias: `npm install`
4. Configura las credenciales de Firebase en el archivo de configuración.
5. Ejecuta la aplicación: `npm start`
