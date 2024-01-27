// Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;

function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll('.row .seat.selected');
        const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
        const selectedSeatsCount = selectedSeats. length;
        count.innerText = selectedSeatsCount;
        total.innerText = selectedSeatsCount * ticketPrice;
        localStorage.setItem('selectedSeats', JSON.stringify); 
}

// Get Data From localStorage & Populate UI:
function PopulateUI() {
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
        if (selectedSeats !== null && selectedSeats.lenght > 0) {
                seats.forEach((seat, index) => {
                if (selectedSeats.indexOf(index) > -1) {
                        seat.classList.add('selected')
                }        
        })
        
        }
        const selectMovieIndex = localStorage.getItem('selectMovieIndex');
        if (selectMovieIndex !== null) {
                movieSelect.selectedIndex = selectMovieIndex;
        }
        
}





// Event Listeners:
// 1. Event Listeners For Container To Check For Click On Seats
container.addEventListener('click', e => {
        if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
        ) {
         e.target.classList.toggle('selected');
         updateSelectedCount();
        }
})

// 2.Event Listeners For Movie Select
movieSelect.addEventListener('change', e => {
        ticketPrice = +e.target.value;
        updateSelectedCount();
})




