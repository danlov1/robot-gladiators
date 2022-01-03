// this creates a function named fight 
function fight (){
    window.alert("The fight has begun!");  
}
// fight();
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10; 

//You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth); 
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!"); 
//asking player if they want to fight or not  
var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//if player chooses to fight then fight   
if (promptFight === "fight" || promptFight === "FIGHT"){
      // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //check enemy's health  
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has" + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + ". " + playerHealth + " health remaining.");
  //check player's health 
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else{
    window.alert(playerName + " still has " + playerHealth + " health left.")
}
//if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question by running fight()again
    else {
        fight();
    }
}
    //{
        // window.alert(playerName + " has chosen to skip the fight!");
// } else {
//     window.alert("You need to choose a valid option. Try again!");
// }    
};

//check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0){
    console.log("Your player is still alive!");
}
fight();
