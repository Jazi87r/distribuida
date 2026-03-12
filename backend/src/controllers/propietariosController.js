export const renderPropietarios = (req, res) => {
    res.render("propietarios.ejs", { pageCSS: "homepage.css" });
    console.log("Rendered propietarios page");
};
