import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { formatDate, formatToTimeAgo, zeroPad, formatCommaSeparated } from '../../utils/helpers';
import { setSelectedInvoice } from '../../store/slices/invoiceSlice';
import classes from './InvoiceSnapshot.module.scss';


const InvoiceSnapshot = ({invoice}) => {
	const dispatch = useDispatch();
	const selectedInvoice = useSelector(state => state.invoice.selectedInvoice);

	const invoiceIsSelected = () => {
		return invoice._id === selectedInvoice._id ? classes['InvoiceSnapshot-selected'] : ''
	}

	return (
		<div className={`${classes.InvoiceSnapshot} ${invoiceIsSelected()}`} onClick={e => 	dispatch(setSelectedInvoice(invoice))}>
			<div className={classes['InvoiceSnapshot-metaInfo']}>
				<span className={classes['InvoiceSnapshot-invoiceInfo']}>
					<span className={classes['InvoiceSnapshot-invoiceLabel']}>INV.</span>
					<span className={classes['InvoiceSnapshot-invoiceHash']}>#</span>
					<span className={classes['InvoiceSnapshot-invoiceSeparator']}>-</span>
					<span className={classes['InvoiceSnapshot-invoiceNumber']}>{zeroPad(invoice.invoiceId)}</span>
				</span>
				<span className={classes['InvoiceSnapshot-dateInfo']}>
					<span className={classes['InvoiceSnapshot-dateTime']}>{formatDate(invoice.createdAt)}</span>
					<span className={classes['InvoiceSnapshot-dateSeparator']}>-</span>
					<span className={classes['InvoiceSnapshot-dateDay']}>{formatToTimeAgo(invoice.createdAt)}</span>
				</span>
			</div>
			<div className={classes['InvoiceSnapshot-itemsInfo']}>
				<span className={classes['InvoiceSnapshot-itemsLabel']}>Items</span>
				<span className={classes['InvoiceSnapshot-itemsSeparator']}>-</span>
				<span className={classes['InvoiceSnapshot-itemsCount']}>{zeroPad(invoice.products.length)}</span>
			</div>
			<div className={classes['InvoiceSnapshot-customerInfo']}>
				<span className={classes['InvoiceSnapshot-customerName']}>{invoice.customer.fullName}</span>
				<span className={classes['InvoiceSnapshot-customerTotal']}>&#8377; {formatCommaSeparated(invoice.grandTotal, true, false)}</span>
			</div>
		</div>
	)
}

InvoiceSnapshot.propTypes = {
	invoice: PropTypes.object
}

export default InvoiceSnapshot
