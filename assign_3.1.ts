interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const myInventory: Product[] = [
  { id: 1, name: "Laptop", price: 1200, quantity: 10 },
  { id: 2, name: "Mouse", price: 25, quantity: 5 },
  { id: 3, name: "Keyboard", price: 75, quantity: 8 }
];
function updateStock(productId: number, amountSold: number): void {
  const product = myInventory.find((p) => p.id === productId);
  if (!product) {
    console.log(`Product with ID ${productId} not found.`);
    return;
  }
  if (amountSold > product.quantity) {
    console.log("Not enough stock");
    return;
  }
  product.quantity -= amountSold;
  console.log(`Successfully updated ${product.name}. Remaining stock: ${product.quantity}`);
}
updateStock(2, 3);
updateStock(2, 5);
updateStock(99, 1); 