// follow me on github
// https://github.com/arbiprog
// the website designed by :@abdulldsgnr
function msg() {
    document.getElementById("show").style.top = "0px";
}
function msg2() {
    document.getElementById("show").style.top = "-610px";
}

function dwn() {
    const target = document.querySelector("#btn");
    target.scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#xpola").onclick = () => {
    window.location.href =
        "https://www.mediafire.com/file/o2hs1oc5xyjuops/xPola_Player_v4.0.apk/file?dkey=6q34e3pmnpd&r=1459";
};
document.querySelector("#match").onclick = () => {
    window.location.href =
        "https://apk.e-droid.net/apk/app3461147-q7mr4p.apk?v=5";
};


/**
 * Get videos on load
 */
(function () {
    getVideos();
})();

/**
 * For each video player, create custom thumbnail or
 * use Youtube max resolution default thumbnail and create
 * iframe video.
 */
function getVideos() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        var id = v[n].getAttribute("data-id");

        var placeholder = v[n].hasAttribute("data-thumbnail")
            ? v[n].getAttribute("data-thumbnail")
            : "";

        if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
        else p.innerHTML = createThumbail(id);

        v[n].appendChild(p);
        p.addEventListener("click", function () {
            var parent = this.parentNode;
            createIframe(parent, parent.getAttribute("data-id"));
        });
    }
}

/**
 * Create custom thumbnail from data-attribute provided url
 * @param {string} url
 * @return {string} The HTML containing the <img> tag
 */
function createCustomThumbail(url) {
    return (
        '<img class="youtube-thumbnail" src="' +
        url +
        '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
    );
}

/**
 * Get Youtube default max resolution thumbnail
 * @param {string} id The Youtube video id
 * @return {string} The HTML containing the <img> tag
 */
function createThumbail(id) {
    return (
        '<img class="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
        id +
        '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></div>'
    );
}

/**
 * Create and load iframe in Youtube container
 **/
function createIframe(v, id) {
    var iframe = document.createElement("iframe");
    console.log(v);
    iframe.setAttribute(
        "src",
        "//www.youtube.com/embed/" +
            id +
            "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "youtube-iframe");
    v.firstChild.replaceWith(iframe);
}

/** Pause video on modal close **/
$("#video-modal").on("hidden.bs.modal", function (e) {
    $(this).find("iframe").remove();
});

/** Pause video on modal close **/
$("#video-modal").on("show.bs.modal", function (e) {
    getVideos();
});
