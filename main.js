function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(user => user.email === email)) {
            alert("البريد الإلكتروني مسجل بالفعل.");
        } else {
            users.push({ username, email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("تم التسجيل بنجاح!");
            window.location.href = "login.html";
        }
    } else {
        alert("الرجاء ملء جميع الحقول.");
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        window.location.href = `wel.html?username=${encodeURIComponent(user.username)}`;
    } else {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (!username) {

    } else {
        document.getElementById("welcome_message").textContent = `مرحبا، ${username}!`;
    }
}