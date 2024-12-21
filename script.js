const users = {
    admin: { password: "admin123", role: "admin" },
    funcionario: { password: "funcionario123", role: "funcionario" }
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("login-message");

    if (users[username] && users[username].password === password) {
        message.textContent = "";
        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        message.textContent = "Usuário ou senha incorretos!";
    }
}

function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function showSales() {
    document.getElementById("sales").style.display = "block";
    document.getElementById("stock").style.display = "none";
}

function showStock() {
    document.getElementById("stock").style.display = "block";
    document.getElementById("sales").style.display = "none";
}

function registerSale() {
    const amount = document.getElementById("sale-amount").value;
    alert(`Venda registrada: R$ ${amount}`);
    document.getElementById("sale-amount").value = "";
}

function registerStock() {
    const amount = document.getElementById("stock-amount").value;
    const type = document.getElementById("stock-type").value;
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} registrada: R$ ${amount}`);
    document.getElementById("stock-amount").value = "";
}
