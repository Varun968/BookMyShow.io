function change(){
    document.getElementById("registerform").innerHTML="You are registered"
    form.style.paddingTop="120px"
}
function validate(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('Phone').value;
    const dob = document.getElementById('date').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        document.getElementById("loginform").innerHTML="Login successful!";
    } 
    else {
        document.getElementById("loginform").innerHTML="Invalid username or password.";
    }
};
const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

document.getElementById('paymentButton').addEventListener('click', () => {
    alert('Proceeding to payment');
});
