import styles from './Input.module.scss';
import { IInput } from './Input.props';
import { FC, useState, useRef, useEffect } from 'react';

export const Input: FC<{ change: (value: string) => void }> = ({ change }) => {
	const [message, setMessage] = useState('');
	const textareaRef = useRef(null);
	const submitMessage = () => {
		change(message);
		setMessage('');
	};

	return (
		<div className={styles.container}>
			<textarea
				placeholder='...hello my friend'
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				className={styles.input}
				ref={textareaRef}
			></textarea>
			<button
				type='submit'
				onClick={() => submitMessage()}
				className={styles.button}
			>
				Send
			</button>
		</div>
	);
};
