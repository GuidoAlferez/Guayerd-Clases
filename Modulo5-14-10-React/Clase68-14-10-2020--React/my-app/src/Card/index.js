//Vamos a crear el componente Ract "Card"
//Importo react
import React from "react";

class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            card_title:"Titulo2",
            random: Math.random(),
            lista_de_tecnologias:["Js","Php","Node"]
        }
    }
    render(){
        this.state.random = "Jazmin";
        return(
            <div className="card" style={{width:"18rem"}}>
                <img src="http://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.card_title}</h5>
                    <p className="card-text">{this.state.random}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

                <ul className="list-group list-group-flush">
                    {this.state.lista_de_tecnologias.map((tecnologia)=>{
                        return(
                            <li className="list-group-item">{tecnologia}</li>
                        )
                    })}
                    
                    <li className="list-group-item">{this.state.lista_de_tecnologias[0]}</li>
                    <li className="list-group-item">{this.state.lista_de_tecnologias[1]}</li>
                    <li className="list-group-item">{this.state.lista_de_tecnologias[2]}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        );
    }
}
export default Card;