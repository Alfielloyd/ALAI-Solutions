import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ProductWaitlist() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="mb-8 flex justify-center">
              <Clock className="h-16 w-16 text-indigo-600 animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're working hard to bring this product to you. Join our waitlist to be the first to know when it launches!
            </p>
            <form className="max-w-md mx-auto mb-8">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
            <button
              onClick={() => navigate(-1)}
              className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center justify-center"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}