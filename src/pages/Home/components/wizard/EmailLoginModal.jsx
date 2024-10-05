import React from 'react';
import Modal from 'react-modal';
import { FaRedo } from 'react-icons/fa';

const EmailLoginModal = ({
  isOpen,
  email,
  handleEmailChange,
  isOtpSent,
  otp,
  handleOtpChange,
  handleSendOtp,
  handleEmailLogin,
  closeModal,
  loadingSendOtp,
  loadingEmailLogin,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Email Sign Up"
      ariaHideApp={false}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2 className="modal-title">Sign Up with Email</h2>
        <form onSubmit={(e) => e.preventDefault()} className="modal-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          {isOtpSent && (
            <>
              <p className="otp-message">OTP has been sent to your email</p>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    className="otp-input"
                    id={`otp-input-${index}`}
                  />
                ))}
              </div>
              <p className="resend-message">
                Didn't get OTP? Resend after 10 seconds
                <div className="btn resend-btn">
                  ReSend <FaRedo />
                </div>
              </p>
            </>
          )}

          <div className="button-container">
            {isOtpSent ? (
              loadingEmailLogin ? (
                <div className="spinner" />
              ) : (
                <button
                  type="button"
                  onClick={handleEmailLogin}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              )
            ) : loadingSendOtp ? (
              <div className="spinner" />
            ) : (
              <button
                type="button"
                onClick={handleSendOtp}
                className="btn btn-primary"
              >
                Send OTP
              </button>
            )}
            <button onClick={closeModal} className="btn btn-secondary">
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EmailLoginModal;
