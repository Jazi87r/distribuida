
export const renderAuth = (req, res) => {
    res.render("auth.ejs");
    console.log("Rendered auth pageJAJJAJAJAJAJJAJJAJAJAJAJAJ");
};

export const handleLogin = (req, res) => {
  const { username, password } = req.body;

  // Replace with real authentication logic later
  if (username === "admin" && password === "1234") {
    res.render("homepage.ejs");
  } else {
    res.render("auth.ejs", { error: "Invalid credentials" });
  }
};