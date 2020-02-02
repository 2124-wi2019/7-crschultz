/*Chris Schultz
schultz_a07b.js
Info 2124 WW
Thoendel
02-02-2020*/

/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer", "cheese", "shrimp", "tomatoes");   //Modified line as per Step 1   

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    clearScreen();  //clearScreen is invoked regardless of next steps; let's do it first
    if (text.toUpperCase() == "Q")  {//if input == Q || q....
        console.log("Bye"); //...write bye to the screen...
        process.exit(); //...and exit
    }//end if
    else if (text.toUpperCase() == "V") {  //if input == v || V....
        console.log(displayList(groceryItems));  //display the list
    }//end else if
    else { //Otherwise!...(remember we already cleared the screen)
        if (checkItem(text,badFoods) == false) { //...if user input is not in the bad foods list
            groceryItems.push(formatItem(text)); //push the formatted user input into the array
        }//end nested if
        else if (checkItem(text,badFoods) == true) { //if and only if user input is in the bad foods list, print error
            console.log("Error: That item is not safe for your allergies.\nIt has not been added to your list.\n");
        }//end nested if
    }//end else
    console.log(getPrompt(groceryItems)); //this runs regardless of if/else if/else so put it outside for efficiency
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2

function displayList(groceryList) {  //accepts one array as a paramter
    let output = "";
    for (let i = 0; i < groceryList.length; i++) { //for each item in the given array....
        output += (i+1).toString() + "). " + groceryList[i] + "\n"; //output the number in the list (i+1) and the item itself
    }//end for
    return output;
}//end displayList function

function buildFoodsList(badFoodsList,...foods) {   //accepts an array and...
    for (number of foods) {  //...for each food passed in the variable length 2nd paramter...
        badFoodsList.push(number);  //....insert it into the badFoodsList array
    }//end for 
}//end buildFoodsList function

function getPrompt(groceryList) {    //accepts an array and...
    //builds a variable with a string literal
    let output = `Your grocery list contains ${groceryList.length} items\nPlease enter a grocery item.\nEnter Q to quit\nEnter V to view list\n========================`;
    return output; //returns variable
}//end getPrompt function

//Step 3
function checkItem(groceryItem, badFoodsList) {   //accepts one string & one array
    let output = false;
    for (let i = 0; i < badFoodsList.length; i++) {  //for each element in the given array...
        if (groceryItem.toUpperCase() == badFoodsList[i].toUpperCase()) { //...if the item is equal to array[n] then set the flag to true
            output = true;
        }//end if
        //no else; we don't want to overwrite a true value with false, so it's false by default
    }//end for
    return output;
}//end checkItem function

function formatItem(groceryItem) {    //accepts one string paramter
    let output = groceryItem; //output variable
    output = output.trim();  //get rid of whitespace on both sides
    output = output.charAt(0).toUpperCase() + output.substr(1).toLowerCase();; //capitalize first letter & add it to remaining characters
    return output;  //return output variable
}//end formatItem() function

/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}

