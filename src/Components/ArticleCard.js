import React from 'react';
import './ArticleCard.css';
import {Link} from 'react-router-dom';
import AsiaList from '../Articles/AsiaArticles.json';
import ParisList from '../Articles/ParisArticles.json';
import AmericaList from '../Articles/AmericaArticles.json';
const title =(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].title}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].title}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].title}
            </div>
        );
    }
   
}
const date=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].date}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].date}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].date}
            </div>
        );
    }
}
const picture=(category,no)=>{
    if(category=="paris"){
        let url = `.${ParisList[no-1].pic}`
        return(
            <div>
                <img src={url} />
            </div>
        );
    }
    else if(category=="asia"){
        let url = `.${AsiaList[no-1].pic}`
        return(
            <div>
                 <img src={url} />
            </div>
        );
    }
    else{
        let url = `.${AmericaList[no-1].pic}`
        return(
            <div>
                 <img src={url} />
            </div>
        );
    }
}
const about=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].Summary}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].Summary}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].Summary}
            </div>
        );
    }
}
const location=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].Location}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].Location}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].Location}
            </div>
        );
    }
}
const howToReach=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].HowToReach}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].HowToReach}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].HowToReach}
            </div>
        );
    }
}
const details=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].Details}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].Details}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].Details}
            </div>
        );
    }
}
const eatAround=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].Eatery}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].Eatery}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].Eatery}
            </div>
        );
    }
}
const visit=(category,no)=>{
    if(category=="paris"){
        return(
            <div>
                {ParisList[no-1].bestTimetoVisit}
            </div>
        );
    }
    else if(category=="asia"){
        return(
            <div>
                {AsiaList[no-1].bestTimetoVisit}
            </div>
        );
    }
    else{
        return(
            <div>
                {AmericaList[no-1].bestTimetoVisit}
            </div>
        );
    }
}

class ArticleCard extends React.Component{
    constructor(props){
        super(props);
    }    
    render(){
        return(
            <div>
                <div>
                <div className="likeAndShare" id="like">
                    <img src="../like.png" />
                </div>
                <div className="likeAndShare" id="share">
                    <img src="../share.png"/>
                </div>
                </div>
                <div id="blogPage">
                    <h2>
                            {title(this.props.category,this.props.articleNo)}
                        </h2>
                    <div id="logoDiv">
                        <div>
                            <img id="logoImg" src="../WanderLust.jpg" />
                        </div>
                        <div>
                            TravelDiary <br/><br/>
                            <span id="dateBlog">
                            {date(this.props.category,this.props.articleNo)}
                            </span>
                        </div>
                    </div>
                    <h1>
                    {title(this.props.category,this.props.articleNo)}
                    </h1>
                    <div id="placeImg">
                            {picture(this.props.category,this.props.articleNo)}
                    </div>
                    <br/>
                    <div id="placeAbout">
                            {about(this.props.category,this.props.articleNo)}
                    </div>
                    <div id="placeLocation">
                        <h3>
                            Location:
                        </h3>
                        {location(this.props.category,this.props.articleNo)}
                    </div>
                    <div id="placeReach">
                            <h3>
                            How To Reach:
                            </h3>
                            {howToReach(this.props.category,this.props.articleNo)}
                    </div>
                    <div id="placeDetails">
                            <h3>
                            Details:
                            </h3>
                            {details(this.props.category,this.props.articleNo)}
                    </div>
                    <div id="placeEat">
                        <h3>
                            Where to Eat Around:
                        </h3>
                        {eatAround(this.props.category,this.props.articleNo)}
                    </div>
                    <div id="placeVisit">
                        <h3>
                            Best Time To Visit:
                        </h3>
                        {visit(this.props.category,this.props.articleNo)}
                    </div>
                    <br/>
                    <hr />
                    <div id="logoDiv">
                        <div>
                            <img id="logoImg" src="../WanderLust.jpg" />
                        </div>
                        <div>
                            Written by: <br/><br/>
                            TravelDiary <br/>
                            <span id="dateBlog">
                            {date(this.props.category,this.props.articleNo)}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <br />
                </div>
                <br/>
                <div>
                    <h4>
                    SIMILAR ARTICLES
                    </h4>
                    <hr/>
                    <div id="similarArticles">
                        <Link to={`/${this.props.category}/${this.props.category}-1`}>
                        <div id="s1">
                            <p>
                                {title(this.props.category,1)}
                            </p>
                            <div id="logoDiv">
                                <div>
                                    <img id="logoImg" src="../WanderLust.jpg" />
                                </div>
                                <div>
                                    TravelDiary <br/>
                                    <span id="dateBlog">
                                    {date(this.props.category,1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to={`/${this.props.category}/${this.props.category}-2`}>
                        <div id="s2">
                             <p>
                                {title(this.props.category,2)}
                            </p>
                            <div id="logoDiv">
                                <div>
                                    <img id="logoImg" src="../WanderLust.jpg" />
                                </div>
                                <div>
                                    TravelDiary <br/>
                                    <span id="dateBlog">
                                    {date(this.props.category,2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to={`/${this.props.category}/${this.props.category}-3`}>
                        <div id="s3">
                            <p>
                                {title(this.props.category,3)}
                            </p>
                            <div id="logoDiv">
                                <div>
                                    <img id="logoImg" src="../WanderLust.jpg" />
                                </div>
                                <div>
                                    TravelDiary <br/>
                                    <span id="dateBlog">
                                    {date(this.props.category,3)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <hr />
                </div>
                <br/>
            </div>
        );
    }
}
export default ArticleCard;