const categoryFilter = document.getElementById("categoria");
const searchInput = document.getElementById("pesquisar");
const products = document.querySelectorAll(".item[data-categoria]");
const emptyState = document.querySelector(".sem-resultados");

function filterProducts() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.trim().toLocaleLowerCase("pt-BR");
    let visibleCount = 0;

    products.forEach((product) => {
        const matchesCategory = category === "todos" || product.dataset.categoria === category;
        const matchesSearch = product.textContent.toLocaleLowerCase("pt-BR").includes(searchTerm);
        const isVisible = matchesCategory && matchesSearch;

        product.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
    });

    emptyState.hidden = visibleCount > 0;
}

categoryFilter.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);