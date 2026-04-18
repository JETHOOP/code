const input = document.getElementById('input')
const addBtn = document.getElementById('add')
const list = document.getElementById('list')

addBtn.addEventListener('click', () => {
    const inputValue = input.value
    if (inputValue == '') alert("please Enter something")
    else {
        let task = document.createElement('li')
        let deleteBtn = document.createElement('button')
        let updateBtn = document.createElement('button')

        deleteBtn.textContent = 'Delete'
        task.textContent = inputValue
        updateBtn.textContent = 'Update'

        deleteBtn.addEventListener('click', () => {
            task.remove()
        })

        updateBtn.addEventListener('click',()=>{
            let updated = prompt("Enter Update")
            task.textContent = updated
        })

        localStorage.setItem('task',task)
        list.appendChild(task)
        task.appendChild(deleteBtn)
        task.appendChild(updateBtn)
        input.value = ''
    }
})