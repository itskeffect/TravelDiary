import React from 'react';
import LatestArticles from '../AppComponents/LatestArticles';
import TopPost from '../AppComponents/TopPost';
import AmericaList from '../Articles/AmericaArticles.json';
import './Page.css';

class AmericaPage extends React.Component{
    render(){
        return(
            <div>
            <div className="TopPostPos">
            <TopPost />
            </div>
            <LatestArticles heading="America" catName="america" noOfArticles={AmericaList.length}/>
        </div>
        );
    }
}

export default AmericaPage;