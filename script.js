// Load balance & history on dashboard
window.onload = function() {
  if (document.getElementById("balance")) {
    let balance = localStorage.getItem("balance") || 0;
    document.getElementById("balance").innerText = "₹" + balance;

    let history = JSON.parse(localStorage.getItem("history") || "[]");
    let table = document.getElementById("history-table");
    history.forEach(row => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.date}</td><td>${row.desc}</td><td>₹${row.amount}</td>`;
      table.appendChild(tr);
    });
  }
};

// Signup function
function signup() {
  let user = document.getElementById("signup-username").value;
  let pass = document.getElementById("signup-password").value;
  if (user && pass) {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    localStorage.setItem("balance", 50);
    localStorage.setItem("history", JSON.stringify([{date: "Today", desc: "Signup Bonus", amount: 50}]));
    alert("Signup successful! Bonus ₹50 added.");
    window.location.href = "login.html";
  } else {
    alert("Enter all fields");
  }
}

// Login function
function login() {
  let user = document.getElementById("login-username").value;
  let pass = document.getElementById("login-password").value;
  if (user === localStorage.getItem("user") && pass === localStorage.getItem("pass")) {
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

// Sell data
function sellData() {
  let balance = parseInt(localStorage.getItem("balance") || 0);
  balance += 800;
  localStorage.setItem("balance", balance);

  let history = JSON.parse(localStorage.getItem("history") || "[]");
  history.unshift({date: "Today", desc: "300MB Sold", amount: 800});
  localStorage.setItem("history", JSON.stringify(history));

  location.reload();
}
