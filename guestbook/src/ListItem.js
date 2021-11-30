import React from 'react';

export default function({title, contents}){
    return (
            <li className="Guestbook__List__Item">
                <strong>{title}</strong>
                <p>
                    {contents}
                </p>
                <strong></strong>
                <a href=''>삭제</a>
            </li>
    )
};