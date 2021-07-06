import React, { useEffect, useState } from 'react';
import Search from './Search';
import User from './User';
import Usernav from './Usernav';
import axios from 'axios';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";


const override = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-color: blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Home(props) {

    const [pictures, setPictures] = useState([])
    const [loading, setloading] = useState(true);

    const url = 'https://api.unsplash.com/photos/random/?client_id=JY-4SM6RaS2gIUKelq3y0azFNJX2GA3mJ3DpH1n7qu0&orientation=portrait&count=28&query=man';

    function getPictures () {
        return fetch(url)
        .then(data => data.json())
    }

    useEffect(() => {
        getPictures()
        .then(data => {
            setPictures(data)
            setloading(false)
            console.log(pictures);
        })
    },[]);

    const images = pictures.map((picture, index) => (
        <User 
            img={picture.urls.small} />
    ))
    return (
        <div>
            <div>
                <Search/>
                {/* <Usernav/> */}
            </div>            
                {loading || !pictures ? 
                <BeatLoader color={"#123abc"} loading={loading} css={override} size={50} speedMultiplier={1} margin={2} /> : 
                <div className="user-comp mb-10 flex flex-wrap justify-left">
                    {images}
                </div>
                 }           
            
        </div>
    );
}

export default Home;