import React from 'react';
import AsiaArticle from '../Articles/AsiaArticles.json';
import ParisArticle from '../Articles/ParisArticles.json';
import AmericaArticle from '../Articles/AmericaArticles.json';
import './TCard.css';

class textCard extends React.Component{
     constructor(props){
         super(props);
         console.log(this.props.no);
     }
    render(){
        if(this.props.cat=="Asia"){
            return(
                <div className="Tcard">
                    <h2>
                        {AsiaArticle[this.props.no-1].title}
                    </h2>
                    <p className="content">
                        {AsiaArticle[this.props.no-1].Summary}
                    </p>
                    <br />
                    <p className="dateProp">
                     {AsiaArticle[this.props.no-1].category}/ {AsiaArticle[this.props.no-1].date}
                    </p>
                </div>
            );
        }
        else if(this.props.cat=="Paris"){
            return(
                <div className="Tcard">
                    <h2>
                        {ParisArticle[this.props.no-1].title}
                    </h2>
                    <p className="content">
                        {ParisArticle[this.props.no-1].Summary}
                    </p>
                    <br />
                    <p className="dateProp">
                     {ParisArticle[this.props.no-1].category}/ {ParisArticle[this.props.no-1].date}
                    </p>
                </div>
            );
        }
        else{
            return(
                <div className="Tcard">
                    <h2>
                        {AmericaArticle[this.props.no-1].title}
                    </h2>
                    <p className="content">
                        {AmericaArticle[this.props.no-1].Summary}
                    </p>
                    <br />
                    <p className="dateProp">
                     {AmericaArticle[this.props.no-1].category}/ {AmericaArticle[this.props.no-1].date}
                    </p>
                </div>
            );
        }
        // return(
        //     <div className="Tcard">
        //         <h2>
        //             {ArticleList[].title}
        //         </h2>
        //         <p className="content">
        //             {ArticleList[this.props.no-1].Summary}
        //         </p>
        //         <br />
        //         <p className="dateProp">
        //          {ArticleList[this.props.no-1].category}/ {ArticleList[this.props.no-1].date}
        //         </p>
        //     </div>
        // );
    }
}

export default textCard;