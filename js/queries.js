function queryProducts(collection_name, user) { // This function receives two parameters, the name of the category selected, and the user if someone is logged in
    db.collection("onestop-van").doc('stock').collection(collection_name).orderBy('price').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) { // Based on the category selected, this function will display all the items in the category collection
            let image = document.createElement("img"); // Create an image element
            let text = document.createElement("p"); // Create a text element
            let link = doc.data().link; // Set the link string to a variable called link
            let btn = document.createElement("input"); // Create an input element

            btn.alt = link; // Set the btn variable's alt attribute to the string link of the product
            btn.name = doc.data().name; // Set the btn variable's name attribute to the string name of the product
            btn.classList.add("addtocart"); // Add a class to the btn variable
            btn.id = doc.data().image; // Set the id attribute of the btn to the string url link of the image of the product
            btn.type = "button"; // Change the input type to a button
            btn.value = "Add to Cart"; // Change the name of the button itself to the given string

            image.classList.add("listings"); // Add a class to the image element
            image.src = doc.data().image; // Set the reference of the image element to refer to the image
            image.onclick = redirect; // On clicking the image, redirect
            text.innerHTML = doc.id + '<br>' + '$' + doc.data().price + "<br><br><br>"; // Add the name and price of the product to the text element

            document.getElementById('titletext').innerHTML = collection_name.toUpperCase(); // Change the title of each category when displayed to uppercase
            document.getElementById('listingdiv').appendChild(image); // Add the image to the screen
            document.getElementById('listingdiv').appendChild(btn); // Add the "Add to cart" button to the screen
            document.getElementById('listingdiv').appendChild(text); // Add text to the screen
            // Sets the page's title to the current collection_name
            document.getElementById("pagetitle").innerHTML = collection_name; // Give the site itself the category name
            document.getElementById(btn.id).addEventListener("click", ()=>{ // Wait to be clicked and update accordingly
                    db.collection("Users").doc(user).update({
                        wishlist: firebase.firestore.FieldValue.arrayUnion(btn.name), // Add the name coinciding with the product to an array called wishlist
                        itemImages: firebase.firestore.FieldValue.arrayUnion(btn.id), // Add the image coinciding with the product to an array called itemImages
                        links: firebase.firestore.FieldValue.arrayUnion(btn.alt) // Add the link coinciding with the product to an array called links
                })
            });
            function redirect(){ // On clicking the image, the window is automatically redirected to the source of the item
                window.location = link;
            }
        });
    });
}