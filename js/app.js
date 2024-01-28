hours = prompt('Enter quantity of hours:')

if (hours === null) {
    alert('Goodbye dude!')
} else {
    seconds();
}

function seconds() {
    let seconds = hours*3600
    alert(seconds);
}