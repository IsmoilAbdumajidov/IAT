
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModalSearch").modal({
            backdrop: 'static'
        });
    });
});

$(document).ready(function(){
	$(".fix_social li").stop().hover(function(){
        var $this = $(this);
        $this.animate({'left': 250},50,'swing',function(){});
    } ,function(){
        var $this = $(this);
        $this.animate({'left': 0},0,'swing',function(){});
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $('.print span.glyphicon-print').click(function () {
        $(".pro_news").print({
            //Use Global styles
            globalStyles : false,
            //Add link with attrbute media=print
            mediaPrint : false,
            //Custom stylesheet
            stylesheet : "http://fonts.googleapis.com/css?family=Inconsolata",
            //Print in a hidden iframe
            iframe : false,
            //Don't print this
            noPrintSelector : ".avoid-this"
            //Add this at top
            //prepend : "Hello World!!!<br/>",
            //Add this on bottom
            //append : "<br/>Buh Bye!"
        });
        //var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1200, height=900, bottom="+(screen.height-0)+", right="+(screen.width-0));
        //win.document.body.innerHTML = $('.rightPanel').html();
        //win.print();
    });
    $('body').append('<div class="scrollUp"></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });
    $('.scrollUp').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    //$('#roadmap-photo').text('Прикрепить файл');
    
    // $('.formBox').click(function () {
    //     $("#deadline").modal();
    // })
    $('.vmapper').hover(function () {
        $(this).parents('body').toggleClass('mainMapBody');
        $('.jqvmap-label').css('display','none');
        $('.mapLabels2').css('display','none');
    });
    $('.rectangle, .rectangle2, .rectangle3').hover(function (){
        $(this).parents('').toggleClass('active');
    });

    $('.season').click(function () {
        $(this).toggleClass('active');

        $('.checkbox').find('.selectBox').attr('disabled',true);

        if(!$(this).parents('.checkbox').hasClass('active')){
            $('.checkbox').removeClass('active');
            $(this).parents('.checkbox').addClass('active')
            $('.checkbox').find('input').prop("checked", false);
            $(this).parents('.checkbox').find('input').prop("checked", true);
        }else{
            $('.checkbox').removeClass('active');
            $(this).parents('.checkbox').removeClass('active')
            $('.checkbox').find('input').prop("checked", false);
            $(this).parents('.checkbox').find('input').prop("checked", false);
        }

        if($(this).parents('.checkbox').hasClass('active')){
            $(this).parents('.checkbox').find('.selectBox').attr('disabled',false);
        }else {
            $(this).parents('.checkbox').find('.selectBox').attr('disabled',true);
        }
    });

    $('.interactive_services li a').hover(function () {
        $(this).parents('li').toggleClass('active');
    });

    $('.answer_list li span').click(function () {
        $('.answer_list li').removeClass('active');
        $(this).parents('li').toggleClass('active');

        if(!$(this).parents('li').hasClass('active')){
            $(this).parents('li').find('input').prop("checked", false);
        }else{
            $('.answer_list li').find('input').prop("checked", false);
            $(this).parents('li').find('input').prop("checked", true);
        }
    });

    window.onmousemove = function (e) {
        if($(e.target).parents('.search_form').hasClass('search_form')){
            $('.search_form').addClass('active');
        }else{
            if($('.search_box').val() == ""){
                $('.search_form').removeClass('active');
                $('.search_box:focus').parent().addClass('active');
            }
        }
    }




    $('.circle_name a').hover(function(){
        $(this).parents('.crive').find('.circle_box').addClass('active')
        $(this).parents('.crive').find('img').css('opacity','0.6');
    },function(){
        $(this).parents('.crive').find('.circle_box').removeClass('active')
        $(this).parents('.crive').find('img').css('opacity','1');
    });

    $('.flipper').click(function () {
        $(this).toggleClass('active');
    });

    $('.circle_link').hover(function () {
        $(this).parent('.circle_box').children('img').css('opacity','0.6');
    },function () {
        $(this).parent('.circle_box').children('img').css('opacity','1');
    })

    $('.head_menu .dropdown, .head_menu_modal .dropdown').hover(function(){
        $(this).addClass('open');
    }, function(){
        $(this).removeClass('open');
    });


    $('.filter_box').click(function(e){
        e.preventDefault();
        $('.filter').toggleClass('active');
        $('.hide_filter').slideToggle(200,function(){});
    });

    $('.map_btn').click(function(e){
        e.preventDefault();
        $('.footer_list').slideToggle(400,function(){});
    });

    $(".item_text").animated("fadeInUp", "fadeInUp");
    $(".mini_map").animated("fadeIn", "fadeIn");
    $(".menu_modal .modal-dialog").animated("fadeInLeftBig", "fadeInLeftBig");



    $.fn.xToggle = function(goUp) {
        $(this).css("opacity", "0").waypoint(function(dir) {
            if (dir === "down" && $(this).css('opacity') == '0') {
                $(this).addClass(goUp).css("opacity", "1");
            }
        }, {
            offset: "80%"
        }).waypoint(function(dir) {
            if (dir === "down" && $(this).css('opacity') == '0') {
                $(this).addClass(goUp).css("opacity", "1");
            }
        }, {
            offset: -$(window).height()
        });
    };



    if (navigator.userAgent.search(/Firefox/ ) > -1) {
        $('#container').css('margin-left','-50px');
    }

    if (navigator.userAgent.match(/NET4/ )) {
        $('#container').css('margin-left','-50px');
        $('html').addClass('ie_x');
    }

    $('.feedback-form .close').click(function(){
            document.location.href = 'appeal'

    });


        var $count = $('.slide_article .carousel-inner .item').length;
        $('.count_s').text($count);

// Text to speech
    readTextButton = $('.s-read-text');
    readTextTooltip = $('.s-wrapper .s-tooltip');
    text = "";
    var curUrl = window.location.href;
    var arCurUrl = curUrl.split('/');
    var speaker = "UK English Female";
    if(arCurUrl[3] == 'uz' || arCurUrl[3] == 'ru'){ speaker = "Russian Female";}
    readTextButton.on('click', function(){
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        if(responsiveVoice.isPlaying()) {
            responsiveVoice.cancel();
        }else{
            responsiveVoice.speak(text, speaker);
        }
    });
    // Text to speech tooltip
    readTextButton.on('mouseenter', function () {
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        if(text === ''){
            readTextTooltip.css({
                'opacity': 1
            });
        }else{
            readTextTooltip.css({
                'opacity': 0
            });
        }
    }).on('mouseout',function () {
        readTextTooltip.css({
            'opacity': 0
        });
    });

});
(function($) {$.fn.animated = function(inEffect, outEffect) {$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {if (dir === "down") {$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");} else {$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");};}, {offset: "80%"}).waypoint(function(dir) {if (dir === "down") {$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");} else {$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");};}, {offset: -$(window).height()});};})(jQuery);
function doNut(className,colors,arrayData){
    Highcharts.chart(className, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: "transparent"
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false,
            pointFormat: ''
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                borderColor: 'transparent',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            },
            series:{
                states:{
                    hover:{
                        enabled:false,
                    },
                },
            },
        },
        credits: {
            enabled: false,
        },
        series: [{
            name: '',
            colorByPoint: true,
            colors: colors,
            data: arrayData,
        }]
    });
}
