///////why somethimes the code wasnt working but after the restarting it worked perfectly,coz there are 2 links,adresses local and On your network,https//localhost:3000 isnt throwing an error.,the other adress is throwing an error
import './App.css';//import About from './components/About';
import React from 'react';
import Navbar from './components/Navbar';//idk what this is but it works if u just ctrl + c in terminal and npm start again(make sure to do cd {folder name} before npm)
import TextForm from './components/TextForm'; 
import { useState } from 'react';
import Alert from './components/Alert';

//in pakage.json change  "start": "react-scripts --openssl-legacy start" to "start": "react-scripts --openssl-legacy-provider start" .......u have to do this or it wll throw an error when you install react router dom 
//this is the main file that you can edit to make changes there's also index.html in public but almost all of the work you will have to do will be here
//we have imported Navbar.js file from components folder(make sure to put components folder inside src folder)
//we can write navbar code in function App() too but we made another js file and imported it here jsut to make it clean and easier to manage

function App() {
  const [mode,setmode] = useState('light') 
  const [alert,setalert] = useState(null)

 

  const togglemode = () => {
    if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = '#33363d';
    }
    else { 
      setmode('light'); 
      document.body.style.backgroundColor = '#FFF'; // make sure to always type the colour code instead of just 'dark' or 'light'
    }
  }

  const showAlert = (msg,type) => {
    setalert({
      message:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    },1000);
  }
  return (
    <>
    
     <Navbar title = "MyAPP"  item1 ="Home" item2 ="About" mode={mode} togglemode={togglemode} /> 
     <Alert alert={alert}/>
     <TextForm heading = "Enter your text below" mode={mode} showAlert = {showAlert} />

    </>
  );
}
//also here we are passing title name as MyApp,to do that refer to "props" in Navbar.js file

//div.conatainer will create a new container,for ex if we add "Textform" in container it will be centered in that container

export default App;

//npm start to start the app
//ctrl c in terminal to stop the app
//npx create-react-app to create an app