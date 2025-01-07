import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <div className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to WhiteSoft ADS. At WhiteSoft ADS, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your personal data when you visit our website or engage with our services.
        </p>
      </div>

      <div className="privacy-section">
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> This includes, but is not limited to, your name, email address, phone number, and other contact details, which you provide voluntarily when contacting us or using our services.
          </li>
          <li>
            <strong>Log Data:</strong> We may collect information that your browser sends whenever you visit our website. This may include your IP address, browser type and version, pages you visit, the time and date of your visit, and other statistics.
          </li>
          <li>
            <strong>Cookies:</strong> We may collect information that your browser sends whenever you visit our website. This may include your IP address, browser type and version, pages you visit, the time and date of your visit, and other statistics.
          </li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use your personal information for the following purposes:</p>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To notify you about changes to our services and policies.</li>
          <li>To respond to your inquiries and requests.</li>
          <li>To improve our website and services.</li>
          <li>
            To communicate with you, including for marketing purposes if you have opted in to receive such communications.
          </li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>4. Data Sharing and Disclosure</h2>
        <p>We may share your personal information with:</p>
        <ul>
          <li>
            Service providers and third-party vendors who assist us in operating our website and delivering our services.
          </li>
          <li>Legal authorities when required to comply with applicable laws and regulations.</li>
        </ul>
        <p>We will never sell your personal information to third parties.</p>
      </div>

      <div className="privacy-section">
        <h2>5. Security</h2>
        <p>
          We take the security of your personal information seriously and implement appropriate measures to protect it. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="privacy-section">
        <h2>6. Your Choices</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li>To access, update, or correct your personal data.</li>
          <li>To withdraw your consent for marketing communications.</li>
          <li>To request the deletion of your personal information, subject to legal obligations.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
        </p>
      </div>

      <div className="privacy-section">
        <h2>7. Links to Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
        </p>
      </div>

      <div className="privacy-section">
        <h2>8. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website.
        </p>
      </div>

      <div className="privacy-section">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at our contact page on the WhiteSoft ADS website. By using our website and services, you consent to the terms outlined in this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
