import React from "react";

class List extends React.Component {
    constructor (){
        super();
        this.state = {
            items: [
                {
                    text:"Cras",
                    actived:false
                },
                {
                    text:"Dapibus",
                    actived:false
                },
                {
                    text:"Morbi",
                    actived:false
                },
                {
                    text:"Porta",
                    actived:false
                }
            ]
        }
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.items.map((item)=>{
                    return (
                    <li className={`list-group-item ${item.actived ? 'actived': ''}`}>{item.text}</li>
                    )
                })}

            </ul>
          
        );
    }
}
export default List;