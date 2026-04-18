let text = document.getElementById('textBox')
let button = document.getElementById('button')
let list = document.getElementById('list')

button.addEventListener('click', () => {
    let li = document.createElement('li')
    li.innerText = text.value

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'

    let updateBtn = document.createElement('button')
        updateBtn.textContent = 'Update'

    deleteBtn.addEventListener('click', ()=>{
        list.removeChild(li)
        list.removeChild(deleteBtn)
        list.removeChild(updateBtn)
    })

    updateBtn.addEventListener('click' , ()=>{
        let newVal = prompt("enter the new val")
        li.innerText = newVal
    })

    list.appendChild(li)
    list.appendChild(deleteBtn)
    list.appendChild(updateBtn)
    text.value = ""
})