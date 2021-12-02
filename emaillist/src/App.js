import React, {useState} from 'react';
import './assets/scss/App.scss'
import EmailList from './EmailList';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import data from './assets/json/data.json'

export default function() {
    const [keyword, setKeyword] = useState('');
    const notifyKeywordChanged = (keyword) => {
      console.log(keyword);
      setKeyword(keyword);
    }
    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar callback={notifyKeywordChanged}/>
          <EmailList keyword={keyword} emails={data}/>
        </div>
    )
}