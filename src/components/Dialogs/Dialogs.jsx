import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';



const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.message.map(mess => <MessageItem text={mess.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewNessageChange = (event) =>{
      let body = event.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return <div className={classes.content}>
        Dialogs
        <div>
            <div className={classes.dialogs} >
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <div>
                        <textarea value = {newMessageBody} 
                            onChange={onNewNessageChange} 
                            placeholder='Enter your message'>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Dialogs;
