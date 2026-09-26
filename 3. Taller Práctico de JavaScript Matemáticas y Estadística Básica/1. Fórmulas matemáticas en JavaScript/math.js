console.group("Cuadrado");

const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
const areaCuadrado1 = Math.pow(ladoCuadrado, 2);

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
  areaCuadrado1,
});

function calcularPerimetroCuadrado(lado) {
  return {
    perimetro: ladoCuadrado * 4,
    area: Math.pow(ladoCuadrado, 2),
  };
}

console.groupEnd("Cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

function calcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn("Este no es un triangulo isoceles");
  } else {
    return Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4);
  }
}

function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
  const semiperimetro = (lado1 + lado2 + lado3) / 2;
  if (lado1 == lado2) {
    //console.warn("Este no es un triangulo escaleno");
    return false;
  } else {
    return Math.trunc(
      (2 / lado1) *
        Math.sqrt(
          semiperimetro *
            (semiperimetro - lado1) *
            (semiperimetro - lado2) *
            (semiperimetro - lado3)
        )
    );
  }
}

console.groupEnd("Triangulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  return {
    diametroCirculo: radio * 2,
    circunferencia: diametroCirculo * Math.PI,
    areaCirculo: Math.pow(radioCirculo, 2) * Math.PI,
  };
}

console.groupEnd("Circulo");
