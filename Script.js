function esPar(num) {
  return num % 2 === 0;
}
function ejercicio3() {
  const numero = Number(prompt("Ingresa un número:"));
  alert(esPar(numero) ? "El número es par " : "El número es impar ");
}
function areaRectangulo(base, altura) {
  return base * altura;
}
function ejercicio4() {
  const base = Number(prompt("Ingresa la base del rectángulo:"));
  const altura = Number(prompt("Ingresa la altura del rectángulo:"));
  alert("El área del rectángulo es: " + areaRectangulo(base, altura));
}
function esMultiplo(a, b) {
  return a % b === 0;
}
function ejercicio5() {
  const a = Number(prompt("Ingresa el primer número:"));
  const b = Number(prompt("Ingresa el segundo número:"));
  alert(esMultiplo(a, b)
    ? `${a} es múltiplo de ${b} `
    : `${a} no es múltiplo de ${b} `);
}
function mayorDeTres(a, b, c) {
  return Math.max(a, b, c);
}
function ejercicio6() {
  const n1 = Number(prompt("Ingresa el primer número:"));
  const n2 = Number(prompt("Ingresa el segundo número:"));
  const n3 = Number(prompt("Ingresa el tercer número:"));
  alert(`El mayor número es: ${mayorDeTres(n1, n2, n3)}`);
}
const promedio = function(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
};
function ejercicio7() {
  const nota1 = Number(prompt("Primera nota:"));
  const nota2 = Number(prompt("Segunda nota:"));
  const nota3 = Number(prompt("Tercera nota:"));
  alert(`El promedio es: ${promedio(nota1, nota2, nota3).toFixed(2)}`);
}
function ejercicio8(){
  let oracion= prompt("Ingrese un texto: ");
  alert(`${oracion.toUpperCase()}`);
}
function ejercicio9(){
  let precio=parseInt(prompt("Ingrese el precio: "));
  let descuento=parseInt(prompt("Ingrese el porcentaje del descuento(sin %): "));
  alert(`El descuento es de ${calcularDescuento(precio,descuento)}`);
}
const calcularDescuento= function(precio,porcentaje){
  let Descuento=precio*(porcentaje/100);
  return Descuento
}
function ejercicio10(){
  const saludar = nombre => `Hola, ${nombre}`;
  let nombre=prompt("Ingrese su nombre: ");
  alert(`${saludar(nombre)}`);
}
function ejercicio11(){
  const esPositivo = numero => {
    if (numero>0){
      alert("El numero es positivo");
    }else{
      alert("El numero no es positivo");
    }
  }
  let numero=prompt("Ingrese un numero: ");
  esPositivo(numero);
}
function ejercicio12() {
  const mayusculas = texto => texto.toUpperCase();
  const agregarSigno = texto => texto + "!";
  const componerTransformaciones = (f1, f2) => texto => f2(f1(texto));
  const transformar = componerTransformaciones(mayusculas, agregarSigno);
  let texto = prompt("Ingrese un texto:");
  alert(transformar(texto));
}

function ejercicio13() {
  function procesarTexto(texto) {
    const limpiarEspacios = t => t.trim().replace(/\s+/g, " ");
    const contarPalabras = t => limpiarEspacios(t).split(" ").length;
    return { limpio: limpiarEspacios(texto), palabras: contarPalabras(texto) };
  }
  let texto = prompt("Ingrese un texto:");
  const resultado = procesarTexto(texto);
  alert(`Texto limpio: "${resultado.limpio}"\nPalabras: ${resultado.palabras}`);
}

function ejercicio14() {
  function operacionesMatematicas() {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b : "No se puede dividir por 0";
    return { sumar, restar, multiplicar, dividir };
  }

  const { sumar, restar, multiplicar, dividir } = operacionesMatematicas();

  let a = Number(prompt("Ingrese el primer número:"));
  let b = Number(prompt("Ingrese el segundo número:"));

  alert(
    `Resultados:\n` +
    `Suma: ${sumar(a, b)}\n` +
    `Resta: ${restar(a, b)}\n` +
    `Multiplicación: ${multiplicar(a, b)}\n` +
    `División: ${dividir(a, b)}`
  );
}

function ejercicio15() {
  function crearContador(valorInicial) {
    let valor = valorInicial;
    return {
      incrementar: () => ++valor,
      resetear: () => (valor = valorInicial)
    };
  }

  let inicio = Number(prompt("Ingrese el valor inicial del contador:"));
  const contador = crearContador(inicio);

  alert(`Valor actual: ${contador.incrementar()}`);
  alert(`Valor actual: ${contador.incrementar()}`);
  if (confirm("¿Desea resetear el contador?")) {
    contador.resetear();
    alert(`Contador reseteado a ${contador.incrementar()}`);
  }
}

