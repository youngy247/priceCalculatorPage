const pageViewSlider = document.querySelector('.range')
const billingSwitch = document.querySelector('.switch input')
const priceValue = document.querySelector('.price-value')
const pageViewNumber = document.querySelector('.page-views')





let discountApplied = false

function calculatePrice(){
let pageViews = pageViewSlider.value
// console.log(pageViews)
    const example = [
        {
            views: 2,
            price: 10
        }
    ]
    const prices = {
        "1": 8,
        "2": 12,
        "3": 16,
        "4": 24,
        "5": 36
    }
    const views = {
        "1": "10k",
        "2": "50k",
        "3": "100k",
        "4": "500k",
        "5": "1m"
    }
// console.log((pageViews < 5 ? pageViews + "k" : "1m"))

        price = prices[pageViews] * (discountApplied ? 0.75 : 1);
        view = views[pageViews]
// console.log(price)

    // console.log(pageViews)




    // if (discountApplied) {
    //     discountValue.style.display = "block"
    // } else {
    //     discountValue.style.display = "none"
    // }

    if (billingSwitch.checked) {
        price *= 12
    }


    // console.log(pageViews)

    priceValue.textContent = `$${price.toFixed(2)}`
    pageViewNumber.textContent = `PAGEVIEWS: ${view}`
}

billingSwitch.addEventListener('change', () => {
    console.log(billingSwitch)
    discountApplied = billingSwitch.checked;
    calculatePrice()
})

pageViewSlider.addEventListener('input', () => {
    // onchange="rangevalue.value=value"
    calculatePrice();
});

