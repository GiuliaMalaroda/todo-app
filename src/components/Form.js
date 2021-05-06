import React from 'react';
import css from '../styles/Form.module.scss';

const Form = props => {
    return (
        <form className={css.Form}>
            <label 
                className={css.Label}
                htmlFor="task">
                What are your plans for <span>today</span>?
            </label>
            <input 
                id="task"
                className={css.Input} 
                type="text" 
                name="_task"
                placeholder="Today I have to..." />
            <button type="submit">Invia</button>
        </form>
    )
}

export default Form;