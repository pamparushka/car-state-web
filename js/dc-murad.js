document.addEventListener("DOMContentLoaded", function() {
    var messageElement = document.getElementById("message");

    var countDown = 5;
    var redirectUrl = "https://discord.com/sunucu";

    var countdownInterval = setInterval(function() {
        messageElement.textContent = countDown + " saniye içerisinde Discord sunucusuna gönderileceksiniz...";
        countDown--;

        if (countDown < 0) {
            clearInterval(countdownInterval);
            redirectToDiscord();
        }
    }, 1000);

    function redirectToDiscord() {
        messageElement.textContent = "Yönlendiriliyorsunuz...";
        setTimeout(function() {
            window.location.href = redirectUrl;
        }, 2000);
    }
});
