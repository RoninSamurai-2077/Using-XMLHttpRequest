// handle button clicks
document.getElementById("page1").onclick = function() {myFunction()};
document.getElementById("page2").onclick = function() {myFunction()};
document.getElementById("page3").onclick = function() {myFunction()};
// when the button is clicked, load content into #page_content from the as(sociated /file/ resource
let pages = {
    'page1': '/files/page1.html',
    'page2': '/files/page2.html', 
    'page3': '/files/page3.html',
}
    function myFunction() {
    document.getElementById("page1").addEventListener('click', function(e) {
        let page = e.target.id;
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            document.getElementById('page_content').innerHTML=this.responseText;
    };
    xhr.open('GET', 'page1.html');
    xhr.send();
    
    document.getElementById("page2").addEventListener('click', function(e) {
        let page = e.target.id;
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            document.getElementById('page_content').innerHTML=this.responseText;   
        };
        xhr.open('GET', 'page2.html');
        xhr.send();
    
    document.getElementById("page3").addEventListener('click', function(e) {
        let page = e.target.id;
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
            document.getElementById('page_content').innerHTML=this.responseText;
        };
        xhr.open('GET', 'page3.html');
        xhr.send();