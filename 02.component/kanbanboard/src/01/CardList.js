import React from 'react';
import Card from './Card';

export default function({title, cards}){
    return (
        <div class='CardList'>
            <h1>{title}</h1>
            {cards.map((card) => <Card 
                                    key={card.no}
                                    title={card.title}
                                    description={card.description}
                                    tasks={card.tasks}/>)}
        </div>
    )
};