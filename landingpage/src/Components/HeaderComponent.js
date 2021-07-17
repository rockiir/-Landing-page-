//Header da página com materialize
import React, { Component } from "react";
import Formulario  from "./formulario"
import M from "materialize-css";
import  Logo  from '../asset/Team';
import "materialize-css/dist/css/materialize.min.css";
export default class HeaderComponent extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
   
    return (
      
      <div className='row grey lighten-5'>
        
        <div className='col s12 m6 '>
         <Logo className='responsive-img' src={'Logo'}alt='team' width=''/>
        </div>
        <div className='col s12 m6'>
          <h4 className='font'>
         
          </h4>
          <bfriday> <h1 className='title black-text text-accent-3'>
            Black
            <div>
              <span className=' red-text  text-lighten-1 '>Friday</span>
            </div>
          </h1> </bfriday>
          <h1 className='title deep-purple-text text-accent-3'>
            Bora
            <u>
              <span className=' pink-text  text-lighten-1 i-line'>H</span>
            </u>{"ex"}
          </h1>
          <p className='para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lorem nec urna posuere sollicitudin a ut ligula. Aliquam dolor turpis, aliquet eget ornare ut, dictum id dui. <br /> Suspendisse sagittis erat molestie purus malesuada facilisis.
            
            
          </p>
          <h6 className='font'>
            <b>Se junte a nós</b>
          </h6>
          <p className='para'>
            Digite seu email e receba promoções exclusivas de Black Friday.
          </p>
          {/* <a
            href='#get'
            className='btn btn-header white-text text-darken-4  pink lighten-1 modal-trigger'
            data-target='modal1'
          >
            Faça o teste gratis
          </a> */}
          <Formulario />

        </div>
        

        {/* <div>
          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id='modal1'
            className='modal'
          >
            <div className='modal-content'>
              <h4 className='font'>The Offer Is Coming Soon!</h4>
              <p className='para'>
                Thanks For You Concern, but we're under development!
              </p>
            </div>
            <div className='modal-footer'>
              <a
                href='#close'
                className='btn btn-header modal-close white-text red accent-3'
              >
                Close
              </a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
