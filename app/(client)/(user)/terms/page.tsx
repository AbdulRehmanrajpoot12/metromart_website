import Container from "@/components/Container";
import React from "react";

const TermsPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 font-integral">Terms & Condition</h1>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">1. Acceptance of Terms</h2>
          <p className="font-agrandir">
            By accepting and using MetroMart.'s services, you agree to be bound by these Terms and Conditions. 
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">2. Use of Services</h2>
          <p className="font-agrandir">
            You agree to use MetroMart.'s services only for law of purposes and in accordance with these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">3. Intellectual Property</h2>
          <p className="font-agrandir">
            All content and materials available on MetroMart.'s services are the property of MetroMart. and are protected by applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">4. Limitation of liability</h2>
          <p className="font-agrandir">
            MetroMart shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services. 
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-montserrat">5. Governing Law</h2>
          <p className="font-agrandir">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which MetroMart. operates. 
          </p>
        </section>
      </div>
    </Container>
  )
}

export default TermsPage;