function ejercicio16() {
  const acumulador = valorInicial => nuevo => (valorInicial += nuevo);

  let inicial = Number(prompt("Ingrese el valor inicial del acumulador:"));
  const acumular = acumulador(inicial);

  let continuar = true;
  while (continuar) {
    let valor = Number(prompt("Ingrese un valor para sumar:"));
    alert(`Total acumulado: ${acumular(valor)}`);
    continuar = confirm("¿Desea agregar otro valor?");
  }
}
function ejercicio17() {
  const saludo = (nombre = "Amigo") => `Hola, ${nombre}!`;
  let nombre = prompt("Ingrese su nombre (opcional):");
  alert(saludo(nombre || undefined));
}

function ejercicio18() {
  const media = (...numeros) => numeros.reduce((a, b) => a + b, 0) / numeros.length;
  let nums = prompt("Ingrese números separados por coma:");
  let arr = nums.split(",").map(Number);
  alert(`La media es: ${media(...arr)}`);
}

function ejercicio19() {
  const mostrarDatos = (nombre, edad, ...hobbies) =>
    alert(`Nombre: ${nombre}\nEdad: ${edad}\nHobbies: ${hobbies.join(", ")}`);
  let nombre = prompt("Nombre:");
  let edad = prompt("Edad:");
  let hobbies = prompt("Ingrese hobbies separados por coma:");
  mostrarDatos(nombre, edad, ...hobbies.split(","));
}

function ejercicio20() {
  const ejecutarOperacion = (fn, x, y) => fn(x, y);

  const suma = (a, b) => a + b;
  const resta = (a, b) => a - b;
  const multiplicacion = (a, b) => a * b;
  const division = (a, b) => b !== 0 ? a / b : "No se puede dividir por 0";

  let a = Number(prompt("Ingrese el primer número:"));
  let b = Number(prompt("Ingrese el segundo número:"));
  let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase();

  let resultado;
  switch (operacion) {
    case "suma":
      resultado = ejecutarOperacion(suma, a, b);
      break;
    case "resta":
      resultado = ejecutarOperacion(resta, a, b);
      break;
    case "multiplicacion":
      resultado = ejecutarOperacion(multiplicacion, a, b);
      break;
    case "division":
      resultado = ejecutarOperacion(division, a, b);
      break;
    default:
      resultado = "Operación no válida";
  }

  alert(`Resultado: ${resultado}`);
}

function ejercicio21() {
  const filtrarArreglo = (arr, callback) => arr.filter(callback);

  let numeros = prompt("Ingrese números separados por comas:").split(",").map(Number);
  let tipo = prompt("¿Qué desea filtrar? (pares / impares / mayores que X)").toLowerCase();

  let resultado;

  if (tipo === "pares") {
    resultado = filtrarArreglo(numeros, n => n % 2 === 0);
  } else if (tipo === "impares") {
    resultado = filtrarArreglo(numeros, n => n % 2 !== 0);
  } else if (tipo.startsWith("mayores")) {
    let x = Number(prompt("Ingrese el valor de X:"));
    resultado = filtrarArreglo(numeros, n => n > x);
  } else {
    resultado = [];
  }

  alert(`Resultado del filtro: ${resultado.join(", ") || "Sin resultados"}`);
}


function ejercicio22() {
  const descargarArchivo = (url, callback) => {
    alert("Descargando...");
    setTimeout(() => callback(`Descarga completa de ${url}`), 1000);
  };
  let url = prompt("Ingrese la URL:");
  descargarArchivo(url, mensaje => alert(mensaje));
}

function ejercicio23() {
  const potencia = (base, exponente) => exponente === 0 ? 1 : base * potencia(base, exponente - 1);
  let base = Number(prompt("Ingrese la base:"));
  let exponente = Number(prompt("Ingrese el exponente:"));
  alert(`Resultado: ${potencia(base, exponente)}`);
}

function ejercicio24() {
  function crearSecuencia(inicio, paso) {
    let actual = inicio - paso;
    return () => (actual += paso);
  }

  let inicio = Number(prompt("Ingrese el número inicial de la secuencia:"));
  let paso = Number(prompt("Ingrese el paso de incremento:"));
  const secuencia = crearSecuencia(inicio, paso);

  let continuar = true;
  while (continuar) {
    alert(`Siguiente número de la secuencia: ${secuencia()}`);
    continuar = confirm("¿Desea ver el siguiente número?");
  }
}
