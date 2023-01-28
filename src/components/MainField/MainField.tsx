import { IMainField } from './MainField.props';
import { FC, useState, useEffect } from 'react';
import styles from './MainField.module.scss';
import img from '../../assets/UI/button/button-avatar-blue2.png';
import { Message } from '../Message/Message';
import { Input } from '../Input/Input';
import { DynamicButton } from '../DynamicButton/DynamicButton';
import { IFriends, listFriends } from '../../fakedata/listFriends';
import { useSelector } from 'react-redux';
export const MainField: FC<IMainField> = ({ ...props }) => {
	const [message, setMessage] = useState<string>('');
	const state = useSelector((state: any) => state.info);
	const getMessage = (value: string) => {
		setMessage(value);
	};

	return (
		<div {...props}>
			<div className={styles.container}>
				<div className={styles['left-field']}>
					<div className={styles.header}>
						<h6 className={styles['title-message']}>Your Messages</h6>
						<h5 className={styles['title-name-friend']}>
							{state.info.length > 0 && state.info[0].name}
						</h5>
					</div>
					<div className={styles['block-messages']}>
						{message && <Message user={'user'} text={message} />}
						{state.info.length > 0 && (
							<Message user={'friend'} text={state.info[0].message} />
						)}
					</div>
					<div className={styles['input-field']}>
						<Input change={getMessage}></Input>
					</div>
				</div>
				<div className={styles['right-field']}>
					<DynamicButton />
				</div>
			</div>
		</div>
	);
};
