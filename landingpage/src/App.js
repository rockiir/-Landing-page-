import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import './mysass.scss';

export default function App() {

  const [email, setEmail]=useState()
  const armazenar =(chave, valor)=>{
    localStorage.setItem(chave,valor)
  }
  const consultar = (chave) =>{
    alert(localStorage.getItem(chave))

  }
const apagar=(chave)=>{
  localStorage.removeItem(chave)
}

  return (
<>
<div>
<label> Digite um email </label>
</div>
<input type="email" id="email" placeholder="sophie@example.com" onChange={(e)=>setEmail(e.target.value)}/>
<button onClick={()=> armazenar ('Email', email)}>Gravar nome</button>


</>

  );


}
