let $=document
let navigationElem=$.querySelector('nav')
let MenuExit=$.querySelector('.mobileMenuExit')
let enterIcon=$.querySelector('.mobileMenuEnter')

enterIcon.addEventListener('click', function(){
navigationElem.style.display='block'

})
MenuExit.addEventListener('click', function(){
    navigationElem.style.display='none'

    })