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
