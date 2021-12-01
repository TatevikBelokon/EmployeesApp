import React from 'react';
import classnames from 'classnames';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({active, setActive, children}) => {
	return  (
		<div className={classnames({[styles.modal]:true,
									[styles.modal_active]:active})}
			 onClick={() => setActive(false)}>
			<div className={classnames({[styles.modal__content]:true,
									    [styles.modal__content_active]:active})} 
				 onClick={e => e.stopPropagation()}>
				 {children}
			</div>
		</div>
	);
};

export default Modal;