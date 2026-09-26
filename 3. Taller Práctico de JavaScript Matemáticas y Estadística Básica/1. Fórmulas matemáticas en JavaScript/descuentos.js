const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  console.log({ price, discount });

  if (!price || !discount) {
    result.innerText = "Los campos precio y/o descuento se encuentran vacios";
    return;
  }

  if (discount > 100) {
    result.innerText = "Descuento no puede ser mayor a 100%";
    return;
  }

  const resultado = (price * (100 - discount)) / 100;

  result.innerText = "El nuevo precio con descuento es $" + resultado;
}
