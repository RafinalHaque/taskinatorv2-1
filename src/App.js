
import Navbar from "./Components/Navbar"
import "./styles.css"
import Home from "./Pages/Home"
import About from "./Pages/About"
import CompanyList from "./Pages/CompanyList"
import SignIn from "./Pages/SignIn"
import Tasks from "./Pages/Tasks"


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
    case "/signIn":
        component = <SignIn />
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
