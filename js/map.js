/**
 * Created by a_mirvosiqov on 24.11.2014.
 */
$(document).ready(function () {
   /////////*****Map 1 territorial organisation ********////////////
    $('#vmap').css(
        {
            'width': '600px',
            'height': '400px'
        }
    );
    /////////*****Map 2 statistic map ********////////////
    $('.mainMap').css(
        {
            'width': '600px',
            'height': '400px'
        }
    );


    $('.mapPoints a').click(function(e){
        e.preventDefault();
        $('#mapLabels').toggleClass('open');
    });

    $('.mapPoints a').hover(function(){
        filterRegions($(this).attr('href'));
    }, function(){
        filterRegions('');
    });
    $(window).click(function(e){
        if(e.target.className.animVal != "jvectormap-region"){
            //console.log(e.target.className.animVal);
            $('#mapLabels').html('');
        }
    });
});

var regions = {
    to: 0,
    qo: 0,
    an: 0,
    bu: 0,
    qa: 0,
    no: 0,
    gu: 0,
    sa: 0,
    fa: 0,
    ji: 0,
    na: 0,
    te: 0,
    xo: 0
};

function filterRegions(regionId) {
    var regionsList = {};
    $.each(regions, function (key, value) {
        var elementColor = '#4da9ec';
        regionsList[key] = elementColor;
    });
    if (regionId.length > 0){
        regionsList[regionId] = '#57bb64';
    }
    $('#vmap').vectorMap('set', 'colors', regionsList);
    return false;
}

//apiEvents.push({onMouseDown: "mouseDown",onMouseUp: "mouseUp"});
//console.log(apiEvents);


var coloreds = {
    to: '#ababab',
    qo: '#ababab',
    an: '#ababab',
    bu: '#ababab',
    qa: '#ababab',
    no: '#ababab',
    gu: '#ababab',
    sa: '#ababab',
    fa: '#ababab',
    ji: '#ababab',
    na: '#ababab',
    te: '#ababab',
    xo: '#ababab',
    tosh: '#ababab'
};

function makeMapEnd(messages) {
    $('#vmap').html('');
    $('.jqvmap-label').remove();
    $('#vmap').vectorMap({
        map: 'uzbekistan',
        backgroundColor: '',
        color: '#ababab',
        hoverColor: '#243978',
        selectedColor: '#434ae2',//цвет при нажатии
        enableZoom: false,
        showTooltip: true,
        borderColor: '#fff',
        borderWidth: 2,
        borderOpacity: 1,
        colors: coloreds,
        onRegionClick: function (event, label, code) {
            $('#mapLabels').html(messages[label]);
            //console.log(messages[label]);
        },
        onRegionSelect: function (event, label, code) {
            //$('#mapLabels').html(messages[label]);
            //console.log('2222');
            //console.log(label);
        },
        onRegionDeselect: function(){
            $('#mapLabels').html('');
            console.log('3333');
        },
        onLabelShow: function (event, label, code) {
            $('.jqvmap-label').html(messages[code]);
        }

    });


}
//////////////******Map2 statistic map*******/////////////////
var icolors = {
    to: '#3e9b7f',
    qo: '#A7EDD8',
    an: '#4EBA9A',
    bu: '#8AD3BD',
    qa: '#4AAB8E',
    no: '#8AD3BD',
    gu: '#8AD3BD',
    sa: '#4AAB8E',
    fa: '#4AAB8E',
    ji: '#A7EDD8',
    na: '#4dd2ab',
    te: '#8AD3BD',
    xo: '#4EBA9A',
    tosh: '#328169'
};

function makeMap(regions, messages, colors) {
    $('.mainMap').html('');
    $('.mapLabels2').remove();
    $('.mainMap').vectorMap({
        map: 'uzbekistan',
        backgroundColor: '',
        // color: '#49c7a2',
        hoverColor: '#c8c8c8',
        cursor: 'pointer',
        //selectedColor: '#434ae2',//цвет при нажатии
        enableZoom: false,
        showTooltip: true,
        borderColor: '#fff',
        borderWidth: 2,
        borderOpacity: 1,
        colors: icolors,
        onLabelShow: function (event, label, code) {
            $('.mapLabels2').html(messages[code]);
            $('.'+code).addClass('active');
        },
        onRegionOut: function(event, label, code){
            $('.mapLabels2').html('');


            // console.log($('#jqvmap1_' + label).attr('fills', '#fcffcc'));

            setTimeout(function(){
                $('#jqvmap1_' + label).attr('fill', icolors[label]);
            }, 100);
        },
        // onRegionClick: function (element, code, region) {
        //
        //     $('#map_modal_region .container_region_chart').attr('id','container_'+code);
        //     Highcharts.chart('container_'+code, {
        //         chart: {
        //             plotBackgroundColor: null,
        //             plotBorderWidth: null,
        //             plotShadow: false,
        //             type: 'pie'
        //         },
        //         title: {
        //             text: 'Browser market shares January, 2015 to May, 2015'
        //         },
        //         tooltip: {
        //             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        //         },
        //         legend: {
        //             enabled: true
        //         },
        //         plotOptions: {
        //             pie: {
        //                 allowPointSelect: true,
        //                 cursor: 'pointer',
        //                 dataLabels: {
        //                     enabled: true
        //                 },
        //                 showInLegend: true
        //             }
        //         },
        //         series: [{
        //             name: 'Brands',
        //             colorByPoint: true,
        //             data: [{
        //                 name: code,
        //                 y: 27
        //             }, {
        //                 name: 'Почтовые услуги',
        //                 y: 42,
        //                 sliced: true,
        //                 selected: true
        //             }, {
        //                 name: 'Икт, ТВ, образование',
        //                 y: 14
        //             }, {
        //                 name: 'Safari',
        //                 y: 13
        //             }, {
        //                 name: 'Chrome',
        //                 y: 4
        //             }]
        //         }]
        //     });
        //     $('#map_modal_region').modal('show');
        // }
    });
}