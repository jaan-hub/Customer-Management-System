import { useState } from 'react';
import { deleteCustomer } from '../services/customerApi';

const DeleteCustomer = () => {
  const [id, setId] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!id || isNaN(Number(id))) {
      setStatus({ type: 'error', message: 'Please enter a valid numeric ID.' });
      return;
    }

    setLoading(true);
    try {
      await deleteCustomer(Number(id));
      setStatus({
        type: 'success',
        message: `Customer with ID ${id} deleted (if it existed).`
      });
      setId('');
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          err?.response?.data?.message ||
          'Failed to delete customer. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-4 sm:mt-6 md:mt-10 bg-white shadow rounded-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Delete Customer
      </h2>
      {status.message && (
        <div
          className={`mb-4 rounded-md p-3 text-sm ${
            status.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-60"
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </form>
    </div>
  );
};

export default DeleteCustomer;

