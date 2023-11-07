const ADD_POST = 'ADD-POST';

const contentReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
        default:
            return state;

    }
}

export default contentReducer;