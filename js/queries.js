function queryProducts(collection_name, user) { // This function receives two parameters, the name of the category selected, and the user if someone is logged in
    db.collection("onestop-van").doc('stock').collection(collection_name).orderBy('price').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) { // Based on the category selected, this function will display all the items in the category collection
            let image = document.createElement("img"); // Create an image element
            let text = document.createElement("p"); // Create a text element
            let link = doc.data().link; // Set the link string to a variable
            let btn = document.createElement("input"); // Create an input element

            btn.alt = link; // Set the btn variable's alt attribute to the link string
            btn.name = doc.data().name; // Set the btn variable's name to the 
            btn.classList.add("addtocart");
            btn.id = doc.data().image;
            btn.type = "button";
            btn.value = "Add to Cart";

            image.classList.add("listings");
            image.src = doc.data().image;
            image.onclick = redirect;
            // TODO: Replace line breaks with css stuff
            text.innerHTML = doc.id + '<br>' + '$' + doc.data().price + "<br><br><br>";

            document.getElementById('listingdiv').appendChild(image);
            document.getElementById('listingdiv').appendChild(btn);
            document.getElementById('listingdiv').appendChild(text);
            // Sets the page's title to the current collection_name
            document.getElementById("pagetitle").innerHTML = collection_name;
            document.getElementById(btn.id).addEventListener("click", ()=>{
                    db.collection("Users").doc(user).update({
                        wishlist: firebase.firestore.FieldValue.arrayUnion(btn.name),
                        itemImages: firebase.firestore.FieldValue.arrayUnion(btn.id),
                        links: firebase.firestore.FieldValue.arrayUnion(btn.alt)
                })
            });
            function redirect(){
                window.location = link;
            }
        });
    });
}