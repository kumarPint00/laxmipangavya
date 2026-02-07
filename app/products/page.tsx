import { redirect } from 'next/navigation';

export default function RemediesRedirect() {
  // Remedies page removed - redirect users to contact for orders and inquiries
  redirect('/contact');
}
