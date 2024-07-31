const coding = ["java", "python", "ruby", "cpp", "js"];

const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});
// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9,,10]

// const newNums =myNums.filter((num)=>{
//    return num>4
// })
// const myNums=[1,2,3,4,5,6,7,8,9,,10]

// const newNums=[]
// myNums.forEach((num)=>{
// if(num>4){
// newNums.push(num)
// }
// })
// console.log(newNums)

// const myNumers=[1,2,3,4,5,6,7,8,9]
// const newNums=myNumers.map((num)=>{
//     return num+10
// })
// console.log(newNums);

// const myNumers=[1,2,3,4,5,6,7,8,9]
// const newNums=myNumers
//                  .map((num)=>num*10)
//                  .map((num)=>num+1)
//                  .filter((num)=>num>=40)
// console.log(newNums);
// ******************************REDUCE************************************************

const myNums = [1, 2, 3];
// const mytotal=myNums.reduce(function(acc,currval) {
//     console.log(`acc is${acc} & currval is${currval}`)
//     return acc+currval
// },0)

// const mytotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(mytotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 10000,
  },
  {
    itemName: "py course",
    price: 9999,
  },
  {
    itemName: "mobile course",
    price: 18060,
  },
  {
    itemName: "data course",
    price: 12000,
  },
];
const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(pricetopay);
