function constructScriptCDN(src, integrity, crossOrigin) {
    let script = document.createElement("script");
    script.src = src;
    script.integrity = integrity;
    script.crossOrigin = crossOrigin;
    return script;
}

function constructStylesheetCDN(href, integrity, crossOrigin) {
    let stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = href;
    stylesheet.integrity = integrity;
    stylesheet.crossOrigin = crossOrigin;
    return stylesheet;
}

function constructBootstrapJSCDN() {
    let src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    let integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
    let crossOrigin = "anonymous";
    return constructScriptCDN(src, integrity, crossOrigin);
}

function constructJQueryCDN() {
    let src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    let integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
    let crossOrigin = "anonymous";
    return constructScriptCDN(src, integrity, crossOrigin);
}

function constructPopperJSCDN() {
    let src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    let integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
    let crossOrigin = "anonymous";
    return constructScriptCDN(src, integrity, crossOrigin);
}

function constructBootstrapCSSCDN() {
    let href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    let integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
    let crossOrigin = "anonymous";
    return constructStylesheetCDN(href, integrity, crossOrigin);
}

class BurgerMenuSidebar extends HTMLDivElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: "open"});

        this.id = "sidebar";

        const bootstrapCSS = constructBootstrapCSSCDN();
        shadow.appendChild(bootstrapCSS);

        // language=HTML
        this.innerHTML =
            '<div class="sidebar-header">' +
            '   <h3>OneStop Vancouver</h3>' +
            '</div>' +
            '';

        this.classList.add("wrapper")
    }
}

customElements.define('menu-sidebar', BurgerMenuSidebar, {extends: "div"});