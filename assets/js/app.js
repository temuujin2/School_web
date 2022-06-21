// =================cartnii dropdown heseg====================
var modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// =================Login heseg==============================
window.onclick = function (event) {
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
function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 1000
        const y = (window.innerHeight - e.pageY * speed) / 1000

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

$("figure").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);


//   ======================================

/*------------enroll-----------------*/
var count = 0;
function validation(event) {
    var radio_check = document.getElementsByClassName('checkbox');
    var input_field = document.getElementsByClassName('text_field');
    var text_area = document.getElementsByTagName('textarea');

    if (radio_check[0].checked == false && radio_check[1].checked == false) {
        var y = 0;
    } else {
        var y = 1;
    }

    for (var i = input_field.length; i > count; i--) {
        if (input_field[i - 1].value == '' || text_area.value == '') {
            count = count + 1;
        } else {
            count = 0;
        }
    }
    if (count != 0 || y == 0) {
        confirm("Мэдээлэл илгээх үү?");
        event.preventDefault();
    } else {
        return true;
    }
}
/*---------------------Enroll number--------------------------*/

function next_step1() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.background = "#f27334";
}

function prev_step1() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("active1").style.background = "#f27334";
    document.getElementById("active2").style.background = "rgb(207, 207, 207)";
}

function next_step2() {
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active3").style.background = "#f27334";
}

function prev_step2() {
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.background = "#f27334";
    document.getElementById("active3").style.background = "rgb(207, 207, 207)";
}

// ===================== hamburger menu ==================
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// ==================== Bus video play ==================

document.querySelector(".videoplay2").addEventListener("click", function () {
    this.play()
});


