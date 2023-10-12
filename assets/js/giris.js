const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const validUsername = "ornek";
    const validPassword = "sifre";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        
        alert("Giriş başarılı!");
        
        window.location.href = "index.html";
    } else {
        // Giriş başarısız
        alert("Kullanıcı adı veya şifre hatalı!");
    }
});


