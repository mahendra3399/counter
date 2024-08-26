let count = parseInt(localStorage.getItem('count')) || 0;
let totalcap = parseInt(localStorage.getItem('capacity')) || 20;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.count').innerText = count;
    document.querySelector('.remain').innerText = `Remaining Capacity: ${totalcap}`;
});

function add() {
    if (count >= 0 && count < 20) {
        count++;
        totalcap--;
        document.querySelector('.count').innerText = count;
        updatecap();
        save();
        
    } else {
        alert('Capacity is full');
    }
}

function remove() {
    if (count <= 0) {
        alert('There are no customers');
    } else {
        count--;
        totalcap++;
        document.querySelector('.count').innerText = count;
        updatecap();
        save();
    
    }
}

function save() {
    localStorage.setItem('count', count);
    localStorage.setItem('capacity', totalcap);
}

function updatecap() {
    document.querySelector('.remain').innerText = `Remaining Capacity: ${totalcap}`;
}
