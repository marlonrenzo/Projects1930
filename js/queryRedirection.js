function goToCategory(category) {
    localStorage.setItem("category", category);
    window.location.href = "productListing.html";
}