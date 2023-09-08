import "./global.css";
import { useState } from 'react';
import style from "./App.module.css";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Counter } from "./components/counter";

export function App() {
  const [newTask, setNewTask] = useState([{
    id: 1,
    isCompleted: false,
    content: "Os Flintstones é uma série animada que se passa na Idade da Pedra e segue as aventuras da família Flintstone e seus amigos. Foi um dos primeiros desenhos animados a ser exibido em horário nobre na televisão."
  },
  {
    id: 2,
    isCompleted: false,
    content: "Os Jetsons é uma série de desenho animado que se passa em um futuro futurista e segue a vida da família Jetson. Mostra como a tecnologia afeta a vida cotidiana deles."
  },
  {
    id: 3,
    isCompleted: true,
    content: "Scooby-Doo é uma série animada sobre um grupo de adolescentes e seu cão falante Scooby-Doo, que viajam em sua van, Mistério S/A, para resolver mistérios envolvendo supostos monstros."
  },
  {
    id: 4,
    isCompleted: true,
    content: "Corrida Maluca é uma série animada de competição de corrida de automóveis, onde os pilotos usam truques e armadilhas para vencer."
  },
  {
    id: 5,
    isCompleted: true,
    content: "Jonny Quest segue as aventuras de Jonny, seu pai cientista, Dr. Benton Quest, seu amigo Hadji, seu cachorro Bandit e o agente secreto Race Bannon enquanto enfrentam vilões e resolvem mistérios."
  }])

  const counterOf = newTask.filter(item => item.isCompleted === true)
  const concluidas = `${counterOf.length} de ${newTask.length}`

  return (
    <>
      <Header />
      <div className={style.container}>

        <Search newTask={newTask} setNewTask={setNewTask} />

        <div className={""}>
          <main>
            <div className={style.counters}>
              <Counter title={"Tarefas Criadas"} counter={newTask.length} />
              <Counter title={"Concluídas"} counter={concluidas} />
            </div>
            {newTask.map((item) => {
              return (
                <Task key={item.id} isCompleted={item.isCompleted} id={item.id} content={item.content} setNewTask={setNewTask} newTask={newTask} />
              )
            })}
          </main>
        </div>
      </div>
    </>
  );
}
