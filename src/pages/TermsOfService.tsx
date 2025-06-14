
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground"><strong>Last Updated: 26 May 2025</strong></p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>Welcome to KLAP Property Group. These Terms of Service ("Terms") govern your use of our website located at www.klappropertygroup.com (the "Website"). By accessing or using our Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, you must not use our Website.</p>
            <p>In these Terms, "we", "us", and "our" refers to KLAP Property Group. "You" and "your" refers to you, the user of our Website.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Use of Our Website</h2>
            <p>You agree to use our Website for lawful purposes only. You are prohibited from any use of the Website that would constitute a breach of any applicable law or regulation in England and Wales.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Property Listings and Information</h2>
            <p>The content on our Website, including property listings, floor plans, and descriptions, is provided for general information purposes only.</p>
            <p><strong>Accuracy:</strong> We strive to ensure all information is accurate and up-to-date. However, this information is often provided by third parties and is subject to change. We make no representations, warranties, or guarantees, whether express or implied, that the content on our Website is accurate, complete, or current.</p>
            <p><strong>No Professional Advice:</strong> The information provided on the Website does not constitute legal, financial, or investment advice. It is not intended to be a substitute for professional advice. We strongly recommend that you seek independent professional advice before making any property-related decisions.</p>
            <p><strong>No Contract:</strong> Property particulars on this Website do not form part of any offer or contract.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Acceptable Use</h2>
            <p>Your use of this Website is conditional on your agreement not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the Website for any fraudulent or unlawful purpose.</li>
              <li>Submit false, inaccurate, or misleading information through any forms or communication channels.</li>
              <li>Use any automated system or software to extract data from the Website for commercial purposes ("screen scraping" or "data scraping").</li>
              <li>Introduce any viruses, Trojans, worms, or other material that is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorised access to our Website, the server on which it is stored, or any server, computer, or database connected to our Website.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Intellectual Property Rights</h2>
            <p>We are the owner or the licensee of all intellectual property rights in our Website and in the material published on it. These works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
            <p><strong>Our Content:</strong> The KLAP Property Group name, logo, branding, photographs, floor plans, and text on this Website are our exclusive property and may not be used, copied, or reproduced without our express written permission.</p>
            <p><strong>Limited Licence:</strong> You may print off one copy and may download extracts of any page(s) from our Website for your personal use and you may draw the attention of others to content posted on our Website. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">6. User Communications and Privacy</h2>
            <p>When you submit personal information through our "Request a Viewing" form, contact forms, or subscribe to our newsletter, you agree that we may use this information to contact you regarding your enquiry.</p>
            <p>All personal data provided to us is handled in accordance with our Privacy Policy. Our Privacy Policy explains how we collect, use, and protect your personal data and your rights in relation to it. We strongly advise you to read it.</p>
            <p>All marketing communications, including our newsletter, will contain a clear and easy-to-use "unsubscribe" link.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Limitation of Our Liability</h2>
            <p>To the extent permitted by law, we exclude all conditions, warranties, representations, or other terms that may apply to our Website or any content on it, whether express or implied.</p>
            <p>We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use of, or inability to use, our Website.</li>
              <li>Use of or reliance on any content displayed on our Website.</li>
            </ul>
            <p>This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation, nor any other liability which cannot be excluded or limited under applicable law.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
            <p>Where our Website contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Changes to These Terms</h2>
            <p>We may revise these Terms of Service at any time by amending this page. Please check this page from time to time to take notice of any changes we made, as they are binding on you.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Governing Law and Jurisdiction</h2>
            <p>These Terms, their subject matter, and their formation are governed by the laws of England and Wales. You and we both agree that the courts of England and Wales will have exclusive jurisdiction over any dispute.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Contact Us</h2>
            <p>To contact us with any questions about these Terms of Service, please use the contact information provided on our Website.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
