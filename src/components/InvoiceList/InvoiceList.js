import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { fetchInvoices } from '../../store/slices/invoiceSlice';
import { zeroPad } from '../../utils/helpers';
import searchIcon from '../../images/search-icon@2x.png';
import InvoiceSnapshot from '../InvoiceSnapshot/InvoiceSnapshot';
import classes from './InvoiceList.module.scss';


const InvoiceList = ({invoicesExist}) => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');
	const invoices = useSelector(state => state.invoice.allInvoices);

	useEffect(() => {
		dispatch(fetchInvoices());
	}, [dispatch])

	const filterInvoices = () => {
		const search = searchTerm.trim().toLowerCase();
		if(search){
			return invoices.filter(invoice => {
				return invoice.customer.fullName.toLowerCase().includes(search) || 
							 zeroPad((invoice.invoiceId).toString()).includes(search) || 
							 (invoice.grandTotal).toString().includes(search)
			});
		}else{
			return invoices;
		}
	}

	const renderInvoices = () => {
		return filterInvoices().map(invoice => 
			<InvoiceSnapshot key={invoice._id} invoice={invoice} />
		)
	}

	return (
		<div className={classes.InvoiceList}>
			{invoicesExist && 
				<div>
					<div className={classes['InvoiceList-search']}>
						<img src={searchIcon} alt="search icon" className={classes['InvoiceList-searchIcon']}/>
						<input className={classes['InvoiceList-searchInput']} type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..."/>
					</div>
					<div className={classes['InvoiceList-heading']}>
						<span className={classes['InvoiceList-heading-text']}>invoices</span>
						<span className={classes['InvoiceList-heading-separator']}>-</span>
						<span className={classes['InvoiceList-heading-count']}>{filterInvoices().length}</span>
					</div>
					{
						renderInvoices()
					}
				</div>
			}
		</div>
	)
}

InvoiceList.propTypes = {
	invoicesExist: PropTypes.bool
}

export default InvoiceList;
