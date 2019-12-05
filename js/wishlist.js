function createUserProfile(currentUser) {
    db.collection("Users").doc(currentUser).set({
        name: currentUser,
        wishlist: [],
        itemImages: [],
        links: []
    }, {merge: true});
}

function createShoppingList(currentUser) {
    db.collection('Users').doc(currentUser).get().then(function (doc) {
        if (doc.exists) {
            let shoppingCartitems = doc.data().wishlist;
            let shoppingCartitemsImages = doc.data().itemImages;
            let shoppingCartLinks = doc.data().links;
            for ( let i=0; i<shoppingCartitems.length; i++) {
                let link = shoppingCartLinks[i];
                let image = document.createElement('img');
                image.onclick = function(){
                    window.location = link;
                };
                image.src = shoppingCartitemsImages[i];
                
                image.classList.add("listings");
                let text = document.createElement('p');
                text.innerHTML = shoppingCartitems[i];
                document.getElementById('listingdiv').appendChild(image);
                document.getElementById('listingdiv').appendChild(text);

                let btn = document.createElement('button');
                btn.innerHTML = "Remove from cart";

                btn.onclick = function(){
                    db.collection('Users').doc(currentUser).update({
                        wishlist: firebase.firestore.FieldValue.arrayRemove(shoppingCartitems[i]),
                        itemImages: firebase.firestore.FieldValue.arrayRemove(shoppingCartitemsImages[i]),
                        links: firebase.firestore.FieldValue.arrayRemove(shoppingCartLinks[i])
                    });
                };
                document.getElementById('listingdiv').appendChild(btn);
            }
        }
    })
}