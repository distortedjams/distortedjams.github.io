// JavaScript Document
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove',cursor);
window.addEventListener('mousedown',cursordown);
window.addEventListener('mouseup',cursorup);

function cursor(e)
{
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";
	
	var mX, mY, distance,
        $distance = $('#distance span'),
        $element  = $('#element');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        $distance.text(distance);         
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

