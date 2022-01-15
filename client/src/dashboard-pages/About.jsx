import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">About the Project</h1>
                <div className="col-12"><h4><b>Intelligent Water Alerts</b> is a web application that serves as a user interface 
                for users, local mechanics, and donors of well systems in various countries, mostly in Africa, 
                built by Messiah's Collaboratory Team. This app will enable the correct people to be notified when a 
                well is not working as it should, allowing them to take action - whether that be going onsite to fix 
                it or ordering parts. From this constant communication with the system, our goal is that these villages
                 with well systems installed will have continuous access to running water no matter what may happen along
                  the way.</h4></div>
                  <br></br>
                  <div className="text-center"><img className="mb-1 shadow" src="../img/africa_well.jpeg" alt="Pump" width="800px" height="400px" /></div>
                  {/* image was found at https://www.beaconjournal.com/story/news/2020/11/13/political-campaign-donations-build-water-well-africa/6261089002/ */}
                  <br></br>
                  <br></br>

            <h1 className="h3 mb-4 text-gray-800">Meet the Team</h1>
            <div className="row">
                <div className="col-1"><img className="mb-1 shadow" src="../img/hallienicholas.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-6"><b>Hallie Nicholas</b> is a senior at Messiah University. She is a computer science major with a business information systems concentration, and is the project manager and team lead of this web application.</div>
                <div className="col-4"></div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-1"><img className="mb-1 shadow" src="../img/isaacparada.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-6"><b>Isaac Parada</b> is a senior at Messiah University. He is a computer science major with a concentration in business information systems. He manages the back end of the Intelligent Water Alerts project.</div>
                <div className="col-4"></div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-1"><img className="mb-1 shadow" src="../img/adamhungerford.jpg" alt="Headshot" width="100px" height="130px" /></div>
                <div className="col-6"><b>Adam Hungerford</b> is a senior at Messiah University. He is majoring in computer and information sciences with a concentration in software development, and a minor in philosophy. He is responsible for the front-end operations and user experience.</div>
                <div className="col-4"></div>
            </div>
            </div>
        );
    }
}

export default About;