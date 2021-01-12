import React from 'react';
import './TopPost.css';
import {Link} from 'react-router-dom';
import TPCard from '../Components/TPCard';

class TopPost extends React.Component{
    render(){
        return(
            <div id="TopPostDiv">
                <p id="TopPostTitle">Top Post</p>
                <hr className="thr"/>
                <div>
                    <Link to="/asia/asia-5">
                        <TPCard no="5" srno="1" cat="asia"/>
                    </Link>
                    <hr />
                    <Link to="/asia/asia-4">
                        <TPCard no="4" srno="2" cat="asia"/>
                    </Link>
                    <hr />
                    <Link to="/paris/paris-5">
                        <TPCard no="5" srno="3" cat="paris"/>
                    </Link>
                    <hr />
                    <Link to="/paris/paris-6">
                        <TPCard no="6" srno="4" cat="paris"/>
                    </Link>
                    <hr />
                    <Link to="/america/america-5">
                        <TPCard no="5" srno="5" cat="america"/>
                    </Link>
                    <hr />
                </div>
            </div>
        );
    }
}
export default TopPost;