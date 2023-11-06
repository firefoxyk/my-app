import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <div className='app-wrapper-content'>
        <Routes>
        <Route path='/profile' element={<Content state={props.appState.contentPage} dispatch={props.dispatch}/>} />
				<Route path='/dialogs/*' element={<Dialogs state={props.appState.messagesPage}/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
