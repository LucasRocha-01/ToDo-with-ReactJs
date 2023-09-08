import { useState } from 'react';
import styles from "./Search.module.css";
import plusImg from '../assets/plus.svg'

interface tasksProps {
	setNewTask: (novaTarefa: { id: number; isCompleted: boolean; content: string }[]) => void;
	newTask: { id: number; isCompleted: boolean; content: string }[];
}

export function Search(props: tasksProps) {
	const [newTaskText, setNewTaskText] = useState('')


	function handleCreateNewTask(e: React.FormEvent) {
		e.preventDefault()

		const objectTask = {
			id: props.newTask.length + 1,
			isCompleted: false,
			content: newTaskText
		}

		props.setNewTask([...props.newTask, objectTask])
		setNewTaskText('')
	}

	return (
		<form onSubmit={(e) => handleCreateNewTask(e)} className={styles.form}>
			<div className={styles.component}>
				<input
					name='taskInput'
					placeholder="Adicione uma tarefa"
					className={styles.input}
					type="text"
					value={newTaskText}
					onChange={(e) => setNewTaskText(e.target.value)}
				/>
			</div>
			<button className={styles.button} type="submit" >
				Criar
				<img src={plusImg} />
			</button>
		</form>
	);
} 
