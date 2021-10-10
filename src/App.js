import Nav from "./component/Nav";
import Nav2 from "./component/Nav2";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Blog from "./component/Blog";
import BlogList from "./component/BlogList";
import NewBlogForm from "./component/NewBlogForm";
import EditBlogForm from "./component/EditBlogForm";
import PageNotFound from "./component/PageNotFound";
import RegisterUser from "./component/RegisterUser";
import Login from "./component/Login";

function App() {
  return (
    <Router>
       <Switch>
         <Route path="/" exact>
            <Nav2 />
            <RegisterUser />
         </Route> 
         <Route path="/login" exact>
            <Nav2 />
            <Login />
         </Route>   
         <Route path="/home" exact>
            <Nav />
            <BlogList />
         </Route>
         <Route path="/blog/:id" exact>
            <Nav />
            <Blog />
         </Route>
         <Route path="/create" exact>
            <Nav />
            <NewBlogForm />
         </Route>
         <Route path="/edit/:id" exact>
            <Nav />
            <EditBlogForm />
         </Route>
         <Route path="*" exact>
            <PageNotFound />
         </Route>
       </Switch>
    </Router>
    
  );
}

export default App;
