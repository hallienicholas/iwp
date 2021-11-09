import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">About Us</h1>
            <div className="row">
                <div className="col"><img className="mb-1" src="../img/hallienicholas.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-6"><b>Hallie Nicholas</b> is a senior at Messiah University. She is a computer science major with a business information systems concentration, and is the project manager and team lead of this web application.</div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col"><img className="mb-1" src="../img/isaacparada.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-6"><b>Isaac Parada</b> is a senior at Messiah University. He is a computer science major with a concentration in business information systems. He manages the back end of the Intelligent Water Alerts project.</div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col"><img className="mb-1" src="../img/adamhungerford.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-6"><b>Adam Hungerford</b> is a senior at Messiah University. He is majoring in computer and information sciences with a concentration in software development, and a minor in philosophy. He is responsible for the front-end operations.</div>
                <div className="col-4"></div>
            </div>
            </div>
        );
    }
}

export default About;