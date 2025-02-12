import Container from "@/components/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 font-integral">Privacy Policy</h1>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">1. Data Collection</h2>
          <p className="font-agrandir">
          We collect personal information such as name, email address, and contact details during account creation or checkout to provide a seamless shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">2. Use of Information</h2>
          <p className="font-agrandir">
          Your data is used to process orders, improve our services, and offer personalized recommendations. We do not sell or share your information with third parties without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">3. Data Protection</h2>
          <p className="font-agrandir">
          We implement strict security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">4. Cookies and Tracking</h2>
          <p className="font-agrandir">
          We use cookies to enhance your browsing experience, track website performance, and understand user preferences. You can adjust your browser settings to manage cookie preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">5. Your Rights</h2>
          <p className="font-agrandir">
          You have the right to access, update, or delete your personal data. For assistance, contact us at support@metromart.com.
          </p>
        </section>
      </div>
    </Container>
  )
}

export default PrivacyPage;