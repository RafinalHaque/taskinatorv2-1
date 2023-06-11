
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CompanyList from "./Pages/CompanyList";
import SignUp from "./components/SignUp";
import UserPool from "./UserPool";
import Tasks from "./Pages/Tasks";
import Login from "./routes/Login";


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
    case "/Login":
        component = <Login />
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
