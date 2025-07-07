import emailjs from 'emailjs-com';

export function sendContactEmail(values) {
  return emailjs.send(
    'service_rlcjfxe', // Reemplaza por tu Service ID
    'template_2tzk7kd', // Reemplaza por tu Template ID
    {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    },
    'E-qByMnH3tR3va7t-' // Reemplaza por tu User ID (o Public Key)
  );
}
