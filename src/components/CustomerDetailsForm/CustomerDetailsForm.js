import React from 'react'
import PropTypes from 'prop-types'
import classes from './CustomerDetailsForm.module.scss'
import skipImage from '../../images/skip-icon@2x.png';

const CustomerDetailsForm = props => {
	return (
		<div className={classes.CustomerDetailsForm}>
			<div className={classes['CustomerDetailsForm-header']}>
				<div className={classes['CustomerDetailsForm-headerTopRow']}>
					<span className={classes['CustomerDetailsForm-headerTopRowLeft']}>
						<span className={classes['CustomerDetailsForm-heading']}>create new invoice</span>
						<span className={classes['CustomerDetailsForm-orderNumber']}>order no: 1234</span>
					</span>
					<span className={classes['CustomerDetailsForm-close']}>&times;</span>
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
							<label className={classes['CustomerDetailsForm-formControlLabel']}  htmlFor="fullName">
								Full Name 
								<sup className={classes['CustomerDetailsForm-formControlRequired']}>*</sup>
							</label>
							<input className={classes['CustomerDetailsForm-formControlFullname']} type="text" id="fullName" placeholder="Customer Name"/>
						</div>
					</div>

					<div className={classes['CustomerDetailsForm-formCol2']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="phoneNumber">
								Phone Number 
								<sup className={classes['CustomerDetailsForm-formControlRequired']}>*</sup>
							</label>
							<div className={classes['CustomerDetailsForm-formControlPhoneWrapper']}>
								<span className={classes['CustomerDetailsForm-formControlAddon']}>+91</span>
								<input className={classes['CustomerDetailsForm-formControlPhone']} type="tel" id="phoneNumber" />
							</div>
						</div>
					</div>
				</div>

				<div className={classes['CustomerDetailsForm-formRow']}>
					<div className={classes['CustomerDetailsForm-formCol1']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="address">Address</label>
							<textarea className={classes['CustomerDetailsForm-formControlTextarea']} id="address" cols="30" rows="7" placeholder="Complete Address"></textarea>
						</div>
					</div>
					<div className={classes['CustomerDetailsForm-formCol2']}>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="email">
								Email ID
								<sup className={classes['CustomerDetailsForm-formControlRequired']}>*</sup>
							</label>
							<input className={classes['CustomerDetailsForm-formControlEmail']} type="email" id="email" placeholder="Customer Email Address"/>
						</div>
						<div className={classes['CustomerDetailsForm-formControl']}>
							<label className={classes['CustomerDetailsForm-formControlLabel']} htmlFor="pinCode">Pincode</label>
							<input className={classes['CustomerDetailsForm-formControlPincode']} type="text" id="pinCode" placeholder="560067"/>
						</div>
					</div>
				</div>

			</div>
			<div className={classes['CustomerDetailsForm-footer']}>
				<button className={classes['CustomerDetailsForm-proceedBtn']}>Proceed</button>
			</div>
		</div>
	)
}

CustomerDetailsForm.propTypes = {

}

export default CustomerDetailsForm
