const changeDisplay = (displayValue) => {
    [
        document.getElementById('rectangle1'),
        document.getElementById('rectangle2')
    ]
        .forEach(e => e.style.display = displayValue);
}
const changeWidth = (width) => {
    [
        document.getElementById('rectangle1'),
        document.getElementById('rectangle2')
    ]
        .forEach(e => e.style.width = width);
}