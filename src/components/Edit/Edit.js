import React from 'react';
import {useState} from 'react';
import Modal from '../Modal/Modal';
import classnames from 'classnames';
import styles from '../Add/Add.module.css';
import PropTypes from 'prop-types';

const Edit = ({ onClickEdit, disable, onClickOpenEdit, inputs, setInputs }) => {
	const [modalActive, setModalActive] = useState(false);

	// const [inputs, setInputs] = useState({
	//           name: rowData.name,
	//           position: rowData.position,         
	//           departmentName: rowData.departmentName,           
	//           addedDate: rowData.addedDate,
	//           birthDate: rowData.birthDate,
	//           email: rowData.email,
	//           phone: rowData.phone,
	//           country: rowData.country
	//         });

	const handleChange = (event) => {
		const id = event.target.id;
		const value = event.target.value;		
		setInputs(values => ({...values, [id]: value}));
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		onClickEdit(inputs);
		setModalActive(false);		
		setInputs(
			{
	          name: '',
	          position: '',         
	          departmentName: '',           
	          addedDate: '',
	          birthDate: '',
	          email: '',
	          phone:'',
	          country: ''
	        }
		);
	}
	
	return  (
		<div>
			<button onClick={() => {onClickOpenEdit(); setModalActive(true)}}
					disabled={disable}
					className={styles.btnEdit}>
				Редактировать
			</button>
			<Modal active={modalActive}
				   setActive={setModalActive}>
				<form onSubmit={handleSubmit} className={styles.form}>
        			<label htmlFor='name'>Имя:</label>        			
					<input type='text' id='name' className={styles.input} 
						   value={inputs.name}
						   onChange={handleChange} required/>
					<label htmlFor='position'>Должность:</label>
					<input type='text' id='position' className={styles.input} 
						   value={inputs.position}
						   onChange={handleChange} required/>
        			<label htmlFor='departmentName'>Подразделение:</label>
			        <select id='departmentName' className={styles.input}			        					        		
			        	    value={inputs.departmentName} 
			        	    onChange={handleChange}>
				        <option value="IT-отдел">IT-отдел</option>
				        <option value="Отдел кадров">Отдел кадров</option>
				        <option value="Бухгалтерия">Бухгалтерия</option>
			      	</select>		
        			<label htmlFor='addedDate'>Дата добавления:</label>
					<input type='date' id='addedDate' 
						   className={classnames(styles.input, styles.date)}  
						   value={inputs.addedDate}
						   onChange={handleChange} required/>
        			<label htmlFor='birthDate'>Дата рождения:</label>
					<input type='date' id='birthDate' 
						   className={classnames(styles.input, styles.date)} 
						   value={inputs.birthDate}
						   onChange={handleChange} required/>
        			<label htmlFor='email'>Эл. почта:</label>
					<input type='email' id='email' className={styles.input}  
						   value={inputs.email}
						   onChange={handleChange} required/>
        			<label htmlFor='phone'>Телефон:</label>
					<input type='text' id='phone' className={styles.input} 
						   value={inputs.phone}
						   onChange={handleChange} required/>
        			<label htmlFor='country'>Страна:</label>
					<input type='text' id='country' className={styles.input}  
						   value={inputs.country}
						   onChange={handleChange} required/>					
					<input type="submit" value='Применить' className={styles.button}/>
				</form>
		    </Modal>
	    </div>
	);
};

Edit.propTypes = {
	onClickEdit: PropTypes.func.isRequired, 
	disable: PropTypes.bool.isRequired, 
	rowData: PropTypes.bool.isRequired
};

export default Edit;