//Player name and health
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10; 

//You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth); 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;
//fight function  
var fight = function(enemyName) {
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
    //remove players health
    playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + ". " + playerHealth + " health remaining.");
  //check player's health 
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else{
    window.alert(playerName + " still has " + playerHealth + " health left.");
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
    //if player did not choose 1 or 2 in promptFight
}else {
    window.alert("you need to pick a valid option. Try again!");
}
};
//run the fight function
for(var i=0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
