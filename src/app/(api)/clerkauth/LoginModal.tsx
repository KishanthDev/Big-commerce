'use client';

import React, { useState, useEffect } from 'react';
import { useUser, useClerk, useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import LoginForm from './LoginForm';
import OtpForm from './OtpForm';
import ModalWrapper from './ModalWrapper';

const LoginModal: React.FC = () => {
  // State for modal visibility and type
  const [isOpen, setIsOpen] = useState(true);
  const [modalType, setModalType] = useState<'login' | 'otp'>('login');
  // State for mobile number
  const [mobileNumber, setMobileNumber] = useState('');
  // State for OTP input
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  // State for resend timer
  const [timer, setTimer] = useState(49);
  // State to simulate logged-in state
  const [isSimulatedLoggedIn, setIsSimulatedLoggedIn] = useState(false);

  // Clerk hooks
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  // Router for navigation
  const router = useRouter();

  // Hardcoded OTP for testing
  const HARDCODED_OTP = '123456';

  // Debug state changes
  useEffect(() => {
    console.log('isSimulatedLoggedIn:', isSimulatedLoggedIn, 'isSignedIn:', isSignedIn);
  }, [isSimulatedLoggedIn, isSignedIn]);

  // Timer effect for OTP resend
  useEffect(() => {
    if (modalType === 'otp' && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [modalType, timer]);

  // Handle login submission for OTP
  const handleLoginSubmit = async () => {
    if (mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      // Simulate OTP sending
      console.log(`Simulating OTP send for +91${mobileNumber}. Use OTP: ${HARDCODED_OTP}`);
      setModalType('otp');
      setTimer(49);
    } catch (error) {
      console.error('Error initiating OTP login:', error);
      let errorMessage = 'Unknown error';
      if (typeof error === 'object' && error !== null && 'errors' in error && Array.isArray((error as any).errors)) {
        errorMessage = (error as any).errors[0]?.message || 'Unknown error';
      }
      alert(`Failed to send OTP: ${errorMessage}. Using simulated OTP for testing.`);
      setModalType('otp');
      setTimer(49);
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      alert('Please enter a valid 6-digit OTP.');
      return;
    }

    try {
      // Verify hardcoded OTP
      if (otpValue === HARDCODED_OTP) {
        setIsOpen(false);
        setModalType('login');
        setMobileNumber('');
        setOtp(['', '', '', '', '', '']);
        setIsSimulatedLoggedIn(true); // Set logged-in state
        console.log('OTP verified, setting isSimulatedLoggedIn to true');
        alert('OTP verified successfully!');
        router.push('/category?pincode=573201');
        return;
      } else {
        throw new Error('Invalid OTP entered.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      let errorMessage = 'Please try again.';
      if (typeof error === 'object' && error !== null && 'message' in error) {
        errorMessage = (error as { message?: string }).message || 'Please try again.';
      }
      alert(`Invalid OTP: ${errorMessage}`);
    }
  };

  // Handle resend OTP
  const handleResendOtp = async () => {
    if (mobileNumber.length !== 10) {
      alert('Invalid mobile number.');
      return;
    }

    try {
      // Simulate OTP resend
      console.log(`Simulating OTP resend for +91${mobileNumber}. Use OTP: ${HARDCODED_OTP}`);
      setTimer(49);
      setOtp(['', '', '', '', '', '']);
    } catch (error) {
      console.error('Error resending OTP:', error);
      let errorMessage = 'Unknown error';
      if (typeof error === 'object' && error !== null && 'errors' in error && Array.isArray((error as any).errors)) {
        errorMessage = (error as any).errors[0]?.message || 'Unknown error';
      }
      alert(`Failed to resend OTP: ${errorMessage}. Using simulated OTP for testing.`);
      setTimer(49);
      setOtp(['', '', '', '', '', '']);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut();
      setIsSimulatedLoggedIn(false); // Reset state
      console.log('Logged out, isSimulatedLoggedIn set to false');
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Failed to sign out.');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {(isSignedIn || isSimulatedLoggedIn) ? (
        <div className="flex items-center space-x-4">
          <p className="text-green-600 text-sm font-medium">Successfully logged in!</p>
          <button
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => {
            setIsOpen(true);
            console.log('Opening modal');
          }}
        >
          Login/Signup
        </button>
      )}

      {isOpen && (
        <ModalWrapper setIsOpen={setIsOpen} setModalType={setModalType} setMobileNumber={setMobileNumber} setOtp={setOtp}>
          {modalType === 'login' ? (
            <LoginForm
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
              handleLoginSubmit={handleLoginSubmit}
              setIsOpen={setIsOpen}
            />
          ) : (
            <OtpForm
              mobileNumber={mobileNumber}
              otp={otp}
              setOtp={setOtp}
              timer={timer}
              handleOtpSubmit={handleOtpSubmit}
              handleResendOtp={handleResendOtp}
              setModalType={setModalType}
            />
          )}
        </ModalWrapper>
      )}
    </div>
  );
};

export default LoginModal;