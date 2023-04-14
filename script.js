const pageViewSlider = document.querySelector('.range')
const billingSwitch = document.querySelector('.switch')
const priceValue = document.querySelector('.price-value')
const discountValue = document.querySelector('.discount')




let discountApplied = false

function calculatePrice(){
let pageViews = parseInt(pageViewSlider.value);

    const prices = {
        "10k": 8,
        "50k": 12,
        "100k": 16,
        "500k": 24,
        "1m": 36
    }

    let price = prices[`${
        pageViews < 50 ? pageViews + "k" : "1m"
    }`] * (discountApplied ? 0.75 : 1);
    // console.log(pageViews)
    priceValue.textContent = `$${price.toFixed(2)}`;

}
console.log(priceValue)
billingSwitch.addEventListener('change', () => {
    discountApplied = billingSwitch.checked;
    calculatePrice()
})

pageViewSlider.addEventListener('input', () => {
    calculatePrice();
});