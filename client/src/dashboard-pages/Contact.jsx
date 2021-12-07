import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="container-fluid">

                <h1 className="h3 mb-4 text-gray-800">Contact Us</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Get in touch with the Intelligent Water Alerts team</h6>
                    </div>
                    <div className="card-body">
                        The current <a href="/about">Intelligent Water Alerts team</a> is comprised of Hallie Nicholas (lead), Isaac Parada (back-end), and Adam Hungerford (front-end). 
                        You can reach out with an email at <a href="mailto:intelligentwater.dev@gmail.com">intelligentwater.dev@gmail.com</a>.
                    </div>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Get in touch with the Intelligent Water Project</h6>
                    </div>
                    <div className="card-body">
                        The Intelligent Water Project is responsible for the water pumps, and can be contacted <a href="http://iwp.cs.messiah.edu/about/contact.php">here</a>.
                    </div>
                </div>
                <i>Availability: 8-4pm M-F.</i>
            </div>
        );
    }
}

export default Contact;