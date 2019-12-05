firebase.auth().onAuthStateChanged(function (user) { // Check authentication state
    if (user) {
        console.log(" User is signed in.");
        document.getElementById('login').innerHTML = 'Logout'; // once logged in, change text to logout
        document.getElementById('login').href = 'index.html';
        localStorage.setItem("userID", user.uid); // Set cache to current user
        localStorage.setItem("userName", user.displayName);
        let currentUser = firebase.auth().currentUser.displayName;
        db.collection('Users').doc(currentUser).get().then((docSnapshot) => {
            if (!docSnapshot.exists) { // If the user's profile exists, grab it
                createUserProfile(currentUser);
            }
        })
    } else {
        console.log(" User is NOT signed in.");

    }
});

document.getElementById('login').addEventListener("click", e => { // If clicked, sign out
    if (localStorage.getItem("userID")) {
        firebase.auth().signOut().then(
            () => {
                console.log("user signed out");
                localStorage.clear();
                document.getElementById('login').innerHTML = 'Log In/Sign Up';

            }
        );
    }
});