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