// To use:
// 1. Add an element with the id 'sidebar' where one wants the sidebar to be.
// 2. Include this script.

function importSidebar() {
    let sidebarHtml = '<nav id="sidebar">\n' +
        '            <div class="sidebar-header">\n' +
        '                <h3>OneStop Vancouver</h3>\n' +
        '            </div>\n' +
        '            <ul class="list-unstyled components">\n' +
        '                <li>\n' +
        '                    <a href="index.html" class="toplevel">Home</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                    <a href="#shoppingSubmenu" data-toggle="collapse"\n' +
        '                       aria-expanded="false" class="dropdown-toggle toplevel">Shopping</a>\n' +
        '                    <ul id="shoppingSubmenu" class="collapse list-unstyled">\n' +
        '                        <li class="secondlevel">\n' +
        '                            <a href="#categoriesSubmenu" data-toggle="collapse"\n' +
        '                            aria-expanded="true" class="dropdown-toggle">Categories</a>\n' +
        '                            <ul id="categoriesSubmenu" class="collapse list-unstyled">\n' +
        '                                <li><a href="#" onclick="goToCategory(\'tops\');" class="toplevel">Tops</a></li>\n' +
        '                                <li><a href="#" onclick="goToCategory(\'bottoms\');" class="toplevel">Bottoms</a></li>\n' +
        '                                <li><a href="#" onclick="goToCategory(\'outerwear\');" class="toplevel">Outer Wear</a></li>\n' +
        '                                <li><a href="#" onclick="goToCategory(\'headwear\');" class="toplevel">Headwear</a></li>\n' +
        '                                <li><a href="#" onclick="goToCategory(\'footwear\');" class="toplevel">Footwear</a></li>\n' +
        '                                <li><a href="#" onclick="goToCategory(\'accessories\');" class="toplevel">Accessories</a></li>\n' +
        '                            </ul>\n' +
        '                        </li>   \n' +
        '                        <li class="secondlevel">\n' +
        '                            <a href=\'#\'>Listings by Price</a>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                    <a href="#" class="toplevel">Locations</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                    <a href="login.html" title="fajardo" class="toplevel">\n' +
        '                        Log In / Sign Up\n' +
        '                    </a>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </nav>';
    let sidebarLink = document.getElementById('sidebar');
    sidebarLink.outerHTML = sidebarHtml;
}
importSidebar();
