import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Tasks from './components/Tasks';
import Counter from './components/Counter';

function App() {
    const [tasks,setTasks] = useState([]);
    
    return (
        <div className="wrapper">
            <header>
                <Logo />
            </header>

            <aside>
                <Counter 
                    tasks={tasks}
                    setTasks={setTasks} />
            </aside>
            
            <main>
                <Form 
                    tasks={tasks} 
                    setTasks={setTasks} />

                <Tasks 
                    tasks={tasks} 
                    setTasks={setTasks} />
            </main>
            
        </div>
            
    );
}

export default App;