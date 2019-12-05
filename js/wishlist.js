function createUserProfile(currentUser) { // Create user profile, if it already exists, don't overlap, just merge what is already existent
    db.collection("Users").doc(currentUser).set({
        name: currentUser,
        wishlist: [],
        itemImages: [],
        links: []
    }, {merge: true}); // This ensures that we're not overwriting or clearing the user's wishlist of items with empty arrays on loadup
}

function createShoppingList(currentUser) {
    db.collection('Users').doc(currentUser).get().then(function (doc) {
        if (doc.exists) { // check if the user's wishlist/shopping cart exists, if it does, then do everything else down under
            let shoppingCartitems = doc.data().wishlist; // Assign the wishlsit array to a variable
            let shoppingCartitemsImages = doc.data().itemImages; // Assign the images array to a variable
            let shoppingCartLinks = doc.data().links; // Assign the links array to a variable
            for (let i=0; i<shoppingCartitems.length; i++) {
                let link = shoppingCartLinks[i]; // Add the link to the product to a variable 
                let image = document.createElement('img'); // Create an image element
                image.onclick = function(){ // Relocate to product page
                    window.location = link;
                };
                image.src = shoppingCartitemsImages[i]; // Assign the source of the image to the image of the item
                
                image.classList.add("listings");
                let text = document.createElement('p'); // Create a text element
                text.innerHTML = shoppingCartitems[i]; // Change the text to the name of the item
                document.getElementById('listingdiv').appendChild(image); // Add image to screen
                document.getElementById('listingdiv').appendChild(text); // Add text to screen

                let btn = document.createElement('button'); // Create a button element
                btn.innerHTML = "Remove from cart"; // Name the button "Remove from cart"

                btn.onclick = function(){ // On click, remove the item from user's shopping list
                    db.collection('Users').doc(currentUser).update({
                        wishlist: firebase.firestore.FieldValue.arrayRemove(shoppingCartitems[i]),
                        itemImages: firebase.firestore.FieldValue.arrayRemove(shoppingCartitemsImages[i]),
                        links: firebase.firestore.FieldValue.arrayRemove(shoppingCartLinks[i])
                    });
                };
                document.getElementById('listingdiv').appendChild(btn); // Add the button to the screen
            }
        }
    })
}