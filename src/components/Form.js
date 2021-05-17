import { useState } from 'react';
import css from '../styles/Form.module.scss';

const Form = props => {
    const [value, setValue] = useState({});

    const onChangeHandler = event => {
        const value = event.target.value;
        setValue({
            title: value,
            isCompleted: false
        });
    }

    const onSubmitHandler = event => {
        event.preventDefault();

        // add new task to list
        const shallowTasks = [...props.tasks];
        shallowTasks.push(value);
        props.setTask(shallowTasks);

        // clear all fields and reset value
        event.target.reset();
        setValue("");
    }

    return (
        <form 
            className={css.Form}
            autoComplete="off"
            onSubmit={onSubmitHandler} >
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
                placeholder="Today I have to..."
                onChange={onChangeHandler} />
            <button 
                className={css.Submit}
                type="submit"
                disabled={value === ""} >
                Add task
            </button>
        </form>
    )
}

export default Form;