import React, { useRef } from 'react'; 
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';

import printerImage from '../../images/printer-blue@2x.png';
import { zeroPad, formatDate, formatToTimeAgo, formatCommaSeparated } from '../../utils/helpers';
import classes from './InvoiceDetail.module.scss';


const InvoiceDetail = props => {
	const invoice = useSelector(state => state.invoice.selectedInvoice);
	const componentRef = useRef();

	const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

	const renderProducts = () => {
		return invoice.products.map(product => 
			<div key={product._id} className={classes['InvoiceDetail-tableBodyRow']}>
				<span className={classes['InvoiceDetail-col1']}>{product.name}</span>
				<span className={`${classes['InvoiceDetail-quantity']} ${classes['InvoiceDetail-col2']}`}>{product.quantity}</span>
				<span className={`${classes['InvoiceDetail-price']} ${classes['InvoiceDetail-col3']}`}>{formatCommaSeparated(product.price, false)}</span>
			</div>
		)
	}

	return (		
		<div className={classes.InvoiceDetail} ref={componentRef} >
			<div className={classes['InvoiceDetail-header']}>
				<div className={classes['InvoiceDetail-header-left']}>
					<div>
						<div className={classes['InvoiceDetail-heading']}>invoice</div>
						<div className={classes['InvoiceDetail-number']}># inv{zeroPad(invoice.invoiceId)}</div>
						<div className={classes['InvoiceDetail-date']}>{formatDate(invoice.createdAt)} - {formatToTimeAgo(invoice.createdAt)}</div>
					</div>
					<div className={classes['InvoiceDetail-detailsBox']}>
						<div className={classes['InvoiceDetail-detailsLabel']}>customer details</div>
						<div className={classes['InvoiceDetail-customerName']}>{invoice.customer.fullName}</div>
						<div className={classes['InvoiceDetail-email']}>{invoice.customer.email}</div>
					</div>
				</div>
				<div className={classes['InvoiceDetail-header-right']}>
					<button className={classes['InvoiceDetail-print']} onClick={handlePrint}>
						print
						<img className={classes['InvoiceDetail-printerImage']} src={printerImage} alt="printer icon" />
					</button>
				</div>
			</div>
			<div className={classes['InvoiceDetail-table']}>
				<div className={classes['InvoiceDetail-tableHeaderRow']}>
					<span className={`${classes['InvoiceDetail-nameLabel']} ${classes['InvoiceDetail-col1']}`}>item</span>
					<span className={`${classes['InvoiceDetail-quantityLabel']} ${classes['InvoiceDetail-col2']}`}>quantity</span>
					<span className={`${classes['InvoiceDetail-priceLabel']} ${classes['InvoiceDetail-col3']}`}>price - &#8377;</span>
				</div>

				{renderProducts()}

				<div className={classes['InvoiceDetail-tableFooterRow']}>
					<span className={classes['InvoiceDetail-col1']}></span>
					<span className={`${classes['InvoiceDetail-calcLabels']} ${classes['InvoiceDetail-col2']} `}>
						<span className={classes['InvoiceDetail-subTotal']}>sub total</span>
						<span className={classes['InvoiceDetail-tax']}>tax ({formatCommaSeparated(invoice.tax, false)}%)</span>
						<span className={classes['InvoiceDetail-discount']}>discount ({formatCommaSeparated(invoice.discount, false)}%)</span>
						<span className={classes['InvoiceDetail-grandTotal']}>grand total</span>
					</span>
					<span className={`${classes['InvoiceDetail-calcValues']} ${classes['InvoiceDetail-col3']}`}>
						<span className={classes['InvoiceDetail-subTotalVal']}>&#8377; {formatCommaSeparated(invoice.productsSum)}</span>
						<span className={classes['InvoiceDetail-taxVal']}>&#8377; {formatCommaSeparated(invoice.taxAmount)}</span>
						<span className={classes['InvoiceDetail-discountVal']}>&#8377; {formatCommaSeparated(invoice.discountAmount)}</span>
						<span className={classes['InvoiceDetail-grandTotalVal']}>&#8377; {formatCommaSeparated(invoice.grandTotal)}</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default InvoiceDetail
