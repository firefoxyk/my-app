const ADD_POST = 'ADD-POST';

export let store = {
    _state: {
        contentPage:{
            posts: [
                { id: 1, message: "bygagagagaga", likesCount: 3 },
                { id: 2, message: "Hi! How are toy?", likesCount: 15 },
                { id: 3, message: "My first post!", likesCount: 20 },]
        },
        messagesPage:{
            dialogs: [
                {id:1, name:"Masha"},
                {id:2, name:"Sasha"},
                {id:3, name:"Mara"},
                {id:4, name:"Natasha"},],
              message: [
                {id:1, message: "Hi!"},
                {id:2, message: "Hi!Hi!"},
                {id:3, message: "Hi!Hi!Hi!"},
                {id:4, message: "Hi!Hi!Hi!"}]
        }
    },
    _callSubscriber (){
        console.log('state was change');
    },  
    _addPost (postMessage) {
        let newPost = {
            id:5,
            message: postMessage,
            likesCount: 0
        };
        this._state.contentPage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    getState () {
        return this._state;
    },
    subsсribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type === ADD_POST){
            this._addPost(action.postMessage);
        }
    }
}
export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})

window.store = store;