const news_title_1dropdown_link = document.getElementById('dropdown_link')
const dropdown_menu = document.getElementById('dropdown_menu')
const news_title_1 = document.getElementById('news_title_1')
const news_title_2 = document.getElementById('news_title_2')
const news_row_1 = document.getElementById('news_row_1')
const news_row_2 = document.getElementById('news_row_2')
dropdown_link.addEventListener('click', ()=>{
    dropdown_menu.classList.toggle('active')
})
news_title_1.addEventListener('click', ()=>{
    news_title_1.classList.remove('border_b')
    news_title_1.classList.add('border_t')
    news_title_2.classList.add('border_b')
    news_title_2.classList.remove('border_t')
    news_row_1.classList.remove('none')
    news_row_2.classList.add('none')
})
news_title_2.addEventListener('click', ()=>{
    news_title_1.classList.add('border_b')
    news_title_1.classList.remove('border_t')
    news_title_2.classList.remove('border_b')
    news_title_2.classList.add('border_t')
    news_row_1.classList.add('none')
    news_row_2.classList.remove('none')
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
