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

// Funções para mostrar e ocultar as telas de registro e login
function showRegister() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function showLogin() {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
}

// Função para cadastrar novo usuário
function registerUser() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const message = document.getElementById("register-message");

    if (newUsername in users) {
        message.textContent = "Usuário já existe!";
    } else {
        users[newUsername] = { password: newPassword, role: "funcionario" };
        message.textContent = "Usuário cadastrado com sucesso!";
        document.getElementById("new-username").value = "";
        document.getElementById("new-password").value = "";
    }
}
