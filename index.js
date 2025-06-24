document.addEventListener("DOMContentLoaded", function() {
  const tombolKeluar = document.getElementById("tombolKeluar");

  if (tombolKeluar) {
    tombolKeluar.addEventListener("click", function (event) {
      event.preventDefault();
      
      localStorage.removeItem("userData");
      localStorage.removeItem("currentUser");

      alert("Logout berhasil!");

      window.location.href = "../logres.html";
    });
  }
});