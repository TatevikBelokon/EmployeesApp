import React from 'react';
import classnames from 'classnames';
import styles from './TabContent.module.css';

class TabContent extends React.Component{
	render(){
		const {tabs, fields, items, active, onClickRow, rowActive, rowId} = this.props;

		return (
			<div>
				{tabs.map(tab => 
					<section id={tab.id} key={tab.id}
							 className={classnames({[styles.tab]:true,
									                [styles.show]:active && tab.id === 'tab1'})}>
				    	<h3>{tab.title}</h3>				    	
				        <table className={styles.table}>	
				        	<thead>			        	
					        	{fields.map(field => 				        		
					        		<tr key={field.name} className={styles.thead}>
					        			<th className={styles.cell}>{field.name}</th>
					        			<th className={classnames({[styles.hide]:tab.id === 'tab2'})}>
											{field.position}
										</th>
					        			<th className={classnames({[styles.hide]:tab.id === 'tab2'})}>
					        				{field.departmentName}
					        			</th>
					        			<th className={classnames({[styles.hide]:tab.id === 'tab3'})}>
					        				{field.addedDate}
					        			</th>
					        			<th className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{field.birthDate}
					        			</th>
					        			<th className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{field.email}
					        			</th>
					        			<th className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{field.phone}
					        			</th>
					        			<th  className={classnames({[styles.hide]:tab.id === 'tab2',
					        									    [styles.hideOther]:tab.id === 'tab3'})}>
					        				{field.country}
					        			</th>
					        		</tr>
					        	)}
				        	</thead>
				        	<tbody>
					        	{items.map(item => 				        		
					        		<tr key={item.id} id={item.id}
					        			className={classnames({[styles.row]:true,
					        								   [styles.hide]:tab.id === 'tab2' && Number(item.addedDate.slice(0,4)) < 2020,
					        								   [styles.hideOther]:tab.id === 'tab3' && item.departmentId !== 1,
					        								   [styles.select]: rowActive && rowId === item.id
					        								  })}					        			
					        			onClick={() => onClickRow(item.id)}>
					        			<td className={styles.cell}>{item.name}</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab2'})}>
					        				{item.position}
					        			</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab2'})}>
					        				{item.departmentName}
					        			</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab3'})}>
					        				{item.addedDate}
					        			</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{item.birthDate}
					        			</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{item.email}
					        			</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{item.phone}
					        			</td>
					        			<td className={classnames({[styles.hide]:tab.id === 'tab2',
					        									   [styles.hideOther]:tab.id === 'tab3'})}>
					        				{item.country}
					        			</td>
					        		</tr>				        		
					        	)}
				        	</tbody>
				        </table>
				    </section>
				)}
      		</div>
		)
	}
}

export default TabContent;