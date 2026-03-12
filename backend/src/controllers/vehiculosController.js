
export const renderVehiculos = (req, res) => {
    res.render("homepage.ejs", { pageCSS: "homepage.css" });
    console.log("Rendered vehiculos page");
};
