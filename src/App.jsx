import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';
import AddCustomer from './pages/AddCustomer';
import ViewCustomers from './pages/ViewCustomers';
import SearchCustomerById from './pages/SearchCustomerById';
import SearchCustomerByMobile from './pages/SearchCustomerByMobile';
import DeleteCustomer from './pages/DeleteCustomer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/add" element={<AddCustomer />} />
          <Route path="/view" element={<ViewCustomers />} />
          <Route path="/search-by-id" element={<SearchCustomerById />} />
          <Route path="/search-by-mob" element={<SearchCustomerByMobile />} />
          <Route path="/delete" element={<DeleteCustomer />} />
        </Routes>
      </main>
      {/* <footer className="py-4 text-center text-xs text-gray-500">
        Customer CRUD &copy; {new Date().getFullYear()}
      </footer> */}
    </div>
  );
};

export default App;

