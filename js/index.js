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



 const wheelScrollIntro = document.querySelector('.content-destination')
 console.log(wheelScrollIntro)

wheelScrollIntro.addEventListener('wheel', function(event){
event.target.style.fontSize='30px'
})



const funSunColor = document.querySelector('.destination')
funSunColor.addEventListener('mouseover', function(){
    funSunColor.style.color='grey'
})



const bodyColors = document.querySelector('body')
bodyColors.addEventListener('keyup', function(){
    bodyColors.style.backgroundColor = 'purple'
    bodyColors.style.color='white'
})



const funBusHeader = document.querySelector('.intro h2')

funBusHeader.addEventListener('mouseenter', function(event){
    event.target.textContent = 'Fun Bus Going Strong'
    funBusHeader.addEventListener('mouseleave', function(event){
    event.target.textContent='Okay Bye'})
})



const escapeAll =  document.querySelector('body')

document.addEventListener('keyup', function(event){
    if(event.key === 'q'){
        escapeAll.style.color='black'
        escapeAll.style.backgroundColor='white'
        signMeUp.style.backgroundColor='#17A2B8'
        signMeUp.style.color='white'
    }
})


const selectButton = document.querySelector('nav a')

selectButton.addEventListener('drag', function(){
    alert(`you have dragged the home button`)
})


document.getElementById('nav').addEventListener('click', (event)=> event.preventDefault())
