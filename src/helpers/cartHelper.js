export function totalAmount(arrayList) {
  let total = 0;
  arrayList.forEach(element => {
    total += element.total * element.price;
  });
  return total;
}

export function totalToDown() {}
