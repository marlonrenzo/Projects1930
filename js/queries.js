function queryProducts(collection_name) {
    db.collection("onestop-van").doc('stock').collection(collection_name).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            let image = document.createElement("img");
            let text = document.createElement("p");
            let link = doc.data().link;
            image.classList.add("listings");
            image.src = doc.data().image;
            image.onclick = redirect;
            text.innerHTML = doc.id + '<br>' + '$' + doc.data().price + "<br><br><br>";

            document.getElementById('listingdiv').appendChild(image);
            document.getElementById('listingdiv').appendChild(text);
            function redirect(){
                window.location = link;
            }
        });
    });
}