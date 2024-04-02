function toggleStyles() {
    var styleSheet = document.getElementById('styleSheet');
    if (styleSheet.disabled) {
        styleSheet.removeAttribute('disabled');
    } else {
        styleSheet.setAttribute('disabled', 'true');
    }
}
