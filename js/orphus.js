document.onkeydown = function(e)
{
    if (document.getSelection)
    {
        selText = document.getSelection().toString();
    }
    else if (document.selection)
    {
        selText = document.selection.createRange().text;
    }
    else if (window.getSelection)
    {
        selText = window.getSelection().toString();
    }
    if(selText!="")
    {
        e = e || window.event;

        var curUrl = window.location.href;
        var arCurUrl = curUrl.split('/');

        if (e.ctrlKey && e.keyCode == 13)
        {
            var ur = document.URL;
            if (selText.length > 2 && selText.length < 20)
            {
                if(arCurUrl[3] == 'oz'){
                    var s = prompt("'" + selText.toString() + "'" + " matnida xatolik aniqlandi! \n\n","To'g'ri variantni kiriting!");
                }
                else if(arCurUrl[3] == 'uz') {
                    var s = prompt("'" + selText.toString() + "'" + " матнида хатолик аниқланди! \n\n","Тўғри вариантни киритинг!");
                }
                else if(arCurUrl[3] == 'en') {
                    var s = prompt("There is a mistake in the text: '"+selText.toString() + "'\n\n", "Enter the correct option!");
                }
                else {
                    var s = prompt("В тексте: '"+selText.toString() + "' обнаружена ошибка! \n\n","Введите правильный вариант!");
                }

                if(s)
                {
                    if(selText != s){
                    var pUrl = document.URL;
                    $.post("http://" + window.location.hostname + "/uz/site/checktext", { errText: selText, correctText: s, curl: ur },
                        function(data)
                        {
                            if(arCurUrl[3] == 'oz'){
                                if (data=="SUCCESS") alert("Rahmat! Sizning murojaatingiz qayta ishlashga yuborildi.");
                                else alert("Xatolik: "+data);
                            }
                            else if(arCurUrl[3] == 'uz'){
                                if (data=="SUCCESS") alert("Рахмат! Сизнинг мурожатингиз қайта ишлашга юборилди.");
                                else alert("Xatolik: "+data);
                            }
                            else if(arCurUrl[3] == 'en'){
                                if (data=="SUCCESS") alert("Thank you! Your appeal has been sent for processing.");
                                else alert("Error: "+data);
                            }
                            else {
                                if (data=="SUCCESS") alert("Спасибо! Ваше обращение передано на обработку.");
                                else alert("Ошибка: "+data);
                            }
                        });
                    }
                    else{
                        if(arCurUrl[3] == 'oz'){
                            alert("Xatolik va xatolikka bildirilgan taklif bir xil bo'lishi mumkin emas");
                        }
                        if(arCurUrl[3] == 'uz'){
                            alert("Хатолик ва хатоликка билдирилган таклиф бир хил бўлиши мумкин эмас");
                        }
                        else if(arCurUrl[3] == 'en'){
                            alert("The erroneous text and the proposed option may not be the same");
                        }
                        else {
                            alert("Ошибочный текст и предлагаемый вариант не могут быть одинаковыми");
                        }
                    }
                }
            }
            else {
                if(arCurUrl[3] == 'oz'){
                    alert("Xatolik to'g'risida xabar yuborish uchun 3 dan 20 gacha belgidan iborat o'lchamdagi matn blokini ajrating");
                }
                if(arCurUrl[3] == 'uz'){
                    alert("Хатолик тўғрисида хабар юбориш учун 3 дан 20 гача белгидан иборат ўлчамдаги матн блокини ажратинг");
                }
                else if(arCurUrl[3] == 'en'){
                    alert("To send an error message select a block of text with an error sized from 3 to 20 characters");
                }
                else {
                    alert("Для отправки сообщения об ошибке выделите блок текста с ошибкой размером от 3 до 20 символов");
                }
            }
        }
    }
}