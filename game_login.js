function login(){
    player1name = document.getElementById("player1").value;
    player2name = document.getElementById("player2").value;
    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    window.location.replace("game_page.html");
}