// src/pages/Login.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amzpijkhtwkimdyuiiox.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtenBpamtodHdraW1keXVpaW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMDkwODgsImV4cCI6MjA3MDc4NTA4OH0.Z0mahIN_tKX6P1sxrepvzDDGqV0rTCYFvuzrK3bpXDU'; // Replace this with the actual anon key from your image
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/dashboard'); // Redirect after login
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          navigate('/dashboard');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        'https://copage.vercel.app',
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Login to Copage</h1>
        <button
          onClick={handleLogin}
          className="bg-brand hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
