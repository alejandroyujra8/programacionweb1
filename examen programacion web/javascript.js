let carrito = [];
let totalPagar = 0;

function agregarAlCarrito(precio) {
    if (carrito.includes(precio)) {
        carrito = carrito.filter(item => item !== precio);
    } else {
        carrito.push(precio);
    }
    actualizarTotal();
}

function actualizarTotal() {
    totalPagar = carrito.reduce((total, precio) => total + precio, 0);
    document.getElementById('totalPagar').innerText = `Total a pagar: ${totalPagar} Bs`;
}

function verCarrito() {
    alert(`Elementos en el carrito: ${carrito.length} 
    Total a pagar ${totalPagar} Bs`);
}

