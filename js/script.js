document.getElementById("button").addEventListener("click", function () {
    let name = document.getElementById('your-name');
    let email = document.getElementById('email');
    let interest = document.getElementById('interest');

    var isValid = true;

    var namePattern = /^[a-zA-Z\s]+$/;
    if (!name.value) {
        document.getElementById("name-error-message").innerText = "Field tidak boleh kosong";
        name.style.borderColor = 'red';
        isValid = false;
    } else if (!namePattern.test(name.value)) {
        name.style.borderColor = 'red';
        document.getElementById("name-error-message").innerText = "Hanya boleh berisikan alfabet";
        isValid = false;
    } else {
        document.getElementById("name-error-message").innerText = "";
        name.style.borderColor = '';
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.value) {
        document.getElementById("email-error-message").innerText = "Field tidak boleh kosong";
        email.style.borderColor = 'red';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        email.style.borderColor = 'red';
        document.getElementById("email-error-message").innerText = "Harap inputkan email yang valid";
        isValid = false;
    } else {
        document.getElementById("email-error-message").innerText = "";
        email.style.borderColor = '';
    }

    if (!interest.value) {
        document.getElementById("interest-error-message").innerText = "Field tidak boleh kosong";
        interest.style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById("interest-error-message").innerText = "";
        interest.style.borderColor = '';
    }

    if (isValid) {
        name.value = '';
        email.value = '';
        interest.value = '';
        alert('Terima kasih sudah mengisi data, tim kami akan segera menghubungi');
    }
});

const carouselSlide = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;


function nextSlide(){
    carouselSlide[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlide.length;
    carouselSlide[currentIndex].classList.add("active")
}

function startSlide(){
    setInterval(nextSlide, interval);
}

(function(){
    startSlide();
})()


