export{};
interface Product{
    readonly id:number,
    name: string,
    price: number
}
type Status = "Available" | "Out of Stock";
function printProductSummary(product: Product, status: Status): void {
  console.log(`=== Product Summary ===`);
  console.log(`ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price}`);
  console.log(`Status: ${status}`);
}
const myProduct: Product = {
  id: 101,
  name: "Mechanical Keyboard",
  price: 89.99
};

printProductSummary(myProduct, "Available");