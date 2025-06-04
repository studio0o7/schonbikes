interface EmailData {
  subject: string;
  message: string;
  htmlMessage?: string;
  to?: string;
}

/**
 * Sends an email using the email API endpoint
 * @param data Email data object containing subject, message, and optional htmlMessage and to fields
 * @returns Promise with the response data
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error || 'Failed to send email');
    }

    return responseData;
  } catch (error) {
    console.error('Error in sendEmail utility:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Example usage for contact form:
 * 
 * const sendContactForm = async (formData: ContactFormData) => {
 *   const emailData = {
 *     subject: `New Contact Form Submission: ${formData.name}`,
 *     message: `
 *       Name: ${formData.name}
 *       Email: ${formData.email}
 *       Phone: ${formData.phone || 'Not provided'}
 *       Message: ${formData.message}
 *     `,
 *   };
 *   
 *   return await sendEmail(emailData);
 * };
 */ 