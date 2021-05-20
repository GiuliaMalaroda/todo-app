import css from '../styles/Counter.module.scss';

const Counter = props => {
    const tasks = props.tasks;
    const toGo = tasks.filter(i => i.isCompleted === false).length;
    const down = tasks.filter(i => i.isCompleted === true).length;

    return (
        <div className={`${css.Counter} ${tasks.length > 0 ? css.Counter_hasTasks : null}`}>
            <div className={`${css.ToGo} ${toGo === 0 ? css.ToGo_isZero : null}`}>
                <span>{toGo}</span>
                to go
            </div>
            <div className={`${css.Down} ${down === 0 ? css.Down_isZero : null}`}>
                <span>{down}</span>
                down
            </div>
        </div>
    )
}

export default Counter;