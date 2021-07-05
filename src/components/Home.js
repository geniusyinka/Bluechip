import React, { useEffect, useState } from 'react';
import Search from './Search';
import Category from './Category';
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

    const url = 'https://api.unsplash.com/photos/random/?client_id=JY-4SM6RaS2gIUKelq3y0azFNJX2GA3mJ3DpH1n7qu0&orientation=portrait&count=30';

    function getPictures () {
        return fetch(url)
        .then(data => data.json())
        //.then(json => console.log(json))
    }

    // useEffect(() => {
    //     getPictures()
    //     .then(data => {
    //         setPictures(data)
    //         setloading(true)
    //         console.log(pictures);
    //     })

        

    // },[]);

    const images = pictures.map((picture, index) => (
        <User 
            img={picture.urls.small} />
    ))
    return (
        <div>
            {/* <div className="home-search flex"> */}
            <div>
                <Search/>
                {/* <Usernav/> */}
            </div>

            
                {/* {loading || !pictures ? 
                <BeatLoader color={"#123abc"} loading={loading} css={override} size={50} speedMultiplier={1} margin={2} /> : 
                <div className="user-comp mt-10  mb-10 flex flex-wrap justify-left">
                    {images}
                    </div>
                 } */}
                 
                 <div className="user-comp mt-10  mb-10 flex flex-wrap justify-left">

                 <User 
                     img='https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDQzMTB8MHwxfHNlYXJjaHwxfHxtYW58ZW58MHx8fHwxNjI1NDg1ODc5&ixlib=rb-1.2.1&q=80&w=1080' />
                    </div>
                
            

        </div>
    );
}

export default Home;