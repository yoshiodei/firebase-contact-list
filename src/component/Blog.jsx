import BlogCard from "./BlogCard";
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteBlog } from './../action/action';

const Blog = ({blogs, deleteBlog}) => {
    
    let history = useHistory();
    let { id } = useParams();
    let [blog] = blogs.filter(blog=> id == blog.id);

    const handleDelete = (userId) => {
        deleteBlog(userId);
        history.push("/");
    }


    return (
        <section className="blogs">
           {blog &&
               (<div className="single-blog">
                  <h3>Title</h3>
                  <p>{blog.title}</p>
                  <h3>Body</h3>
                  <p>{blog.body}</p>
                  <h3>Author</h3>
                  <p>{blog.author}</p>
                  <div className="btn">
                    <Link to={`/edit/${id}`}><button className="edit" >Edit</button></Link>
                    <button className="delete" onClick={()=>handleDelete(id)}>Delete</button>
                  </div>
               </div>)
           } 
        </section>
    );
}

const mapStateToProps = (state) => {
    return { blogs:state.blogs }
}

const mapDispatchToProps = { deleteBlog }

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
