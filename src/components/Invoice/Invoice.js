import React from 'react'
import PropTypes from 'prop-types'
import classes from './Invoice.module.scss'
import InvoiceDetail from '../InvoiceDetail/InvoiceDetail';

const Invoice = props => {
	return (
		<div className={classes.Invoice}>
			<h2 className={classes['Invoice-heading']}>invoice details</h2>
			<InvoiceDetail />
		</div>
	)
}

Invoice.propTypes = {

}

export default Invoice
