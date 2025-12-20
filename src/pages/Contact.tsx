import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import type { ContactFormData } from '../types';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Check if we're in development mode
      const isDevelopment = import.meta.env.DEV;

      if (isDevelopment) {
        // Simulate API call delay for development
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock successful response for development
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
        setIsSubmitting(false);
        return;
      }

      // Production API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: <FiPhone />,
      label: 'Availability',
      value: personalInfo.availability,
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-slate-300">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          {import.meta.env.DEV && (
            <p className="text-sm text-amber-600 mt-4 bg-amber-50 px-4 py-2 rounded-lg inline-block dark:bg-amber-500/10 dark:text-amber-300">
              🔧 Development Mode: Form will simulate sending (emails work in production)
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-slate-100">Let's talk about everything!</h3>
            <p className="text-gray-600 mb-8 xl:text-lg dark:text-slate-300">
              Don't hesitate to reach out if you have any questions or just want to connect.
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4 dark:bg-primary-500/20 dark:text-primary-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 dark:text-slate-100">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-primary-600 transition-colors dark:text-slate-300 dark:hover:text-primary-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 xl:text-lg dark:text-slate-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 hidden md:block"
            >
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl flex items-center justify-center dark:from-primary-500/20 dark:to-purple-500/20">
                <div className="text-6xl">📬</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-slate-200">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-primary-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-slate-200">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-primary-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-slate-200">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-primary-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-medium transition-all flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed dark:bg-slate-700'
                    : submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  '✗ Try Again'
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center text-sm font-medium dark:text-green-400"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center text-sm font-medium dark:text-red-400"
                >
                  {errorMessage || 'Something went wrong. Please try again.'}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
