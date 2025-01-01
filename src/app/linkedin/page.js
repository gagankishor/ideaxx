export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default function LinkedInPage() {
  return null;
}


// 'use client';

// import { useContext, useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Swal from 'sweetalert2';
// import { AuthContext } from '@/context/AuthContext';
// import axios from 'axios';
// import { RestAPI } from '@/config/Api';
// export default function LinkedInCallback() {
//   const router = useRouter();
//   const searchParams = useSearchParams(); // Get search params
//   const code = searchParams?.get('code'); 
//   const { login } = useContext(AuthContext);
//   const [isProcessing, setIsProcessing] = useState(true);
//   useEffect(() => {
//     const handleCallback = async () => {
//       if (!code) {
//         Swal.fire({
//           title: 'Error',
//           text: 'No authentication code provided',
//           icon: 'error',
//           confirmButtonText: 'OK'
//         }).then(() => {
//           router.push('/login');
//         });
//         return;
//       }
//       try {
//         const response = await axios.post(`${RestAPI}/auth/login-with-linkedin`, {
//           code: code
//         });
        
//         const { token, userName, email } = response.data;
//         if (!token || !email) {
//           throw new Error('Invalid response from server');
//         }
//         login(token, email);
//         localStorage.setItem('userName', userName);
//         await Swal.fire({
//           title: 'Success!',
//           text: 'Successfully logged in with LinkedIn',
//           icon: 'success',
//           timer: 1500,
//           showConfirmButton: false
//         });
//         router.push('/');
//       } catch (error) {
//         console.error('LinkedIn login failed:', error);
//         let errorMessage = 'LinkedIn login failed';
//         if (error.response?.data?.message) {
//           errorMessage = error.response.data.message;
//         }
//         await Swal.fire({
//           title: 'Error',
//           text: errorMessage,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//         router.push('/login');
//       } finally {
//         setIsProcessing(false);
//       }
//     };
//     handleCallback();
//   }, [code]);
//   if (!isProcessing) {
//     return null;
//   }
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50">
//       <div className="text-center p-8 bg-white rounded-lg shadow-md">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">
//           Processing LinkedIn login...
//         </h2>
//         <p className="text-gray-600">
//           Please wait while we complete your authentication.
//         </p>
//       </div>
//     </div>
//   );
// }