// ***** CHAPTER 1 *****
// Task 1
alert("Welcome");

// Task 2
alert("Error! Please enter valid password");

// Task 3
alert("Welcome to JS Land... \nHappy Coding!");

// Task 4
alert("Welcome to JS Land...");
alert("Happy Coding");

// ***** CHAPTER 2 *****
// Task 1
var username;

// Task 2
var myName = "Mohsin Ali";

// Task 3
var message = "Hello World";
alert(message);

// Task 4
var name = "John Doe";
var age = "15";
var certificate = "Mobile Application Development";

alert(name);
alert(age + " years old");
alert("Certified " + certificate);

// Task 5
var str = "PIZZA";
var word = "";

for (var i = str.length - 1; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
        word = word + str[j];
    }
    word = word + "\n";
}
alert(word);

// Task 6
var email = "mohsinali1798@gmail.com";
alert("My email address is " + email);

// Task 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Task 8
document.write("Yah! I can write HTML content through Javascript");

// Task 9
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
document.write("<br><br>▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");

// ***** CHAPTER 3 *****
// Task 1
var age=18;
alert("I am " +age+ " years old.");

// Task 2
var count=15;
alert("You have visited this site "+count+" times.");

// Task 3
var birthYear=1998;
document.write("My Birth Year is: "+birthYear);
document.write("<br>Data type of my declared variable is: "+typeof(birthYear));

// Task 4
var visitorName= prompt("Enter your name:");
var productTitle= prompt("Enter product you want:");
var quantity= prompt("Enter quantity of product:");
document.write("<br><br>"+visitorName+" ordered "+quantity+" "+productTitle+"(s) on XYZ Clothing store");
