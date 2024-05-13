<template>
    <div class="app-container">
        <!-- Contenedor de la barra de menú -->
        <div class="menu-container">
            <!-- Barra de menú -->
            <div class="menu-bar" ref="menuBar">
                <div class="menu-buttons">
                    <router-link to="/" class="menu-button regresar">Regresar</router-link>
                    <button class="menu-button mapa" @click="handleButtonClick(2)">Mapa</button>
                </div>
            </div>
        </div>
        
        <!-- Contenedor de la cámara -->
        <div class="camera-container" ref="cameraContainer" @mouseenter="lockScroll" @mouseleave="unlockScroll">
            <video ref="cameraView" autoplay playsinline style="width: 100%; height: 100%; margin: 0; padding: 0;"></video>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.activateCamera();
        this.resizeCameraContainer();
        window.addEventListener('resize', this.resizeCameraContainer); // Escucha cambios en el tamaño de la ventana
    },
    methods: {
        async activateCamera() {
            try {
                const video = this.$refs.cameraView;
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 4096 }, height: { ideal: 2160 } } });
                video.srcObject = stream;
            } catch (error) {
                console.error('Error accediendo a la cámara: ', error);
            }
        },
        handleButtonClick(buttonNumber) {
            // Lógica para manejar los clics en los botones
            console.log('Clic en el botón:', buttonNumber);
        },
        resizeCameraContainer() {
            const windowHeight = window.innerHeight;
            const menuBarHeight = this.$refs.menuBar.offsetHeight;
            this.$refs.cameraContainer.style.height = `${windowHeight - menuBarHeight}px`;
        }
       
    }
}
</script>

<style scoped>
/* Estilos para el contenedor principal de la aplicación */
.app-container {
    overflow: hidden; /* Evita el desplazamiento de la pantalla */
}

/* Estilos para el contenedor de la barra de menú */
.menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; /* Asegura que esté por encima del video */
}

/* Estilos para la barra de menú */
.menu-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px;
}

/* Estilos para los botones */
.menu-buttons {
    display: flex;
}

.menu-button {
    margin: 0 200px; /* Espacio entre los botones */
    background-color: #59499b;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
}

.menu-button:hover {
  background-color: #7f6fc0;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.mapa {
    margin-left: 10px; /* Margen izquierdo mayor para el botón 2 */
    margin-right: 16px;
}

.regresar {
    margin-left: 5px; /* Margen izquierdo mayor para el botón 2 */
}

/* Estilos para el contenedor de la cámara */
.camera-container {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 20px;
    left: 0px;
    right: 0px;
    overflow: hidden; /* Evita el desplazamiento dentro del contenedor de la cámara */
    margin: 0px;
}   
</style>
