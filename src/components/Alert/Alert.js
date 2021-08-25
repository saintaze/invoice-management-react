import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import Transition from '../Transition/Transition';
import classes from './Alert.module.scss';


const Alert = props => {
	const alertState = useSelector(state => state.alert);

	const renderAlert = () => {
		let alert = null;
		if(alertState.showAlert){
			alert = (
				<div className={classes.Alert}  key="0">
					<div className={classes['Alert-message']}>{alertState.message || ''}</div>
				</div>
			)
		}else {
			alert = <></>
		}
		return <Transition key={alert.key}>{alert}</Transition>;
	}
		
	return (
		<TransitionGroup>
			{renderAlert()}
	  </TransitionGroup>
	)
}

export default Alert


