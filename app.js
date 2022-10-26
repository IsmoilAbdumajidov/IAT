const dropdown_link = document.getElementById('dropdown_link')
const dropdown_menu = document.getElementById('dropdown_menu')
dropdown_link.addEventListener('click', ()=>{
    dropdown_menu.classList.toggle('active')
})

const language = document.querySelectorAll('.btn_language')

language.forEach(element => {
    element.addEventListener('click', ()=>{
        language.forEach(removeEleClass =>{
            removeEleClass.classList.remove('language_active')
        })
        element.classList.add('language_active')
    })
});
