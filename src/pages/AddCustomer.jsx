import { useState } from 'react';
import { addCustomer } from '../services/customerApi';

const initialForm = {
  id: '',
  name: '',
  mob: '',
  address: '',
  total: ''
};

const AddCustomer = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.id || isNaN(Number(form.id))) {
      newErrors.id = 'ID is required and must be a number.';
    }
    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!form.mob.trim()) {
      newErrors.mob = 'Mobile number is required.';
    }
    if (!form.address.trim()) {
      newErrors.address = 'Address is required.';
    }
    if (form.total === '' || isNaN(Number(form.total))) {
      newErrors.total = 'Total is required and must be a number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) return;

    setLoading(true);
    try {
      await addCustomer({
        id: Number(form.id),
        name: form.name.trim(),
        mob: form.mob.trim(),
        address: form.address.trim(),
        total: parseFloat(form.total)
      });
      setStatus({ type: 'success', message: 'Customer added successfully.' });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error?.response?.data?.message ||
          'Failed to add customer. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-4 sm:mt-6 md:mt-10 bg-white shadow rounded-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Add Customer
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
            name="id"
            value={form.id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base sm:text-sm"
          />
          {errors.id && (
            <p className="mt-1 text-xs text-red-600">{errors.id}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base sm:text-sm"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            name="mob"
            value={form.mob}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base sm:text-sm"
          />
          {errors.mob && (
            <p className="mt-1 text-xs text-red-600">{errors.mob}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base sm:text-sm"
          />
          {errors.address && (
            <p className="mt-1 text-xs text-red-600">{errors.address}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total
          </label>
          <input
            type="number"
            step="0.01"
            name="total"
            value={form.total}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base sm:text-sm"
          />
          {errors.total && (
            <p className="mt-1 text-xs text-red-600">{errors.total}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
        >
          {loading ? 'Saving...' : 'Save Customer'}
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;

