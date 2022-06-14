let showingAlert = false;
const interval = setInterval(() => {
    document.title = showingAlert ?
        'Тавтай морилно уу' : 'Бүртгэлгүй бол бүртгүүлнэ үү';

    showingAlert = !showingAlert;
}, 1800);

function validateemail() {
    var x = document.myform.email.value;
    var password = document.myform.password.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Зөвхөн e-mail хаягаар нэвтэрнэ үү!!");
        return false;
    } else if (password.length < 6) {
        alert("Таны password 6-с багагүй үгтэй байна!!");
        return false;
    }
}

var modal = document.getElementById('id01');


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["School", "of", "Ulaanbaatar"];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 1300;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ===================
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