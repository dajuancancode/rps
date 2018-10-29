//Player should see a main menu with options
//Menu should have an input so the user can choose an option
//Options should include rules, Play vs Computer
//2 Player Game
//Booth game types should keep track of score and display it once the player(s) decide not to play again

String.prototype.capitalize = function(){
    return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
   };

function rules() {

    let choice = ""
    
    while (choice[0] != "Y") {
        console.log("Here are the rules of the game\n")
        console.log("Each player will choose an item to be")
        console.log("They can be either Rock, Paper, or Scissors")
        console.log("When playing against the computer, the computer will randomly seclect one of those things to be at the start of the turn\n")
        console.log("Rock samshes Scissors")
        console.log("Scissors cuts Paper")
        console.log("Paper covers rock")

        choice = prompt("If you understand the rules of the game type yes").toLowerCase().capitalize()
    }

    return main_menu()

}

function single_player() {

    let play_again = ""
    let player1_choice = ""
    let computer_choice = ""
    let random_number = 0
    let player_score = 0
    let computer_score = 0

    let choices = ["Rock", "Paper", "Scissors"]

    do {
        random_number = Math.floor(Math.random() * choices.length)
        computer_choice = choices[random_number]
        
        do {
             player1_choice = prompt("Choose an item to be from Rock, Paper, or Scissors").toLowerCase().capitalize()
        }while (choices.includes(player1_choice) == false)
        
        if(player1_choice == "Rock"){
            if(computer_choice == "Rock"){
                console.log(`Computer chose ${computer_choice}, which ties with Player1's ${player1_choice} `)
                console.log("No one gets any points")
            }else if(computer_choice == "Paper"){
                console.log(`Computer chose ${computer_choice}, which covers Player1's ${player1_choice} `)
                computer_score += 1
            }else{
                console.log(`Computer chose ${computer_choice}, which is smashed by Player1's ${player1_choice} `)
                player_score += 1
            }
        }else if(player1_choice == "Paper"){
            if(computer_choice == "Paper"){
                console.log(`Computer chose ${computer_choice}, which ties with Player1's ${player1_choice} `)
                console.log("No one gets any points")
            }else if(computer_choice == "Scissors"){
                console.log(`Computer chose ${computer_choice}, which cuts Player1's ${player1_choice} `)
                computer_score += 1
            }else{
                console.log(`Computer chose ${computer_choice}, which is covered by Player1's ${player1_choice} `)
                player_score += 1
            }
        }else{
            if(computer_choice == "Scissors"){
                console.log(`Computer chose ${computer_choice}, which ties with Player1's ${player1_choice} `)
                console.log("No one gets any points")
            }else if(computer_choice == "Rock"){
                console.log(`Computer chose ${computer_choice}, which smashes Player1's ${player1_choice} `)
                computer_score += 1
            }else{
                console.log(`Computer chose ${computer_choice}, which is cut by Player1's ${player1_choice} `)
                player_score += 1
            }
        }
        play_again = prompt("Do you want to play again? y/n").toLowerCase()
    }while (play_again[0] != "n")

    console.log(`The final score is Computer: ${computer_score} and Player1: ${player_score}`)

    if(player_score > computer_score){
        console.log("Player1 wins!!!!! 😃")
    }else if(player_score < computer_score){
        console.log("The Computer wins 😭")
    }else {
        console.log("No one wins it's a tie 😒")
    }

    return main_menu()
}

function two_player() {
    let player1_choice = ""
    let player2_choice = ""
    let play_again = ""

    let player1_score = 0
    let player2_score = 0

    let choices = ["Rock", "Paper", "Scissors"]

    do {

        do {
            player1_choice = prompt("Choose an item to be from Rock, Paper, or Scissors").toLowerCase().capitalize()
            console.clear()

            player2_choice = prompt("Choose an item to be from Rock, Paper, or Scissors").toLowerCase().capitalize()
            console.clear()
        }while ((choices.includes(player1_choice) && choices.includes(player2_choice)) == false)

        if(player1_choice == "Rock"){
            if(player2_choice == "Rock"){
                console.log(`Player2 chose ${player2_choice}, which ties with Player1's ${player1_choice} `)
                console.log("No one gets any points")
            }else if(player2_choice == "Paper"){
                console.log(`Player2 chose ${player2_choice}, which covers Player1's ${player1_choice} `)
                player2_score += 1
            }else{
                console.log(`Player2 chose ${player2_choice}, which is smashed by Player1's ${player1_choice} `)
                player1_score += 1
            }
        }else if(player1_choice == "Paper"){
            if(player2_choice == "Paper"){
                console.log(`Player2 chose ${player2_choice}, which ties with Player1's ${player1_choice} `)
                console.log("No one gets any points")
            }else if(player2_choice == "Scissors"){
                console.log(`Player2 chose ${player2_choice}, which cuts Player1's ${player1_choice} `)
                player2_score += 1
            }else{
                console.log(`Player2 chose ${player2_choice}, which is covered by Player1's ${player1_choice} `)
                player1_score += 1
            }
        }else{
            if(player2_choice == "Scissors"){
                console.log(`Player2 chose ${player2_choice}, which ties with Player1's ${player1_choice} `)
                console.log("No one gets any points")
            }else if(player2_choice == "Rock"){
                console.log(`Player2 chose ${player2_choice}, which smashes Player1's ${player1_choice} `)
                player2_score += 1
            }else{
                console.log(`Player2 chose ${player2_choice}, which is cut by Player1's ${player1_choice} `)
                player1_score += 1
            }
        }
        play_again = prompt("Do you want to play again? y/n").toLowerCase().capitalize()
    }while(play_again[0] != "N")

    console.log(`The final score is Player1: ${player1_score} and Player2: ${player2_score}`)

    if(player1_score > player2_score){
        console.log("Player1 wins!!!!! 🎉")
    }else if(player1_score < player2_score){
        console.log("Player2 wins!!!!! 👏")
    }else {
        console.log("No one wins it's a tie 😒")
    }

    return main_menu()
}

function main_menu() {
    let choice = "";
    let choices = {
        "Rules": rules,
        "Single Player Game": single_player,
        "Two Player Game": two_player,
        "Q": "Q"
    };
    let choice_list = []

    console.log("Welcome to my Rock Paper Scissors game.");
    console.log("This is a traditional RPS Game, where you can play against a computer, or another person.");
    console.log("Below are the choices you can make\n");

    for(var property in choices){
        choice_list.push(property)
        console.log(property)
    }

    

    do {
        choice = prompt("Choose something!").toLowerCase().capitalize();
    }while (choice_list.includes(choice) === false);
    

    if (choice == "Rules") {
        choices[choice]()
    }else if (choice == "Single Player Game"){
        choices[choice]()
    }else if (choice == "Two Player Gamer") {
        choices[choice]()
    }else {
        return;
    }
    
}

main_menu()