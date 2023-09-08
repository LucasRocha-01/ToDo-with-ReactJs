import styles from "./Task.module.css";
import trashImg from '../assets/trash.svg'
import { ChangeEvent } from "react";

interface TaskProps {
	id: number
	isCompleted: boolean
	content: string
	setNewTask: (novaTarefa: { id: number; isCompleted: boolean; content: string }[]) => void;
	newTask: { id: number; isCompleted: boolean; content: string }[];
}

export function Task(props: TaskProps) {
	function deleteTask(key: number) {
		const tasks = props.newTask.filter(item => item.id !== key);

		props.setNewTask(tasks)
	}
	function handleCheckedInput(e: ChangeEvent<HTMLInputElement>) {
		const isChecked = e.target.checked

		const task = props.newTask.find(item => item.id !== props.id);
		if (task) {
			const updatedTasks = props.newTask.map(task => {
				if (task.id === props.id) {
					return {
						...task,
						isCompleted: isChecked
					};
				}
				return task;
			})
			props.setNewTask(updatedTasks);
		}

		console.log(isChecked);

	}
	return (
		<div className={styles.task}>
			<label>
				<input className={styles.checkbox}
					checked={props.isCompleted}
					onChange={(e) => handleCheckedInput(e)}
					type="checkbox"
					name="complete" />
				<span />
				<span>
					{props.content}
				</span>
			</label>
			<button className={styles.button} type="submit" onClick={() => deleteTask(props.id)} >
				<img src={trashImg} />
			</button>
		</div>
	);
} 
