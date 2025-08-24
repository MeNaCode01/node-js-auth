const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

// Tab switching
loginTab.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  loginTab.classList.add("border-primary", "text-primary");
  loginTab.classList.remove("text-gray-500", "border-transparent");
  registerTab.classList.remove("border-primary", "text-primary");
  registerTab.classList.add("text-gray-500", "border-transparent");
});

registerTab.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  registerTab.classList.add("border-primary", "text-primary");
  registerTab.classList.remove("text-gray-500", "border-transparent");
  loginTab.classList.remove("border-primary", "text-primary");
  loginTab.classList.add("text-gray-500", "border-transparent");
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  themeToggle.textContent = htmlEl.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem(
    "theme",
    htmlEl.classList.contains("dark") ? "dark" : "light"
  );
});

// Load theme from storage
if (localStorage.getItem("theme") === "dark") {
  htmlEl.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Example form submission logic (replace with your backend)
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
    }),
  });
  console.log(await res.json());
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: registerName.value,
      email: registerEmail.value,
      password: registerPassword.value,
    }),
  });
  console.log(await res.json());
});
