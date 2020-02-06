const { app, BrowserWindow } = require('electron') //electron es un paquete, require es una funcion para llamar al paquete//

function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({ //instanciar con BROWSERWINDOW esto se guarda en win(window) BROWSERWINDOW es una clase//
    width: 2600,
    height: 2600,
    minHeight: 2600,
    minWidth: 2600,
    center: true,                                             
      webPreferences: { //es un evento contiene un objeto//
      nodeIntegration: true
    }
  })

  // y carga el  index.html de la aplicación.
  win.loadFile('index.html')
}

app.on('ready', createWindow) //app ready es un evento manda a llamar a la funcion createwindow//
