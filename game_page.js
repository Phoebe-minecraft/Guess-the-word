player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
question_turn = "player1";
answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1name + " : ";

document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;

function send(){
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    charAt1= word.charAt(1);
    length_divide_by_2 = Math.floor(word.length/2);
    charAt2 =  word.charAt(length_divide_by_2);
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    questionword = "<h4 id='word_display'> Q. Try this : " + remove_charAt3 + "</h4>"
    input_box = "<br> Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = questionword + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""    
}
 
function check(){
    getanswer = document.getElementById("input_check_box").value;
    answer = getanswer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
            player1score= player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else{
            player2score= player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;

        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name ;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
    }
    
    if(question_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name ;
    }
    document.getElementById("output").innerHTML=""
   

}
