---
title: 'The unloved Inverse Folding model'
publishedAt: '2025-09-17'
summary: 'The unloved Inverse Folding model'
---






- sampling process for the different models
- Masking
- all atom vs residue level models


Improvements
- Denosing pretraining
- Using sequence only models as a prior/reference
- Folding evaluations, RL, etc
- Most models to not see conditionally provided residues during training - it is a decoder only constraint. This is likely suboptimal.

Distinctions:
- Diffusion vs autoregressive
- Sampling methods
- side chain angle prediction (and whether they are modeled jointly)
- all atom vs residue level models
- 

Top level takeaways
- noising helps generalization always. 


Datasets used:
- CATH 
- TS50, TS500
- CAMEO


Paper which handles partial sequence design explicitly : ProteinSolver

Paper Reviews



[Robust deep learning–based protein sequence design using ProteinMPNN](https://www.science.org/doi/10.1126/science.add2187)

- Native sequence recovery of 52.4% compared to 32.9% for Rosetta
- 3 encoder, 3 decoder, 128 hidden dim
- Backbone features:
  - C_a - C_a distances
  - relative C-C-Cframe orientations/rotations
  - Backbone angles
  - Including N, C_a, C and O distances improves recovery from 41.2% to 59%.
- Performance saturates at 32-48 neighbors

Decoding: Sample from set of all possible permutations of decoding order, then decode in this order. This allows tying residue identities in a nice way - for 2 chains, take the avg of the A_i and B_i predictions.

Where residues are buried withing the protein, the model is able to recover the sequences with much higher accuracy.

Adding noise to backbone positions improves seuqnce recovery for confident alphafold predictions, but recovery in unpeturbed PDB structures decreases. a model trained with 0.3 Å noise generated 2-3 times more sequences with AlphaFold predictions within lDDT-Cα (14) of 95.0 and 90.0 of the true structures than unnoised or slightly noised models.

Experimental evaluation:
- MC sample 150 proteins using AlphaFold predictions as objectuve function
- of 96 designs redesigned by proteinmpnn, 73 were expressed solubly
- Cyclic/internal repeat symmetry: 4/10 soluble when designed with rosetta. 16/18 soluble when designed with proteinmpnn, with 30% having correct oligomeric state
- 2 component tetrahedral designs for protein nanoparticles: 76 sequences spanning 27 different topologies (12 subunits with tied mpnn predictions). 13 designs were soluble and fold to the correct topology.



[Graph Denoising Diffusion for Inverse Protein Folding (2023)](https://papers.neurips.cc/paper_files/paper/2023/file/20888d00c5df685de2c09790040e0327-Paper-Conference.pdf)

- Graph based, 30 KNN graph, typical residue features
  - Actually uses a lot more complex features - noisy AA types, "crystallographic B factor", SASA, dihedral angles, surface aware features (non linear projections of the weighted avg distance of the central AA to it's one hop neighbors, wtf)
- View as a discrete diffusion problem, where the noising process is represented by a probability transition matrix.
- Cool idea - they use a Block substitution model called BLOSUM which provides an estimate of the probability of a substitution between two residues based on evolutionary conservation.

<img src="/images/structure/gradif_table.png" alt="BLOSUM" width="500" height="500" />

- Basically equivelent to ProteinMPNN for structure recapitulation wiht alphafold predictions.
- Their evaluation of diversity vs sequence recovery is a bit suspect - they compare changing autoregressive sampling parameters (temperature) to changing the number of diffusion steps. Not sure if this is really comparing the same thing.


[LEARNING FROM PROTEIN STRUCTURE WITH GEOMETRIC VECTOR PERCEPTRONS (2021)](https://arxiv.org/abs/2009.01411)

- GVPs: Drop in for MLP.
code: https://github.com/drorlab/gvp

Eval on CATH, basically method is old and much worse than proteinmpnn.


[Highly Accurate and Robust Protein Sequence Design with CarbonDesign (2024)](https://www.biorxiv.org/content/10.1101/2023.08.07.552204v1)


Idea: Take alphafold evoformer module and reverse it, focusing on learning backbone representations from 3D to 1D.

Also use ESM2 embeddings in a recycling step.

Also have a MRF for the sequence with a belief propagation step :sobs:

Evaluates on the CASP15 test set, CAMEO test set.

TMscore, BLOSUM used as metrics.

For de-novo design where there are no existing solved structures, they use self consistency TM-score, which uses a folding model to genereate structures of the predicted sequences. Then the TM-score measures the consistency between predicted and original structures. Reliability is contingent on good structure prediction.


This model seems extremely complex, but it does have one interesting tidbit: The recycling/ESM features of the model help particularly with surface residues vs core/boundary residues. It would have been great to see this split out for each of these two methods because it's hard to understand why they might help jointly - one could imagine the ESM embeddings help with evolutionary info, but for the recycling steps it's less clear.


<img src="/images/structure/carbon_design_recycle.png" alt="BLOSUM" width="500" height="500" />


[Atomic context-conditioned protein sequence design using LigandMPNN](https://www.semanticscholar.org/paper/Atomic-context-conditioned-protein-sequence-design-Dauparas-Lee/c5fa00053cced45fc641877dacc122149eb1ecc5)

- protein backbone geometry is encoded into graph edges through pairwise distances between N, Cα, C, O, and virtual Cβ atoms
- Add protein - ligand graph to model external interactions. Protein residues and ligand atoms are nodes in the graph, and use a KNN edge representation. Ligand graph = one hot element nodes. 
- Ligand encoder comprises 2 message passing blocks which update the ligand graph representations only. This is then combined with the protein encoder and passed to the decoder.
- Still very small model - 2.62M parameters
- Data augmentation trick - randomly select a small fraction of protein residues and use their side chain atoms as context ligands. This doesn't help with sequence recovery but lets the direct input of side chain atom coordinates to stabilize functional sites.

- Train a sidechain packing neural network using the basic ligand mpnn arch to predict the 4 side chain torsion angles per residue given structure + sequence inputs.

- Evaluation on avg sequence recovery across 10 sequences for 3 contexts: small molecule, nucleotide and metal context

- trained with 0.1A std noise - training with 0.05 and 0.2 increase/decrease seq recovery by 2% respectively
- Training on side chain atoms only leads to a 3% decrease in seq recovery
- A model with no chemical element types in the ligand encoder causes a 8% decrease in seq recovery near metals, but the same for small molecules/nucleic acids (suggested cause is that the model cal infer chemical element identity from bond geometry).

<img src="/images/structure/ligandmpnn_context.png" alt="BLOSUM" width="500" height="500" />


[Zero-shot design of drug-binding proteins via neural selection-expansion (LASErMPNN)] (https://www.biorxiv.org/content/10.1101/2025.04.22.649862v1)

- Iterative application of RosettaFold AllAtom and LASERmpnn to design binders
- hit rate and highest affinity design each surpassed the current state-of-the-art method by 5- and 70-fold
- Big focus on self-consistency as a metric to follow. Previously hard to do for small molecule binders because the sequence design piece of the loop cannot model non AA chemistry.
- Introduce new NISE (neural iterative selection expansion) to avoid use of energy functions and instead use model confidences to guide optimization.
- 100% hit rate for binders(Kd of 120 nM - 17 µM)
- Use LASErMPNN to drive affinity maturation, 100x increase in affinity

Key differences with Protein MPNN:
- Distinct, pretrainable ligand encoder
- Simultaneously decodes sidechain dihedral angles
- inclusion of ligand nodes in each round of encoding/decoding

Nice evaluation metric - near to ligand vs far, e.g binding site reconstruction

- "Neural Proofreading" - suggesting single AA mutations which decrease the sequence NLL. Extremely simple idea, very nice.

- Interesting detail - Small changes in the relative positioning of the backbone coordinates can result in high RMSD (> 1.0 Å) when rebuilding large rotamers from sidechain dihedral angles due to the leverarm effect. We apply noise at the level of the backbone frame rather than on each backbone atom independently.

- Training detail - they run Reduce on the dataset to predict explicit hydrogen locations, adjust protonation states, and to perform N/Q/H residue rotamer flips.

Design parameters:
- 10k sequences, 2.4k per chain in 4jnj.pdb
- Use LASErMPNN model with held out streptavidin + 0.1A noise
- ODD: We designed sequences using 1.0 temp for binding site residues and 0.1 for all other residues. Interesting idea!
- argmax sampling for sidechain angles
- Note that boltz1 folded some of the designs better to match existing backbone than rosettafold
- Filter designs by self consistency (Calpha RMSD < 2A and ligand heavy atom RMSD < 2A). (this filters to 1700 designs)
- Rank remaining designs by BUN Score
- Correlation between ranking by BUN and binding site sequence recovery.

Neural Proofreading
- Run on every binding site residue
- Avg over 10 decoding orders and 10 dropout masks, avg and renormalize
- During proofreading, the model must also re-pack all sidechains.
- 2 mutations selected in a buried region that showed higher prob than the original residue at that position, precluding mutations that would introduce buried polar atoms.
- Edits: Met97Lu, Gln51Asn.

<img src="/images/structure/laser_proofreading.png" alt="BLOSUM" width="500" height="500" />

Questions
- does the AMBER relaxation affect the predicted proofreading probs? Same question for the prior model version that was used for the proofreading experiments.







What am I working on (layman's terms)

Over the past 2 years since AlphaFold, there has been an explosion in excitement around generative models of protein structure. For the first time, biologists can evaluate protein designs in silico, and the community has been eagerly adopting these models. 

The focus of the modelling community has overwhelmingly been in 2 areas - protein folding and generative binder design. However, these models are only part of the story. Once initial designs are created, they need to be evaluated and refined. This is where the modelling community has been lacking. I am working on two aspects of this which have recieved very little attention - inverse folding and reinforcement learning for protein design.

Inverse folding is the process of taking a protein structure and predicting the sequence that folded to it. This is a challenging problem because it requires the model to reason about the protein's structure and sequence simultaneously.
