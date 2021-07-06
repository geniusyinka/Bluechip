import React from 'react';
import Links from './Links';
import { faChartBar, faComment, faHighlighter, faHome } from '@fortawesome/free-solid-svg-icons'
import party from './assets/party.svg'
import group from './assets/group.svg'
import parade from './assets/parade.svg'
import connect from './assets/connect.svg'
import challange from './assets/challange.svg'



function Sidebar({ open }) {
    return (
        <div>
            <div className="sidebar mt-10 flex">

                <ul className="m-auto">
                <p className="text-left">bluecube</p>
                    <li>

                    <Links icon={faHome} link="#" linkName="Home"/>
                    </li>
                    <li>
                        <Links icon={faComment} link="#" linkName="Message"/>
                    </li>
                    <h2 className="mt-3 text-left font-bold">SHARE</h2>
                    <li>
                        <Links icon={faChartBar} link="#" linkName="Ranking"/>
                    </li>
                    <li>
                        <Links icons={challange} link="#" linkName="Challange"/>
                    </li>
                    <li>
                    <Links icons={party}  link="#" linkName="Party"/>
                    </li>
                    <li>
                        <Links icons={connect} link="#" linkName="Connect"/>
                    </li>
                    <li>
                        <Links icons={parade} link="#" linkName="Parade"/>
                    </li>
                    <li>
                        <Links icons={group} link="#" linkName="Group"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;