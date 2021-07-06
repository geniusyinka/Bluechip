import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Links(props) {
    return (
        <div className="mt-5 flex">
            <div className="font-awesome mr-3">
                <FontAwesomeIcon icon={props.icon} /> 
                <img className="img-filter" src={props.icons} alt="" />
            </div>
          <a href={props.link}>{props.linkName}</a>

        </div>

    );
}

export default Links;