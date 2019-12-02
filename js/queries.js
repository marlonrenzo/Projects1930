function queryProducts(collection_name, user) {
    db.collection("onestop-van").doc('stock').collection(collection_name).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            let image = document.createElement("img");
            let text = document.createElement("p");
            let link = doc.data().link;
            let btn = document.createElement("input");
            btn.name = doc.data().name;
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
                        itemImages: firebase.firestore.FieldValue.arrayUnion(btn.id)
                })
            });
            function redirect(){
                window.location = link;
            }
        });
    });
}