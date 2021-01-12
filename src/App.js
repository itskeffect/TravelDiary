import React from 'react';
import './App.css';
import Heading from './AppComponents/Heading';
import {Route} from 'react-router-dom';
import HomePage from './MainComponent/HomePage';
import AsiaPage from './MainComponent/AsiaPage';
import ParisPage from './MainComponent/ParisPage';
import AmericaPage from './MainComponent/AmericaPage';
import ArticleCard from './Components/ArticleCard';
import AsiaList from './Articles/AsiaArticles.json';
import ParisList from './Articles/ParisArticles.json';
import AmericaList from './Articles/AmericaArticles.json';

const specifyRoutes =()=>{
  var routeObj =[];
  for(let i=0;i<AsiaList.length;i++){
    routeObj.push(<Route exact path={`/asia/asia-${i+1}`} render={() => (<ArticleCard category="asia" articleNo={i+1} />)}/>);
  }
  for(let i=0;i<AmericaList.length;i++){
    routeObj.push(<Route exact path={`/america/america-${i+1}`} render={() => (<ArticleCard category="america" articleNo={i+1} />) }/>);
  }
  for( let i=0;i<ParisList.length;i++){
    routeObj.push(<Route exact path={`/paris/paris-${i+1}`} render={() => (<ArticleCard category="paris" articleNo={i+1}/>)}/>);
  }
  return(
    <div>
      {routeObj}
    </div>
  );
}
class App extends React.Component {
  render(){
    return (
      <div className="wholeBody">
        <Heading />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/asia" component={AsiaPage}/>
        <Route exact path="/paris" component={ParisPage}/>
        <Route exact path="/america" component={AmericaPage}/>
        {specifyRoutes()}
      </div>
    );
  }
}

export default App;