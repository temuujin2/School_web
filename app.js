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


//   ======================================

/*------------Validation Function-----------------*/
var count = 0; // To count blank fields.
function validation(event) {
var radio_check = document.getElementsByClassName('checkbox'); // Fetching radio button by name.
var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.
var text_area = document.getElementsByTagName('textarea');
// Validating radio button.
if (radio_check[0].checked == false && radio_check[1].checked == false) {
var y = 0;
} else {
var y = 1;
}
// For loop to count blank inputs.
for (var i = input_field.length; i > count; i--) {
if (input_field[i - 1].value == '' || text_area.value == '') {
count = count + 1;
} else {
count = 0;
}
}
if (count != 0 || y == 0) {
    confirm("Мэдээлэл илгээх үү?");  // Notifying validation
event.preventDefault();
} else {
return true;
}
}
/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step1() {
document.getElementById("first").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.background = "#f27334";
}
// Function that executes on click of first previous button.
function prev_step1() {
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("active1").style.background = "#f27334";
document.getElementById("active2").style.background = "rgb(207, 207, 207)";
}
// Function that executes on click of second next button.
function next_step2() {
document.getElementById("second").style.display = "none";
document.getElementById("third").style.display = "block";
document.getElementById("active3").style.background = "#f27334";
}
// Function that executes on click of second previous button.
function prev_step2() {
document.getElementById("third").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.background = "#f27334";
document.getElementById("active3").style.background = "rgb(207, 207, 207)";
}

// ===================== alert box ==================