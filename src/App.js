
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CompanyList from "./Pages/CompanyList";
import SignUp from "./components/SignUp";
import UserPool from "./UserPool";
import Tasks from "./Pages/Tasks";


function App() {
  let component
  switch (window.location.pathname){
   case "/":
    component = <Home />
    break

    case "/about":
        component = <About />
      break
      case "/tasks":
        component = <Tasks />
      break
    case "/companyList":
        component = <CompanyList />
      break
    case "/SignUp":
        component = <SignUp />
        break
  }
  return (
   
    <>
      <Navbar />
      {component}

      
      </>

      
  )
}

export default App;
