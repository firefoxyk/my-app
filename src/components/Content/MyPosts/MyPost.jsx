import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post'
import {addPostActionCreator} from '../../../redux/state'

const MyPosts = (props) => {
let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  //let action = {type:'ADD-POST', postMessage:text};
  let action = addPostActionCreator(text);
  props.dispatch(action);
}

  return <div className={classes.postsBlock}>
    <div>
      <h3>My post</h3>
      <div>
        <div><textarea ref={newPostElement}></textarea></div>
        <div><button onClick={addPost}>Add post</button></div>
        <div><button>Remove post</button></div>
      </div>
    </div>
    <div className={classes.postBlock}>
      <div>
        New post
      </div>
      <div className={classes.posts}>
        {postElements}
      </div>
    </div>
  </div>

}

export default MyPosts;