import me from '../app/avatar.jpg';

export const name = 'Mark Neumann';
export const avatar = me;
export const about = () => {
  return (
    <>
    I'm a researcher and engineer interested in neural networks and interactive machine learning.
    I'm currently the Head of Machine Learning at {` `}
      <a href="https://orbitalmaterials.com/" target="_blank" rel="noopener noreferrer"><b>Orbital Materials</b></a>
      , where I lead our foundation model development for materials science.
      Previously I was a Senior Research Engineer at the 
      <a href="https://allenai.org/" target="_blank" rel="noopener noreferrer"> Allen Institute for Artificial Intelligence. </a>
    </>
  );
};
export const bio = () => {
  return (
    <>
      Before switching to applying neural networks in the hard sciences, I worked on natural language processing. I cocreated{` `}
      <a href="https://allennlp.org/" target="_blank" rel="noopener noreferrer"> <b> AllenNLP</b></a>
      , a library for Natural Language Processing research, focused on neural networks. 
      
      I also worked on
      <a href="https://arxiv.org/abs/1802.05365" target="_blank" rel="noopener noreferrer"> <b>Elmo (Embeddings from Language Models)</b></a>{` `}
         a popular representation learning method 
         for embedding words in context. It began a trend of deep contextualised word 
         representation learning in NLP, such as BERT/GPT-3.
    </>
  );
};
