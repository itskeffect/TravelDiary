import React from 'react';
import ThreeArticles from '../AppComponents/ThreeArticles';
import Latest from '../AppComponents/Latest';
import LatestArticles from '../AppComponents/LatestArticles';
import LatestStories from '../AppComponents/LatestStories';
import TopPost from '../AppComponents/TopPost';
import {Route} from 'react-router-dom';
class HomePage extends React.Component {
  render(){
    return (
      <div className="wholeBody">
        <div>
        <ThreeArticles />
        </div>
         <div>
         <Latest />
         </div>
        <div>
        <LatestArticles heading="Latest Articles" noOfArticles="4" catName="home"/>
        <TopPost />
        </div>
        <div>
        <LatestStories />
        </div>
        <br/> 
      </div>
    );
  }
  }
  
  export default HomePage;
  /*
 */