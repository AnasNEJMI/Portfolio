import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, email, subject,message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h1>email : {email}</h1>
      <h1>subject : {subject}</h1>
      <h1>message : {message}</h1>
    </div>
  );
}