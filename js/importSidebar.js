// To use:
// 1. Add an element with the id 'sidebar' where one wants the sidebar to be.
// 2. Include this script.

function importSidebar() {
    let sidebarHtml =
        '<nav id="sidebar">' +
        '    <div class="sidebar-header">' +
        '         <h3>OneStop Vancouver</h3>' +
        '    </div>' +
        '    <ul class="list-unstyled components mainMenu toplevel">' +
        '    <li>' +
        '        <a href="index.html" class="toplevel">Home</a>' +
        '    </li>' +
        '    <li>' +
        '        <a href="#shoppingSubmenu" data-toggle="collapse"' +
        '           aria-expanded="false" class="dropdown-toggle toplevel">Shopping</a>' +
        '        <ul id="shoppingSubmenu" class="collapse list-unstyled">' +
        '            <li class="secondlevel">' +
        '                <a href="#categoriesSubmenu" data-toggle="collapse"' +
        '                aria-expanded="true" class="dropdown-toggle">Categories</a>' +
        '                <ul id="categoriesSubmenu" class="collapse list-unstyled toplevel">' +
        '                    <li><a href="#" onclick="goToCategory(\'tops\');" class="toplevel">Tops</a></li>' +
        '                    <li><a href="#" onclick="goToCategory(\'bottoms\');" class="toplevel">Bottoms</a></li>' +
        '                    <li><a href="#" onclick="goToCategory(\'outer-wear\');" class="toplevel">Outer Wear</a></li>' +
        '                    <li><a href="#" onclick="goToCategory(\'headwear\');" class="toplevel">Headwear</a></li>' +
        '                    <li><a href="#" onclick="goToCategory(\'footwear\');" class="toplevel">Footwear</a></li>' +
        '                    <li><a href="#" onclick="goToCategory(\'accessories\');" class="toplevel">Accessories</a></li>' +
        '                </ul>' +
        '            </li>   ' +
        '            <li class="secondlevel">' +
        '                <a href="WIP.html">Listings by Price</a>' +
        '            </li>' +
        '        </ul>' +
        '    </li>' +
        '    <li>' +
        '        <a href="map.html" class="toplevel">Locations</a>' +
        '    </li>' +
        '    <li>' +
        '        <a href="login.html" id = "login" title="fajardo" class="toplevel">' +
        '            Log In / Sign Up' +
        '        </a>' +
        '    </li>' +
        '    <li>' +
        '        <a href="shoppingcart.html" id = "cart" class="toplevel">' +
        '            Shopping Cart' +
        '        </a>' +
        '    </li>' +
        '    </ul>' +
        '</nav>';
    let sidebarLink = document.getElementById('sidebar');
    sidebarLink.outerHTML = sidebarHtml;
}

function goToCategory(category) { // Goes to the product listing page, signalling intent to query a certain category
    sessionStorage.setItem("category", category);
    window.location.href = "productListing.html";
}

function collapsing() { // Check the display attribute of the object with the id "sidebar", if it's currently none, change it to display block else, keep the sidebar hidden(also not taking up space on the webpage)
    let sidemenu = document.getElementById('sidebar');
    if (sidemenu.style.display === 'none') {
        sidemenu.style.display = 'block';
    } else {
        sidemenu.style.display = 'none';
    }
}

importSidebar();
