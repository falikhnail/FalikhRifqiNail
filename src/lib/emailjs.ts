import emailjs from 'emailjs-com';

// Initialize EmailJS
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  if (publicKey && publicKey !== 'your_public_key_here') {
    emailjs.init(publicKey);
    console.log('EmailJS initialized');
  } else {
    console.warn('EmailJS public key not configured');
  }
};

// Send email using EmailJS
export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Check if EmailJS is configured
  if (!publicKey || publicKey === 'your_public_key_here' ||
      !serviceId || serviceId === 'your_service_id_here' ||
      !templateId || templateId === 'your_template_id_here') {
    return {
      success: false,
      message: 'Email service not configured. Please contact the administrator.'
    };
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return {
      success: true,
      message: 'Email sent successfully!'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.'
    };
  }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form data
export const validateFormData = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.subject.trim()) {
    errors.push('Subject is required');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.length < 10) {
    errors.push('Message should be at least 10 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};