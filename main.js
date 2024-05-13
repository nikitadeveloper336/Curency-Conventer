const amountInput = document.getElementById('amount')
const convertBtn = document.querySelector('.convert')
const outputUsd = document.querySelector('.usd')
const outputEur = document.querySelector('.eur')
const outputRub = document.querySelector('.rub')

convertBtn.addEventListener('click', () => {
    // поллучить значение поля ввода
    let amountRub = amountInput.value

    let amountUsd = amountRub / 101
    let amountEur = amountRub / 106
    outputUsd.textContent = amountUsd.toFixed(2)
    outputEur.textContent = amountEur.toFixed(2)
    outputRub.textContent = amountRub
})