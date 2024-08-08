import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import Textform from './component/Textform.js';
import Abouts from './component/Abouts.js';
import { useEffect, useState } from 'react';
import Alert from './component/Alert.js';




function App() {
  const [darkmode, setDarkmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [title, setTitle] = useState('TextUtils - Light Mode');

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-primary","bg-light", "bg-dark", "bg-warning", "bg-danger", "bg-success");
  // }

    // const togglemode = (cls) => {
    //   console.log(cls);
    //   removeBodyClasses();
    //   if (cls) {
    //     document.body.classList.add('bg-' + cls);
    //     showAlert(cls.charAt(0).toUpperCase() + cls.slice(1) + ' mode', 'success');
    //     if (cls === 'light') {
    //       document.body.style.color = 'black';
    //       setTitle("TextUtils - Light Mode");
    //     } else {
    //       document.body.style.color = 'white';
    //       setTitle(`TextUtils - ${cls.charAt(0).toUpperCase() + cls.slice(1)} Mode`);
    //     }
    //     setDarkmode(cls); 
    //   } else {
    //     if (darkmode === "light") {
    //       // Switch to dark mode
    //       setDarkmode("dark");
    //       document.body.style.backgroundColor = "black";
    //       document.body.style.color = "white";
    //       document.title = "TextUtils - Dark Mode";
    //       showAlert("Dark mode", "success");
    //     } else {
    //       // Switch to light mode
    //       setDarkmode("light");
    //       document.body.style.backgroundColor = "white";
    //       document.body.style.color = "black";
    //       document.title = "TextUtils - Light Mode";
    //       showAlert("Light mode", "success");
    //     }
    //   }
    // }
    const togglemode = () => {
      if(darkmode === "light") {
        setDarkmode("dark")
        document.body.style.backgroundColor = "#312e2e"
        document.title = "TextUtils - DarkMode"
        showAlert("Dark", "success")
      } else {
        setDarkmode("light")
        document.body.style.backgroundColor = "white"
        document.title = "TextUtils - Light mode"
        showAlert("Light", "success")
      }
    }

    useEffect(() => {
      document.title = title;
    }, [title]);
  

 
  return (
    <>

      <>
        <Navbar title = "TextUtils" mode = {darkmode} togglemode = {togglemode}/>
        <Alert alert={alert}/>
        <Textform heading="Enter the text" mode = {darkmode} showAlert={showAlert} />
        <Routes>
          {/* <Route path="/Abouts" element={<Abouts mode = {darkmode}/>} /> */}
        </Routes>
      </>
    </>
  );
}

export default App;
