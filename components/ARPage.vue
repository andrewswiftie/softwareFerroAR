<template>
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
      <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
      <style>
        body {
          margin: 0;
          padding: 0;
          height: 100vh; /* Ajusta la altura del cuerpo para que ocupe toda la altura de la pantalla */
          overflow: hidden;
          background-color: #000;
          display: flex;
          justify-content: center; /* Centra el contenido horizontalmente */
          align-items: center; /* Centra el contenido verticalmente */
        }
        a-scene {
          width: 100%; /* Ajusta el ancho del escenario para que ocupe toda la pantalla */
          height: 100%; /* Ajusta la altura del escenario para que ocupe toda la pantalla */
          position: relative; /* Cambia la posición a relativa para que el marcador AR esté contenido */
        }
        a-marker {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        a-box {
          width: 50px;
          height: 50px;
          depth: 50px;
          color: #4CC3D9;
        }
        a-entity[camera] {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 80%;
          height: 80%;
        }
      </style>
    </head>
    <body>
      <a-scene embedded arjs="sourceType: webcam; sourceWidth: 640; sourceHeight: 480;">
        <a-marker preset="hiro">
          <!-- Ajusta la posición y el tamaño del cuadro -->
          <a-box></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </body>
  </html>
</template>

<style scoped>
body {
  background-color: #000;
}

a-box {
  color: #000000;
}
</style>
