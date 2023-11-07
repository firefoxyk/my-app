import messagesReducer from "./messagesPage-reducer.js";
import contentReducer from "./contentPage-reducer.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export let store = {
    _state: {
        contentPage: {
            posts: [
                { id: 1, message: "bygagagagaga", likesCount: 3 },
                { id: 2, message: "Hi! How are toy?", likesCount: 15 },
                { id: 3, message: "My first post!", likesCount: 20 },]
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: "Masha" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Mara" },
                { id: 4, name: "Natasha" },],
            message: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "Hi!Hi!" },
                { id: 3, message: "Hi!Hi!Hi!" },
                { id: 4, message: "Hi!Hi!Hi!" }],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('state was change');
    },
    getState() {
        return this._state;
    },
    subsсribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.contentPage = contentReducer(this._state.contentPage,action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage,action);
        this._callSubscriber(this._state);//для отриcовки при изменении state
    }
}
export const addPostActionCreator = (text) => ({ type: ADD_POST, postMessage: text })
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body:body}) //берем первое body из this._state.messagesPage.newMessagesBody = action.body; а второе - просто название переменной, такая же как тут = (body) => 
export const sendMessageCreator = () => ({type:SEND_MESSAGE})


window.store = store;