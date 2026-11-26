const {app,BrowserWindow,Menu}=require('electron');
Menu.setApplicationMenu(null);
app.whenReady().then(()=>{const w=new BrowserWindow({width:1280,height:800,minWidth:900,minHeight:600,title:'Gym Pro',backgroundColor:'#0f1115'});w.loadFile('gym.html');w.maximize()});
app.on('window-all-closed',()=>app.quit());
