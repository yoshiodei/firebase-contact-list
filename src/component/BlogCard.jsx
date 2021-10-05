import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className='card'>
            <h4>Title</h4>
            <p>{blog.title}</p>
            <h4>Author</h4>
            <p>{blog.author}</p>
        </div>
    );
}

export default BlogCard;
