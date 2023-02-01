function search() {
    const searchInput = document.getElementById("textBox").value.toUpperCase();
    const product = document.querySelectorAll(".product");

    for (let i = 0; i < product.length; i++) {
        let names = product[i].getElementsByTagName('p')[0];

        let name = names.textContent;

        if (name.toUpperCase().includes(searchInput)) {
            product[i].style.display = "";
        }
        else {
            product[i].style.display = "none";
        }

    }
}