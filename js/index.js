// Your code goes here

const imgClick = document.querySelector('.intro img')

imgClick.addEventListener('click', () =>
alert(`Hey! Hover your mouse over the next image`)
)



const midImg = document.querySelector('.img-content')

midImg.addEventListener('mouseenter', (event) => event.target.style.transform = 'scale(1.5)')




const signMeUp = document.querySelector('.destination .btn')

signMeUp.addEventListener('dblclick', () =>
signMeUp.style.backgroundColor = 'red'
)



const removeStyles = document.querySelector('body')

 removeStyles.addEventListener('keydown', ()=>{
 signMeUp.style.backgroundColor='white'
 signMeUp.style.color='black'
 midImg.style.transform='scale(.5)'})
