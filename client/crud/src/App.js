import React, {useState} from 'react'
import Axios from 'axios'
import './App.css';

function App() {
  const [values, setValues] = useState()
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }
  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      console.log(response)
    })
  }
  return (
    <div className="App--container">
      <div className="register--container">
        <h1 className="register--title">Scrim Shop</h1>
        <input 
        type="text" 
        name="name" 
        placeholder="Name"
        className="register--input"
        onChange={handleChangeValues}
        /> 
        <input 
        type="text" 
        name="cost" 
        placeholder="Preço"
        className="register--input"
        onChange={handleChangeValues}
        />
        <input 
        type="text" 
        name="category" 
        placeholder="Categoria"
        className="register--input"
        onChange={handleChangeValues}
        />
        <button 
        className="register--button"
        onClick={() => handleClickButton()}
        >Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
