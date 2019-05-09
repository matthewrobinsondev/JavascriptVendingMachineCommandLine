VendingMachine(); // This Loads the default main menu screen

// These are my global variables I have created
var amount = 0;
var DairyMilk = 10;
var GalaxySmooth = 10;
var GalaxyCaramel = 10;
var Coke = 10;
var Walkers = 10;
var CurrentAmount = 0.00;

function VendingMachine() { // This function is the default Main Menu I have created
    console.log(['View Products', 'View Amount', 'Add Coins', 'Eject Coins', 'Exit']); // This displays the menu to the User
    // This is the Beginning of the Prompt to ask the user what they would like to do
    var prompt = require('prompt');
    prompt.start();
    console.log('What would you like to do?'); // This asks the user what they would like to do, displaying to them what to answer the prompt with
    // This selects the answer the prompt has received and will then decide what to do based on the answer received
    prompt.get(['Options'], function (err, result) { //

        if (result.Options === 'View Products') { // If they answer View Products then load the Products_Page function
        Products_Page();

    }
        else if (result.Options === 'View Amount') { // If they answer View Amount then load the View_Amount function
        View_Amount();

    }
        else if (result.Options  === "Add Coins") { // If they answer Add Coins then load the Add_Coins function
        Add_Coins();

    }
        else if (result.Options  === "Eject Coins") {
            if (CurrentAmount > 0.1) { // this Section refunds the coinds but only if you have Coins to refund

            console.log("You have been refunded " + CurrentAmount.toFixed(2)); // (JavaScript toFixed() method)
            CurrentAmount = CurrentAmount - CurrentAmount;
            VendingMachine();
            }
            else { // If you have nothing to refund this mesage will show
            console.log("There is nothing to Refund!");
            VendingMachine();
        }
    }
        else if (result.Options  === "Exit") { // This will closee the file down upon the user asking to Exit
        process.exit(); // (How to exit in Node.js, 2017)
    }
        else { // If the user types something other than what the menu says
        console.log('Sorry, Please type one of the commands above again please!');
        VendingMachine();
    }
});
}

// This is the function showing the Products
function Products_Page() {
    var Products = ['Dairy Milk - 0.70 - Remaining: ' + DairyMilk, 'Galaxy Smooth - 0.65 - Remaining: ' + GalaxySmooth, 'Galaxy Caramel - 0.65 - Remaining: ' + GalaxyCaramel, 'Coke 250ml - 0.80 - Remaining: ' + Coke, 'Walkers Ready Salted - 0.80 - Remaning: ' + Walkers];
    console.log(Products); // This line loads the variable that is the Products menu

    // This is the start of the Prompt asking if the user would like to Purchase a Product
    var prompt = require('prompt');
    console.log('Would you like to purchase a prodcut?'); // This text asks the user if they would like to Purchase a product
    prompt.start();
    prompt.get(['Purchase'], function (err, result) {
        if (result.Purchase === 'Yes') { // If the result is Yes then go to the Purchase_Product function
            Purchase_Product();
        }
        else if (result.Purchase === 'No') { // If the result is no then return them to the Main Menu
            VendingMachine();
        }
        else {console.log('Please enter Yes or No'); // Remind the user to answer yes or no if they input something different

            Products_Page();
        }

    });
}

function View_Amount() {
    console.log(CurrentAmount.toFixed(2)); // This loads the current amount in it's 2 decimal place form, (JavaScript toFixed() method)

    // This prompts the user asking if they would like to add funds
    var prompt = require('prompt');
    console.log('Would you like to Add Funds?'); // This asks the user if they would like to add funds
    prompt.start();
    prompt.get(['AddFunds'], function (err, result) {
        if (result.AddFunds === 'Yes') { // If the Answer is Yes then go to the add cooins function
            Add_Coins();
        } else if (result.AddFunds === 'No') { // If they answer no return them to the Main Menu
            console.log('Returning to the Main Menu');
            VendingMachine();
        } else { // If they input something else remind them to enter either Yes or No
            console.log('Please enter Yes or No');
            View_Amount();
        }

    });

}

