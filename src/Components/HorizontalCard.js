import React from 'react';
import AsiaArticle from '../Articles/AsiaArticles.json';
import ParisArticle from '../Articles/ParisArticles.json';
import AmericaArticle from '../Articles/AmericaArticles.json';
import './HorizontalCards.css';

class Card extends React.Component{
    render(){
        if(this.props.catName==="asia"){
            return(
                <div className="Hcard">
                    <hr />
                    <div className="otherDetails">
                        <img src={require(`../Assets/${AsiaArticle[this.props.no-1].pic}`).default} alt={AsiaArticle[this.props.no-1].title}/>
                    </div>
                    <div >
                        <h2> 
                            {AsiaArticle[this.props.no-1].title}
                        </h2>
                        <p className="content">
                            {AsiaArticle[this.props.no-1].Summary}
                        </p>
                        <p className="dateProp">
                        {AsiaArticle[this.props.no-1].category} <span className="content"> /{AsiaArticle[this.props.no-1].date} </span> 
                        </p>
                        <br /><br/>
                    </div>
                </div>
            );
        }
        else if(this.props.catName==="paris"){
            return(
                <div className="Hcard">
                    <hr />
                    <div className="otherDetails">
                        <img src={require(`../Assets/${ParisArticle[this.props.no-1].pic}`).default} alt={ParisArticle[this.props.no-1].title}/>
                    </div>
                    <div >
                        <h2> 
                            {ParisArticle[this.props.no-1].title}
                        </h2>
                        <p className="content">
                            {ParisArticle[this.props.no-1].Summary}
                        </p>
                        <p className="dateProp">
                        {ParisArticle[this.props.no-1].category} <span className="content"> /{ParisArticle[this.props.no-1].date} </span> 
                        </p>
                        <br /><br/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="Hcard">
                    <hr />
                    <div className="otherDetails">
                        <img src={require(`../Assets/${AmericaArticle[this.props.no-1].pic}`).default} alt={AmericaArticle[this.props.no-1].title}/>
                    </div>
                    <div >
                        <h2> 
                            {AmericaArticle[this.props.no-1].title}
                        </h2>
                        <p className="content">
                            {AmericaArticle[this.props.no-1].Summary}
                        </p>
                        <p className="dateProp">
                        {AmericaArticle[this.props.no-1].category} <span className="content"> /{AmericaArticle[this.props.no-1].date} </span> 
                        </p>
                        <br /><br/>
                    </div>
                </div>
            );
        }
    }
}

export default Card;