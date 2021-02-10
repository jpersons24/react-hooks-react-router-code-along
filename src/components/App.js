import { Route, Switch } from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Login from "./Login.js"
import SignUp from "./SignUp.js"
import Messages from "./Messages.js"
import NavBar from "./NavBar.js"

function App() {
   return (
      <div>
         <NavBar />
         <Switch>
            {/* Route component responsible for saying -> when URL matches this path, render child component */}
            <Route path="/about">
               <About />
            </Route>
            <Route path="/login">
               <Login />
            </Route>
            <Route path="/signup">
               <SignUp />
            </Route>
            <Route path="/messages">
               <Messages />
            </Route>
            <Route exact path="/">
               <Home />
            </Route>
         </Switch>
      </div>
   )
}

export default App

