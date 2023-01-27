import styles from './Input.module.scss';
import { IInput } from './Input.props';
import { FC, useState } from 'react';

export const Input: FC<{ change: (value: string) => void }> = ({ change }) => {
	const [message, setMessage] = useState('');

	const submitMessage = () => {
		change(message);
		setMessage('');
	};
	return (
		<div className={styles.container}>
			<input
				placeholder='text'
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				className={styles.input}
			></input>
			<button type='submit' onClick={() => submitMessage()}>
				Send
			</button>
		</div>
	);
};
