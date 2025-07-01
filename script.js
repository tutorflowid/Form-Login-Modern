function handleLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("Harap isi semua kolom!");
    return;
  }

  if (user === "memek" && pass === "110504") {
    alert("Login berhasil!\nSelamat datang, Ilham Ganteng.");
    // window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}
