import React, {useState} from 'react'

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
<div>
    <div className='App'>
        </div>
<div>
<label> Digite um email  </label>
</div>
<input type="email" id="email" placeholder="sophie@example.com" onChange={(e)=>setEmail(e.target.value)}/>
<button onClick={()=> armazenar ('Email', email)} class="waves-effect waves-light btn pink accent-2 ">Enviar Email</button>
</div>
  );
}
