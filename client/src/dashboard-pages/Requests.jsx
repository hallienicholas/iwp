import React, {Component} from "react";
import { Link } from "react-router-dom";

class Requests extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-0 text-gray-800">Requests</h1>
                <div class="row mt-4 mb-2">
                    <div class="col-lg-9 col-sm-fluid">
                        <div className="card shadow">
                            <table className="table">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                                <tr>
                                    <td>Adam</td>
                                    <td>Hungerford</td>
                                    <td>ah1600@messiah.edu</td>
                                </tr>
                                <tr>
                                    <td>Test</td>
                                    <td>Testerson</td>
                                    <td>test_testerson@mailinator.com</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-fluid">
                        <Link to="./user"><button className='btn btn-primary'>Return to user settings</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Requests