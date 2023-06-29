var height = window.innerHeight;
var adshown = false;
var servshown = false;
var madshown = false;
var mservshown = false;

$('#menu').on('click', function()
{

    $('#mheader').fadeIn(200);
});

$('#cross').on('click', function()
{

    $('#mheader').fadeOut(200);
});

function menuHeight()
{
    height = window.innerHeight;
    $('#mheader').css('height',(height));
}

$("#acercade").on('click',function()
{
    if(servshown==true)
    {
        $(".servpopup").fadeToggle(1);
        servshown = false;
    }
    $(".adpopup").fadeToggle(200);
    adshown = !adshown;
});

$("#macercade").on('click',function()
{
    if(mservshown==true)
    {
        $("#servdropdown").slideToggle(1);
        servshown = false;
    }
    $("#addropdown").slideToggle(1);
    madshown = !madshown;
});

$("#mserv").on('click',function()
{
    if(madshown==true)
    {
        $("#addropdown").slideToggle(1);
        servshown = false;
    }
    $("#servdropdown").slideToggle(1);
    mservshown = !mservshown;
});

$("#serv").on('click',function()
{
    if(adshown==true)
    {
        $(".adpopup").fadeToggle(1);
        adshown = false;
    }
    $(".servpopup").fadeToggle(200);
    servshown = !servshown;
});

setInterval(menuHeight,1);

function flecha()
{
	$("#down").animate({
		marginTop: "20px"
	}, 600);
	$("#down").animate({
		marginTop: "10px"
	}, 600);
}

$(document).ready(flecha());

setInterval(flecha, 2000);

$("#down").on('click', function()
	{
		$('html,body').animate({
        scrollTop: $("#CAMBIAR").offset().top - 125},
        'slow');
	}
);