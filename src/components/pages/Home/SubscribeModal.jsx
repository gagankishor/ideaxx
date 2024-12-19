import { useState } from 'react';
import { X, Mail, CheckCircle, Loader } from 'lucide-react';
import PropTypes from 'prop-types';

const SubscribeModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Close modal after 2 seconds on success
      setTimeout(() => {
        onRequestClose();
        setStatus('idle');
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white text-center rounded-xl p-8 max-w-md mx-auto relative shadow-xl transform transition-all">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center space-y-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail size={24} className="text-blue-600" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Get Latest Updates</h2>
            <p className="text-gray-600 max-w-sm">
              Join our newsletter and never miss out on exclusive content, updates, and special offers.
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center space-y-3 py-4">
              <CheckCircle size={48} className="text-green-500" />
              <div className="text-green-600 font-medium">
                Thanks for subscribing!
              </div>
              <p className="text-sm text-gray-500">
                Check your inbox to confirm your subscription.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-11 transition-all duration-200"
                />
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </form>
          )}

          <p className="text-xs text-gray-500">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
SubscribeModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };
export default SubscribeModal;