import { useState } from 'react'
import './css/app.css'
import './css/respansive.css'

import pesoIMG from './img/peso.png' // IMPORT IMG

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){  // calculo do imc
    const alt = altura / 100;
    const imc = peso / (alt * alt);  // imc.toFixed(2) APENAS 2 CASAS DECIMAIS
    
    if(imc < 18.6){  // Condicoes de Peso
      setMensagem("Você está abaixo do peso! Seu IMC: "+imc.toFixed(2));
    }
    else if(imc >= 18.6 && imc <= 24.9){
      setMensagem("Peso ideal! Seu IMC: "+imc.toFixed(2));
    }
    else if(imc >= 25 && imc <= 29.9){
      setMensagem("Você está levemente acima do peso! Seu IMC: "+imc.toFixed(2));
    }
    else if(imc >= 30 && imc <= 34.9){
      setMensagem("Cuidado, obesidade nivel I ! Seu IMC: "+imc.toFixed(2));
    }
    else if(imc >= 35 && imc <= 39.9){
      setMensagem("Cuidado, obesidade nivel II ! Seu IMC: "+imc.toFixed(2));
    }
    else if(imc >= 40){
      setMensagem("Cuidado, obesidade nivel III ! Seu IMC: "+imc.toFixed(2));
    }
  }

  return(
    <div className="corpoPage">
      <div className="area-form">

        <div className="app">
  
          <img src={pesoIMG} className="pesoIMG" alt="" />

          <h1>Calculadora IMC</h1>

          <div className="area-input">
            <input type="number" min='0' placeholder="Seu Pesso em (Kg), Ex: 86" value={peso} onChange={(e) => setPeso(e.target.value)} />
            <input type="number" min='0' placeholder="Sua altura em (cm), Ex: 180" value={altura} onChange={(e) => setAltura(e.target.value)} />
            <button onClick={calcularIMC}>Calcular</button>
          </div>
          <h3>{ mensagem }</h3>
        </div>

      </div>
    </div>
  )
}

