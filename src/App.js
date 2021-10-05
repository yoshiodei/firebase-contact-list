import Nav from "./component/Nav";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Blog from "./component/Blog";
import BlogList from "./component/BlogList";
import NewBlogForm from "./component/NewBlogForm";
import EditBlogForm from "./component/EditBlogForm";

function App() {
  return (
    <Router>
       <Nav />
       <Switch>
       <Route path="/" exact>
            <BlogList />
         </Route>
         <Route path="/blog/:id" exact>
            <Blog />
         </Route>
         <Route path="/create" exact>
            <NewBlogForm />
         </Route>
         <Route path="/edit/:id" exact>
            <EditBlogForm />
         </Route>
         <Route path="*" exact>
            <EditBlogForm />
         </Route>
       </Switch>
    </Router>
    
  );
}

export default App;
