import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
emailjs.init("ndqVQL5a4jQKAgomK");

createRoot(document.getElementById("root")!).render(<App />);