$(function(){$(".show-more a").toggle(function(){$(this.hash).slideDown();$(this).html("Hide more on this story");return!1},function(){$(this.hash).slideUp();$(this).html("Show more on this story");return!1});$(".section-control a").toggle(function(){$(this.hash).slideUp();$(this).children("strong").html("Show");return!1},function(){$(this.hash).slideDown();$(this).children("strong").html("Hide");return!1})});