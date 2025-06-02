import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = ({ setDato }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const listener = window.addEventListener('login', (e) => {
            console.log('Login event received:', e.detail);
            navigate('/atendidos');
             setDato(e.detail);
        });
        return () => {
            window.removeEventListener('login', listener);
        };
    }, []);
    return (
        null
    )
}

export default Auth


// const [isLoginMicrofrontendAvailable, setIsLoginMicrofrontendAvailable] =
//     useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const navigate = useNavigate();
//     useEffect(() => {
//         const checkMicrofrontend = async () => {
//         try {
//             const response = await fetch("http://localhost:3004/", {
//             method: "HEAD",
//             });

//             if (response.ok) {
//             setIsLoginMicrofrontendAvailable(true);
//             }
//         } catch (error) {
//             console.error(
//             "Error checking microfrontend availability:",
//             error.message
//             );
//             setIsLoginMicrofrontendAvailable(false);
//         } finally {
//             setIsLoading(false);
//         }
//         };

//         checkMicrofrontend();

//         const handleMessage = (event) => {
//         if (event.origin === "http://localhost:3004") {
//             if (event.data.type === "LOGIN_SUCCESS") {
//             onLoginSuccess && onLoginSuccess(event.data.user);
//             }
//         }
//         };

//         window.addEventListener("message", handleMessage);
//         return () => window.removeEventListener("message", handleMessage);
//     }, [onLoginSuccess]);