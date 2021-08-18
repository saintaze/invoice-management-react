import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { TransitionGroup } from 'react-transition-group';
// import { setShowModal } from '../../store/slices/alertSlice'
// import Transition from '../Transition/Transition';
import classes from './Modal.module.scss'
import CustomerDetailsForm from '../CustomerDetailsForm/CustomerDetailsForm';
import ProductDetails from '../ProductDetailsForm/ProductDetails';

const Modal = props => {

	const closeModal = () => {
		// dispatch(setShowModal(false));
	}

	// const dispatch = useDispatch();
	// const showModal = useSelector(state => state.alert.showModal)
	// const showModal = useSelector(state => true)
	// const alertHeader = useSelector(state => state.alert.alertHeader);
	// const alertBody = useSelector(state => state.alert.alertBody);

	const renderModal = () => {
		let modal = null;
		if(true){
			modal = (
				<div className={classes.Backdrop} key="0" onClick={closeModal}>
					{/* <div className={classes.Modal}>
						<div className={classes['Modal-header']}>
							<div className={classes['Modal-title']}>dd</div>
							<i className={`fas fa-times ${classes['Modal-close']}`} onClick={closeModal} />
						</div>
						<h3>Random Fact</h3>
						<div className={classes['Modal-body']}>qq</div>
					</div> */}
					<div className={classes.Modal}>
					<CustomerDetailsForm />
					{/* <ProductDetails /> */}
					</div>
				</div>
			)
		}else {
			modal = <></>
		}
		// return <Transition key={modal.key}>{modal}</Transition>;
		return modal
	}

	return (
		// <TransitionGroup>
		<div>
			{renderModal()}
		</div>
		// </TransitionGroup>
	)
}

export default Modal