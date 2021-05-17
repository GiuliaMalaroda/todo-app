import css from '../styles/Tasks.module.scss';

const Tasks = props => {
    const tasks = props.tasks;

    return (
        <ul className={css.Tasks}>
            {tasks.map((task, i) => {
                return (
                    <li key={i}>
                        {task.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default Tasks;