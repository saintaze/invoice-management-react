import React from 'react'
import PropTypes from 'prop-types'
import classes from './ProductDetails.module.scss'

import enterImage from '../../images/enter-icon@2x.png';
import editImage from '../../images/edit@2x.png';

const ProductDetails = props => {
	return (
		<div className={classes.ProductDetails}>


			<div className={classes['ProductDetails-header']}>
				<div className={classes['ProductDetails-headerLeft']}>
					<div className={classes['ProductDetails-headerTopRowLeft']}>
						<span className={classes['ProductDetails-heading']}>create new invoice</span>
						<span className={classes['ProductDetails-orderNumber']}>order no: 1234</span>
					</div>
					<div className={classes['ProductDetails-headerBottomRowLeft']}>
						<span className={classes['ProductDetails-formType']}>product details</span>
					</div>
				</div>

				<div className={classes['ProductDetails-headerRight']}>
					<div>
						<div className={classes['ProductDetails-detailsBox']}>
							<div className={classes['ProductDetails-detailsLabel']}>customer details</div>
							<div className={classes['ProductDetails-customerName']}>john doe</div>
							<div className={classes['ProductDetails-email']}>jogn@srrvice.com</div>
						</div>
					</div>

					<div  className={classes['ProductDetails-actions']}>
						<button className={classes['ProductDetails-edit']}>
							<img className={classes['ProductDetails-editImage']} src={editImage} alt="editImage" />
						</button>
						<span className={classes['ProductDetails-close']}>&times;</span>
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
					
				{/* loop */}
				<div className={classes['ProductDetails-scrollable']}>
					<div className={classes['ProductDetails-tableBodyRow']}>
						<span className={classes['ProductDetails-col1']}>prawn and chicken sui mai</span>
						<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-col2']}`}>2</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-col3']}`}>430.00</span>
					</div>
					<div className={classes['ProductDetails-tableBodyRow']}>
						<span className={classes['ProductDetails-col1']}>prawn and chicken sui mai</span>
						<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-col2']}`}>2</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-col3']}`}>430.00</span>
					</div>

					<div className={classes['ProductDetails-tableBodyRow']}>
						<span className={classes['ProductDetails-col1']}>long product name with two lines</span>
						<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-col2']}`}>3</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-col3']}`}>430.00</span>
					</div>

					<div className={classes['ProductDetails-tableBodyRow']}>
						<span className={classes['ProductDetails-col1']}>prawn and chicken sui mai</span>
						<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-col2']}`}>2</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-col3']}`}>430.00</span>
					</div>

					</div>

					{/* loop */}

					{/* create row */}
					<div className={`${classes['ProductDetails-tableBodyRow']} ${classes['ProductDetails-tableBodyRowCreate']} `}>
						<span className={classes['ProductDetails-colCreate1']}>
							<input className={classes['ProductDetails-createName']} type="text" placeholder="Please enter Item Name"/>
						</span>
						<span className={`${classes['ProductDetails-quantity']} ${classes['ProductDetails-colCreate2']}`}>
							<input className={classes['ProductDetails-createQuantity']} type="text" placeholder="0.00"/>
						</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-colCreate3']}`}>
							<input className={classes['ProductDetails-createPrice']} type="text" placeholder="0.00"/>
						</span>
						<span className={`${classes['ProductDetails-price']} ${classes['ProductDetails-colCreate4']}`}>
							<button className={classes['ProductDetails-createBtn']}>
								<img className={classes['ProductDetails-enterImage']} src={enterImage} alt="" />
							</button>
						</span>
					</div>

					{/* create row */}


					<div className={classes['ProductDetails-tableFooterRow']}>
						<div className={classes['ProductDetails-taxDiscountWrapper']}>
							<span className={classes['ProductDetails-formControlMetaWrapper']}>
								<input className={classes['ProductDetails-createTax']} type="text" placeholder="Tax"/>
								<span className={classes['ProductDetails-formControlAddon']}>%</span>
							</span>
							<span className={classes['ProductDetails-formControlMetaWrapper']}>
								<input className={classes['ProductDetails-createDiscount']} type="text" placeholder="Discount"/>
								<span className={classes['ProductDetails-formControlAddon']}>&#37;</span>
							</span>
						</div>
						<div className={classes['ProductDetails-subTotalWrapper']}>
							<span className={classes['ProductDetails-subTotalLabel']}>Sub Total</span>
							<span className={classes['ProductDetails-subTotalVal']}>&#8377; 0.00</span>
						</div>
					</div>

				
				</div>

			</div>







			<div className={classes['ProductDetails-footer']}>

				<div className={classes['ProductDetails-footerLeft']}>
					<div className={classes['ProductDetails-TaxDiscountValWrapper']}>
						<span className={classes['ProductDetails-TaxDiscountLabel']}>Tax</span>
						<span className={classes['ProductDetails-TaxDiscountVal']}>&#8377;  0.00</span>
					</div>
					<div className={classes['ProductDetails-TaxDiscountValWrapper']}>
						<span className={classes['ProductDetails-TaxDiscountLabel']}>Discount</span>
						<span className={classes['ProductDetails-TaxDiscountVal']}>&#8377;  0.00</span>
					</div>
				</div>

				<div className={classes['ProductDetails-footerRight']}>
					<div className={classes['ProductDetails-GrandTotalWrapper']}>
						<span className={classes['ProductDetails-GrandTotalLabel']}>Grand Total</span>
						<span className={classes['ProductDetails-GrandTotalVal']}>&#8377;  430.00</span>
					</div>
					<button className={classes['ProductDetails-proceedBtn']}>save</button>
				</div>
			</div>



		</div>
	)
}

ProductDetails.propTypes = {

}

export default ProductDetails
