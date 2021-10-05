import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { connect } from 'react-redux';
import { getAllBlogs } from './../action/action';

const BlogList = ({ blogs, getAllBlogs }) => {

    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <section className="blogs">
          {blogs && (blogs.map( (blog) => 
            {
                return (
                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                        <BlogCard blog={blog} />
                    </Link>
                )
            }
            )) }   
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs : state.blogs
    }
}

const mapDispatchToProps = { getAllBlogs }

export default connect(mapStateToProps,mapDispatchToProps)(BlogList);
