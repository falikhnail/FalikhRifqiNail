import emailjs from '@emailjs/browser';

interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

interface SendEmailResult {
  success: boolean;
  message: string;
}

// Initialize EmailJS with public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

export const validateFormData = (data: { 
  name: string; 
  email: string; 
  subject: string; 
  message: string 
}): ValidationResult => {
  const errors: string[] = [];

  // Validate name
  if (!data.name || data.name.trim() === '') {
    errors.push('Name is required');
  }

  // Validate email
  if (!data.email || data.email.trim() === '') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Please enter a valid email address');
    }
  }

  // Validate subject
  if (!data.subject || data.subject.trim() === '') {
    errors.push('Subject is required');
  }

  // Validate message
  if (!data.message || data.message.trim() === '') {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message should be at least 10 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const sendEmail = async (data: EmailData): Promise<SendEmailResult> => {
  try {
    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Validate environment variables
    if (!serviceId || !templateId) {
      console.error('EmailJS configuration missing:', {
        serviceId: !!serviceId,
        templateId: !!templateId
      });
      return {
        success: false,
        message: 'Email service is not properly configured. Please contact the administrator.'
      };
    }

    // Send email
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.from_name,
        from_email: data.from_email,
        subject: data.subject,
        message: data.message,
        to_name: 'Portfolio Owner',
      }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      return {
        success: false,
        message: `Failed to send email. Status: ${response.status}`
      };
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Type-safe error handling
    if (error instanceof Error) {
      return {
        success: false,
        message: `Failed to send email: ${error.message}`
      };
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred while sending the email.'
    };
  }
};
