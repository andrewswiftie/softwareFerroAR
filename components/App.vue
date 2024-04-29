<template>
  <div id="app">
    <header v-if="$route.path !== '/ar'" class="header">
      <!-- Aquí puedes agregar un encabezado común para todas las páginas -->
      <router-link to="/" class="home-link">
        <h1>FerroAR</h1>
      </router-link>
      <nav>
        <!-- Aquí podrías agregar la navegación de la aplicación -->
        <div class="nav-buttons">
          <router-link to="/login" class="btn-small">Iniciar Sesión</router-link>
          <router-link to="/register" class="btn-small">Registrarse</router-link>
        </div>
      </nav>
    </header>
    
    <main>
      <!-- El componente Index.vue se mostrará aquí cuando la ruta coincida con '/' -->
      <router-view></router-view>
    </main>
    
    <footer class="footer">
      <!-- Aquí puedes agregar un pie de página común para todas las páginas -->
      <p>&copy; 2024 FerroAR</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Estilos globales de la aplicación */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px; /* Establece un tamaño de fuente base */
}

.header {
  background-color: #292929;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Asegura que el encabezado esté por encima de otros elementos */
}

.header h1 {
  margin: 0;
  font-size: 24px; /* Tamaño de fuente más grande para encabezado en dispositivos móviles */
}

nav {
  display: flex;
  gap: 10px; /* Espaciado entre los botones de navegación */
}

.home-link {
  text-decoration: none;
  color: inherit;
}

.nav-buttons .btn-small {
  width: calc(50% - 5px); /* Establece el ancho de cada botón con espacio entre ellos */
  background-color: #0056b3;
  color: #fff;
  border: none;
  padding: 8px 16px; /* Ajusta el padding para hacer los botones más pequeños */
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px; /* Reduce el tamaño de la fuente para hacer los botones más pequeños */
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-buttons .btn-small:hover {
  background-color: #002f61;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

main {
  padding: 20px;
  margin-top: 60px; /* Incrementa el margen superior para el contenido principal en dispositivos móviles */
  margin-bottom: 80px; /* Incrementa el margen inferior para el contenido principal en dispositivos móviles */
  overflow-y: auto; /* Permite el desplazamiento vertical */
}

.footer {
  background-color: #292929;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Asegura que el pie de página esté por encima de otros elementos */
}
</style>
