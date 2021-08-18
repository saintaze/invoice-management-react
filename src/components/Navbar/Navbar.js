import React from 'react'
import PropTypes from 'prop-types'

import classes from './Navbar.module.scss';
import plusImage from '../../images/plus-white@3x.png';

const Navbar = props => {
	return (
		<div className={classes.Navbar}>
			<span className={classes['Navbar-brand']}>Dashboard</span>
			<button className={classes['Navbar-addInvoiceBtn']}>
				{/* <img className={classes['Navbar-plusImage']} src={plusImage} alt="plusImage" /> */}
				&#43;
			</button>
		</div>
	)
}

Navbar.propTypes = {

}

export default Navbar
