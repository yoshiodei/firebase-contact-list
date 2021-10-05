import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editBlog } from './../action/action';
import { withRouter } from 'react-router';


class EditBlogForm extends Component {
    constructor(props){
        super(props)

        let id = this.props.match.params.id;
        let [blog] = this.props.blogs.filter(blog=> id == blog.id);

        this.state = {
            title : blog.title,
            body : blog.body,
            author : blog.author,
            id: blog.id
        }
    }

    

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editBlog(this.state);
        this.props.history.push("/")
    }


    render() {
        return (
            <section className="blogs">
                <h2>Edit Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input 
                    name="title"
                    placeholder="Please enter blog title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                    <label>Body</label>
                    <textarea
                    name="body"
                    value={this.state.body}
                    onChange={this.handleChange}
                    ></textarea>
                    <label>Author</label>
                    <input 
                    name="author"
                    placeholder="Please enter blog author"
                    value={this.state.author}
                    onChange={this.handleChange}
                    />
                    <button className="submit-btn" type="submit">Edit Blog</button>
                </form>
            </section>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const mapDispatchToProps ={ editBlog }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditBlogForm));
