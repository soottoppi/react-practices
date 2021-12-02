import React from 'react';
import styles from './assets/scss/RegisterForm.scss'

export default function() {
    return (
        <form class={styles.RegisterForm}>
            <input type='text' placeholder="성" class={styles.InputFirstName} />
            <input type='text' placeholder="이름" class={styles.InputLastName} />
            <input type='text' placeholder="이메일" class={styles.InputEmail} />
            <input type='submit' value='등록' />
        </form>
    )
}