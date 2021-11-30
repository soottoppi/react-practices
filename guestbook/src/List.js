import React from 'react';
import ListItem from './ListItem';

export default function({list}){
    return (
        <ul className="Guestbook__List">
            {list.map((listItem) => <ListItem 
                                        no={listItem.no}
                                        title={listItem.title}
                                        contents={listItem.contents}/>)}
        </ul>
    )
};