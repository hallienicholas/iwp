import React, {Component} from "react";
import MessageCard from "./MessageCard"

class Messages extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.dangerData)
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Messages</h1>
                <div className="row">
                    <div className="col">
                        
                            {this.props.dangerData.map((val, key) =>{
                                return(
                                <div className="row">
                                    <div className="col">
                                        <MessageCard data={val}/>
                                    </div>
                                </div>
                            )
                            })}

                    </div>
                </div>
            </div>
        )};
}

export default Messages;