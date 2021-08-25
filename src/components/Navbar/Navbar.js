import React from 'react';
import { useDispatch } from 'react-redux';

import {setActiveNewInvoiceView} from '../../store/slices/invoiceSlice';
import { setShowModal } from  '../../store/slices/modalSlice';
import newInvoiceView from '../../enums/newInvoiceView';
import classes from './Navbar.module.scss';


const Navbar = props => {
	const dispatch = useDispatch();

	const openModal = () => {
		dispatch(setActiveNewInvoiceView(newInvoiceView.CUSTOMER_DETAILS))
		dispatch(setShowModal({show: true}))
	}

	return (
		<div className={classes.Navbar}>
			<span className={classes['Navbar-brand']}>Dashboard</span>
			<button className={classes['Navbar-addInvoiceBtn']} onClick={openModal}>&#43;</button>
		</div>
	)
}

export default Navbar
