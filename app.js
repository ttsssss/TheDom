//Add a script tag to the bottom of the HTML body.
//(In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "arial, sans-seriff"
//(In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById("nickname").innerHTML="T-Daddy"
document.getElementById("favorites").innerHTML="All of it"
document.getElementById("hometown").innerHTML="Denver"
//Iterate through each li and change the class to "list-item".
const item = document.getElementsByTagName('li') 
for (let i=0; i<items.length; i++ ) {
    items[i].classname = 'list-item';
}
//(In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
//Create a new img element and set its src attribute to a picture of you. Append that element to the page. 
const myPicture = document.createElement('img');
myPicture.src = "https://www.kindpng.com/picc/m/166-1661898_arnold-hey-arnold-arnold-hd-png-download.png"
document.body.appendChild(myPicture);
