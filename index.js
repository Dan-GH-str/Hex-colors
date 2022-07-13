function changeColor() {
    const color1 = generateColor()
    const color2 = generateColor()
    const value = `background: linear-gradient(to right, ${color1}, ${color2})`

    $body.setAttribute('style', value)
    $label.textContent = value
}

function generateColor() {
    let result = '#'
    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * (16 - 0) + 0)
        result += hex_nums[index]
    }
    
    return result
}

const hex_nums = 'abcdef0123456789'
const $btn = document.querySelector('#btn')
const $body = document.querySelector('body')
const $label = document.querySelector('label')

$btn.addEventListener('click', changeColor)
