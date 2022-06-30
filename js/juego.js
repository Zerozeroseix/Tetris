/*********************************************
 *             SESION 28_B
 *         OUTRO TETRIS
 *    TOMADO DE Gerardo_nya, alumno do curso,
 *    num comentario no cap. 28
 **********************************************/

var canvas;
var FPS = 50;
var ctx;

var anchoTablero = 10;
var altoTablero = 20;
var altoFicha = 40;
var anchoFicha = 40;
var anchoCanvas = 400;
var altoCanvas = 640;
var margenSuperior = 4;
//12*17  10*16
var tableroCopia = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var tablero = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var fichaGrafico = [
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 5, 5, 5],
      [0, 5, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 5],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 5],
      [0, 5, 5, 5],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 5, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 6],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 6, 6],
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 6, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 6, 6, 0],
      [0, 0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 7, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 7, 0],
      [0, 0, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 7, 0],
      [0, 7, 7, 7],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 7, 0],
      [0, 7, 7, 0],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ]
  ]
];

var rojo = '#da0000';
var verde = '#00e510';
var azul = '#0046f7';
var amarillo = '#d2ff00';
var naranja = '#ff8a00';
var rosa = '#ff52e0';
var cielo = '#52fff5';

function dibujarTablero() {
  for (var py = margenSuperior; py < altoTablero; py++) {
    for (var px = 1; px < anchoTablero + 1; px++) {
      if (tablero[py][px] != 0) {
        if (tablero[py][px] == 1) {
          ctx.fillStyle = rojo;
        }
        if (tablero[py][px] == 2) {
          ctx.fillStyle = verde;
        }
        if (tablero[py][px] == 3) {
          ctx.fillStyle = azul;
        }
        if (tablero[py][px] == 4) {
          ctx.fillStyle = amarillo;
        }
        if (tablero[py][px] == 5) {
          ctx.fillStyle = naranja;
        }
        if (tablero[py][px] == 6) {
          ctx.fillStyle = rosa;
        }
        if (tablero[py][px] == 7) {
          ctx.fillStyle = cielo;
        }
        ctx.fillRect((px - 1) * anchoFicha, (py - margenSuperior) * altoFicha, anchoFicha, altoFicha);
      }
    }
  }
}
var pieza;

function reseteaTablero() {
  for (py = 0; py < 20; py++) {
    for (px = 0; px < 12; px++) {
      tablero[py][px] = tableroCopia[py][px];
    }
  }
}

var objPieza = function() {
  this.x = 0;
  this.y = 0;
  this.tipo = 2;
  this.angulo = 0;
  this.contador = 0;
  this.limiteContador = 50;

  this.nueva = function() {
    this.tipo = Math.floor(Math.random() * 7);
    this.y = 1;
    this.x = 4;
  }
  this.dibujar = function() {
    for (py = 0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        if (fichaGrafico[this.tipo][this.angulo][py][px] != 0) {
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 1) ctx.fillStyle = rojo;
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 2) ctx.fillStyle = verde;
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 3) ctx.fillStyle = azul;
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 4) ctx.fillStyle = amarillo;
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 5) ctx.fillStyle = naranja;
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 6) ctx.fillStyle = rosa;
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 7) ctx.fillStyle = cielo;
          ctx.fillRect((this.x + px - 1) * anchoFicha, (this.y + py - margenSuperior) * altoFicha, anchoFicha, altoFicha);
        }
      }
    }
  }
  this.rotar = function() {
    var anguloNuevo = this.angulo;
    if (anguloNuevo < 3) anguloNuevo++;
    else {
      anguloNuevo = 0;
    }
    if (this.colision(anguloNuevo, this.y, this.x) == false) {
      this.angulo = anguloNuevo;
    }
  }
  this.derecha = function() {
    if (this.colision(this.angulo, this.y, this.x + 1) == false) this.x++;
  }
  this.izquierda = function() {
    if (this.colision(this.angulo, this.y, this.x - 1) == false) this.x--;
  }
  this.abajo = function() {
    if (this.colision(this.angulo, this.y + 1, this.x) == false) {
      this.y++;
    }
  }
  this.caer = function() {
    if (this.contador == this.limiteContador) {
      if (this.colision(this.angulo, this.y + 1, this.x) == false) this.y++;
      else {
        this.fijar();
        this.vaciar();
        this.nueva();
        if (this.die() == true) {
          reseteaTablero();
        }
      }
      this.contador = 0;
    } else {
      this.contador++;
    }
  }
  this.colision = function(anguloNuevo, yNueva, xNueva) {
    var resultado = false;
    for (py = 0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        if (fichaGrafico[this.tipo][anguloNuevo][py][px] > 0) {
          if (tablero[yNueva + py][xNueva + px] > 0) {
            resultado = true;
          }
        }
      }
    }
    return resultado;
  }
  this.fijar = function() {
    for (py = 0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        if (fichaGrafico[this.tipo][this.angulo][py][px] > 0) {
          tablero[this.y + py][this.x + px] = fichaGrafico[this.tipo][this.angulo][py][px];
        }
      }
    }
  }
  this.vaciar = function() {
    var fila = 0;
    for (py = margenSuperior; py < altoTablero; py++) {
      for (px = 1; px < anchoTablero + 1; px++) {
        if (tablero[py][px] != 0) {
          fila++;
        }
        if (fila == 10) {
          for (dx = 1; dx < anchoTablero + 1; dx++) {
            tablero[py][dx] = 0;
            this.bajar(py);
          }
        }
      }
      fila = 0;
    }
  }
  this.bajar = function(dy) {
    for (py = dy; py > 0; py--) {
      for (px = 1; px < anchoTablero + 1; px++) {
        tablero[py][px] = tablero[py - 1][px];
      }
    }
  }
  this.die = function() {
    var dies = false;
    for (px = 1; px < anchoTablero + 1; px++) {
      if (tablero[4][px] > 0) {
        dies = true;
      }
    }
    return dies;
  }
  this.nueva();
}

function inicializaTeclado() {
  document.addEventListener('keydown', function(tecla) {
    if (tecla.keyCode == 38) {
      pieza.rotar();
    }
    if (tecla.keyCode == 40) {
      pieza.abajo();
    }
    if (tecla.keyCode == 37) {
      pieza.izquierda();
    }
    if (tecla.keyCode == 39) {
      pieza.derecha();
    }
  });
}

function inicializa() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.style.width = anchoCanvas;
  canvas.style.height = altoCanvas;
  pieza = new objPieza();
  inicializaTeclado();
  setInterval(function() {
    principal();
  }, 1000 / FPS);
}

function borrarCanvas() {
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;
}

function principal() {
  borrarCanvas();
  dibujarTablero();
  pieza.dibujar();
  pieza.caer();
}
