import React from 'react';
import styles from './Tabs.module.css';
import classnames from 'classnames';

class Tabs extends React.Component{
	render(){
		const {tabs, setActive, sectionId, setSectionId} = this.props;		

		return (
			<div>
				<nav className={styles.tabs}>
					<ul className={styles.tabs__list}>
						{tabs.map(tab => 
							<li key={tab.id}
								className={classnames({[styles.tabs__list_item]:true,
									                   [styles.select]:tab.id === sectionId})}
								onClick={() => {setActive(false); setSectionId(tab.id)}}>
								<a className={styles.link} href={`#${tab.id}`}>
									{tab.title}
								</a>
							</li>
						)}
					</ul>
				</nav>
      		</div>
		)
	}
}

export default Tabs;