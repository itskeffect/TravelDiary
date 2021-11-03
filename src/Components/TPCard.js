import React from 'react';
import AsiaArticle from '../Articles/AsiaArticles.json';
import ParisArticle from '../Articles/ParisArticles.json';
import AmericaArticle from '../Articles/AmericaArticles.json';
import './TPCard.css';
import ParisArticles from "../Articles/ParisArticles.json";
import AsiaArticles from "../Articles/AsiaArticles.json";

class TPCard extends React.Component{

    render(){
        if(this.props.cat==="asia"){
            return(
                <div className="TPcard">
                    <div className="otherDetailsTP">
                        {console.log(AsiaArticle[this.props.no-1].pic)}
                        <img src={require(`../Assets/${AsiaArticle[this.props.no-1].pic}`).default} alt={AsiaArticle[this.props.no-1].title}/>
                    </div>
                    <div className="otherTP">
                        <h3> 
                            {AsiaArticle[this.props.no-1].title}
                        </h3>
                        <p className="datePropTP">
                        {AsiaArticle[this.props.no-1].category} <span className="content"> /{AsiaArticle[this.props.no-1].date} </span> 
                        </p>
                        <br/>
                    </div>
                    <div id="No">
                        {this.props.srno}
                    </div>
                </div>
            );
        }
        else if(this.props.cat==="paris"){
            return(
                <div className="TPcard">
                    <div className="otherDetailsTP">
                        <img src={require(`../Assets/${ParisArticle[this.props.no-1].pic}`).default} alt= {ParisArticle[this.props.no-1].title}/>
                    </div>
                    <div className="otherTP">
                        <h3> 
                            {ParisArticle[this.props.no-1].title}
                        </h3>
                        <p className="datePropTP">
                        {ParisArticle[this.props.no-1].category} <span className="content"> /{ParisArticle[this.props.no-1].date} </span> 
                        </p>
                        <br/>
                    </div>
                    <div id="No">
                        {this.props.srno}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="TPcard">
                    <div className="otherDetailsTP">
                        <img src={require(`../Assets/${AmericaArticle[this.props.no-1].pic}`).default} alt={AmericaArticle[this.props.no-1].title}/>
                    </div>
                    <div className="otherTP">
                        <h3> 
                            {AmericaArticle[this.props.no-1].title}
                        </h3>
                        <p className="datePropTP">
                        {AmericaArticle[this.props.no-1].category} <span className="content"> /{AmericaArticle[this.props.no-1].date} </span> 
                        </p>
                        <br/>
                    </div>
                    <div id="No">
                        {this.props.srno}
                    </div>
                </div>
            );
        }
    }
}

export default TPCard;