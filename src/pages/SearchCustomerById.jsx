import { useState } from 'react';
import { searchCustomerById } from '../services/customerApi';

const SearchCustomerById = () => {
  const [id, setId] = useState('');
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomer(null);
    setError('');

    if (!id || isNaN(Number(id))) {
      setError('Please enter a valid numeric ID.');
      return;
    }

    setLoading(true);
    try {
      const data = await searchCustomerById(Number(id));
      if (!data) {
        setError('Customer not found.');
      } else {
        setCustomer(data);
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          'Failed to search customer. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-4 sm:mt-6 md:mt-10 bg-white shadow rounded-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Search Customer by ID
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ID
          </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="mb-4 rounded-md p-3 text-sm bg-red-50 text-red-700 border border-red-200">
          {error}
        </div>
      )}

      {customer && (
        <div className="mt-4 border border-gray-200 rounded-md p-4 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Customer Details
          </h3>
          <dl className="text-sm text-gray-700 space-y-1">
            <div>
              <dt className="font-semibold inline">ID:</dt>{' '}
              <dd className="inline">{customer.id}</dd>
            </div>
            <div>
              <dt className="font-semibold inline">Name:</dt>{' '}
              <dd className="inline">{customer.name}</dd>
            </div>
            <div>
              <dt className="font-semibold inline">Mobile:</dt>{' '}
              <dd className="inline">{customer.mob}</dd>
            </div>
            <div>
              <dt className="font-semibold inline">Address:</dt>{' '}
              <dd className="inline">{customer.address}</dd>
            </div>
            <div>
              <dt className="font-semibold inline">Total:</dt>{' '}
              <dd className="inline">{customer.total}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
};

export default SearchCustomerById;

