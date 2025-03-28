/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/
const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasMysteryVial = false;
let hasGemStoneNecklace = false;
let hasRevolver = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
//mountains or village
if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("In the mountains, you discover what seems to be a vast cave system")
  const cavesChoice = readline.question("Do you want to 'explore' the caves or find a spot to set up 'camp' for the night? ")
//explore mountains
  if (cavesChoice==="explore") {
    console.log("Inside the caves you find a dusty chest.\nOpening the chest you find a mysterious looking vial labeled STRENGTH.\nBefore you\'re able to explore further you hear something deeper in the caves and its getting closer.\nRunning back the way you came, you exit the mountains and you run until you've made it back the village right after daybreak.");
 hasMysteryVial = true; }
 //set up camp
  else if (cavesChoice==="camp") {
    console.log("You have a few hours before the dawn. You decide to set up camp for the night and head back to the village in the morning.")}
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
}
//go back to the village
 else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  console.log("Back at the village the night is quiet.\nThat is until you hear a woman scream from the alley.\nWithin seconds a man runs out of the alley and across the town Square");
const villageScreamChoice = readline.question("Do you 'chase' the man or find the 'source' of the scream?")
//chase
if (villageScreamChoice ==="chase"){
    console.log("You give chase to the man.\n You catch him, but he fights you off.\nDizzy and wounded, you stumble to the local doctor and pass out as you reach the house.");
    console.log("In morning you awake patched up. Remembering how badly you were beaten, you into town to purchase a revolver for protection.")
    hasRevolver = true;
}
else if (villageScreamChoice === "source"){
    console.log("You find your friend, Abigail. She's been robbed and suffered a stab wound.\nYou carry her to the local doctor where you sleep by her bedside.")
    console.log("In the morning Abigail thanks you for saving her with a gem stone necklace given to her by her father.")
    console.log("Abigail: When my father returned from travel he gave me this necklace.\nHe asked that I never take it off unless I was ready to use it for something of great importance.\n I believe this qualifies");
    hasGemStoneNecklace = true;
} 


} else {
  console.log("You get lost and wander aimlessly until you are found by a man on horseback in the morning.\nHe kindly brings you back to the village.");
}
console.log("It is midday now and the people of the village are all set up for tonights festival activities")

const festivalActivitiesChoice = readline.question("What would you like to do at the festival?\nHave some 'drinks' or join the 'dancing'")
if (festivalActivitiesChoice === "drinks" && (hasRevolver || hasMysteryVial)){
    console.log("You are enjoying yourself when a large drunk man stumbles into you.\n He begins to start a fight with you.\nYou utilize your new found strength without hesitation. He quickly realizes this is a fight he wont win.\nYou are safe")}
else if (festivalActivitiesChoice === "drinks" && (!hasRevolver && !hasMysteryVial)){
    console.log("You are enjoying yourself when a large drunk man stumbles into you.\n You put up a good fight but are ultimately bested.")
}
else if (festivalActivitiesChoice === "dancing"){
    console.log("Its been awhile since you have been able to be care free.\n You decide to dance the night away")
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/