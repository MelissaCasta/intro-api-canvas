const canvasRectangulo = document.getElementById("canvasRectangulo");
const canvasTraiangulo = document.getElementById("canvasTriangulo");
const canvasPluma = document.getElementById("canvasPluma");
const canvasLineas = document.getElementById("canvasLineas");
const canvasArcos = document.getElementById("canvasArcos");
const canvasBezier = document.getElementById("canvasBezier");
const canvasCombinado = document.getElementById("canvasConbinado");
const canvasCubos = document.getElementById("canvasCubos");
const canvasRecir = document.getElementById("canvasRecir");
const ctxRectangulo = canvasRectangulo.getContext("2d");
const ctxTriangulo = canvasTraiangulo.getContext("2d");
const ctxCombinado = canvasCombinado.getContext("2d");
const ctxPluma = canvasPluma.getContext("2d");
const ctxLineas = canvasLineas.getContext("2d");
const ctxArcos = canvasArcos.getContext("2d");
const ctxBezier = canvasBezier.getContext("2d");
const ctxCubos = canvasCubos.getContext("2d");
const ctxRecir = canvasRecir.getContext("2d");


function drawRectangulo() {

    if (canvasRectangulo.getContext) {

      ctxRectangulo.fillStyle = 'purple';

      ctxRectangulo.fillRect(25, 25, 100, 100); //Rectangulo
      ctxRectangulo.clearRect(45, 45, 60, 60); //Limpia un área del rectangulo.
      ctxRectangulo.strokeStyle = 'blue';
      ctxRectangulo.strokeRect(50, 50, 50, 50); //Crea un rectangulo con una sola linea.

    }
  }

  function drawTriangulo() {

    if (canvasTraiangulo.getContext) {

      ctxTriangulo.fillStyle = 'blue';

      //ctxTriangulo.fillstyle = ;
      ctxTriangulo.beginPath();
      ctxTriangulo.moveTo(25, 100);
      ctxTriangulo.lineTo(125, 100);
      ctxTriangulo.lineTo(75, 25);
      ctxTriangulo.fill();

    }
  }

  function drawPluma() {

  if (canvasPluma.getContext) {

    ctxPluma.strokeStyle = 'green';
 
    ctxPluma.beginPath();
    ctxPluma.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    ctxPluma.moveTo(110, 75);
    ctxPluma.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
    ctxPluma.moveTo(65, 65);
    ctxPluma.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctxPluma.moveTo(95, 65);
    ctxPluma.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctxPluma.stroke();
  }
}

function drawLineas() {
  if (canvasLineas.getContext) {

    ctxLineas.fillStyle = 'yellow';

    // Triángulo relleno
    ctxLineas.beginPath();
    ctxLineas.moveTo(25, 25);
    ctxLineas.lineTo(105, 25);
    ctxLineas.lineTo(25, 105);
    ctxLineas.fill();

    ctxLineas.strokeStyle = 'orange';
    // Triángulo contorneado
    ctxLineas.beginPath();
    ctxLineas.moveTo(125, 125);
    ctxLineas.lineTo(125, 45);
    ctxLineas.lineTo(45, 125);
    ctxLineas.closePath();
    ctxLineas.stroke();
  }
}

function drawArcos() {
  if (canvasArcos.getContext) {

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctxArcos.beginPath();

        ctxArcos.strokeStyle = 'brown';
        ctxArcos.fillStyle = 'violet';
        const x = 25 + j * 50; // Coordenada x
        const y = 25 + i * 50; // Coordenada y
        const radius = 20; // Radio del Arco
        const startAngle = 0; // Punto inicial del Círculo
        const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
        const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

        ctxArcos.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctxArcos.fill();
        } else {
          ctxArcos.stroke();
        }
      }
    }
  }
}

