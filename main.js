
function main () {
    var element = document.getElementById("grow-me");
    element.classList.add("big");
    var element = document.getElementById("shrink-me");
    element.classList.remove("big");


// find all lis
let lis = document.getElementsByTagName("li"); // ==> gives list
console.log(lis);

for (let i = 0; i < lis.length; i++){
    console.log(lis[i].textContent);
    
}

var el = document.getElementsByTagName("a");
console.log(el);
el[0].setAttribute("href","https://www.example.com")

let linktext = document.getElementsByTagName("a");
console.log(linktext[0].innerHTML);
linktext[0].innerHTML= "somewhere";


//Set the "display" CSS property of the "hide-me" paragraph to "none".

let hideme = document.getElementById("hide-me");
hideme.style.display = "none";

//Set the "display" CSS property of the "show-me" paragraph to "block".

let showme = document.getElementById("show-me");
showme.style.display = "block";

//Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".


let h1s = document.getElementsByTagName("h1");

// Get the text that the user enters into the "name" input box
let nameField = document.getElementById("name");

h1s[0].innerHTML=`Welcome ${nameField.value}!`;

// value of nameField = nameField.value;

// console.log(`name field: ${nameField.value}`);

// nameField.addEventListener('click', main () {
//     // set a welcome message in the <h1>, e.g., "Welcome Grant!".
//     console.log(`name field: ${nameField.value}`);
// });

    
// element.addEventListener(input)
    
}


// main();