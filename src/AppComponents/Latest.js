import React from 'react';
import './Latest.css';
import Cards from '../Components/Cards';

class Latest extends React.Component{
    render(){
        return (
            <div className="Thelatest">
                <h1>
                    The Latest
                </h1>
                <hr className="lhr"/>
                <div id="cardGroup">
                    <div className="card">
                        <Cards cat="Asia" />
                    </div>
                    <div className="card">
                        <Cards cat="Paris" />
                    </div>
                    <div className="card">
                        <Cards cat="America" />
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}
export default Latest;