import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import skipImage from '../../images/skip-icon@2x.png';

import newInvoiceView from '../../enums/newInvoiceView';
import {showAlert} from '../../store/slices/alertSlice';
import { setActiveNewInvoiceView, setCustomerInfo } from '../../store/slices/invoiceSlice';
import { zeroPad } from '../../utils/helpers';
import validator from '../../utils/validator';
import classes from './CustomerDetailsForm.module.scss';


const CustomerDetailsForm = ({closeModal}) => {
	const dispatch = useDispatch();
	const invoices = useSelector(state => state.invoice.allInvoices);
	const formInitialState = {fullName: '', phone: '', address: '', email: '', pinCode: ''};
	const [form, setForm] = useState(formInitialState);
	const {fullName, phone, address, email, pinCode} = form;

	const handleFormSubmit = () => {
		if(validateForm()){
			dispatch(setCustomerInfo(form));
			dispatch(setActiveNewInvoiceView({view: newInvoiceView.PRODUCT_DETAILS}));
		}
	}
 
	const handleInputChange = (e) => {
		setForm({...form, [e.target.id]: e.target.value});
	}

	const validateForm = () => {
		if(!validator.isPresent(fullName)){
			dispatch(showAlert({message: 'Full Name is required.'}))
			return false;
		}

		if(!validator.isPresent(phone)){
			dispatch(showAlert({message: 'Phone number is required.'}))
			return false;
		}

		if(!validator.isPresent(email)){
			dispatch(showAlert({message: 'Email is required.'}))
			return false;
		}

		if(validator.exceedsMaxLength(fullName, 30)){
			dispatch(showAlert({message: 'Full name must not exceed 30 characters.'}))
			return false;
		}

		if(!validator.isPhoneNumber(phone)){
			dispatch(showAlert({message: 'Phone number must be valid.'}))
			return false;
		}

		if(!validator.isEmail(email)){
			dispatch(showAlert({message: 'Email must be valid.'}))
			return false;
		}
		if(!validator.isPinCode(pinCode)){
			dispatch(showAlert({message: 'Pin code must be valid.'}))
			return false;
		}
		return true;
	}

	return (
		<div className={classes.CustomerDetailsForm}>
			<div className={classes['CustomerDetailsForm-header']}>
				<div className={classes['CustomerDetailsForm-headerTopRow']}>
					<span className={classes['CustomerDetailsForm-headerTopRowLeft']}>
						<span className={classes['CustomerDetailsForm-heading']}>create new invoice</span>
						<span className={classes['CustomerDetailsForm-orderNumber']}>order no: {zeroPad(invoices.length + 1)}</span>
					</span>
					<span className={classes['CustomerDetailsForm-close']} onClick={closeModal}>&times;</span>
				</div>
				<div className={classes['CustomerDetailsForm-headerBottomRow']}>
					<span className={classes['CustomerDetailsForm-formType']}>customer details</span>
					<button className={classes['CustomerDetailsForm-skipBtn']}>
						skip 
						<img className={classes['CustomerDetailsForm-skipImage']} src={skipImage} alt="skipImage" />
					</button>
				</div>
			</div>

			<div className={classes['CustomerDetailsForm-body']}>
				<div className={classes['CustomerDetailsForm-formRow']}>
					<div className={classes['CustomerDetailsForm-formCol1']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="fullName">
								Full Name 
								<sup className={classes['CustomerDetailsForm-formControlRequired']}>*</sup>
							</label>
							<input className={classes['CustomerDetailsForm-formControlFullname']} type="text" id="fullName" placeholder="Customer Name" value={fullName} onChange={handleInputChange}/>
						</div>
					</div>

					<div className={classes['CustomerDetailsForm-formCol2']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="phone">
								Phone Number 
								<sup className={classes['CustomerDetailsForm-formControlRequired']}>*</sup>
							</label>
							<div className={classes['CustomerDetailsForm-formControlPhoneWrapper']}>
								<span className={classes['CustomerDetailsForm-formControlAddon']}>+91</span>
								<input className={classes['CustomerDetailsForm-formControlPhone']} placeholder="999-999-9999" type="tel" id="phone" value={phone} onChange={handleInputChange}/>
							</div>
						</div>
					</div>
				</div>
				<div className={classes['CustomerDetailsForm-formRow']}>
					<div className={classes['CustomerDetailsForm-formCol1']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="address">Address</label>
							<textarea className={classes['CustomerDetailsForm-formControlTextarea']} id="address" cols="30" rows="7" placeholder="Complete Address" value={address} onChange={handleInputChange}></textarea>
						</div>
					</div>
					<div className={classes['CustomerDetailsForm-formCol2']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="email">
								Email ID
								<sup className={classes['CustomerDetailsForm-formControlRequired']}>*</sup>
							</label>
							<input className={classes['CustomerDetailsForm-formControlEmail']} type="email" id="email" placeholder="Customer Email Address" value={email} onChange={handleInputChange}/>
						</div>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="pinCode">Pincode</label>
							<input className={classes['CustomerDetailsForm-formControlPincode']} type="text" id="pinCode" placeholder="560067" value={pinCode} onChange={handleInputChange}/>
						</div>
					</div>
				</div>
			</div>
			<div className={classes['CustomerDetailsForm-footer']}>
				<button className={classes['CustomerDetailsForm-proceedBtn']} onClick={handleFormSubmit}>Proceed</button>
			</div>
		</div>
	)
}

CustomerDetailsForm.propTypes = {
	closeModal: PropTypes.func
}

export default CustomerDetailsForm
