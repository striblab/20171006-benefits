!function t(i,r,e){function n(s,a){if(!r[s]){if(!i[s]){var o="function"==typeof require&&require;if(!a&&o)return o(s,!0);if(d)return d(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=r[s]={exports:{}};i[s][0].call(c.exports,function(t){var r=i[s][1][t];return n(r||t)},c,c.exports,t,i,r,e)}return r[s].exports}for(var d="function"==typeof require&&require,s=0;s<e.length;s++)n(e[s]);return n}({1:[function(t,i,r){$.urlParam=function(t){var i=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=i?i[1]||0:null};var e=$.urlParam("chart");null!=e&&($(".slide").hide(),$("#"+e).show()),d3.json("./data/benefits.json",function(t,i){function r(t,i){d3.select("#"+t+" .holder").selectAll(".card").data(n.filter(function(t){return t.FiveYearChange==i}).sort(function(t,r){return"Decrease"==i?d3.ascending(t.diff,r.diff):d3.descending(t.diff,r.diff)})).enter().append("div").attr("class",function(t){return t.slug+" card"}).html(function(t){var r="",e="",n="",d="&nbsp;&nbsp;",s="&nbsp;&nbsp;",a=t.y2017-t.y2013,o="#118241";return t.diff<0&&(o="#9C0004"),"Increase"==i?(r=d3.format("%")(t.y2017),e=d3.format("%")(t.y2013),d=d3.format("%")(t.y2017),t.y2013>.1&&(s=d3.format("%")(t.y2013)),n="<div class='updown' style='color:"+o+"'>"+d3.format("+%")(a)+"</div><div class='barChart'><div class='label'>"+t.description+"<div class='bar' style='width:"+r+";'><div class='first' style='width:"+e+";'>"+s+"</div>"+d+"</div><div class='pct'></div></div></div>"):"Decrease"==i?(e=d3.format("%")(t.y2017),r=d3.format("%")(t.y2013),t.y2017>.1&&(d=d3.format("%")(t.y2017)),s=d3.format("%")(t.y2013),n="<div class='updown' style='color:"+o+"'>"+d3.format("+%")(a)+"</div><div class='barChart'><div class='label'>"+t.description+"<div class='bar' style='width:"+r+";'><div class='first' style='width:"+e+";'>"+d+"</div>"+s+"</div><div class='pct'></div></div></div>"):(r=d3.format("%")(t.y2017),e=d3.format("%")(t.y2013),d=d3.format("%")(t.y2017),t.y2013>.1&&(s=d3.format("%")(t.y2013)),n="<div class='updown' style='color:"+o+"'>"+d3.format("+%")(a)+"</div><div class='barChart'><div class='label'>"+t.description+"<div class='bar' style='width:"+r+";'><div class='first' style='width:"+e+";'>"+s+"</div>"+d+"</div><div class='pct'></div></div></div>"),n}),$(document).ready(function(){$(".filter").on("keyup search",function(t){$($(this).parent().find(".card")).hide();var i=$(this).find("input").val();$($(this).parent().find(".card")).each(function(){-1!=$(this).text().toUpperCase().indexOf(i.toUpperCase())&&$(this).show()});var r=$($(this).parent().find(".card:visible")).length;""!=i?$("#results").html(r):$("#results").html("all")}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1})})}function e(t){this.dd=t,this.placeholder=this.dd.children("span"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}var n=i.benefits;r("increasing","Increase"),r("decreasing","Decrease"),r("weird","Weird"),$(".thisSwitch a").click(function(){$(".card").hide(),$("."+$(this).attr("data")).show(),"all"==$(this).attr("data")&&$(".card").show()}),e.prototype={initEvents:function(){var t=this;t.dd.on("click",function(t){return $(this).toggleClass("active"),!1}),t.opts.on("click",function(){var i=$(this);t.val=i.text(),t.index=i.index(),t.placeholder.text(t.val)})},getValue:function(){return this.val},getIndex:function(){return this.index}},$(function(){new e($("#dd")),new e($("#dd2")),new e($("#dd3"));$(document).click(function(){$(".wrapper-dropdown-1").removeClass("active")})})})},{}]},{},[1]);