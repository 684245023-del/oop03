export{};
let stock: number[] =[15,8,12,60];
function getRestockList(inventery: number[]): number[]{
    const restock: number[] =[];
    for(let i =0;i<inventery.length;i++){
        if(inventery[i]<10){
            restock.push(inventery[i]);
        }
    }
    return restock;
}
console.log(getRestockList(stock));