const pageViewSlider = document.querySelector('.range')
const billingSwitch = document.querySelector('.switch')
const priceValue = document.querySelector('.price-value')
const discountValue = document.querySelector('.discount')


const prices = {
    "10k": 8,
    "50k": 12,
    "100k": 16,
    "500k": 24,
    "1m": 36
};

let discountApplied = false

function calculatePrice(){
let pageViews = pageViewSlider.value

    let price = prices[`${
        pageviews < 50 ? pageviews + "k" : "1m"
    }`] * (discountApplied ? 0.75 : 1);

}

billingSwitch.addEventListener('change', () => {
    discountApplied = toggleSwitch.checked;
})