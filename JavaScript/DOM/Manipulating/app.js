// const allImages = document.getElementsByTagName('img');

// for (let images of allImages) {
//     console.log(images.src);
// }

// const para = document.querySelector('p').children;

// for (let child of para) {
//     child.style.color = 'red'
// }

// const button = document.querySelector('h1');
// button.addEventListener('click',  () => {
//     makeRandColor()
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     return document.querySelector('h1').innerText = `rgb(${r}, ${g}, ${b})`;
// }

const input = document.querySelector('#textBox');
input.addEventListener('keydown', (e) => {
    console.log(e)
    console.log(`Objec key: ${e.key}`)
    console.log(`Object Code: ${e.code}`)
})