function Add_Coins() {
    // This is the start of a prompt which asks the user to insert funds
    var prompt = require('prompt');
    console.log('We only accept coins, please insert one!'); // This tells the that we only accept coins
    prompt.start();
    prompt.get(['amount'], function (err, result) {
        if (result.amount === "0.10") { // If they answer 0.10 then Add 10p to the account
             CurrentAmount = CurrentAmount + 0.10;
            console.log(CurrentAmount.toFixed(2)); // (JavaScript toFixed() method)
            carry_on(); // This then loads the Carry on functions which asks the user if they would like to keep entering coins
        }
        else if (result.amount === "0.20") { // If they answer 0.20 then add 20p to the account
            CurrentAmount = CurrentAmount + 0.20;
            console.log(CurrentAmount.toFixed(2)); // (JavaScript toFixed() method)
            carry_on(); // This then loads the Carry on functions which asks the user if they would like to keep entering coins
        }

        else if (result.amount === "0.50") { // If they answer 0.50 then add 50p to the account
            CurrentAmount = CurrentAmount + 0.50;
            console.log(CurrentAmount.toFixed(2)); // (JavaScript toFixed() method)
            carry_on(); // This then loads the Carry on functions which asks the user if they would like to keep entering coins
        }
        else if (result.amount === "1") { // If they answer 1 then add £1 to the account
            CurrentAmount = CurrentAmount + 1.00;
            console.log(CurrentAmount.toFixed(2)); // (JavaScript toFixed() method)
            carry_on(); // This then loads the Carry on functions which asks the user if they would like to keep entering coins
        }
        else if (result.amount === "2") { // If they answer 2 then add £2 to the account
            CurrentAmount = CurrentAmount + 2.00;
            console.log(CurrentAmount.toFixed(2));
            carry_on(); // This then loads the Carry on functions which asks the user if they would like to keep entering coins
        }
        else if (result.amount  === "Exit") { // This will closee the file down upon the user asking to Exit
            process.exit();
        }
        else { // If the user doesn't insert a coin then we will Tell them again what we accept and re load the Add_Coins page
            console.log('Sorry we only Accept 10p, 20p, 50p, £1 and £2 coins');
            console.log('If you need to go get some coinds, you can Exit too and come back later!');
            Add_Coins();
        }
    });

}

function carry_on() {
    // This prompts the user asking if they would like to keep entering coins
    var prompt = require('prompt');
    console.log('Would you like to carry on adding coins?'); // This line asks the user if they would like to Carry on entering coins
    prompt.start();
    prompt.get(['CarryOn'], function (err, result) {
        if (result.CarryOn === 'Yes') { // If yes then load the add_coins function again
            Add_Coins();
        }
        else if (result.CarryOn === 'No') { // If no then return to the Main Menu
            VendingMachine();
        }
        else {console.log('Please enter Yes or No'); // If the user doesn't enter Yes or No remind them

            carry_on();
        }

    });
}

