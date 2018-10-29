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
    let player_choice = ""
    let computer_choice = ""
    let random_number = 0
    let player_score = 0
    let computer_score = 0

    let choices = ["Rock", "Paper", "Scissors"]

    do {
        random_number = Math.floor(Math.random() * choices.length)
        computer_choice = choices[random_number]
        
        do {
             player_choice = prompt("Choose an item to be from Rock, Paper, or Scissors").toLowerCase().capitalize()
        }while (choices.includes(player_choice) == false)
        
        if(player_choice == "Rock"){
            if(computer_choice == "Rock"){
                console.log(`Computer chose ${computer_choice}, which ties with your ${player_choice} `)
                console.log("No one gets any points")
            }else if(computer_choice == "Paper"){
                console.log(`Computer chose ${computer_choice}, which covers your ${player_choice} `)
                computer_score += 1
            }else{
                console.log(`Computer chose ${computer_choice}, which is smashed by your ${player_choice} `)
                player_score += 1
            }
        }else if(player_choice == "Paper"){
            if(computer_choice == "Paper"){
                console.log(`Computer chose ${computer_choice}, which ties with your ${player_choice} `)
                console.log("No one gets any points")
            }else if(computer_choice == "Scissors"){
                console.log(`Computer chose ${computer_choice}, which cuts your ${player_choice} `)
                computer_score += 1
            }else{
                console.log(`Computer chose ${computer_choice}, which is covered by your ${player_choice} `)
                player_score += 1
            }
        }else{
            if(computer_choice == "Scissors"){
                console.log(`Computer chose ${computer_choice}, which ties with your ${player_choice} `)
                console.log("No one gets any points")
            }else if(computer_choice == "Rock"){
                console.log(`Computer chose ${computer_choice}, which smashes your ${player_choice} `)
                computer_score += 1
            }else{
                console.log(`Computer chose ${computer_choice}, which is cut by your ${player_choice} `)
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
}

function two_player() {
    console.log("\nTwo Player")
}

function main_menu() {
    let choice = "";
    let choices = {
        "Rules": rules,
        "Single Player Game": single_player,
        "Two Player Game": two_player
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
    }else {
        choices[choice]()
    }
    
}

main_menu()