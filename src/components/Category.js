import React from 'react';

function Category(props) {
    return (
        <div id="menu">

            <ul className="topnav">
                <li><a href="#" className="active">World</a></li>
                <li><a href="#" className="active">Following</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Gender</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Profession</a></li>
            </ul>
        </div>
    );
}

export default Category;