function Purchase_Product() {

    // Below is a prompt asking the user what Product they would like to Purchase
    var prompt = require('prompt');
    console.log('What would you like to Purchase'); // This asks the user what Product they would like to Purchase
    prompt.start();
    prompt.get(['PurchaseProduct'], function (err, result) {

        if (result.PurchaseProduct === 'Dairy Milk') { //If the result is Dairy Milk
            if (CurrentAmount > 0.70) { // First got to check if the user has enough money
                if (DairyMilk === 0) { // Then have to check if there is enough in stock
                    console.log('Sorry, We are out of them, What about something else?'); // If there isn't then alert the user
                    Products_Page(); // Return them to the Products page
                } else { // If they are in stock and the user has enough money
                    DairyMilk = DairyMilk - 1; // remove one from the stock
                    CurrentAmount = CurrentAmount - 0.70; // Subtract the price of the product from the Users current amount
                    console.log('Currently Vending, Please Wait!'); // This text shows the transaction has gone through
                    console.log('You have ' + CurrentAmount.toFixed(2) + (' Remaining')); // This text shows how much money they have remaining
                    VendingMachine(); // Return to the main menu
                }} else { // If the user does not have enough money alert them and return them to the main menu
                console.log('Sorry it appears you do not have enough funds, please add more or select another product');
                VendingMachine();
            }
        }

        if (result.PurchaseProduct === 'Galaxy Smooth') { // If the result equals Galaxy Smooth
            if (CurrentAmount > 0.65) { // First got to check if the user has enough money
                if (GalaxySmooth === 0) { // Then have to check if there is enough in stock
                    console.log('Sorry, We are out of them, What about something else?'); // If there isn't then alert the user
                    Products_Page(); // Return them to the Products_Page
                } else { // If they are in stock and the user has enough money
                    GalaxySmooth = GalaxySmooth - 1; // Remove one from the stock
                    CurrentAmount = CurrentAmount - 0.65; // Subtract the Price
                    console.log('Currently Vending, Please Wait!'); // this shows the transaction was a success
                    console.log('You have ' + CurrentAmount.toFixed(2) + (' Remaining')); // this text shows the user how much money they have remaining
                    VendingMachine(); // Return them to the main menu
                }} else { // If the user does not have enough money alert them and return them to the main menu
                console.log('Sorry it appears you do not have enough funds, please add more or select another product');
                VendingMachine();
            }
        }

        if (result.PurchaseProduct === 'Galaxy Caramel') { // If the result comes back as Galaxy Caramel
            if (CurrentAmount > 0.65) { // Firstly we've got to check if the user has enough money
                if (GalaxyCaramel === 0) { // Then have to check if there is enough in stock
                    console.log('Sorry, We are out of them, What about something else?'); // If there isn't then alert the user
                    Products_Page(); // Return them to the Products_Page
                } else { // If they are in stock and the user has enough money
                    GalaxyCaramel = GalaxyCaramel - 1; // Remove one from the stock
                    CurrentAmount = CurrentAmount - 0.65; // Subtract the Price
                    console.log('Currently Vending, Please Wait!'); // this shows the transaction was a success
                    console.log('You have ' + CurrentAmount.toFixed(2) + (' Remaining')); // this text shows the user how much money they have remaining
                    VendingMachine(); // Return them to the main menu
                }} else { // If the user does not have enough money alert them and return them to the main menu
                console.log('Sorry it appears you do not have enough funds, please add more or select another product');
                VendingMachine();
            }
        }

        if (result.PurchaseProduct === 'Coke') {
            if (CurrentAmount > 0.80) {
                if (Coke === 0) {
                    console.log('Sorry, We are out of them, What about something else?');
                    Products_Page();
                } else { // If they are in stock and the user has enough money
                    Coke = Coke - 1; // Remove one from the stock
                    CurrentAmount = CurrentAmount - 0.80; // Subtract the Price
                    console.log('Currently Vending, Please Wait!'); // this shows the transaction was a success
                    console.log('You have ' + CurrentAmount.toFixed(2) + (' Remaining')); // this text shows the user how much money they have remaining
                    VendingMachine(); // Return them to the main menu
                }} else { // If the user does not have enough money alert them and return them to the main menu
                console.log('Sorry it appears you do not have enough funds, please add more or select another product');
                VendingMachine();
            }
        }

        if (result.PurchaseProduct === 'Walkers Ready Salted') {
            if (CurrentAmount > 0.80) {
                if (Walkers === 0) {
                    console.log('Sorry, We are out of them, What about something else?');
                    Products_Page();
                } else { // If they are in stock and the user has enough money
                    Walkers = Walkers - 1; // Remove one from the stock
                    CurrentAmount = CurrentAmount - 0.80; // Subtract the Price
                    console.log('Currently Vending, Please Wait!'); // this shows the transaction was a success
                    console.log('You have ' + CurrentAmount.toFixed(2) + (' Remaining')); // this text shows the user how much money they have remaining
                    VendingMachine(); // Return them to the main menu
                }} else { // If the user does not have enough money alert them and return them to the main menu
                console.log('Sorry it appears you do not have enough funds, please add more or select another product');
                VendingMachine();
            }
        }
        else {
            console.log("Please enter one of the Available Products above");
            Purchase_Product();
        }
    });
}