document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: 'Buzo Lafayette Negro', categoria: 'buzos', precio: 55.00, imagen: 'img/Buzo negro.jpeg' },
        { id: 2, nombre: 'Buzo Givenchy Negro', categoria: 'buzos', precio: 95.00, imagen: 'img/Buzo Givenchy.jpeg' },
        { id: 3, nombre: 'Buzo Fresh Eyes Celeste', categoria: 'buzos', precio: 48.50, imagen: 'img/Buzo Blanco.jpeg' },
        { id: 4, nombre: 'Buzo Graffiti Beige', categoria: 'buzos', precio: 52.00, imagen: 'img/Boys\' Sweatshirts _ ZARA United States.jpeg' },
        { id: 5, nombre: 'Buzo Cuello Redondo Marrón', categoria: 'buzos', precio: 42.99, imagen: 'img/download.jpeg' },
        { id: 15, nombre: 'Buzo Liso Beige', categoria: 'buzos', precio: 45.00, imagen: 'img/TAPERED PLUSH PANTS.jpeg'},
        { id: 16, nombre: 'Buzo Explorer Verde', categoria: 'buzos', precio: 50.00, imagen: 'img/SUDADERA ESTAMPADO RELIEVE.jpeg'},
        { id: 23, nombre: 'Buzo Urbano Lila', categoria: 'buzos', precio: 58.00, imagen: 'img/Buzo rosado.jpeg' },
        { id: 24, nombre: 'Sweater Rayado con Cierre', categoria: 'buzos', precio: 62.00, imagen: 'img/Prendas de Punto de Niña _ ZARA España.jpeg'},
        { id: 6, nombre: 'Pantalón Cargo Lavado Beige', categoria: 'pantalones', precio: 75.00, imagen: 'img/Cargo marron.jpeg' },
        { id: 7, nombre: 'Pantalón Cargo Técnico Gris', categoria: 'pantalones', precio: 80.00, imagen: 'img/Cargo gris oscuro.jpeg' },
        { id: 8, nombre: 'Pantalón Cargo Jean Gris', categoria: 'pantalones', precio: 78.50, imagen: 'img/Cargo gris.jpeg' },
        { id: 9, nombre: 'Jean Recto Negro', categoria: 'pantalones', precio: 68.00, imagen: 'img/download (1).jpeg' },
        { id: 17, nombre: 'Jean Ancho con Rotos', categoria: 'pantalones', precio: 72.00, imagen: 'img/How to Style Wide-Leg Jeans_ 21 Outfit Ideas to Try in 2025.jpeg'},
        { id: 18, nombre: 'Jean Carpintero Azul', categoria: 'pantalones', precio: 69.50, imagen: 'img/Pantalon azul cargo.jpeg'},
        { id: 19, nombre: 'Jean Ancho Rotos Celeste', categoria: 'pantalones', precio: 71.00, imagen: 'img/Jeans Para Meninas Ver Tudo _ ZARA Brasil.jpeg'},
        { id: 25, nombre: 'Jean Slouchy Azul', categoria: 'pantalones', precio: 65.00, imagen: 'img/Estos son los 5 estilos de jeans que triunfan en el street-style.jpeg'},
        { id: 10, nombre: 'Chomba Lisa Azul Marino', categoria: 'remeras', precio: 35.00, imagen: 'img/___ New Ver Tudo _ ZARA Brasil.jpeg' },
        { id: 13, nombre: 'Remera Fly Master Gris', categoria: 'remeras', precio: 28.00, imagen: 'img/Remera Gris.jpeg'},
        { id: 14, nombre: 'Remera Tokyo Negra', categoria: 'remeras', precio: 27.50, imagen: 'img/Remera Negra.jpeg'},
        { id: 20, nombre: 'Remera Urban Artist Negra', categoria: 'remeras', precio: 29.00, imagen: 'img/Playeras para Niño _ ZARA.jpeg'},
        { id: 21, nombre: 'Remera Lisa Blanca', categoria: 'remeras', precio: 22.00, imagen: 'img/Remera Blanca.jpeg'},
        { id: 26, nombre: 'Remera "74" Gris Oscuro', categoria: 'remeras', precio: 26.50, imagen: 'img/Remera 24.jpeg'},
        { id: 22, nombre: 'Camisa Oversize Amarilla', categoria: 'camisas', precio: 40.00, imagen: 'img/PANTALON LARGE À TAILLE ÉLASTIQUE.jpeg'},
        { id: 27, nombre: 'Camisa Satinada a Rayas', categoria: 'camisas', precio: 45.50, imagen: 'img/Camisa satinada de rayas.jpeg'}
    ];

    const productosContainer = document.getElementById('productos-container');
    const filtroNombre = document.getElementById('filtro-nombre');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const navCategorias = document.querySelector('.nav-left');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Lógica para el nuevo carrito flotante
    const body = document.body;
    const cartButtonHTML = `
        <div class="cart-floating-btn">
            <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H209.7c-34.1 0-65.3-17.2-84.6-46.6l-5.5-8.8L34.6 112H24C10.7 112 0 101.3 0 88S10.7 64 24 64H69.5L112 246.3l-55.9 198.2C54.1 468.2 68.7 480 84.6 480h242.2c28.5 0 53.7-18.7 62.3-46.6l5.5-8.8L440.3 352H170.7c-34.1 0-65.3-17.2-84.6-46.6l-5.5-8.8L34.6 112H24C10.7 112 0 101.3 0 88S10.7 64 24 64H69.5zM224 496a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-32-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm32 128z"/>
            </svg>
        </div>
        <div class="carrito-dropdown">
            <h2>Tu Carrito</h2>
            <div class="carrito-dropdown-items" id="carrito-dropdown-items"></div>
            <div class="carrito-dropdown-footer">
                <div class="total">Total: <span id="carrito-dropdown-total">$0.00</span></div>
                <a href="carrito.html" style="text-align: center;"><button>Ir a pagar</button></a>
            </div>
        </div>
    `;
    body.insertAdjacentHTML('beforeend', cartButtonHTML);

    const cartFloatingBtn = document.querySelector('.cart-floating-btn');
    const carritoDropdown = document.querySelector('.carrito-dropdown');
    const carritoDropdownItemsContainer = document.getElementById('carrito-dropdown-items');
    const carritoDropdownTotal = document.getElementById('carrito-dropdown-total');

    cartFloatingBtn.addEventListener('click', () => {
        carritoDropdown.classList.toggle('visible');
    });

    document.addEventListener('click', (e) => {
        if (!carritoDropdown.contains(e.target) && !cartFloatingBtn.contains(e.target)) {
            carritoDropdown.classList.remove('visible');
            // Ocultar todos los botones de eliminar
            document.querySelectorAll('.carrito-dropdown-item').forEach(i => {
                i.classList.remove('active');
            });
        }
    });

    function renderizarProductos(productosAMostrar) {
        if (!productosContainer) return;
        productosContainer.innerHTML = '';
        if (productosAMostrar.length === 0) {
            productosContainer.innerHTML = '<p>No se encontraron productos con esos filtros.</p>';
        } else {
            productosAMostrar.forEach(producto => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="product-card-info">
                        <p>${producto.nombre}</p>
                        <span>$${producto.precio.toFixed(2)}</span>
                        <button class="agregar-carrito-btn" data-id="${producto.id}">Agregar al Carrito</button>
                    </div>
                `;
                productosContainer.appendChild(card);
            });
        }
    }

    function agregarAlCarrito(productoId) {
        const itemExistente = carrito.find(item => item.id === productoId);
        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            const productoEncontrado = productos.find(p => p.id === productoId);
            if (productoEncontrado) {
                carrito.push({ ...productoEncontrado, cantidad: 1 });
            }
        }
        actualizarCarrito();
    }

    function eliminarDelCarrito(productoId) {
        carrito = carrito.filter(item => item.id !== productoId);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        const cartCount = document.getElementById('cart-count');
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
        }

        if (carritoDropdownItemsContainer) {
            carritoDropdownItemsContainer.innerHTML = '';
            let total = 0;
            if (carrito.length === 0) {
                carritoDropdownItemsContainer.innerHTML = '<p style="text-align: center; color: #6B7280; padding: 20px;">Tu carrito está vacío.</p>';
            } else {
                carrito.forEach(item => {
                    const subtotal = item.precio * item.cantidad;
                    total += subtotal;
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'carrito-dropdown-item';
                    itemDiv.setAttribute('data-id', item.id);
                    itemDiv.innerHTML = `
                        <img src="${item.imagen}" alt="${item.nombre}">
                        <div class="item-info">
                            <p>${item.nombre}</p>
                            <span>$${item.precio.toFixed(2)} x ${item.cantidad}</span>
                        </div>
                    `;
                    const removeBtn = document.createElement('div');
                    removeBtn.className = 'item-remove-btn';
                    removeBtn.textContent = 'X';
                    removeBtn.setAttribute('data-id', item.id);
                    
                    itemDiv.appendChild(removeBtn);
                    carritoDropdownItemsContainer.appendChild(itemDiv);
                });
            }
            carritoDropdownTotal.textContent = `$${total.toFixed(2)}`;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    if (carritoDropdownItemsContainer) {
        carritoDropdownItemsContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.carrito-dropdown-item');
            
            document.querySelectorAll('.carrito-dropdown-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            if (item && !e.target.classList.contains('item-remove-btn')) {
                item.classList.toggle('active');
            }
            
            if (e.target.classList.contains('item-remove-btn')) {
                const id = parseInt(e.target.getAttribute('data-id'));
                eliminarDelCarrito(id);
            }
        });
    }

    function aplicarFiltros() {
        const nombre = filtroNombre.value.toLowerCase();
        const categoria = filtroCategoria.value;
        const productosFiltrados = productos.filter(producto => {
            const matchNombre = producto.nombre.toLowerCase().includes(nombre);
            const matchCategoria = categoria === 'todos' || producto.categoria === categoria;
            return matchNombre && matchCategoria;
        });
        renderizarProductos(productosFiltrados);
    }

    if (productosContainer) {
        productosContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('agregar-carrito-btn')) {
                const id = parseInt(e.target.getAttribute('data-id'));
                agregarAlCarrito(id);
            }
        });
    }

    if (filtroNombre) filtroNombre.addEventListener('input', aplicarFiltros);
    if (filtroCategoria) filtroCategoria.addEventListener('change', aplicarFiltros);

    if (navCategorias) {
        navCategorias.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.dataset.categoria) {
                // Previene el comportamiento por defecto del link si tiene la categoría
                e.preventDefault(); 
                // Asegura que solo se ejecute si la página actual es index.html o home.html (lo que sea que tenga los filtros)
                if (window.location.pathname.endsWith('index.html') || window.location.hash === '#tienda') {
                     filtroCategoria.value = e.target.dataset.categoria;
                     filtroNombre.value = '';
                     aplicarFiltros();
                     // Si estamos en la home, nos movemos a la sección de tienda
                     if (window.location.hash !== '#tienda') {
                        window.location.href = 'index.html#tienda';
                     }
                } else {
                    // Si estamos en otra página, nos redirige con el filtro
                    window.location.href = `index.html?categoria=${e.target.dataset.categoria}`;
                }
            }
        });
    }

    // Inicialización
    // La función `filtrarDesdeURL()` y `aplicarFiltros()` se llamará siempre que la página cargue.
    filtrarDesdeURL();
    aplicarFiltros();
    actualizarCarrito();
});