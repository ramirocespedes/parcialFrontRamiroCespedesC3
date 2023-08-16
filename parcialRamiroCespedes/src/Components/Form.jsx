import React, { useState } from 'react';
import styles from '../App.module.css';

export const Form = ({onSubmit}) => {
 
 const [input1, setInput1] = useState('');
 const [input2, setInput2] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleSubmit = (e) => { 
    e.preventDefault();

    if (input1.length < 3 || input1.trim() !== input1 || input2.length < 2) {
        setErrorMessage('Ups! hay un error en la carga de datos, por favor revisalos');
        return;
      }

      setErrorMessage('');
      onSubmit(input1, input2);
      setInput1('');
      setInput2('');

 };
 
 
    return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>

        <h3 className={styles.formTitle}>Form</h3>       
        <label className={styles.formLabel}>Ingresa tu Nombre</label>
        <input className={styles.formInput} type="text" value={input1} onChange={(e) => setInput1(e.target.value)}/>
        <br />

        <label className={styles.formLabel}>Ingresa tu color preferido</label>
        <input className={styles.formInput} type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        <br />

        <div className={styles.formButtonContainer}>
        <button className={styles.formButton} type="submit">Enviar</button>
        </div>

        {errorMessage && <p className={styles.formError}>{errorMessage}</p>}        
    </form>
  )
}
