let bookings = [];

function bookRoom() {
    const name = document.getElementById('guestName').value;
    const type = document.getElementById('roomType').value;

    if (!name) return alert("Please enter a name");

    // Add unique ID using timestamp for cancellation targeting
    const booking = { id: Date.now(), name, type };
    bookings.push(booking);
    renderBookings();
    document.getElementById('guestName').value = ''; // Clear input
}

function cancelBooking(id) {
    // Remove the booking with the matching ID
    bookings = bookings.filter(b => b.id !== id);
    renderBookings();
}

function renderBookings() {
    const list = document.getElementById('bookingList');
    list.innerHTML = '';

    bookings.forEach(b => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${b.name}</strong> - ${b.type}</span>
            <button class="cancel-btn" onclick="cancelBooking(${b.id})">Cancel</button>
        `;
        list.appendChild(li);
    });
}