import React from 'react';
import classes from './Content.module.css';
import MyPost from './MyPosts/MyPost'
import ContextInfo from './ContextInfo/ContextInfo'

const Content = (props) => {
  return <div className={classes.content}>
    <ContextInfo />
    <MyPost posts={props.state.posts} dispatch={props.dispatch}/>
  </div>
}

export default Content;