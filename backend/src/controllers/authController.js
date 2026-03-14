
export const renderAuth = (req, res) => {
    res.render("auth.ejs");
    console.log("Rendered auth pageJAJJAJAJAJAJJAJJAJAJAJAJAJ");
};

export const handleLogin = (req, res) => {
  const { username, password } = req.body;

  // Replace with real authentication logic later
  if (username === "admin" && password === "1234") {
    res.redirect("/vehiculos"); // Redirect to vehiculos page on successful login
  } else {
    res.render("auth.ejs", { error: "Invalid credentials" });
  }
};