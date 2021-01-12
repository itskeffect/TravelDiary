import React from 'react';
import LatestArticles from '../AppComponents/LatestArticles';
import TopPost from '../AppComponents/TopPost';
import ParisList from '../Articles/ParisArticles.json';
import './Page.css';
class ParisPage extends React.Component{
    render(){
        return(
            <div>
                <div className="TopPostPos">
                <TopPost />
                </div>
                <LatestArticles heading="Paris" catName="paris" noOfArticles={ParisList.length}/>
            </div>
        );
    }
}

export default ParisPage;