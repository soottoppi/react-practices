import React, { useState } from 'react';


export default function TitelBar02() {
    
    const onClickHandler = () => {
        console.log('TitleBar01 clicked')
    }

    return (
        <h1 onClck = { onClickHandler} style={{cursor: 'pointer'}}>ex03- Functional Event Handler(Functional Component)</h1>
    )
}