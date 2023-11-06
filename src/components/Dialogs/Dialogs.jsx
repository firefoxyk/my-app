import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.message.map(mess => <MessageItem text={mess.message} />);


    return <div className={classes.content}>
        Dialogs
        <div>
            <div className={classes.dialogs} >
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    </div>
}


export default Dialogs;
