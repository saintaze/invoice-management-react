
import Navbar from './components/Navbar/Navbar';
import InvoiceList from './components/InvoiceList/InvoiceList';

import classes from './App.module.scss';
import Invoice from './components/Invoice/Invoice';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
			<Modal />
			<Navbar />
			<div className={classes['App-content']}>
				<InvoiceList />
				<Invoice />
			</div>
    </div>
  );
}

export default App;
