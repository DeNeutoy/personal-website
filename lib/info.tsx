import me from '../app/avatar.jpg';

export const name = 'Mark Neumann';
export const avatar = me;
export const about = () => {
  return (
    <>
    I'm a researcher and engineer interested in natural language processing, neural networks and interactive machine learning.

      Previously I was a Senior Research Engineer at the 
      <a href="https://allenai.org/" target="_blank" rel="noopener noreferrer"> Allen Institute for Artificial Intelligence. </a>
      I co-created
      <a href="https://allennlp.org/" target="_blank" rel="noopener noreferrer"> AllenNLP</a>
      , a library for Natural Language Processing research, focused on neural networks.

    </>
  );
};
export const bio = () => {
  return (
    <>
      I'm a Next.js contributor and help lead our open-source communities. I'm
      passionate about frontend development and have created courses on React,
      Next.js, and web development. I'm an advisor and investor in early stage
      startups.
    </>
  );
};
