import React from 'react';
import './assets/css/styles.css'
import Add from './Add';
import List from './List';
import list from './assets/json/data.json'

export default function(){
    return (
        <div className="Guestbook">
            <h1>방명록</h1>
            <Add />
            <List list={list} />
        </div>
    )
};