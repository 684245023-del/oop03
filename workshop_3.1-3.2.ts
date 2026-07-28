export{};
function calculatePrice(price: number,dis: number):number{
    let afterdisc =price-(price*dis/100);
    if(afterdisc>0){
        return afterdisc;
    }
    else{
        return 0;
    }
}
let  price1: number =200;
let price2: number =500;
console.log(`สินค้าราคา ${price1}ราคาสุทธิหลังหักส่วนลด ${calculatePrice(price1,10)}`);
console.log(`สินค้าราคา ${price2}ราคาสุทธิหลังหักส่วนลด ${calculatePrice(price2,10)}`);