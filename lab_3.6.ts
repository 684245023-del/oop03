export{};
type Category = "Electronics"| "Clothing" | "Food";
interface Product{
    readonly id:number,
    name: string,
    category: Category,
    price: number
}
let Product: Product[]=[
    {id:1,name:"Labtop",category:"Electronics",price: 20000},
    {id:2,name:"Shirt",category:"Clothing",price: 300},
    {id:3,name:"Banana",category:"Food",price: 30}
]
function filterCat(category:Category){
    let catList =[];
    for(let i=0;i<Product.length;i++){
        if(Product[i].category===category)
            catList.push(Product[i]);
    }
    return catList;
}
console.log(filterCat("Clothing"));