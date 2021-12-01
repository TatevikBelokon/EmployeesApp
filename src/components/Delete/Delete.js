import React from 'react';
import {useState} from 'react';
import Modal from '../Modal/Modal';
import styles from './Delete.module.css';
import PropTypes from 'prop-types';

const Delete = ({onClickDelete, disable}) => {
	const [modalActive, setModalActive] = useState(false);	

	return  (
		<div>
			<button onClick={() => setModalActive(true)} 
					disabled={disable}
					className={styles.btn}>
				Удалить
			</button>
			<Modal active={modalActive}
				   setActive={setModalActive}>
				<div className={styles.delete}>
					<p>Вы действительно хотите удалить элемент?</p>
					<div>
						<button onClick={() => {onClickDelete(); setModalActive(false)}}
							    className={styles.btnConfirm}>
							Да
						</button>
						<button onClick={() => setModalActive(false)}>Отмена</button>
					</div>
				</div>
		    </Modal>
		</div>
	);
};

Delete.propTypes = {
	disable: PropTypes.bool.isRequired
};

export default Delete;