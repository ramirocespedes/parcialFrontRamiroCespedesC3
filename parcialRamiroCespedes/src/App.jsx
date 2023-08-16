import { useState } from 'react'
import { Form } from './Components/Form';
import { Card } from './Components/Card';
import styles from './App.module.css';


function App() {

  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit2 = (inputName, inputColor) => {
    setName(inputName);
    setColor(inputColor);
    setShowCard(true);
  };



  return (
    <div className= {styles.appContainer}>

    <h1 className={styles.appTitle}>Parcial Ramiro Cespedes</h1>

    <Form onSubmit={handleSubmit2}></Form>

    {showCard && <Card name= {name} color= {color}></Card>}
     
    </div>
  )
}

export default App
