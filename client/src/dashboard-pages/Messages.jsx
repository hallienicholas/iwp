import React, {Component} from "react";
import MessageCard from "./MessageCard"

class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Messages</h1>
                <div className="row">
                    <div className="col">
                        <div className="card shadow mb-4 border-left-info">
                            {this.props.dangerData.map((val, key) =>{
                                return(<MessageCard data={val}/>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )};
}

export default Messages;