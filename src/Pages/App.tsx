import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/lista';
import style from './app.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
