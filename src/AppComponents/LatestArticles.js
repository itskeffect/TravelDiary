import React from 'react';
import {Link} from 'react-router-dom';
import './LatestArticles.css';
import HCard from '../Components/HorizontalCard';
const displayCards = (noOfArticles,category) =>{
    var allCards =[];
    for(var i=0;i<noOfArticles;i++){
        if(category=="home"){
            var catHere;
            if(i%2==0){
             catHere="paris";   
            }
            else if(i%3==0){
                catHere="asia";
            }
            else{
                catHere="america";
            }
            allCards.push(<Link to={`/${catHere}/${catHere}-${i+1}`}><HCard no={i+1} catName={catHere}/> </Link>);
        }
        else{
            allCards.push(<Link to={`/${category}/${category}-${i+1}`}><HCard no={i+1} catName={category}/></Link>);
        }
    }
    return(
        <div>
            {allCards}
        </div>
    );
}
class LatestArticles extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="latestarticles">
                <br/>
                <h1>
                    {this.props.heading}
                </h1>
                <hr className="lahr"></hr>
                <div>
                {displayCards(this.props.noOfArticles,this.props.catName)}
                <br />
                </div>
            </div>
        );
    }
}

export default LatestArticles