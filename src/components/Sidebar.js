import React from 'react';
import Links from './Links';
import { faChartBar, faComment, faHighlighter, faHome } from '@fortawesome/free-solid-svg-icons'


function Sidebar(props) {
    return (
        <div>
            <div className="sidebar mt-10 flex">

                <ul className="m-auto">
                <p className="text-left">Side Bar</p>
                    <li>

                    <Links icon={faHome} link="google.com" linkName="Home"/>
                    </li>
                    <li>
                        <Links icon={faComment} link="google.com" linkName="Message"/>
                    </li>
                    <h2 className="mt-3 text-left">Share</h2>
                    <li>
                        <Links icon={faChartBar} link="google.com" linkName="Ranking"/>
                    </li>
                    <li>
                        <Links icon={faChartBar} link="google.com" linkName="Challange"/>
                    </li>
                    <li>
                        <Links icon={faChartBar} link="google.com" linkName="Party"/>
                    </li>
                    <li>
                        <Links icon={faChartBar} link="google.com" linkName="Connect"/>
                    </li>
                    <li>
                        <Links icon={faChartBar} link="google.com" linkName="Parade"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;