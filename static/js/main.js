$(document).ready(function(){$(".carousel").carousel({interval:2e5});var t=$(".testimonial .fa-chevron-left"),a=$(".testimonial .fa-chevron-right");function e(){$(".client:first").hasClass("active")?t.fadeOut():t.fadeIn(),$(".client:last").hasClass("active")?a.fadeOut():a.fadeIn()}e(),$(".testimonial i").click(function(){$(this).hasClass("fa-chevron-right")?$(".testimonial .active").fadeOut(100,function(){$(this).removeClass("active").next(".client").addClass("active").fadeIn(),e()}):$(".testimonial .active").fadeOut(100,function(){$(this).removeClass("active").prev(".client").addClass("active").fadeIn(),e()})}),$(window).scroll(function(){var t=$(".navbar");$(window).scrollTop()>=t.height()?t.addClass("scrolled"):t.removeClass("scrolled")});var s=$("#scroll-top");$(window).scroll(function(){1400<=$(this).scrollTop()?s.fadeIn():s.fadeOut()}),s.click(function(){$("html,body").animate({scrollTop:0},2e3)}),setTimeout(function(){"use strict";$(".loading .sk-circle").fadeOut(1e3,function(){$(this).parent().fadeOut(1e3,function(){$("body").css({overflow:"auto",overflowX:"hidden"}),$(this).remove()})})},500),$(".main-input").on("blur",function(){""!==$(this).val()?($(this).parent().parent().addClass("has-words-right"),$(this).parent().parent().removeClass("has-words-wrong"),$(this).parent().parent().find(".empty").fadeOut()):($(this).parent().parent().removeClass("has-words-right"),$(this).parent().parent().addClass("has-words-wrong"),$(this).parent().parent().find(".empty").fadeIn())})});