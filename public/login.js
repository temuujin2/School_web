import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    setDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
    getDatabase,
    onValue,
    ref,
    push,
    query,
    orderByChild,
    orderByKey,
    child,
    set,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuCSba7eXH5S3x0VYAGFNIh6_i-ROeXbs",
    authDomain: "demoproject-c8046.firebaseapp.com",
    projectId: "demoproject-c8046",
    storageBucket: "demoproject-c8046.appspot.com",
    messagingSenderId: "741528981047",
    appId: "1:741528981047:web:1da9918ce66467a75b79b2",
    measurementId: "G-D3NDMZYD13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realDb = getDatabase(app);

let user= null;
let userUid = '';
let userEmail = "";
let password = document.getElementById("passInput"), confirm_password = document.getElementById("confirmPassword");

function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const createUser = () => {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passInput").value;
    signOut(auth).then(()=>{
        console.log("Successful signout");
        console.log("User", user);
    }).catch(err=>console.log("AuthErr", err));

    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         user = userCredential;
    //         const userUidFromCred = userCredential.user.uid;
    //         userEmail = email;
    //         userUid = userUidFromCred;
    //         setDoc(doc(db, "users", userUidFromCred), {
    //             name: email,
    //         });
    //         console.log("Account created");
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage);
    //     });
};

const loginUser = (e) => {
    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPassword").value;
    e.preventDefault();
    console.log("Login start");
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
      
        console.log("Login successful; UID= ", userCredential);

      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
    console.log("Login end", user);
};

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User changed');
    } else {
        console.log('User signout')
    }
});

//==========Button event listeners============

document.getElementById("signUpBtn").addEventListener("click", createUser);
document.getElementById("signIn").addEventListener("click", loginUser);

//============================================

// let showingAlert = false;
// const interval = setInterval(() => {
//     document.title = showingAlert ?
//         'Тавтай морилно уу' : 'Бүртгэлгүй бол бүртгүүлнэ үү';

//     showingAlert = !showingAlert;
// }, 1800);

// function validateemail() {
//     var x = document.myform.email.value;
//     var password = document.myform.password.value;
//     var atposition = x.indexOf("@");
//     var dotposition = x.lastIndexOf(".");
//     if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
//         alert("Зөвхөн e-mail хаягаар нэвтэрнэ үү!!");
//         return false;
//     } else if (password.length < 6) {
//         alert("Таны password 6-с багагүй үгтэй байна!!");
//         return false;
//     }
// }

// var modal = document.getElementById('id01');


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Цаг алдалгүй захиал", "Таны хайсан бүхэн эндээс", "Бусдаас хямд", "Чанартай барааг яг одоо захиал"];
// const typingDelay = 100;
// const erasingDelay = 50;
// const newTextDelay = 2000;
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     } else {
//         cursorSpan.classList.remove("typing");
//         setTimeout(erase, newTextDelay);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingDelay);
//     } else {
//         cursorSpan.classList.remove("typing");
//         textArrayIndex++;
//         if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//         setTimeout(type, typingDelay + 1100);
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     if (textArray.length) setTimeout(type, newTextDelay + 250);
// });