import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

// addtional... 꼭 필요하지않음
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

export default function(){
    library.add(faBell, far, fab);
    return (
        <div >
            {/* examples */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />
             
            {/* solid */}
            <FontAwesomeIcon icon={["fas", "bell"]} />
            <FontAwesomeIcon icon={"bell"} />
            {/* regular */}
            <FontAwesomeIcon icon={["far", "bell"]} />

            {/* brands */}
            <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={["fab", "apple"]} />
            <FontAwesomeIcon icon={["fab", "google"]} />


        </div>
    )
};