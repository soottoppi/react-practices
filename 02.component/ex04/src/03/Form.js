import React from 'react';
import './assets/Form.css';

export default function Form() {
    const onSubmit = (e)=> {
        e.preventDefault();

        // validation이 딱히 필요 없을 때...
        console.log(e.target.email.value, ':', e.target.password.value);

    }

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={ onSubmit}>
            
            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}