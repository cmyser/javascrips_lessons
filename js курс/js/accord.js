const btn = document.querySelector('.feature__link')
const btns = document.querySelectorAll('.feature__link')
const list = document.querySelectorAll('.feature-sub')

// btn.addEventListener('click', () =>{
//     console.log('ldlld')
// })

// for (let i = 0; i <btns.length; i++){
//     btns[i].addEventListener('click', () => console.log(btns[i]))
// }        

btns.forEach((element, index) => {
    element.addEventListener('click', ( )=> {
        btns.forEach(element => {
            element.classList.remove('feature__link_active')
        })

        element.classList.add('feature__link_active')

        list.forEach(element => {
            element.classList.add('hidden')
        })
        
        list[index].classList.remove('hidden')
    })
});



//njjnjmnn