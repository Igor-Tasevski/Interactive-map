$(document).ready(function () {

    //When option from form is choosed
    $('#mapForm').change(function () {

        // alert($('#mapForm option:selected').val())


        var selectedContinent = $('#mapForm option:selected').val();
        if (selectedContinent == 'ALL') {
            $('a.dot').show(1000);
        } else {

            $('a.dot[continent*="' + selectedContinent + '"]').show(2000)
            $('a.dot[continent!="' + selectedContinent + '"]').hide(2000)
        }


    })

    //When dot is clicked on the map


});



$(document).ready(function() {

    $('a.dot').click(function() {

        $('a.dot').removeClass('selected');


        $(this).addClass('selected');


        var cityId = $(this).attr('city');


        var citySelector = '.city_detail#' + cityId;


        var content = $(citySelector).html();


        $('.detail_container').fadeOut(500, function () {
            $('.detail_container .city_detail').html(content);
            $('.detail_container').fadeIn(500);
        });
    });
});




