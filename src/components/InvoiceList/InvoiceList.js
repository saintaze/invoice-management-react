import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvoiceList.module.scss';
import InvoiceSnapshot from '../InvoiceSnapshot/InvoiceSnapshot';

const InvoiceList = props => {
	return (
		<div className={classes.InvoiceList}>
			<div className={classes['InvoiceList-heading']}>
				<span className={classes['InvoiceList-heading-text']}>invoices</span>
				<span className={classes['InvoiceList-heading-separator']}>-</span>
				<span className={classes['InvoiceList-heading-count']}> 54</span>
			</div>

			<InvoiceSnapshot />
			<InvoiceSnapshot />
			<InvoiceSnapshot />
			<InvoiceSnapshot />
			<InvoiceSnapshot />
		</div>
	)
}

InvoiceList.propTypes = {

}

export default InvoiceList
