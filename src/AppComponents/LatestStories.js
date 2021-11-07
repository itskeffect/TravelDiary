import React from 'react';
import './LatestStories.css';
import {Link} from 'react-router-dom';
import TCard from '../Components/textCard';

class LatestStories extends React.Component{
    render(){
        return(
            <div>
               <h1>
                    Latest Stories
                </h1>
                <hr className="lhr"/>
                <br />
                <hr />
                <div className="story">
                <Link to="/paris/paris-6">
                    <TCard no="6" cat="Paris"/>
                </Link>
                <Link to="/paris/paris-5">
                    <TCard no="5" cat="Paris"/>
                </Link>
                <Link to="/asia/asia-4">
                    <TCard no="4" cat="Asia"/>
                </Link>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
            </div>
        );
    }
}
export default LatestStories;
