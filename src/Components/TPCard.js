import React from 'react';
import ArticleList from '../Articles/articles.json';
import AsiaArticle from '../Articles/AsiaArticles.json';
import ParisArticle from '../Articles/ParisArticles.json';
import AmericaArticle from '../Articles/AmericaArticles.json';
import './TPCard.css';

class TPCard extends React.Component{
     constructor(props){
         super(props);
     }
    render(){
        if(this.props.cat=="asia"){
            return(
                <div className="TPcard">
                    <div className="otherDetailsTP">
                        <img src={AsiaArticle[this.props.no-1].pic} />
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
        else if(this.props.cat=="paris"){
            return(
                <div className="TPcard">
                    <div className="otherDetailsTP">
                        <img src={ParisArticle[this.props.no-1].pic} />
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
                        <img src={AmericaArticle[this.props.no-1].pic} />
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