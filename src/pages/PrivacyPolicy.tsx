
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground"><strong>Effective Date: 26 May 2025</strong></p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">1. INTRODUCTION</h2>
            <p>This Privacy Policy outlines the practices of KLAP Property Group ("we", "us", "our") concerning the collection, use, processing, and disclosure of personal data obtained through your use of our website, www.klappropertygroup.com (the "Website"). KLAP Property Group is committed to protecting the privacy and security of your personal data in accordance with applicable data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
            <p>This policy provides detailed information on when and why we collect your personal data, how we use it, the conditions under which we may disclose it to others, and how we keep it secure. It also explains your rights in relation to your personal data. By using the Website, you acknowledge the data processing practices described in this Privacy Policy. We recommend you read this policy carefully.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">2. DATA CONTROLLER INFORMATION</h2>
            <p>For the purpose of the UK GDPR, the data controller is KLAP Property Group. If you have any questions regarding this Privacy Policy or our data protection practices, or if you wish to exercise any of your data protection rights, please contact us using the following details:</p>
            <p>Email: keeshan@klappropertygroup.com<br />Address: 146a Avenue Road, Rushden, NN10 0SW</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">3. DATA PROTECTION PRINCIPLES</h2>
            <p>We adhere to the following principles relating to the processing of personal data as outlined in Article 5 of the UK GDPR:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Lawfulness, Fairness, and Transparency:</strong> We process personal data lawfully, fairly, and in a transparent manner in relation to you.</li>
              <li><strong>Purpose Limitation:</strong> We collect personal data for specified, explicit, and legitimate purposes and do not further process it in a manner that is incompatible with those purposes.</li>
              <li><strong>Data Minimisation:</strong> We ensure that personal data collected is adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.</li>
              <li><strong>Accuracy:</strong> We take reasonable steps to ensure that personal data is accurate and, where necessary, kept up to date.</li>
              <li><strong>Storage Limitation:</strong> We keep personal data in a form which permits identification for no longer than is necessary for the purposes for which the personal data is processed.</li>
              <li><strong>Integrity and Confidentiality:</strong> We process personal data in a manner that ensures appropriate security, including protection against unauthorised or unlawful processing and against accidental loss, destruction, or damage.</li>
              <li><strong>Accountability:</strong> We are responsible for, and able to demonstrate compliance with, these principles.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">4. INFORMATION WE COLLECT</h2>
            <p>We may collect and process the following types of personal data about you:</p>
            <h3 className="text-xl font-semibold">Information You Provide Directly:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Contact Form:</strong> When you contact us via the form on our Website, we collect your first name, last name, email address, subject, and the content of your message.</li>
              <li><strong>Account Registration/Login:</strong> If you create an account or log in to secure areas of our Website, we may collect your name, email address, password, and potentially other profile information.</li>
              <li><strong>Chat Feature:</strong> If you use the "Let's Chat!" feature, we may collect your name, email address, and the transcript of your chat conversation.</li>
              <li><strong>Blog Comments:</strong> If you leave comments on our blog posts, we may collect your name, email address, and the content of your comment.</li>
              <li><strong>Direct Communications:</strong> Information you provide when you communicate with us directly via email or other means.</li>
            </ul>
            <h3 className="text-xl font-semibold">Information Collected Automatically:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Usage Data:</strong> Information about how you access and use the Website, including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views, and website navigation paths.</li>
              <li><strong>Cookie Data:</strong> Information collected through cookies and similar technologies. Please see Section 6 (Cookies and Similar Technologies) for more details.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">5. HOW WE USE YOUR INFORMATION AND LAWFUL BASIS FOR PROCESSING</h2>
            <p>We use the personal data we collect for the following purposes, relying on the specified lawful bases:</p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Purpose of Processing</th>
                            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Examples of Data Used</th>
                            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Lawful Basis under UK GDPR</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr><td className="px-6 py-4">Responding to Enquiries & Communication</td><td className="px-6 py-4">Name, Email, Message Content (Contact Form, Chat)</td><td className="px-6 py-4">Legitimate Interests (to respond to your enquiries and manage communications)</td></tr>
                        <tr><td className="px-6 py-4">Providing Services & Account Management</td><td className="px-6 py-4">Name, Email, Account Details (Login)</td><td className="px-6 py-4">Performance of a Contract (if applicable, e.g., for client services); Legitimate Interests</td></tr>
                        <tr><td className="px-6 py-4">Website Operation & Improvement</td><td className="px-6 py-4">Usage Data, Cookie Data</td><td className="px-6 py-4">Legitimate Interests (to administer and improve our Website and services)</td></tr>
                        <tr><td className="px-6 py-4">Security & Fraud Prevention</td><td className="px-6 py-4">IP Address, Usage Data, Account Details</td><td className="px-6 py-4">Legitimate Interests (to protect our Website and users)</td></tr>
                        <tr><td className="px-6 py-4">Marketing Communications (with consent)</td><td className="px-6 py-4">Name, Email Address</td><td className="px-6 py-4">Consent (where required, e.g., for newsletters or promotional emails)</td></tr>
                        <tr><td className="px-6 py-4">Blog Comment Moderation & Display</td><td className="px-6 py-4">Name, Email, Comment Content</td><td className="px-6 py-4">Legitimate Interests (to manage blog interactions)</td></tr>
                        <tr><td className="px-6 py-4">Compliance with Legal Obligations</td><td className="px-6 py-4">Any relevant data</td><td className="px-6 py-4">Legal Obligation</td></tr>
                        <tr><td className="px-6 py-4">Managing Complaints (including via PRS)</td><td className="px-6 py-4">Name, Contact Details, Complaint Information</td><td className="px-6 py-4">Legitimate Interests (to handle complaints); Legal Obligation (PRS membership)</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Where we rely on Legitimate Interests, we have balanced our interests against your rights and freedoms and determined that our interests are not overridden by your interests or fundamental rights and freedoms. Where we rely on Consent, you have the right to withdraw your consent at any time. Please see Section 11 (Your Data Protection Rights).</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">6. COOKIES AND SIMILAR TECHNOLOGIES</h2>
            <p>Our Website uses cookies and similar technologies (such as web beacons and local storage) to distinguish you from other users, provide certain functionalities, understand how the Website is used, and potentially for targeted advertising purposes. Cookies are small text files that are placed on your computer or mobile device when you visit a website.</p>
            <h3 className="text-xl font-semibold">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for the operation of our Website. We do not require your consent to place these cookies.</li>
                <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognise and count the number of visitors and see how visitors move around our Website. This helps us improve the way our Website works. We will only use these cookies if you consent.</li>
                <li><strong>Functionality Cookies:</strong> These are used to recognise you when you return to our Website. This enables us to personalise our content for you and remember your preferences. We will only use these cookies if you consent.</li>
                <li><strong>Targeting/Advertising Cookies:</strong> These cookies record your visit to our Website, the pages you have visited, and the links you have followed. We may use this information to make our Website and the advertising displayed on it more relevant to your interests. We will only use these cookies if you consent.</li>
            </ul>
            <p><strong>Your Consent:</strong> Upon your first visit to our Website, you will be presented with a cookie banner requesting your consent to use non-essential cookies. You can manage your cookie preferences at any time through the cookie settings tool available on our Website or via your browser settings. Please note that disabling certain cookies may affect the functionality of the Website.</p>
            <p><strong>Third-Party Cookies:</strong> Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services, potentially including services used by the Sourced Property platform) may also use cookies, over which we have no control.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">7. DATA SHARING AND RECIPIENTS</h2>
            <p>We do not sell your personal data. We may share your personal data with the following categories of third parties for the purposes described in this policy:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Service Providers:</strong> Third parties who provide services on our behalf, such as website hosting (potentially via the Sourced Property platform provider), data analysis, IT services, customer service, email delivery, auditing, and chat functionality providers.</li>
                <li><strong>Sourced Property Franchise:</strong> As part of the Sourced Property Franchise Network, we may share information with the franchisor (Sourced Property) or other franchisees where necessary for operational, reporting, or service provision purposes, subject to appropriate data sharing agreements.</li>
                <li><strong>Professional Advisors:</strong> Lawyers, accountants, auditors, and insurers providing consultancy, legal, insurance, and accounting services.</li>
                <li><strong>Regulatory Bodies and Law Enforcement:</strong> Competent authorities, courts, government agencies, and law enforcement officials where required by law or necessary to protect our legal rights or the safety of others.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganisation, bankruptcy, or sale of assets, your information may be transferred as part of that transaction, subject to standard confidentiality arrangements.</li>
            </ul>
            <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">8. INTERNATIONAL DATA TRANSFERS</h2>
            <p>Some of our external third-party service providers may be based outside the UK or European Economic Area (EEA), so their processing of your personal data will involve a transfer of data outside the UK/EEA. Whenever we transfer your personal data out of the UK/EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the UK authorities.</li>
                <li>Where we use certain service providers, we may use specific contracts approved by the UK authorities which give personal data the same protection it has in the UK (such as the UK International Data Transfer Agreement or Addendum).</li>
            </ul>
            <p>Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the UK/EEA.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">9. DATA RETENTION</h2>
            <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.</p>
            <p>To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure, the purposes for which we process it, whether we can achieve those purposes through other means, and the applicable legal requirements. For example, contact form submissions from general enquiries may be kept for 2 years after the enquiry is resolved. Information related to clients with whom we have a contractual relationship (e.g., for sales, lettings, or property management) will be retained for 7 years after the conclusion of our services to comply with legal and tax obligations. Account information is kept for the duration of the account's activity plus this 7-year period. In some circumstances, you can ask us to delete your data: see Section 11 (Your Data Protection Rights) below.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">10. DATA SECURITY</h2>
            <p>We have implemented appropriate technical and organisational security measures designed to protect your personal data from accidental loss and from unauthorised access, use, alteration, or disclosure. These measures include access controls, encryption of data, and staff training on data security. We also have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
            <p>However, please note that the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Website; any transmission is at your own risk.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">11. YOUR DATA PROTECTION RIGHTS</h2>
            <p>Under the UK GDPR, you have the following rights in relation to your personal data:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Right of Access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate personal data we hold about you.</li>
                <li><strong>Right to Erasure ('Right to be Forgotten'):</strong> You have the right to request the deletion of your personal data where there is no compelling reason for its continued processing.</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request the suspension of processing of your personal data in certain circumstances.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request the transfer of your personal data to you or to a third party in a structured, commonly used, machine-readable format.</li>
                <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data where we are relying on legitimate interests. You also have the absolute right to object to processing for direct marketing purposes.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where we rely on consent to process your personal data, you have the right to withdraw that consent at any time. Withdrawing consent will not affect the lawfulness of processing based on consent before its withdrawal.</li>
                <li><strong>Rights related to Automated Decision-Making:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at keeshan@klappropertygroup.com. We aim to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data. This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">12. PROPERTY REDRESS SCHEME (PRS)</h2>
            <p>KLAP Property Group is a member of a government-approved Property Redress Scheme. The Property Redress Scheme, Membership No: PRS040820. This membership is a legal requirement for property agents involved in selling/lettings and property management work in England. The purpose of the scheme is to provide fair and impartial resolution of disputes between consumers and property agents. If you have a complaint regarding our services that we are unable to resolve to your satisfaction through our internal complaints procedure, you may be entitled to refer the complaint to the Property Redress Scheme. Details of the scheme and the complaint process can be found at the scheme's website https://www.portal.propertyredress.co.uk/complain. We are required to cooperate with any investigation conducted by the scheme.</p>
          </div>
            
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">13. CHANGES TO THIS PRIVACY POLICY</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">14. HOW TO CONTACT US</h2>
            <p>If you have any questions, comments, or concerns about this Privacy Policy or our data handling practices, please contact us at:</p>
            <p>Email: keeshan@klappropertygroup.com<br />Address: 146a Avenue Road, Rushden, NN10 0SW</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">15. COMPLAINTS TO THE INFORMATION COMMISSIONER'S OFFICE (ICO)</h2>
            <p>You have the right to lodge a complaint at any time with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO, so please contact us in the first instance.</p>
            <p><strong>ICO Contact Details:</strong><br />Information Commissioner's Office<br />Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />Telephone: 0303 123 1113<br />Website: https://ico.org.uk/concerns</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
