const showbalance = document.getElementById('showbalance')
const showbalanceBtn = document.getElementById('showbalanceBtn')
const withdraw = document.getElementById('withdraw')
const withdrawBtn = document.getElementById('withdrawBtn')
const deposit = document.getElementById('deposit')
const depositBtn = document.getElementById('depositBtn')
const balance = document.getElementById('balance')

let money = 0;

depositBtn.addEventListener('click', () => {
    addMoney = Number(deposit.value)
    console.log(addMoney)
    if (addMoney < 0) alert("Enter a valid amount")
    else {
        money += addMoney
        console.log(money)
    }
})

withdrawBtn.addEventListener('click', () => {
    let withdrawAmount = Number(withdraw.value)
    console.log(withdrawAmount)
    if (withdrawAmount > money) alert('low balance')
    else {
        money -= withdrawAmount
    }

})


showbalanceBtn.addEventListener('click', () => {
    const bln = document.createElement('span')
    bln.textContent = money
    balance.style.display = 'block'
    console.log(bln.textContent)
    balance.appendChild(bln)
    setTimeout(() => {
        balance.style.display = 'none'
    }, 3000)
})

