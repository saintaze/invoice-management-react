import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvoiceSnapshot.module.scss'

const InvoiceSnapshot = props => {
	return (
		<div class={classes.InvoiceSnapshot}>
			<div className={classes['InvoiceSnapshot-metaInfo']}>
				<span className={classes['InvoiceSnapshot-invoiceInfo']}>
					<span className={classes['InvoiceSnapshot-invoiceLabel']}>INV.</span>
					<span className={classes['InvoiceSnapshot-invoiceHash']}>#</span>
					<span className={classes['InvoiceSnapshot-invoiceSeparator']}>-</span>
					<span className={classes['InvoiceSnapshot-invoiceNumber']}>1122</span>
				</span>
				<span className={classes['InvoiceSnapshot-dateInfo']}>
					<span className={classes['InvoiceSnapshot-dateTime']}>11:35 AM</span>
					<span className={classes['InvoiceSnapshot-dateSeparator']}>-</span>
					<span className={classes['InvoiceSnapshot-dateDay']}>Today</span>
				</span>
			</div>
			<div className={classes['InvoiceSnapshot-itemsInfo']}>
				<span className={classes['InvoiceSnapshot-itemsLabel']}>Items</span>
				<span className={classes['InvoiceSnapshot-itemsSeparator']}>-</span>
				<span className={classes['InvoiceSnapshot-itemsCount']}>05</span>
			</div>
			<div className={classes['InvoiceSnapshot-customerInfo']}>
				<span className={classes['InvoiceSnapshot-customerName']}>Naveen Ravindran</span>
				<span className={classes['InvoiceSnapshot-customerTotal']}>&#8377; 3,509</span>
			</div>
		</div>
	)
}

InvoiceSnapshot.propTypes = {

}

export default InvoiceSnapshot
