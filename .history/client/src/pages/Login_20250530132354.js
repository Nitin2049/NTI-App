import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';

export default function LoginWithGoogle() {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('Google Sign-In clicked');
    // TODO: integrate Google OAuth flow
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-100 d-flex justify-content-center mb-2">
      <button
        type="submit"
        className="btn btn-danger text-light w-75 d-flex align-items-center justify-content-center gap-2"
      >
        <span>Sign-in with Google</span>
        <FaGoogle />
      </button>
    </form>
  );
}