import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';

function User(props) {
    return (
        <div>
            <div className="user mb-10 mr-5 flex flex-col">
                <div className="user-img">
                    <img className="user-image" src={props.img} alt="" />
                </div>
                <div className="user-info">
                    <p>Martin, 24</p>
                    <div className="user location">
                    <PlaceIcon fontSize="small" />Lekki, Lagos
                    

                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;