const menu_hamburguesa = document.getElementById('hamburguesa');
const desplegar = document.getElementById('desplegar')
const gridContainer = document.querySelector('.grid-container')
let menuVisible =false;

// Escucha el evento de cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    // Verifica si debes ocultar el menú según las reglas de tus media queries
    if (window.innerWidth < 600) {
        menu_hamburguesa.addEventListener('click', () => {
            if (menuVisible) {
                // Si el menú está visible, ocúltalo
                desplegar.style.display = 'none';
                gridContainer.style.gridTemplateRows = '1fr 40px 8fr 1fr';
                menuVisible = false;
            } else {
                // Si el menú no está visible, muéstralo
                desplegar.style.display = 'flex';
                gridContainer.style.gridTemplateRows = '1fr 1fr 4fr 1fr';
                menuVisible = true;
            }
        });
    }
});