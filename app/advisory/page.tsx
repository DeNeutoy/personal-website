import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Other projects.",
};

export default function AdvisoryPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">AI Consulting & Advisory Services</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Partner with me to accelerate your AI initiatives, backed by my experience
          in building and scaling state of the art AI systems across several verticals.
        </p>
        <h3>Are you facing these challenges?</h3>
        <ul>
          <li>Uncertainty in evaluating and selecting AI technologies</li>
          <li>Challenges in scaling AI solutions while maintaining quality</li>
          <li>Difficulty building production-ready AI systems</li>
          <li>Applying Deep Learning to the hard sciences (particularly molecular data and atomistic simulations)</li>
          <li>Integrating LLMs into products and workflows</li>
        </ul>

        <h3>How I Can Help</h3>
        <p>
          With my background in Machine Learning research across academia and industry, I specialize in:
        </p>
        <ul>
          <li>Developing evaluation frameworks for AI systems</li>
          <li>Implementing production-grade AI solutions which improve over time</li>
          <li>Strategic AI technology selection and implementation</li>
          <li>Designing code and infrastructure for effective ML research teams</li>
          <li>Training and mentoring ML teams in best practices for neural network optimization/design</li>
        </ul>

        <h3>Background & Expertise</h3>


        <h4>Natural Language Processing</h4>
        <p>
          I have developed{` `} software libraries such as
          <a href="https://allennlp.org/" target="_blank" rel="noopener noreferrer"> <b> AllenNLP</b></a> and 
          <a href="https://github.com/allenai/scispacy" target="_blank" rel="noopener noreferrer"> <b>scispacy</b></a>{` `}
          used by thousands of researchers in production at companies like <a href="https://netflix.com" target="_blank" rel="noopener noreferrer">Netflix</a>, <a href="https://nih.gov" target="_blank" rel="noopener noreferrer">the NIH</a>, and <a href="https://ibm.com" target="_blank" rel="noopener noreferrer">IBM</a>.
        </p>
        <p>
          Whilst at the Allen Institute for AI, I worked on
        <a href="https://arxiv.org/abs/1802.05365" target="_blank" rel="noopener noreferrer"> <b>Elmo (Embeddings from Language Models)</b></a>{` `}
          a popular method for representation learning using language models. It began a trend of deep contextualised word 
          representation learning in NLP, which led to the development of large language models such as BERT/GPT-3/ChatGPT. My work has been <a href="https://scholar.google.com/citations?user=vlrP560AAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">cited over 20,000 times</a>.
        </p>

        <h4>Machine Learning for the Hard Sciences</h4>
        <p>
          I have experience applying deep learning to the hard sciences, particularly molecular data and atomistic simulations.
          My current role is leading the development of foundation models for materials science at <a href="https://orbitalmaterials.com/" target="_blank" rel="noopener noreferrer">Orbital Materials</a>.
          This work has included developing generative models for molecular design, 
          large scale data collection from quantum chemistry calculations and development of new neural network-based <a href="https://arxiv.org/abs/2410.22570" target="_blank" rel="noopener noreferrer">Universal Interatomic Potentials</a>.
        </p>

        <p>
          This experience crossing ML research software development, deep learning research and application development has given me repeated exposure to the challenges of building successful ML products and teams.
        </p>


        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />

        <h1 className="font-bold text-3xl font-serif">Available Engagement Models</h1>
        <h3>Subscription-based Support</h3>
        <p>Designed for ML teams seeking high-impact, on-demand guidance without the overhead of a full-time hire.</p>
        <strong>What's included:</strong>
        <ul>
          <li><strong>Weekly Check-ins</strong>: 45-minute sync calls to track progress, address challenges, and refine strategies.</li>
          <li><strong>Unlimited Communication</strong>: Ongoing support via email and Slack with guaranteed response times within 24 hours.</li>
          <li><strong>Strategy and Architecture</strong>:  Comprehensive advice on vendor selection, data readiness, and integration into workflows.</li>
          <li><strong>Code Review and Best Practices</strong>: In-depth feedback on technical specifications, planning documents, and architecture.</li>
          <li><strong>Cancel Anytime</strong>: Cancel anytime, no questions asked.</li>
        </ul>
        <p>
         Subscription based support is available on a monthly retainer basis starting at $5000/month, with flexible terms and no long-term commitments. 
         Tailored packages available for larger teams or specialized needs.
         Project-based support is also available depending on my availability.
        </p>

        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
        <h3>Scientific Advisory Boards and Consulting</h3>
        <p>
          I have previously served on scientific advisory boards and offered tailored advisory services for equity based compensation (Notably <a href="https://casetext.com/" target="_blank" rel="noopener noreferrer">CaseText</a>, which was later acquired by <a href="https://thomsonreuters.com/" target="_blank" rel="noopener noreferrer">Thomson Reuters</a> for $650m).
          Please contact me directly for more information.
        </p>
        <ul>
          <li><strong>Strategic guidance</strong> on AI integration and technology adoption.</li>
          <li><strong>Access to my network</strong> of AI and ML engineers, entrepreneurs and investors.</li>
          <li><strong>Market analysis</strong>, product differentiation and go-to-market strategies for ML products.</li>
        </ul>
        <div className="my-8">
          To contact me for any of the above services, please send me an email at:
        </div>
        <div>
          <span className="font-mono">mark.neumann.1992@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
