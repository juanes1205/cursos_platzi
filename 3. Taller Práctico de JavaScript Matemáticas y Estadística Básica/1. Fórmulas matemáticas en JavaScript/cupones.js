const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

// Para la opcion 3 Objetos
// const couponsObj = {
//   Juan: 30,
//   Esteban: 25,
// };

// Para la opcion 4 Arrays, recomendada
const couponsList = [];
couponsList.push({
  name: "Juan",
  discount: 30,
});
couponsList.push({
  name: "Esteban",
  discount: 25,
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    result.innerText = "Los campos precio y/o descuento se encuentran vacios";
    return;
  }

  let discount;

  // Opcion 1
  // if (coupon == "Juan") {
  //   discount = 30;
  // } else if (coupon == "Esteban") {
  //   discount = 25;
  // } else {
  //   result.innerText = "El cupon no es valido";
  //   return;
  // }

  // Opcion 2
  // switch (coupon) {
  //   case "Juan":
  //     discount = 30;
  //     break;
  //   case "Esteban":
  //     discount = 25;
  //     break;

  //   default:
  //     result.innerText = "El cupon no es valido";
  //     return;
  // }

  // Opcion 3 Objetos
  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // } else {
  //   result.innerText = "El cupon no es valido";
  //   return;
  // }

  // Opcion 4 Arrays
  function isCouponInArray(couponElement) {
    // {name, discount}
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray); // retorna un objeto {}

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    result.innerText = "El cupon no es valido";
    return;
  }

  const resultado = (price * (100 - discount)) / 100;

  result.innerText = "El nuevo precio con descuento es $" + resultado;
}
