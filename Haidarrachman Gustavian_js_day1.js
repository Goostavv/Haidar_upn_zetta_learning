/**
*@param {Book} book
*@param {Number} discount 
*@param {Number} tax
*/
function priceCalculator (book, discount, tax) { 
    let result = 0; 
    if (book && book.price) {
const price = book.price; 
const totalDiscount = (price* discount/100); 
const priceAfterDiscount = price - totalDiscount; 
const totalTax  = priceAfterDiscount * (tax/100); 
const priceAfterTax = priceAfterDiscount + totalTax;

console.group(); 
console.log('Original Price', price); 
console.log('Discount Amount', totalDiscount); 
console.log('Price After Discount', priceAfterDiscount);
console.log('Tax Amount', totalTax); 
console.log('Price After Tax', priceAfterTax); 
console.groupEnd;
    }
return result;
}
priceCalculator({title: 'ini buku', price:100000, printing_status: true}, 5, 10);