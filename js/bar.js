const menuMarkup = `
<header class="site-bar">
    <a class="site-bar__logo" href="index.html">BRASA BURGER</a>
    <nav class="site-bar__nav" aria-label="Menu principal">
        <a href="index.html">Início</a>
        <a href="menu.html">Cardápio</a>
        <a href="bill.html">Pedido</a>
    </nav>
</header>`;

const bar = document.createElement("div");
bar.innerHTML = menuMarkup;

document.body.prepend(bar.firstElementChild);
