import React from 'react';
import classes from './Post.module.css';

const Posts = (props) => {
  return <div className={classes.item}>
        <img src='https://avatars.mds.yandex.net/i?id=e3bc56142c9ed7f6c3bb4562dc7f3df7dc2ac658-9214194-images-thumbs&n=13' />
        {props.message}
        <div>
        <span>like</span> {props.likesCount}
        </div>
      </div>

}

export default Posts;