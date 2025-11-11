(function () {
    emailjs.init("QT_ijumVeZMr66g0M");
})();

document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs
            .sendForm("service_e04oese", "template_w9ch10c", this)
            .then(() => {
                alert("✅ Message sent successfully!");
                this.reset();
            })
            .catch(() => {
                alert("❌ Failed to send message. Please try again.");
            });
    });