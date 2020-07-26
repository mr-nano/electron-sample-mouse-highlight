// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const mouseCircle = document.createElement("div");
mouseCircle.style.background = "rgba(255,255,0,0.2)";
mouseCircle.style.borderRadius = "50%";
mouseCircle.style.width = "200px";
mouseCircle.style.height = "200px";
mouseCircle.style.position = "absolute"


document.body.appendChild(mouseCircle);

document.addEventListener("mousemove",(event) => {
    mouseCircle.style.top = (event.clientY - 100) + "px";
    mouseCircle.style.left = (event.clientX - 100) + "px";
//8    console.log(event)
})

// mouseCircle.addEventListener('click', () => {
    // remote.BrowserWindow.getFocusedWindow().minimize();
// })
