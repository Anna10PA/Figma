let navigation = document.querySelector('#menuNav')
let menuButton = document.querySelector('#menu')
let open = false

menuButton.addEventListener('click', function(){
    if (open === false){
        open = true
        navigation.style.transition = '0.5s'
        navigation.style.right = '50px'
        menuButton.className = 'fa-solid fa-xmark'
    }else{
        open = false
        navigation.style.transition = '1.5s'
        navigation.style.right = '-100%'
        menuButton.className = 'fa-solid fa-bars'
    }
})