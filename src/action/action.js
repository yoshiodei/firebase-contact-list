import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG } from './actionType';



//------- Adds a document to the database -------


export const addBlog = (newBlog) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const db = getFirestore();

        db.collection("blogs").add({
            ...newBlog,
        })
        .then(() => {
            // dispatch( { type: ADD_BLOG, payload: newBlog } );
            console.log("Document successfully added");
        })
        .catch((error) => {
            // dispatch( { type: "CREATE_PROJECT_ERROR", payload: error } );
            console.error("Error adding document");
        });
    }
}

// Delete a blog from the database

export const deleteBlog = (id) => {
    
    return (dispatch, state, {getFirestore})=> {
        let db = getFirestore();
        db.collection("blogs").doc(id).delete()
        .then(() => {
            // dispatch({ type: 'DELETE_BLOG' , payload: id });
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}



// ------- Get snapshot of database -------

export const getAllBlogs =()=>{
    return ( dispatch, state, {getFirestore})=>{
    let db = getFirestore();    
    db.collection('blogs').onSnapshot((snapshot)=>{
    let blogs =[];
    snapshot.forEach((doc)=>{
        blogs.push({...doc.data(),id:doc.id})
        })
      
        dispatch({
            type: 'SET_ALL_BLOGS',
            payload: blogs
        })
    })
    };
    };

    // ------- Get snapshot of database -------

    // export const editBlog = (blogId) => {
    //     return {
    //         type: EDIT_BLOG,
    //         payload: blogId
    //     }
    // }

    // ------ edit already added items ------

    export const editBlog = (editedBlog) => {
        return (dispatch, getState, {getFirestore})=>{
            let db = getFirestore();
            db.collection('blogs').doc(editedBlog.id).update(editedBlog)
            .then(()=>{
                console.log("Document Successfully updated");
            })
            .catch((error)=>{
                console.error("Error removing document.", error);
            })
        }
    }

    // ------- register new user ---------

    export const registerUser = (email, password, replace) => {
        return (dispatch, getState, {getFirebase}) => {
            let firebase =  getFirebase();
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                replace("/home");
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    

    export const login = (email, password, replace) => {
        return (dispatch, getState, {getFirebase}) => {
            const firebase = getFirebase();
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
               console.log(userCredential);
               replace("/home");
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
            }
        }


        export const logout = (replace) => {
            return (dispatch, getState, {getFirebase}) => {
                const firebase = getFirebase();
                firebase.auth().signOut().then(() => {
                    replace("/login");
                    console.log("logged out successfully");
                  }).catch((error) => {
                    console.log(error.code,error.message);
                  });
        }}

        