function drawBezier() {

  if (canvasBezier.getContext) {

    ctxBezier.strokeStyle = 'gray';
    // Ejemplo de curvas cuadráticas
    ctxBezier.beginPath();
    ctxBezier.moveTo(75, 25);
    ctxBezier.quadraticCurveTo(25, 25, 25, 62.5);
    ctxBezier.quadraticCurveTo(25, 100, 50, 100);
    ctxBezier.quadraticCurveTo(50, 120, 30, 125);
    ctxBezier.quadraticCurveTo(60, 120, 65, 100);
    ctxBezier.quadraticCurveTo(125, 100, 125, 62.5);
    ctxBezier.quadraticCurveTo(125, 25, 75, 25);
    ctxBezier.stroke();
  }
}

function drawCubos() {

  if (canvasCubos.getContext) {

    ctxCubos.fillStyle = 'red';

    // Ejemplo de curvas cúbicas
    ctxCubos.beginPath();
    ctxCubos.moveTo(75, 40);
    ctxCubos.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctxCubos.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctxCubos.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctxCubos.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctxCubos.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctxCubos.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctxCubos.fill();
  }
}

function drawCombinado() {
  
  if (canvasCombinado.getContext) {

    

    roundedRect(ctxCombinado, 12, 12, 150, 150, 15);
    roundedRect(ctxCombinado, 19, 19, 150, 150, 9);
    roundedRect(ctxCombinado, 53, 53, 49, 33, 10);
    roundedRect(ctxCombinado, 53, 119, 49, 16, 6);
    roundedRect(ctxCombinado, 135, 53, 49, 33, 10);
    roundedRect(ctxCombinado, 135, 119, 25, 49, 10);

    ctxCombinado.beginPath();
    ctxCombinado.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctxCombinado.lineTo(31, 37);
    ctxCombinado.fill();

    for (let i = 0; i < 8; i++) {
      ctxCombinado.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctxCombinado.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctxCombinado.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctxCombinado.beginPath();
    ctxCombinado.moveTo(83, 116);
    ctxCombinado.lineTo(83, 102);
    ctxCombinado.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctxCombinado.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctxCombinado.lineTo(111, 116);
    ctxCombinado.lineTo(106.333, 111.333);
    ctxCombinado.lineTo(101.666, 116);
    ctxCombinado.lineTo(97, 111.333);
    ctxCombinado.lineTo(92.333, 116);
    ctxCombinado.lineTo(87.666, 111.333);
    ctxCombinado.lineTo(83, 116);
    ctxCombinado.fill();

    ctxCombinado.fillStyle = "white";
    ctxCombinado.beginPath();
    ctxCombinado.moveTo(91, 96);
    ctxCombinado.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctxCombinado.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctxCombinado.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctxCombinado.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctxCombinado.moveTo(103, 96);
    ctxCombinado.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctxCombinado.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctxCombinado.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctxCombinado.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctxCombinado.fill();

    ctxCombinado.fillStyle = "purple";
    ctxCombinado.beginPath();
    ctxCombinado.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctxCombinado.fill();

    ctxCombinado.beginPath();
    ctxCombinado.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctxCombinado.fill();
  }
}

// Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.
  function roundedRect(ctxCombinado, x, y, width, height, radius) {
    ctxCombinado.strokeStyle = 'brown';
  ctxCombinado.beginPath();
  ctxCombinado.moveTo(x, y + radius);
  ctxCombinado.arcTo(x, y + height, x + radius, y + height, radius);
  ctxCombinado.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctxCombinado.arcTo(x + width, y, x + width - radius, y, radius);
  ctxCombinado.arcTo(x, y, x, y + radius, radius);
  ctxCombinado.stroke();
}

function drawRecir() {

  if (canvasRecir.getContext) {

    ctxRecir.strokeStyle = 'brown';
    ctxRecir.fillStyle = 'pink';

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctxRecir.stroke(rectangle);
    ctxRecir.fill(circle);
  }
}




  

  drawRectangulo();
  drawTriangulo();
  drawPluma();
  drawLineas();
  drawArcos();
  drawBezier();
  drawCubos();
  drawCombinado();
  drawRecir();
 

  