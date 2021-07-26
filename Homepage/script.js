

var slideIndex = 0;
showSlides();
checkCookie();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var lines = document.getElementsByClassName("line");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    lines[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(document.cookie, cname, cvalue);
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    console.log("Minjoo");
    let user=getCookie("username");
    console.log(user);
    if (user != "") {
        alert("Welcome again " + user + "! Make today another happy day:)");
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

// // Check browser support
// window.load=doShowAll();
// /*
// =====> Checking browser support.
//  //This step might not be required because most modern browsers do support HTML5.
//  */
//  //Function below might be redundant.
//  function CheckBrowser() {
//     if ('localStorage' in window && window['localStorage'] !== null) {
//         // We can use localStorage object to store data.
//         return true;
//     } else {
//             return false;
//     }
// }

// // Dynamically populate the table with shopping list items.
// //Step below can be done via PHP and AJAX, too.
// function doShowAll() {
//     if (CheckBrowser()) {
//         var key = "";
//         var list = "<tr><th>Item</th><th>Value</th></tr>\n";
//         var i = 0;
//         //For a more advanced feature, you can set a cap on max items in the cart.
//         for (i = 0; i <= localStorage.length-1; i++) {
//             key = localStorage.key(i);
//             list += "<tr><td>" + key + "</td>\n<td>"
//                     + localStorage.getItem(key) + "</td></tr>\n";
//         }
//         //If no item exists in the cart.
//         if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
//             list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
//         }
//         //Bind the data to HTML table.
//         //You can use jQuery, too.
//         document.getElementById('list').innerHTML = list;
//     } else {
//         alert('Cannot save shopping list as your browser does not support HTML 5');
//     }
// }

// localStorage.myProperty="myValue";
// localStorage.setItem('propertyName','value');
// localStorage.getItem('propertyName');
// localStorage.removeItem('propertyName');

// function SaveItem() {

//     var name = document.forms.ShoppingList.name.value;
//     var data = document.forms.ShoppingList.data.value;
//     localStorage.setItem(name, data);
//     doShowAll();

// }

// function SaveItem() {
//     var name = $("#name").val();
//     var data = $("#data").val();
//     localStorage.setItem(name, data);
//     doShowAll();
// }

// //Change an existing key-value in HTML5 storage.
// function ModifyItem() {
//     var name1 = document.forms.ShoppingList.name.value;
//     var data1 = document.forms.ShoppingList.data.value;
//     //check if name1 is already exists

// //Check if key exists.
//             if (localStorage.getItem(name1) !=null)
//             {
//               //update
//               localStorage.setItem(name1,data1);
//               document.forms.ShoppingList.data.value = localStorage.getItem(name1);
//             }

//     doShowAll();
// }

// function RemoveItem()
// {
// var name=document.forms.ShoppingList.name.value;
// document.forms.ShoppingList.data.value=localStorage.removeItem(name);
// doShowAll();
// }

// function ClearAll() {
//     localStorage.clear();
//     doShowAll();
// }
