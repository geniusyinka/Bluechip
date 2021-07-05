import React from 'react';

function Category(props) {
    return (
        <div id="menu">

            <ul className="topnav">
                <select className="">
                    <option>World</option>
                </select>
                <select className="">
                    <option>Following</option>
                </select>                
                <select className="">
                    <option>Popular</option>
                </select> 
                <select className="">
                    <option>Post</option>
                </select>                 
                <select className="">
                    <option>Gender</option>
                </select>                 
                <select className="">
                    <option>Location</option>
                </select> 
                <select className="">
                    <option>Profession</option>
                </select> 
            </ul>
        </div>
    );
}

export default Category;