const API_URL = "http://localhost:5000";
let accessToken = null;

// Handle login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    accessToken = data.token;
    alert("Login successful! Token received.");
  } catch (err) {
    alert(err.message);
  }
});

// Handle protected request
document
  .getElementById("protectedRequest")
  .addEventListener("click", async () => {
    if (!accessToken) {
      alert("You need to log in first.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/protected`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unauthorized or session expired");
      }

      const data = await response.json();
      document.getElementById("response").innerText = JSON.stringify(data, null, 2);
    } catch (err) {
      alert(err.message);
    }
  });
