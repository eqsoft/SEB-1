// just for rapid customizing

let qs = document.querySelector.bind(document)

let init =  _ => {
    console.log("init")
    return
    /*
    if (!navigator.userAgent.match(/SEB/)) return
    // ilTopBarNav
    let topBarNav = qs('#ilTopBarNav')
    if (topBarNav) {
        console.log("hide ilTopBarNav")
        topBarNav.style.display = "none"
    }
    // ilFooter
    let footer = qs('#ilFooter')
    if (footer) {
        console.log("hide ilFooter")
        footer.style.display = "none"
    }
    */ 
}

window.addEventListener('DOMContentLoaded', init);
