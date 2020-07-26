# Current Understanding
- There is a main.js having access to nodejs stuff
	- this configures what index.html file to load
- There is render.js which has access to dom

___________
# Quick start
[Link](https://github.com/electron/electron-quick-start)

- ![[UI - Yarn#Funny Emojis]] 

- ![[getting started with electron.png]]

- Web developer tools are accessible like they are in the browser.

- BrowserWindow
- FramelessWindow
- Fullscreen 
	- not what I want
- screen

# Weird things
- The inline css either in the head tag or in the body itself, did not work.. but external css worked like a charm... :) 

# Modules from Electron
- app
	- whenReady()
- BrowserWindow
- globalShortcut
```javascript
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const globalShortcut = electron.globalShortcut;
```

# Using app (in main.js)
```javascript
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
})
```


```javascript
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
})
```

# Getting width and height (of primary display)
```javascript
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

```

# Creating main window

```javascript
const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
    transparent: true,
    alwaysOnTop: true,
  })
    mainWindow.loadFile('index.html');

```

# Registering a shortcut
```javascript
 let isVisible = true;

  globalShortcut.register('CommandOrControl+X',() => {
    if(isVisible) {
      mainWindow.minimize();
    } else {
      mainWindow.restore();
    }

    isVisible = !isVisible
  });
```