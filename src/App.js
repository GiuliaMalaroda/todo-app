import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Tasks from './components/Tasks';

function App() {
    const [tasks,setTask] = useState([]);
    console.log(tasks);

    return (
        <div className="wrapper">
            <header>
                <Logo />
            </header>
            
            <main>
                <Form 
                    tasks={tasks} 
                    setTask={setTask} />

                <Tasks 
                    tasks={tasks} />
            </main>
            
        </div>
            
    );
}

export default App;