import React from 'react';
import './assets/scss/App.scss'
import EmailList from './EmailList';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';

export default function() {
    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar />
          <EmailList />
        </div>
    )
}