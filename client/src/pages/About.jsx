import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">About Us</h1>
            <div className="row">
                <div className="col"><img src="../img/hallienicholas.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-10"><b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Elementum sagittis vitae et leo duis ut diam quam. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tellus mauris a diam maecenas sed enim. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Non enim praesent elementum facilisis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. In massa tempor nec feugiat nisl pretium.</div>
            </div>
            <div className="row">
                <div className="col"><img src="../img/isaacparada.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-10"><b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Elementum sagittis vitae et leo duis ut diam quam. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tellus mauris a diam maecenas sed enim. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Non enim praesent elementum facilisis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. In massa tempor nec feugiat nisl pretium.</div>
            </div>
            <div className="row">
                <div className="col"><img src="../img/adamhungerford.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-10"><b>Adam Hungerford</b> is a senior at Messiah University. He is majoring in computer and information sciences with a concentration in software development, and a minor in philosophy. He is responsible for the front-end operations.</div>
            </div>
            </div>
        );
    }
}

export default About;