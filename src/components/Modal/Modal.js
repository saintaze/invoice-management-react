import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import { setShowModal } from '../../store/slices/modalSlice';
import newInvoiceView from '../../enums/newInvoiceView';
import CustomerDetailsForm from '../CustomerDetailsForm/CustomerDetailsForm';
import ProductDetailsForm from '../ProductDetailsForm/ProductDetailsForm';
import Transition from '../Transition/Transition';
import classes from './Modal.module.scss';

const Modal = props => {
	const dispatch = useDispatch();
	const showModal = useSelector(state => state.modal.showModal);
	const activeNewInvoiceView = useSelector(state => state.invoice.activeNewInvoiceView);

	const closeModal = (e) => {
		dispatch(setShowModal({show: false}));
	}

	const closeBackdrop = (e) => {
		if(e.target.id === 'Backdrop'){
			e.stopPropagation();
			dispatch(setShowModal({show: false}));
		}
	}

	const renderActiveView = () => {
		switch(activeNewInvoiceView){
			case newInvoiceView.CUSTOMER_DETAILS:
				return <CustomerDetailsForm closeModal={closeModal} />
			case newInvoiceView.PRODUCT_DETAILS:
				return 	<ProductDetailsForm closeModal={closeModal} />
			default:
				return <CustomerDetailsForm closeModal={closeModal} />
		}
	}

	const renderModal = () => {
		let modal = null;
		if(showModal){
			modal = (
				<div className={classes.Backdrop} id="Backdrop" key="0" onClick={closeBackdrop}>
					<div className={classes.Modal}>
						{renderActiveView()}
					</div>
				</div>
			)
		}else {
			modal = <></>
		}
		return <Transition key={modal.key}>{modal}</Transition>;
	}

	return (
		<TransitionGroup>
			{renderModal()}
	  </TransitionGroup>
	)
}

export default Modal