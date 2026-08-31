import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory",
  description: "AI Consulting & Advisory Services"
};

export default function AdvisoryPage() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h3>Scientific Advisory Boards and Consulting</h3>
        <p>
          I have previously served on scientific advisory boards and offered tailored advisory services for several companies (Notably <a href="https://casetext.com/" target="_blank" rel="noopener noreferrer">CaseText</a>, acquired by <a href="https://thomsonreuters.com/" target="_blank" rel="noopener noreferrer">Thomson Reuters</a> for $650m).
          Please contact me directly for more information.
        </p>
        <p>I can help with:</p>

        <ul className="pl-4 marker:text-neutral-900 prose-li:text-neutral-900 dark:marker:text-neutral-100 dark:prose-li:text-neutral-100">
          <li><strong>Strategic guidance</strong> on AI integration and technology adoption.</li>
          <li><strong>Access to my network</strong> of AI and ML engineers, entrepreneurs and investors.</li>
          <li><strong>Market analysis</strong>, product differentiation and go-to-market strategies for ML products.</li>
          <li><strong>Due Diligence</strong> evaluations of ML technologies and companies in the hard sciences.</li>
        </ul>

        <p>
         Support is available on a monthly retainer basis. 
         Project-based support is also available depending on my availability and the scope of the project.
        </p>



        <div className="my-8">
          To contact me for any of the above services, please send me an email at:
        </div>
        <div>
          <span>firstname.lastname.1992@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
