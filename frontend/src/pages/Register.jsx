import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm mx-auto text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
      <p className="text-gray-300 mb-6">{message}</p>
      <button
        onClick={onClose}
        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
);

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: 'intern' });
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/register`, form);
      toast.success('Registration successful!');
      setForm({ name: '', email: '', phone: '', role: '' }); // Reset form
      setShowModal(true);
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleModalClose = () => {
      setShowModal(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  return (
    <>
    {/* Conditionally render the modal on top of the page */}
    {showModal && (
      <SuccessModal 
        message="Thank you for registering! We'll reach out to you through email shortly."
        onClose={handleModalClose}
      />
    )}
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              placeholder="Your Name"
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-300">Select Role</label>
            <select
              name="role"
              id="role"
              value={form.role}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="intern">Intern</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="space-y-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            
            {/* Add the Back Button */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full px-4 py-2 font-semibold text-gray-300 bg-transparent border border-gray-600 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Back to Home
            </button>
            </div>
        </form>
      </div>
    </div>
    </>
  );
}