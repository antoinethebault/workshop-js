function rafraichir() {
    $.get("https://loisirs-web-backend.cleverapps.io/users", function (data) {
        document.getElementById("tableau").innerHTML = "";
        data.forEach(element => {
            document.getElementById("tableau").innerHTML +=
                "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td>" + element.password + "</td></tr>";
        });
    });
}