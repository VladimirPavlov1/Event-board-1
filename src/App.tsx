import React from 'react';
import { PageTitle } from './component/PageTitle/PageTitle';
import './App.css';
import { EventBoard } from './component/EventBoard/EventBoard';



export const App = ()=> {

  return (
    <div>
     <PageTitle title="Hello TYpeScript"/>
     <EventBoard events = {events}/>
    </div>
  );
}


