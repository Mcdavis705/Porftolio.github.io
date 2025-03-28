document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I'm McDavis Albertio";
    let index = 0;
    const speed = 90; // typing speed

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("intro-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});
