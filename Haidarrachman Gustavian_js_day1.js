const book = [
    { tittlename: "a", price: 139000, printing_status: true, stock: 9, purchased: 5 },
    { tittlename: "b", price: 174000, printing_status: true, stock: 15, purchased: 5 },
    { tittlename: "c", price: 90000, printing_status: true, stock: 7, purchased: 0 }
]



let status = ""
let tax = 10
let discount = 20
let interest = 3
let creditDue = 30
let pricePayPerMonth = 0
function purchaseBook(booktittle, purchase) {
    const result = book.find(({ tittlename }) => tittlename === booktittle)
    if (result != undefined) {
        const totalDiscount = result.price * (discount / 100)
        const priceAfterDiscount = result.price - totalDiscount
        const totalTax = priceAfterDiscount * (tax / 100)
        const priceAfterTax = priceAfterDiscount - totalTax
        const totalBuy = priceAfterTax * purchase
        Credit(totalBuy)
        console.group()
        console.log("Stock ", result.stock)
        if (result.stock >= purchase) {
            console.log("Book can be purchased with the requested stock")
            console.log()
            console.log("Original Price ", result.price)
            console.log("Discount Amount ", totalDiscount)
            console.log("Price after discount ", priceAfterDiscount)
            console.log("tax amount ", totalTax)
            console.log("Price after tax ", priceAfterTax)
            console.log("Total Price to pay ", totalBuy)
            console.log()
            console.log("Price to pay with credit due every month ", pricePayPerMonth)
            console.groupEnd()
        } else {
            console.log("Book cannot purchased with the amount of stock")

        }
    }
}

function Credit(totalBuy){
    pricePayPerMonth = totalBuy + (totalBuy * (interest/100))
    return pricePayPerMonth
}

purchaseBook("b", 5)
