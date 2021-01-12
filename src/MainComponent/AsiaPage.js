import React from 'react';
import LatestArticles from '../AppComponents/LatestArticles';
import TopPost from '../AppComponents/TopPost';
import AsiaList from '../Articles/AsiaArticles.json';
import './Page.css';

class AsiaPage extends React.Component{
    render(){
        return(
            <div>
                <div className="TopPostPos">
                <TopPost />
                </div>
                <LatestArticles heading="Asia" catName="asia" noOfArticles={AsiaList.length}/>
            </div>
        );
    }
}

export default AsiaPage;