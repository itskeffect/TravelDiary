import React from 'react';
import './Heading.css';
import {Link} from 'react-router-dom';

class Heading extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="TitleOfBlog">
                   <span>The</span> K-STYLE
                </div>
                <div className="navList">
                   <Link to="/">Home</Link>
                   <Link to="/asia">Asia</Link>
                   <Link to="/paris">Paris</Link>
                   <Link to="/america">America</Link>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Heading;
//Yahan routing lagao