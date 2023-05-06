

function del() {
    var tbInput = document.getElementById("tbInput");
    tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
}
function display(value) {
    document.getElementById("tbInput").value += value;
}
function calculate() {
    var p = document.getElementById("tbInput").value;
    var q = eval(p);
    document.getElementById("tbInput").value = q;
}
