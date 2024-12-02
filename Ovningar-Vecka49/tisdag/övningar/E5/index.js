// Koda en sida som den som syns på videon.
// När användaren trycker på en tangent så ska
// det visas på sidan vilken tangent det var.

// CSS finns, den kan du använda.

const div = document.querySelector("#show");
document.body.addEventListener("keydown", function showKey (e) {
    div.textContent = e.key;
})