const language =  document.querySelectorAll('.btn_language')
language.forEach(element => {
    element.addEventListener('click', () => {
        language.forEach(removeEleClass => {
            removeEleClass.classList.remove('language_active')
        })
        element.classList.add('language_active')
    })
});
