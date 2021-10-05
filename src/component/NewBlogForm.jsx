import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBlog } from './../action/action';
import { withRouter } from 'react-router';


class NewBlogForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title : "",
            body : "",
            author : ""
        }
    }

    

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newBlog = {...this.state}
        this.props.addBlog(newBlog);
        this.setState({
            title : "",
            body : "",
            author : ""
        });
        this.props.history.push("/");
    }


    render() {
        return (
            <section className="blogs">
                <h2>Create Post</h2>
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
                    <button className="submit-btn" type="submit">Add Blog</button>
                </form>
            </section>    
        );
    }
}

const mapDispatchToProps ={ addBlog }

export default connect(null,mapDispatchToProps)(withRouter(NewBlogForm));
