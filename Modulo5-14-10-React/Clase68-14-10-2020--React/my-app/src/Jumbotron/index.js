import React from "react";

class Jumbotron extends React.Component {
    constructor (){
        super();
        this.state = {
            jumbotron_title: "Jumbotron de Guido Alferez",
            jumbotron_texto: "Mis Djs Favoritos son: ",
            lista_de_Djs_Favoritos: ["Hardwell ","Quintino ","Mike Williams ","Blasterjaxx ","W&W ","Skrillex ","Martin Garrix ","Yellow Claw ","Oliver Heldens "],
            link:"link-copado"
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">{this.state.jumbotron_title}</h1>
                <p className="lead">{this.state.jumbotron_texto}</p>
                <hr className="my-4" />
                <p>{this.state.lista_de_Djs_Favoritos}</p>
                <a className="btn btn-primary btn-lg" href={this.state.link} role="button">Learn more</a>
            </div>
        );
    }
}
export default Jumbotron;