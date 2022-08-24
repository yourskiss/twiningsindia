/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


 


/* header Menu === start */
$("#headerMenu").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    if($(this).hasClass("open"))
    {
        $("#headerMenu").stop(true).addClass("close").removeClass("open");
        $("#mainmenuulli").stop(true).slideDown(500);
        $("#headerMenu i.fa").stop(true).addClass("fa-times").removeClass("fa-bars");
    }
    else 
    {
        $("#headerMenu").stop(true).addClass("open").removeClass("close");
        $("#mainmenuulli").stop(true).slideUp(500);
        $("#headerMenu i.fa").stop(true).addClass("fa-bars").removeClass("fa-times");
    }

});
/* header Menu === end */
     

 


 /* ############################  resources === start ############################ */
if($(".resources_pagination").length > 0)
{
    $("#resources_pagination div h2").click(function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        $("#resources_pagination div ul").slideToggle(300);
    });
    $("#resources_pagination div ul li").click(function(e)
    {
        if($(window).width() < 1023)
        {
            e.preventDefault();
            e.stopPropagation();
            $("#resources_pagination div ul").slideUp(300);
            $("#resources_pagination div ul li").removeClass("active");
            $(this).addClass("active");
            var pagenumber = $(this).find("a").text();
            $("#resources_pagination div h2").text(pagenumber);
        }
    });
    $('body').click(function(e) // close on click body
    {    
        e.stopPropagation();
        if($(window).width() < 1023)
        {
            $("#resources_pagination div ul").slideUp(300);
        }
    });
}
/* ############################ resources === end ############################ */

