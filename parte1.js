

function toggleContent(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function resetColor(id) {
    document.getElementById(id).style.backgroundColor = '';
}

function highlight(id) {
    document.getElementById(id).style.border = '2px solid red';
}

function removeHighlight(id) {
    document.getElementById(id).style.border = '';
}
