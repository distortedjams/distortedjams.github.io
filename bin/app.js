// JavaScript Document
let mouseCursor = document.querySelector(".cursor");
let mainDiv = document.querySelector(".main");
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove',cursor);
window.addEventListener('mousedown',cursordown);
window.addEventListener('mouseup',cursorup);

function cursor(e)
{
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";
	
	var box=mainDiv;
	var boxCenter=[$(".main").offset().left+$(".main").width()/2, $(".main").offset().top+$(".main").height()/2];

$(document).mousemove(function(e){    
    
        
	var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(180/Math.PI);	    
    
    box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
    box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
    box.css({ 'transform': 'rotate(' + angle + 'deg)'});
    
});
}

function cursordown()
{
	mouseCursor.classList.add("cursor-click");
}

function cursorup()
{
	mouseCursor.classList.remove("cursor-click");
}

navLinks.forEach(link => {
	
	link.addEventListener('mouseleave', ()=> {
		mouseCursor.classList.remove("link-grow");
	})
	
	link.addEventListener('mouseover', ()=> {
		mouseCursor.classList.add("link-grow");
	})
})

