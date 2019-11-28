function goToCategory(category) {
    sessionStorage.setItem("category", category);
    window.location.href = "productListing.html";
}