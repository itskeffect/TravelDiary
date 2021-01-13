import React from 'react';
import './ThreeArticles.css';
import AsiaArticles from '../../Articles/AsiaArticles.json';
import ParisArticles from '../../Articles/ParisArticles.json';
import AmericaArticles from '../../Articles/AmericaArticles.json';
import {Link} from 'react-router-dom';


class ThreeArticles extends React.Component{
    render(){
        return(
            <div className="mainThreeArticles">
                <div id="mainArticle">
                <Link to="/asia/asia-5"> <img src={require(`../../Assets/${AsiaArticles[4].pic}`).default} alt={AsiaArticles[4].title} />
                </Link> 
                
                <h2>Article 1</h2>
                <p>{AsiaArticles[4].category}/ {AsiaArticles[4].date}</p>
                </div>
                <div className="otherTwo">
                    <Link to="/paris/paris-2"><img src={require(`../../Assets/${ParisArticles[1].pic}`).default} alt={ParisArticles[1].title}/>
                    </Link>  
                    <h2>Article 2</h2>
                    <p>{ParisArticles[1].category}/ {ParisArticles[1].date}</p>
                    <br/> 
                    <Link to="/america/america-1"> <img src={require(`../../Assets/${AmericaArticles[0].pic}`).default} alt={AmericaArticles[0].title}/>
                    </Link>  
                    <h2>Article 3</h2>
                    <p>{AmericaArticles[0].category}/ {AmericaArticles[0].date}</p>
                </div>
            </div>
        );
    }
}
export default ThreeArticles;