// handle button clicks
document.getElementById("page1").onclick = function() {myFunction()};
document.getElementById("page2").onclick = function() {myFunction()};
document.getElementById("page3").onclick = function() {myFunction()};
var myFunction = function
function myFunction() {
    document.getElementById("page1").addEventListener('click', function(e) {
        let page1 = new XMLHttpRequest();
        page1.onload = function() {
           // this.responseText
    };
        page1.open('GET', 'page1.html');
        page1.send();
    
    document.getElementById("page2").addEventListener('click', function(e) {
        let page2 = new XMLHttpRequest();
        page2.onload = function() {
         // this.responseText
    };
        page2.open('GET', 'page2.html');
        page2.send();
    
    document.getElementById("page3").addEventListener('click', function(e) {
    let page3 = new XMLHttpRequest();
        page3.onload = function() {
        // this.responseText
    };
        page3.open('GET', 'page3.html');
        page3.send();


// when the button is clicked, load content into #page_content from the as(sociated /file/ resource