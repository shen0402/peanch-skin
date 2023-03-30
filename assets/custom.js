$(document).ready(function () {
    $(".tab_nav li:first-child").addClass("active"), $(".tabcontent").hide(), $(".tabcontent:first").show(), $(".tab_nav li").click(function () {
        $(".tab_nav li").removeClass("active"), $(this).addClass("active"), $(".tabcontent").hide();
        var e = $(this).find("a").attr("href");
        return $(e).fadeIn(), !1
    });
     $('.product-form__input--dropdown .select option:selected').removeAttr('selected');
    $('.product-form__input--dropdown .select option:nth-child(2)').attr('selected', 'selected');
    if (document.querySelector('variant-selects')) {
        document.querySelector('variant-selects').onVariantChange();
        $("html, body").animate({ scrollTop: 0 }, "fast");
    }
    if ($('variant-radios input').length > 0) {
        document.querySelector('variant-radios').onVariantChange();
    }
})
$(function () {
    $(".ques-heading").click(function (e) {
        var t = $(this).closest(".questions__item_row").find(".ques-desc");
        $(this).closest(".question-body").find(".ques-desc").not(t).slideUp(), 
        $(this).hasClass("active") ? $(this).removeClass("active") : ($(".ques-heading.active").removeClass("active"), 
        $(this).addClass("active")), 
        t.stop(!1, !0).slideToggle(), e.preventDefault()
    })
    $('.tab-header-item').click(function(){
        $('.tab-header-item').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('.tab-content-item').hide();
        var to_open = $(this).attr('tab_content');
        $(`[content="${to_open}"]`).show()
    });
    $('.tab-header-item-mob').click(function(){
        $(this).toggleClass('active');
        var to_open = $(this).attr('tab_content');
        $(`[content="${to_open}"]`).slideToggle();
    });
    $('.reviews-carucel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000
    });
    $('.logo-list-carucell').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
        ]
    });
})