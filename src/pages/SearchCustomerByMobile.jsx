import { useState } from 'react';
import { searchCustomerByMobile } from '../services/customerApi';

const SearchCustomerByMobile = () => {
  const [mob, setMob] = useState('');
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomers([]);
    setError('');

    if (!mob.trim()) {
      setError('Please enter a mobile number.');
      return;
    }

    setLoading(true);
    try {
      const data = await searchCustomerByMobile(mob.trim());
      const list = Array.isArray(data) ? data : data ? [data] : [];
      if (list.length === 0) {
        setError('No customers found for this mobile number.');
      } else {
        setCustomers(list);
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
        Search Customer by Mobile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
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

      {customers.length > 0 && (
        <div className="mt-4 border border-gray-200 rounded-md p-4 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Matching Customers
          </h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-600">
                    ID
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-600">
                    Name
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-600">
                    Mobile
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-600 hidden sm:table-cell">
                    Address
                  </th>
                  <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-600">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((c) => (
                  <tr key={c.id}>
                    <td className="px-2 sm:px-3 py-2">{c.id}</td>
                    <td className="px-2 sm:px-3 py-2">{c.name}</td>
                    <td className="px-2 sm:px-3 py-2">{c.mob}</td>
                    <td className="px-2 sm:px-3 py-2 hidden sm:table-cell">{c.address}</td>
                    <td className="px-2 sm:px-3 py-2">{c.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCustomerByMobile;

