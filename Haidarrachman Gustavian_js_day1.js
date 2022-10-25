/**
*@param {Book} book
*@param {Number} discount 
*@param {Number} tax
*@param {Number} stock
*@param {Number} order
*/
const book = [
    { name: "a", price: 139000, printing_status: true, stock: 9, purchased: 5 },
    { name: "b", price: 174000, printing_status: true, stock: 15, purchased: 5 },
    { name: "c", price: 90000, printing_status: true, stock: 7, purchased: 0 }
]
let stat = ""
let tax = 5
let discount =15

function purchaseBook(name,purchasing) {
    for (let i = 0; i < book.length; i++) {
        if (book[i].name === name && book[i].printing_status != false) {
            if (book[i].stock == 0) {
                stat = "stok buku habis"
                break
            } else {
                const totalDiscount = book[i].price * (discount / 100)
                const priceAfterDiscount = book[i].price - totalDiscount
                const totalTax = priceAfterDiscount * (tax / 100)
                const priceAfterTax = priceAfterDiscount - totalTax
                console.group()
                console.log("Original Price ", book[i].price)
                console.log("Discount Amount ", totalDiscount)
                console.log("Price after discount ", priceAfterDiscount)
                console.log("tax amount ", totalTax)
                console.log("Price after tax ", priceAfterTax)
                console.log("Stock ", book[i].stock)
                if(book[i].stock >= purchasing) {
                    console.log("Book Available")
                } else {
                    console.log("out of stock")
                }
                console.groupEnd()
                break
            }
        } else {
            stat = "sorry your order is not available pls try again"
        }
    }
    console.log(stat)
}


purchaseBook("a",1)
