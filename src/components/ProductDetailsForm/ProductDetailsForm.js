import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import enterImage from '../../images/enter-icon@2x.png';
import editImage from '../../images/edit@2x.png';
import { createInvoice } from '../../store/slices/invoiceSlice';
import { formatCommaSeparated, zeroPad } from '../../utils/helpers';
import { showAlert } from '../../store/slices/alertSlice';
import { TransitionGroup } from 'react-transition-group';
import validator from '../../utils/validator';
import Transition from '../Transition/Transition';
import classes from './ProductDetailsForm.module.scss';


const ProductDetailsForm = ({closeModal}) => {
	const dispatch = useDispatch();
	const invoiceState = useSelector(state => state.invoice);
	const {customerInfo: customer, allInvoices: invoices} = invoiceState;

	const [products, setProducts] = useState([]);

	const productFormInitialState = {name: '', quantity: '', price: ''};
	const [productForm, setProductForm] = useState(productFormInitialState);
	const {name, quantity, price} = productForm;

	const metaFormInitialState = {tax: '', discount: ''};
	const [metaForm, setMetaForm] = useState(metaFormInitialState);
	const {tax, discount} = metaForm;

	const productsSumRef = useRef(0);
	const grandTotalRef = useRef(0);
	const taxAmountRef = useRef(0);
	const discountAmountRef = useRef(0);

	const handleProductInputChange = (e) => {
		setProductForm({...productForm, [e.target.id]: e.target.value});
	}

	const handleMetaInputChange = (e) => {
		const taxAndDiscount = {...metaForm, [e.target.id]: e.target.value};
		if(validateForm(taxAndDiscount)){
			calcGrandTotal(taxAndDiscount);
			setMetaForm(taxAndDiscount);
		}
	}

	const calcGrandTotal = ({tax, discount}) => {
		tax = isNaN(parseFloat(tax)) ? 0 : parseFloat(tax); 
		discount = isNaN(parseFloat(discount)) ? 0 : parseFloat(discount); 
		taxAmountRef.current = (productsSumRef.current * tax) / 100;
		const taxedTotal = taxAmountRef.current + productsSumRef.current;
		discountAmountRef.current = (taxedTotal * discount) / 100;
		grandTotalRef.current = taxedTotal - discountAmountRef.current;
	}

	const addNewProduct = (e) => {
		if(validateProductDetails()){
			productsSumRef.current += parseFloat(price);
			calcGrandTotal({tax, discount});
			setProducts([...products, {name, quantity, price}]);
			setProductForm(productFormInitialState);
		}
	}

	const saveInvoice = (e) => {
		if(validateForm({tax, discount})){
			dispatch(createInvoice({products, metaForm, customer}));
			closeModal();
		}
	}

	const validateProductDetails = () => {
		if(!validator.isPresent(name)){
			dispatch(showAlert({message: 'Product Name is required.'}));
			return false;
		}

		if(!validator.isPresent(quantity)){
			dispatch(showAlert({message: 'Quantity is required.'}));
			return false
		}

		if(!validator.isPresent(price)){
			dispatch(showAlert({message: 'Price is required.'}));
			return false
		}

		if(validator.exceedsMaxLength(name, 30)){
			dispatch(showAlert({message: 'Product name must not exceed 30 characters.'}));
			return false
		}

		if(!validator.isInteger(quantity)){
			dispatch(showAlert({message: 'Quantity must be an integer.'}));
			return false;
		}

		if(validator.isBiggerThan(quantity, 10000)){
			dispatch(showAlert({message: 'Quantity must not exceed 10,000.'}));
			return false;
		}

		if(validator.isBiggerThan(price, 1000000)){
			dispatch(showAlert({message: 'Price must not exceed a million.'}));
			return false;
		}

		if(validator.isZero(quantity) || validator.isZero(price)){
			dispatch(showAlert({message: 'Numeric value must not be zero.'}));
			return false;
		}

		if(validator.isNegativeNumber(quantity) || validator.isNegativeNumber(price)){
			dispatch(showAlert({message: 'Numeric values must not be negative.'}));
			return false;
		}

		if(!validator.isNumber(quantity) || !validator.isNumber(price)){
			dispatch(showAlert({message: 'Numeric values must be a valid number.'}));
			return false;
		}
		return true;
	}


	const validateForm = ({tax, discount}) => {
		if(!products.length){
			dispatch(showAlert({message: 'Atleast 1 product must be added.'}));
			return false;
		}

		if(!validator.isNumber(tax || 0) || !validator.isNumber(discount || 0)){
			dispatch(showAlert({message: 'Numeric values must be a valid number.'}));
			return false;
		}

		if(validator.isNegativeNumber(tax || 0) || validator.isNegativeNumber(discount || 0) ){
			dispatch(showAlert({message: 'Numeric values must not be negative.'}));
			return false;
		}

		if(validator.isBiggerThan(tax, 100) || validator.isBiggerThan(discount, 100)){
			dispatch(showAlert({message: 'Tax or Discount must not exceed 100%.'}));
			return false;
		}
		return true;
	}

	const renderProductRow = () => {
		return products.map((product, i) => 
			<Transition key={i} >
				<div className={classes['ProductDetails-tableBodyRow']}>
					<span className={classes['ProductDetails-col1']}>{product.name}</span>
					<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-col2']}`}>{product.quantity}</span>
					<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-col3']}`}>
						{formatCommaSeparated(product.price,false, true)}
					</span>
				</div>
			</Transition>
		)
	}

	return (
		<div className={classes.ProductDetails}>
			<div className={classes['ProductDetails-header']}>
				<div className={classes['ProductDetails-headerLeft']}>
					<div className={classes['ProductDetails-headerTopRowLeft']}>
						<span className={classes['ProductDetails-heading']}>create new invoice</span>
						<span className={classes['ProductDetails-orderNumber']}>order no: {zeroPad(invoices.length + 1)}</span>
					</div>
					<div className={classes['ProductDetails-headerBottomRowLeft']}>
						<span className={classes['ProductDetails-formType']}>product details</span>
					</div>
				</div>
				<div className={classes['ProductDetails-headerRight']}>
					<div>
						<div className={classes['ProductDetails-detailsBox']}>
							<div className={classes['ProductDetails-detailsLabel']}>customer details</div>
							<div className={classes['ProductDetails-customerName']}>{customer.fullName}</div>
							<div className={classes['ProductDetails-email']}>{customer.email}</div>
						</div>
					</div>
					<div  className={classes['ProductDetails-actions']}>
						<button className={classes['ProductDetails-edit']}>
							<img className={classes['ProductDetails-editImage']} src={editImage} alt="editImage" />
						</button>
						<span className={classes['ProductDetails-close']} onClick={closeModal}>&times;</span>
					</div>
				</div>
			</div>
			<div className={classes['ProductDetails-body']}>
				<div className={classes['ProductDetails-table']}>
					<div className={classes['ProductDetails-tableHeaderRow']}>
						<span className={`${classes['ProductDetails-nameLabel']} ${classes['ProductDetails-col1']}`}>item</span>
						<span className={`${classes['ProductDetails-quantityLabel']} ${classes['ProductDetails-col2']}`}>quantity</span>
						<span className={`${classes['ProductDetails-priceLabel']} ${classes['ProductDetails-col3']}`}>price - &#8377;</span>
					</div>
					<div className={classes['ProductDetails-scrollable']}>
						<TransitionGroup>
							{renderProductRow()}
						</TransitionGroup>
					</div>
					<div className={`${classes['ProductDetails-tableBodyRow']} ${classes['ProductDetails-tableBodyRowCreate']} `}>
						<span className={classes['ProductDetails-colCreate1']}>
							<input className={classes['ProductDetails-createName']} id="name" type="text" placeholder="Please enter Item Name"  value={name} onChange={handleProductInputChange}/>
						</span>
						<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-colCreate2']}`}>
							<input className={classes['ProductDetails-createQuantity']} id="quantity" type="text" placeholder="0.00" value={quantity} onChange={handleProductInputChange}/>
						</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-colCreate3']}`}>
							<input className={classes['ProductDetails-createPrice']} id="price" type="text" placeholder="0.00" value={price} onChange={handleProductInputChange}/>
						</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-colCreate4']}`}>
							<button className={classes['ProductDetails-createBtn']} onClick={addNewProduct}>
								<img className={classes['ProductDetails-enterImage']} src={enterImage} alt="enterImage" />
							</button>
						</span>
					</div>
					<div className={classes['ProductDetails-tableFooterRow']}>
						<div className={classes['ProductDetails-taxDiscountWrapper']}>
							<span className={classes['ProductDetails-formControlMetaWrapper']}>
								<input className={classes['ProductDetails-createTax']} type="text" id="tax" placeholder="Tax" value={tax} onChange={handleMetaInputChange}/>
								<span className={classes['ProductDetails-formControlAddon']}>%</span>
							</span>
							<span className={classes['ProductDetails-formControlMetaWrapper']}>
								<input className={classes['ProductDetails-createDiscount']} id="discount" type="text" placeholder="Discount" value={discount} onChange={handleMetaInputChange}/>
								<span className={classes['ProductDetails-formControlAddon']}>&#37;</span>
							</span>
						</div>
						<div className={classes['ProductDetails-subTotalWrapper']}>
							<span className={classes['ProductDetails-subTotalLabel']}>Sub Total</span>
							<span className={classes['ProductDetails-subTotalVal']}>&#8377; {formatCommaSeparated(productsSumRef.current)}</span>
						</div>
					</div>
				</div>
			</div>
			<div className={classes['ProductDetails-footer']}>
				<div className={classes['ProductDetails-footerLeft']}>
					<div className={classes['ProductDetails-TaxDiscountValWrapper']}>
						<span className={classes['ProductDetails-TaxDiscountLabel']}>Tax</span>
						<span className={classes['ProductDetails-TaxDiscountVal']}>&#8377; {formatCommaSeparated(isNaN(parseFloat(tax)) ? 0 : parseFloat(tax), false)}</span>
					</div>
					<div className={classes['ProductDetails-TaxDiscountValWrapper']}>
						<span className={classes['ProductDetails-TaxDiscountLabel']}>Discount</span>
						<span className={classes['ProductDetails-TaxDiscountVal']}>&#8377; {formatCommaSeparated(isNaN(parseFloat(discount)) ? 0 : parseFloat(discount) )}</span>
					</div>
				</div>
				<div className={classes['ProductDetails-footerRight']}>
					<div className={classes['ProductDetails-GrandTotalWrapper']}>
						<span className={classes['ProductDetails-GrandTotalLabel']}>Grand Total</span>
						<span className={classes['ProductDetails-GrandTotalVal']}>&#8377; {formatCommaSeparated(grandTotalRef.current)}</span>
					</div>
					<button className={classes['ProductDetails-proceedBtn']} onClick={saveInvoice}>save</button>
				</div>
			</div>
		</div>
	)
}

ProductDetailsForm.propTypes = {
	closeModal: PropTypes.func
}

export default ProductDetailsForm
