let cacheWidth = 0;

window.addEventListener("resize", (ev: UIEvent) => {
    cacheWidth = 0;
    console.log("resize");
})


export function getScrollbarWidth() {
    if (cacheWidth > 0)
        return cacheWidth;

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    outer.style.overflow = "scroll";

    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    cacheWidth = widthNoScroll - widthWithScroll;
    return cacheWidth;
}