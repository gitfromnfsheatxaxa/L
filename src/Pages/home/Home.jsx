import React from 'react';
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <HomeCom/>
            <br/>
            <AboutCom/>
            <br />
            <br/>
        </div>
    );
};

export default Home;