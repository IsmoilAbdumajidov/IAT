const news_title_1 = document.getElementById('news_title_1')
const news_title_2 = document.getElementById('news_title_2')
const news_row_1 = document.getElementById('news_row_1')
const news_row_2 = document.getElementById('news_row_2')
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