import React from 'react';
import classes from './ContextInfo.module.css';

const ContextInfo = () => {
    return <div>
        <div>
            <img src='https://img.freepik.com/premium-photo/a-painting-of-mountains-with-the-sun-shining-on-them_1340-25451.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais' />
        </div>
        <div classNane={classes.descriptionBlock}>
            <img src='https://avatars.mds.yandex.net/i?id=e3bc56142c9ed7f6c3bb4562dc7f3df7dc2ac658-9214194-images-thumbs&n=13' />
            + описание
        </div>
    </div>
}

export default ContextInfo;