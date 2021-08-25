import React from 'react'
import PropTypes from 'prop-types';

import InvoiceDetail from '../InvoiceDetail/InvoiceDetail';
import classes from './Invoice.module.scss';

const Invoice = ({invoicesExist}) => {
	return (
		<div className={classes.Invoice}>
			{invoicesExist ?
				<div>
					<h2 className={classes['Invoice-heading']}>invoice details</h2>
					<InvoiceDetail />
				</div>
				 :
				<h2 className={classes['Invoice-heading']}>Please add a new invoice</h2>
			}
		</div> 
	)
}

Invoice.propTypes = {
	invoicesExist: PropTypes.bool
}

export default Invoice;
