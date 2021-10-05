import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG } from './../action/actionType';


let initialState = {
    blogs : []
}


const blogReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BLOG:
            return { ...state , blogs:[...state.blogs, action.payload] }   

        case DELETE_BLOG:
            let updatedBlogList = state.blogs.filter(blog => blog.id != action.payload);
            return { ...state , blogs:[ ...updatedBlogList ] }

        case EDIT_BLOG:
            let editedBlog = state.blogs.map(blog => blog.id !== action.payload.id ? blog : action.payload);
            return { ...state , blogs:[ ...editedBlog ] }

        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error', action.payload);
            return state;

        case 'SET_ALL_BLOGS':
            console.log("set all blogs");
            return {...state, blogs: action.payload}; 

        default:
            return state;    
    }
}

export default blogReducer;