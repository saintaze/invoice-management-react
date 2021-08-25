
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import InvoiceList from './components/InvoiceList/InvoiceList';
import Invoice from './components/Invoice/Invoice';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

import classes from './App.module.scss';


function App() {
	const invoices = useSelector(state => state.invoice.allInvoices);

  return (
    <div className={classes.App}>
			<Modal />
			<Alert />
			<Navbar />
			<div className={classes['App-content']}>
				<InvoiceList invoicesExist={!!invoices.length}/>
				<Invoice invoicesExist={!!invoices.length}/>
			</div>
    </div>
  );
}

export default App;
