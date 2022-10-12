const name = document.getElementById('name')
const mail = document.getElementById('mail')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (name.value.length <= 1) {
        messages.push('Minimum two letters')
    }

    if (name.value.length >= 20) {
        messages.push('Damn thats to long')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})