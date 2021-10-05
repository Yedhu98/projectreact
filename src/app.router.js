import {Route,BrowserRouter as Router,Switch} from "react-router-dom"

import Header from "./components/core/header"
 import { Provider } from "react-redux"
import { store } from "./redux/store/store"
import Book from "./components/book/viewbook"
import ViewDetails from "./components/details/viewdetails"
import Member from "./components/member/viewmember"
import Addbook from "./components/book/addbook"
import AddDetails from "./components/details/adddetails"
import AddMember from "./components/member/addmember"

import Library from "./components/core/home"
import Footer from "./components/core/footer"
 


const Approuter=(
  <Provider store={store}>
   <Router>
   <Header> </Header>
   <Switch>
   <Route path="/library" component={Library}/>
     <Route path="/viewbook" component={Book}/>
     <Route path="/addbook" component={Addbook}/>
     <Route path="/viewdetails" component={ViewDetails}/>
     <Route path="/adddetails" component={AddDetails}/>
     <Route path="/viewmember" component={Member}/>
     <Route path="/addmember" component={AddMember}/>
   </Switch>
   <Footer></Footer>
  
  
   </Router>
   </Provider>
)
export default Approuter