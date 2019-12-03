function createUserProfile(currentUser) {
    db.collection("Users").doc(currentUser).set({
        name: currentUser,
        wishlist: [],
        itemImages: []
    }, {merge: true});
}

function createShoppingList(currentUser) {
    db.collection('Users').doc(currentUser).get().then(function (doc) {
        if (doc.exists) {
            let shoppingCartitems = doc.data().wishlist;
            let shoppingCartitemsImages = doc.data().itemImages;
            for (i=0; i<shoppingCartitems.length; i++) {
                
                let image = document.createElement('img');
                image.src = shoppingCartitemsImages[i];
                image.classList.add("listings");
                let text = document.createElement('p');
                text.innerHTML = shoppingCartitems[i];
                document.getElementById('listingsdiv').appendChild(image);
                document.getElementById('listingsdiv').appendChild(text);
            }
        }
    })
}
