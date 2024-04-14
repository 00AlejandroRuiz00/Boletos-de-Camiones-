document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticketForm');
    const destinationSelect = document.getElementById('destination');
    const quantityInput = document.getElementById('quantity');
    const totalPrice = document.getElementById('totalPrice');
  
    // Precios por destino
    const destinationPrices = {
      1: 50, // Playa del Carmen
      2: 70, // Cancún
      3: 60  // Tulum
    };
  
    // Función para calcular el precio total
    function calculateTotalPrice(destination, quantity) {
      const pricePerTicket = destinationPrices[destination];
      return quantity * pricePerTicket;
    }
  
    // Función para actualizar el precio total en la interfaz
    function updateTotalPrice() {
      const destination = parseInt(destinationSelect.value);
      const quantity = parseInt(quantityInput.value);
      const total = calculateTotalPrice(destination, quantity);
      totalPrice.textContent = `Precio Total: $${total}`;
    }
  
    // Evento para calcular el precio total cuando se envía el formulario
    ticketForm.addEventListener('submit', function(event) {
      event.preventDefault();
      updateTotalPrice();
    });
  
    // Calcular el precio total inicialmente
    updateTotalPrice();
  });
  