/* ---------------------------
*** #1 Percentage ***

Write a JavaScript function to calculate the percentage (%) of a given number.

Test:
console.log(percentage(2000, 37.12));

Output:
742.4
 --------------------------- */

function percentage(number, percentage) {
  var x=number*percentage/100;
  return x;
}
console.log("Percentage Calculator:");
/* Uncomment the following to check */
console.log(percentage(2000, 37.12));
  // console.log(percentage(450, 56.5));
  // console.log(percentage(5230, 34));


/* ---------------------------
*** #2 Area of Triangle ***

Write a JavaScript function to calculate the area of a triangle given the base and height.

Test:
console.log(areaTriangle(5, 20));

Output:
50
 --------------------------- */

 function areaTriangle(base, height) {
  var x=.5*base*height;
   return x;
 }
 console.log("Triangle Area Calculator:");
 /* Uncomment the following to check */
   console.log(areaTriangle(2, 7));
   console.log(areaTriangle(20, 56.5));
   // console.log(areaTriangle(50, 34));


/* ---------------------------
*** #3 Rotate String ***

Rotate a given string in the right direction by periodically removing
one letter from the end of the string and attaching it to the front.

Test:
rotateString("cat");

Output:
cat
tca
atc
cat

HINT: Use substring()
 --------------------------- */

function rotate_string(text) {
  
    console.log(text)
    var x=text;
  for (var i=0;i<text.length;i++)
  {
      
    x=text.substr(text.length-i-1)+text.substr(0,text.length-i-1);
    console.log(x);

  }
  
}

console.log("Rotate String:");
/* Uncomment the following to check */
  //rotate_string("bird");
  rotate_string("pseudonym")


/* ---------------------------
*** #4 Hide part of email address ***

Write a JavaScript function to hide email addresses to protect from unauthorized user.

Test:
console.log(protect_email("tom_jenkins@example.com"));

Output:
"tom_j...@example.com"

HINT: Use split() and substring()
 --------------------------- */

function protect_email(email) {
    
    var x=email.split("@");
    x[0]=x[0].substring(0,3)+"...";
    x=x[0]+"@"+x[1];
    
  return x;
}

console.log("Protected email:");
/* Uncomment the following to check */
  console.log(protect_email("harry_potter@gmail.com"));
  console.log(protect_email("sarah.connor@gmail.com"));


/* ---------------------------
*** #5 Remove First Occurence ***

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

Test:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

Output:
"The quick brown fox jumps over lazy dog"

HINT: Use indexOf() and slice()
 --------------------------- */

function remove_first_occurrence(text, searchstring) {

    var i=text.indexOf(searchstring);
    var x=text.substr(0,i)+text.substr((i+searchstring.length+1));
    
  return x;
}

console.log("Remove First Occurrence:");
/* Uncomment the following to check */
  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
  console.log(remove_first_occurrence("Drastic times call for drastic measures", 'drastic'));


/* ---------------------------
*** #6 Alphabetical Order ***

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Test:
console.log(alphabetic_order('textbook'));

Output:
bekoottx

HINT: Use join(), split() and sort() functions
 --------------------------- */

function alphabetic_order(word) {
  var x=word.split("");
    x=x.sort();
    x=x.join("");
   
  return x;
}

console.log("Alphabetic Order:");
/* Uncomment the following to check */
  console.log(alphabetic_order("textbook"));
  console.log(alphabetic_order("webmaster"));
  // console.log(alphabetic_order("supercalifragilisticexpialidocious"));


/* ---------------------------
*** #7 Most Frequent Item ***

Write a JavaScript function to find the most frequent item in a given array.

Test:
most_frequent([3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 3]);

Output:
c occurs 5 times
 --------------------------- */

function most_frequent(arr) {
    var most_f = 1;
    var c= 0;
    var item;
    for (var i=0; i<arr.length; i++)
    {
            for (var j=i; j<arr.length; j++)
            {
                    if (arr[i] == arr[j])
                     c++;
                    if (most_f<c)
                    {
                      most_f=c; 
                      item = arr[i];
                    }
            }
            c=0;
    }    
  console.log(item+" occurs "+most_f+" times" );
    
}

console.log("Most Frequent Item:");
/* Uncomment the following to check */
 most_frequent([3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 3]);
 most_frequent([7, 2, 'ax', '9', 9, 'ax', 'ax']);


/* ---------------------------
*** #8 Remove Duplicate Values ***

Write a JavaScript program to find and remove duplicate values in a JavaScript array.

Test:
remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

Output:
[3, 'a', 2, 4, 9]
 --------------------------- */

function remove_duplicates(arr) {
  console.log("Duplicates removed from array");
    var x="";
    for(var i=0;i<arr.length;i++)
        {
           if(x.indexOf(arr[i])==-1)
               {
                   x=x+arr[i];
               }
        }
    arr=x.split("");
    return arr;
}


/* Uncomment the following to check */
  console.log(remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
  console.log(remove_duplicates([4, 4, 4, 5, 's', 8, 's']));


/* ---------------------------
*** #9 Dash between Even Numbers ***

Write a JavaScript program which accepts a number as input and inserts dashes (-) between two consecutive even numbers.

Test:
dash_in_even(012345684);

Output:
"012-456-8-4"
 --------------------------- */

function dash_in_even(number) {
  var x=number.toString();
    var y=x[0];
    for(var i=1;i<x.length;i++)
      {
          if((parseInt(x[i-1])%2==0) && (parseInt(x[i])%2==0) )
             {
                 y=y+"-"+x[i];
                
             }
          else
              {
                  y+=x[i];
              }
      }
  return y;
}

console.log("Dash between Even Numbers:");
/* Uncomment the following to check */
 //console.log(dash_in_even("01245684"));
  //console.log(dash_in_even(1356));
 // console.log(dash_in_even(246824));
console.log(dash_in_even(1324567824));


/* ---------------------------
*** #10 Guessing Game ***

Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"

HINT: Use Math.ceil() and Math.random()
 --------------------------- */

function guessing_game(guess) {
  // Get a random integer from 1 to 10 inclusive
    var x=Math.ceil(10*Math.random());
    if(x==guess)
        console.log("Good Work!");
    else
        console.log("Not Matched!Value is "+x);
    return x;
  
}

console.log("Guessing Game:");
/* Uncomment the following to check */
var guess = prompt('Guess the number between 1 and 10 inclusive');
console.log("User guessed: "+ guess);
guessing_game(guess);
