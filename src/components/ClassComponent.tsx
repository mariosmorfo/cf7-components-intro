import {Component} from "react";

class ClassComponent extends Component{
    render(){
        const title = "Is class component";
        return <h1 className="text-center mt-12 font-bold">{title}</h1>


    }

}

export default ClassComponent;