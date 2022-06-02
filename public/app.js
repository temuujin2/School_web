// =================cartnii dropdown heseg====================
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// =================Login heseg==============================
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-container");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// ==================background mouse move===================
document.addEventListener("mouseover", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/1000
        const y = (window.innerHeight - e.pageY*speed)/1000

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

$("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );