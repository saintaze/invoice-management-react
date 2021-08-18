import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvoiceDetail.module.scss';

import printerImage from '../../images/printer-blue@2x.png';


const InvoiceDetail = props => {
	return (
		<div className={classes.InvoiceDetail}>
			<div className={classes['InvoiceDetail-header']}>
				<div className={classes['InvoiceDetail-header-left']}>
					<div>
						<div className={classes['InvoiceDetail-heading']}>invoice</div>
						<div className={classes['InvoiceDetail-number']}># inv1122</div>
						<div className={classes['InvoiceDetail-date']}>11:35 AM - Today</div>
					</div>
					<div className={classes['InvoiceDetail-detailsBox']}>
						<div className={classes['InvoiceDetail-detailsLabel']}>customer details</div>
						<div className={classes['InvoiceDetail-customerName']}>john doe</div>
						<div className={classes['InvoiceDetail-email']}>jogn@srrvice.com</div>
					</div>
				</div>
				<div className={classes['InvoiceDetail-header-right']}>
					<button className={classes['InvoiceDetail-print']}>
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
				
			{/* loop */}
				<div className={classes['InvoiceDetail-tableBodyRow']}>
					<span className={classes['InvoiceDetail-col1']}>prawn and chicken sui mai</span>
					<span className={`${classes['InvoiceDetail-quantity']} ${classes['InvoiceDetail-col2']}`}>2</span>
					<span className={`${classes['InvoiceDetail-price']} ${classes['InvoiceDetail-col3']}`}>430.00</span>
				</div>

				<div className={classes['InvoiceDetail-tableBodyRow']}>
					<span className={classes['InvoiceDetail-col1']}>long product name with two lines</span>
					<span className={`${classes['InvoiceDetail-quantity']} ${classes['InvoiceDetail-col2']}`}>3</span>
					<span className={`${classes['InvoiceDetail-price']} ${classes['InvoiceDetail-col3']}`}>430.00</span>
				</div>

				<div className={classes['InvoiceDetail-tableBodyRow']}>
					<span className={classes['InvoiceDetail-col1']}>prawn and chicken sui mai</span>
					<span className={`${classes['InvoiceDetail-quantity']} ${classes['InvoiceDetail-col2']}`}>2</span>
					<span className={`${classes['InvoiceDetail-price']} ${classes['InvoiceDetail-col3']}`}>430.00</span>
				</div>

				{/* loop */}

				<div className={classes['InvoiceDetail-tableFooterRow']}>
					<span className={classes['InvoiceDetail-col1']}></span>
					<span className={`${classes['InvoiceDetail-calcLabels']} ${classes['InvoiceDetail-col2']} `}>
						<span className={classes['InvoiceDetail-subTotal']}>sub total</span>
						<span className={classes['InvoiceDetail-tax']}>tax (12.36%)</span>
						<span className={classes['InvoiceDetail-discount']}>discount (10%)</span>
						<span className={classes['InvoiceDetail-grandTotal']}>grand total</span>
					</span>
					<span className={`${classes['InvoiceDetail-calcValues']} ${classes['InvoiceDetail-col3']}`}>
						<span className={classes['InvoiceDetail-subTotalVal']}>&#8377; 3470.00</span>
						<span className={classes['InvoiceDetail-taxVal']}>&#8377; 429.00</span>
						<span className={classes['InvoiceDetail-discountVal']}>&#8377; 390.00</span>
						<span className={classes['InvoiceDetail-grandTotalVal']}>&#8377; 3509.00</span>
					</span>
				</div>

			
			</div>
		</div>
	)
}

InvoiceDetail.propTypes = {

}

export default InvoiceDetail
