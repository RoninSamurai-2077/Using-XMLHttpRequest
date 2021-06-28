// handle button clicks
// when the button is clicked, load content into #page_content from the as(sociated /file/ resource
let pages = {
    'page1': '/files/page1.html',
    'page2': '/files/page2.html', 
    'page3': '/files/page3.html',
}
var button = document.getElementById("action_buttons").children 
 button = Array.prototype.slice.call(button) 
 button.forEach(button => button.addEventListener("click", buttonClick ));
    
        function buttonClick(event) {
                console.log(event.target.id)
            let page = event.target.id;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("page_content").innerHTML = xhttp.responseText;
                }
            };
            xhttp.open("GET", '/files/'+page+'.html');
            xhttp.send();
            // console.log(page);
    // let xhr = new XMLHttpRequest(); 
    // xhr.onload = loadPageContent = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //     //Typical action to be performed when the document is ready:
            //  xhr.open('GET', '/files/'+page+'.html');
    //         xhr.send();
//}
        }
            
    //         document.addEventListener("DOMContentLoaded", function() 
    //         // load pagel by default In page load
            
    //         // page1, page2, page3 click events
            
    //         //document.getElementById('action_buttons').addEventListener('click', buttonClick);
            
    //         // document.getElementById('page1').addEventListener('click', buttonClick);
            
    //         // document.getElementById('page2').addEventListener('click', buttonClick); // document.getElementById('page3').addEventListener('click', buttonClick);