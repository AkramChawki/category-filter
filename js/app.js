const filterButtons = document.querySelectorAll(".btn");
const products = document.querySelectorAll(".product-data");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        products.forEach(product => {
            if (product.dataset.category == category || category === "all") {
                product.style.display = "block"
            }else (
                product.style.display = "none"
            )
        })
    })
})