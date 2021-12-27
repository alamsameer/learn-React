import { Component } from "react";
class Carousel extends Component{
    constructor(){
        super()
        this.state={
            active:0
        }
        
    }
    static defaultProps={
        images:['http://pets-images.dev-apis.com/pets/none.jpg']
    }
    handleClick=(event)=>{
        this.setState({
            active:+event.target.dataset.index,
        })
    }
    render(){
        const {active} =this.state 
        const {images}=this.props;
        return(
            <div className="carousel">
                <img src={images[active]} alt="animals" />
               <div className="carousel-smaller">
                   {
                       images.map((photo,index)=>(
                           <img
                           key={photo}
                           src={photo}
                           data-index={index}
                           onClick={this.handleClick}
                           className={index === active ? "active ":" "}
                           alt="animl thubnail"
                           />
                       ))
                   }
               </div>
            </div>
        )
    }
}

export default Carousel