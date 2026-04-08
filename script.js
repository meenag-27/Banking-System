// Initial balance setup
if(!localStorage.getItem("balance")){
    localStorage.setItem("balance", 50000);
}

// LOGIN MODULE
function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        window.location.href = "balance.html";
    }else{
        alert("Invalid Username or Password");
    }
}

// BALANCE CHECK MODULE
function showBalance(){
    document.getElementById("balance").innerText =
        "₹ " + localStorage.getItem("balance");
}

// MONEY TRANSFER MODULE
function transferMoney(){
    let account = document.getElementById("account").value;
    let amount = parseInt(document.getElementById("amount").value);
    let balance = parseInt(localStorage.getItem("balance"));

    if(account === "" || amount <= 0){
        alert("Enter valid details");
        return;
    }

    if(amount > balance){
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;
    localStorage.setItem("balance", balance);

    document.getElementById("message").innerText =
        "₹ " + amount + " transferred successfully!";
}

function logout(){
    window.location.href = "login.html";
}
