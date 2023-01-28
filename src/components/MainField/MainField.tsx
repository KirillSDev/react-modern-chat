import { IMainField } from './MainField.props';
import { FC, useState, useEffect } from 'react';
import styles from './MainField.module.scss';
import img from '../../assets/UI/button/button-avatar-blue2.png';
import { Message } from '../Message/Message';
import { Input } from '../Input/Input';
const MainField: FC<IMainField> = ({ ...props }) => {
	const [message, setMessage] = useState<string>('');

	const getMessage = (value: string) => {
		setMessage(value);
	};

	return (
		<div {...props}>
			<div className={styles.container}>
				<div className={styles['left-field']}>
					<h6 className={styles['title-message']}>Your Messages</h6>
					<h5 className={styles['title-name-friend']}>Elvira Stray</h5>
					<div className={styles['block-messages']}>
						{message && <Message user={'user'} text={message} />}
					</div>
					<div className={styles['input-field']}>
						<Input change={getMessage}></Input>
					</div>
				</div>
				<div className={styles['right-field']}>
					<div>
						<button>Give podarok</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainField;
