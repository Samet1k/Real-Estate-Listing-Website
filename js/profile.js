window.addEventListener("DOMContentLoaded", () => {
  const savedProfile = localStorage.getItem("currentUser");
  console.log("Loaded profile:", savedProfile);
  if (savedProfile) {
    const data = JSON.parse(savedProfile);
    document.getElementById("fullname").value = data.name || "-";
    document.getElementById("email").value = data.email || "-";
    document.getElementById("phone").value = data.phone || "-";
    document.getElementById("password").value = data.password || "******";
  }
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // парольді көрінетін ету
  } else {
    passwordInput.type = "password"; // парольді жасыру
  }
}

function toggleEdit(inputId, btn) {
  const input = document.getElementById(inputId);

  if (input.hasAttribute("readonly")) {
    // Редактирлеуді қосу
    input.removeAttribute("readonly");
    btn.textContent = "Save";
    input.focus();
  } else {
    // Өзгерісті сақтау, readonly қайта қосу
    input.setAttribute("readonly", true);
    btn.textContent = "Edit";

    // Егер керек болса, өзгерген мәнді localStorage-қа сақтай аласың:
    saveProfileChange(inputId, input.value);
  }
}

// localStorage-қа өзгерістерді сақтау функциясы (қажет болса)
function saveProfileChange(field, value) {
  const savedProfile = localStorage.getItem("currentUser");
  if (!savedProfile) return;

  const profile = JSON.parse(savedProfile);

  // Қай өріс өзгерді, солға сәйкес атауды беру керек
  if (field === "fullname") profile.name = value;
  else if (field === "email") profile.email = value;
  else if (field === "phone") profile.phone = value;
  else if (field === "password") profile.password = value;

  localStorage.setItem("currentUser", JSON.stringify(profile));
}

function logout() {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  }
}



