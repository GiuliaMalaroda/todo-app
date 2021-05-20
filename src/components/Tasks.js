import css from '../styles/Tasks.module.scss';

const Tasks = props => {
    const tasks = props.tasks;

    const onCompleteHandler = (title) => {
        const shallowTasks = [...props.tasks];
        const task = shallowTasks.find(i => i.title === title);
        task.isCompleted = true;

        // update tasks
        props.setTasks(shallowTasks);
    }

    const onDeleteHandler = (title) => {
        const shallowTasks = [...props.tasks];
        const tasks = shallowTasks.filter(i => i.title !== title);

        // update tasks
        props.setTasks(tasks);
    }

    return (
        <ul className={css.Tasks}>
            {tasks.map((task, i) => {
                return (
                    <li className={`${css.Task} ${task.isCompleted ? css.Task_isCompleted : null}`} key={i}>
                        {task.title}

                        <div className={css.Actions}>
                            <button 
                                className={css.Complete}
                                onClick={() => onCompleteHandler(task.title)}
                                disabled={task.isCompleted} >
                                Complete
                            </button>
                            <button 
                                className={css.Remove}
                                onClick={() => onDeleteHandler(task.title)}
                                disabled={task.isCompleted} >
                                Remove
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Tasks;