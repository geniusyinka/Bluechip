import React from 'react';
import NotificationContainer from './NotificationContainer';

function Usernav(props) {
    return (
        <div className=" user-icons mt-10 ml-10 mb-10 flex items-center">
            <span  className='notification-bell'data-count={2}></span>
            <svg width='42' height='40' viewBox='0 0 21 20' className="mr-5">
                <g transform='translate(2, 0)' className='bell'>
                    <path className='notification-bell__bow' d='M15,8.5 C15,5.43 12.86,2.86 10,2.18 L10,1.5 C10,0.671572875 9.32842712,0 8.5,0 C7.67157288,0 7,0.671572875 7,1.5 L7,2.18 C4.13,2.86 2,5.43 2,8.5 L2,14 L0,16 L0,17 L17,17 L17,16 L15,14 L15,8.5 Z' />
                    <path className='notification-bell__clapper' d='M2.5,2 C2.64,2 2.77,2 2.9,1.96 C3.55,1.82 4.09,1.38 4.34,0.78 C4.44,0.54 4.5,0.27 4.5,0 L0.5,0 C0.5,1.1045695 1.3954305,2 2.5,2 L2.5,2 Z'  />
                </g>
            </svg>
            
            <div className='status' data-count=""></div>
            <img className="user-profile-pic mr-5" src="https://images.unsplash.com/photo-1542331180-256bcd8edad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" alt="" />
            <select className=" user-profile-name">
                <option>Abigail</option>
            </select>
        </div>
    );
}

export default Usernav