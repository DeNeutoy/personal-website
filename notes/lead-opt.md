


TODO: Include michael dempsey’s piece on verticalization  
In bio/sciences there are now 3 sides to verticalization:

- Stage, technology and target  
- Can be vertical wrt stage \- e.g take new drugs to market  
- Can be vertical wrt technology (e.g platform companies)  
- Can be horizontal wrt to target (platform companies / big pharma)

One of these is new \- what does it mean to be vertical wrt to technology? This means having all the available data/signal to meaningfully improve core function repeatedly. 

Main complaint of asset based drug dev is that you can’t take enough shots/progress on one target doesn’t transfer \- complaint of platform companies is that you don’t capture enough value, but this is mostly because platform companies target discovery stage. 

New idea: platform companies in the age of AI will target lead optimization as a GTM strategy, because excelling in this space allows you to access experimental data from pharma whilst also providing a very useful function. This experimental data will be key for the next generation of aligned bio foundation models. Economics of this business change as a company can provide immediate acceleration and revenue in the form of 10x faster lead optimization, whilst simultaneously developing real world data assets for biotech companies.  
 


 Another challenge here is fitting the data collection required into a coherent business model, given biotech's asset-based development lifecycle. I think there is still some hope here though - particularly as existing LLM finetuning/adaption methods (e.g LoRA) are well-suited to handle local adaptation, and could easily be applied to individualized optimization campaigns today.



**Meta argument**

[https://symbiosisonlinepublishing.com/quantitative-computational-biology/structural-computational-biology01.php](https://symbiosisonlinepublishing.com/quantitative-computational-biology/structural-computational-biology01.php)

This argues that preserving function is the driver behind evolutionary changes to sequence/structure, rather than the other way around. TODO: Link this somehow to ProteinMPNN to go from structure \-\> sequence.

TODO: Link this snippet to mutagenesis, and why it’s underexplored \- we can’t just look at single mutations.  
*If evolution is a natural process occurring spontaneously, it will progress into the direction of increasing disorder or entropy, consistent with the second law of thermodynamics. Thus, changes in sequences – exchanges like single nucleotide variations (SNVs), insertions and deletions (indels), and copy number variations (CNVs) – can lead to minor changes in structure, but they will trigger little or no changes in function as a means to maintain biological robustness. This strongly suggests that, in order to maintain biological robustness against environmental perturbations, function should dictate structure which, in turn, should dictate sequence, but not the other way around.*

![][image3]  
***Left**: The human ubiquitin protein targets other proteins for destruction after use (PDB ID 1UBI). **Right**: The human small ubiquitin-like modifier 1 (SUMO-1) protein tags other proteins for stabilization after synthesis (PDB ID 1A5R).*

## Synthesis

[Scalable and cost-efficient custom gene library assembly from oligopools](https://www.biorxiv.org/content/10.1101/2025.03.22.644747v1) ([code](https://github.com/RomeroLab/omega))

Can be extended as existing DNA providers become more effective, e.g Twist Biosciences producing [Twist Multiplexed Gene Fragments up to 500bp](https://www.twistbioscience.com/products/genes/multiplexed-gene-fragments). 

*Current DNA synthesis methods are constrained by a strict trade-off between sequence length and scale that limit the scope of precision libraries. To synthesize custom sequences, researchers must choose between synthesizing a few long sequences as gene fragments (\<=5000 bp) or many short sequences as oligopools (\~300 bp) from manufacturers like Twist Bioscience and IDT. Oligopools are heterogenous mixes of single stranded DNA where each strand is uniquely specified by the user.10 They are significantly cheaper than fragment synthesis per base, but constrained to DNA fragments shorter than most protein coding genes.*

**Extension to genetics**  
[https://www.biorxiv.org/content/10.1101/555797v1](https://www.biorxiv.org/content/10.1101/555797v1)

Interesting snippet from Corin

*There's a well-known narrative in tech about the "AWS revolution" and the horizontalization of the field. Building a great software company used to require vertical integration: racking your own servers, building your own protocols and infrastructure, and managing complexity up and down the stack. Meanwhile, most companies that couldn't manage all of that ended up having to buy an expensive monolith from IBM, Oracle, etc.*

*This is different now. Most of the critical product infrastructure can now be purchased wholesale: compute (AWS, Google Cloud, Azure, Digital Ocean, Modal), product analytics (Statsig, PostHog, DataDog), CDN (Cloudflare), auth (Okta), and so on and so forth. Obviously using all these services cost money, and building a great company still requires technical leadership and strategy, but the ability to hit the ground running with near-world-class tooling from day one is pretty incredible.*

*Drug discovery once had crazy levels of vertical integration. This has changed a little bit with the rise of CROs, but*   
*@ladanuzhna*  
 *correctly points out that biotechs with only a few shots on goal spend a crazy amount of internal resources building and managing wholly owned technologies that don't end up "making their beer taste better." It makes sense to specialize in your core competencies—but not every company can do this for every area, and there are plenty of folks who would be better off wo