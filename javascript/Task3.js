function calculate()
{
    var c = parseInt(document.getElementById("c").value) || 0
    var cp = parseInt(document.getElementById("cp").value) || 0
    var Database = parseInt(document.getElementById("Database").value) || 0
    var HTML = parseInt(document.getElementById("HTML").value) || 0
    var CSS = parseInt(document.getElementById("CSS").value) || 0
    var php = parseInt(document.getElementById("php").value) || 0
    var Corejava = parseInt(document.getElementById("Corejava").value) || 0

    var total = c  +  cp  +  Database  +  HTML  +  CSS  +  php  +  Corejava;
    var percentage = Math.round((total  / 350) * 100);

    document.getElementById("total").innerText = total;
    document.getElementById("percentage").innerText = percentage;
}