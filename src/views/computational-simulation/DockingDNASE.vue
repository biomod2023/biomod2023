
<script setup lang="ts">
  import Notebook from '@/components/lab-notebook/Notebook.vue'
  import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
  import DoubleColumn from '@/components/lab-notebook/DoubleColumn.vue'
  import Section from '@/components/lab-notebook/Section.vue'
  import CaptionedGraphics from '@/components/CaptionedGraphics.vue'
  import figure1 from '@/assets/docking-dnase/DNAse1 Pymol.png'
  import figure2 from '@/assets/docking-dnase/Maleimide Pymol.png'
  import figure3 from '@/assets/docking-dnase/DNAse1+Maleimdie.png'
  import figure4 from '@/assets/docking-dnase/DNAse1+Maleimide vina score.png'
  import figure5 from '@/assets/docking-dnase/DNAse1 active site.jpg'
</script>

<template>
  <Notebook>
    <template #title> Docking of DNASE I </template>
    <template #body>
      <SingleColumn>
        <template #title> Abstract  </template>
        <template #body>
          <p> 
            This study employs computational tools such as Pymol and CB-Dock to investigate the interaction between DNAse I and Maleimide, a crucial element in liposomal formulations. By exploring the active site of DNAse I, we reveal that Maleimide does not bind to the enzyme's catalytic center, suggesting their compatibility.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Introduction  </template>
        <template #body>
          <p> 
            This study conducts molecular docking and interaction assessments, with a specific focus on the interaction between enzymes and Maleimide, a critical component of liposomes. 
            <br>
            Our primary objective is to comprehensively evaluate the binding affinities and structural compatibilities of DNAse I enzyme with Maleimide, solely from a computational standpoint. Leveraging advanced computational tools, such as Pymol, CB Dock, and existing databases, our research endeavours to shed light on the intricacies of these interactions. By conducting docking simulations, we aim to unveil the molecular dynamics governing enzyme-Maleimide binding. The outcomes of these simulations will provide critical insights into the feasibility of enzymosome design and the potential for precise enzyme delivery mechanisms.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Methods </template>
        <template #body>
          <Section>
            <template #sub-title> 1. Protein Structure Acquisition </template>
            <template #content>
              <p>
                We retrieved the 3D structures of the enzymes used in this study from the Protein Data Bank (PDB). The specific PDB identifiers for the enzymes are as follows:
                <br>
                DNAse I: PDB Identifier 4AWN (Figure 1)
              </p>
              <br>
              <CaptionedGraphics>
                <template #graphics>
                    <img class="w-full max-w-[544px]"
                      :src="figure1" alt="Figure 1. 3D representation of DNAse I in Pymol">
                </template>
                <template #caption>
                  Figure 1. 3D representation of DNAse I in Pymol
                </template>
            </CaptionedGraphics> 
            </template>
          </Section>
        
          <Section>
            <template #sub-title> 2. Ligand Structure Preparation </template>
            <template #content>
              <p>The chemical structure (SMILES) of Maleimide was obtained from PubChem (PubChem, 2021). To facilitate molecular docking, we utilized the MarvinSketch software to generate a clean 3D representation of the ligand (Figure 4) and subsequently produced a MOL file, as it is the preferred file format for docking studies.</p>
              <br>
              <CaptionedGraphics>
                <template #graphics>
                      <img
                        :src="figure2" alt="Figure 2. 3D representation of Maleimide in Pymol. The SMILES form of the molecule was imported to MarvinSketch and cleaned in 3D to generate a MOL file.">
                </template>
                <template #caption>
                  Figure 2. 3D representation of Maleimide in Pymol. The SMILES form of the molecule was imported to MarvinSketch and cleaned in 3D to generate a MOL file.
                </template>
              </CaptionedGraphics>
            </template>
          </Section> 

          <Section>
            <template #sub-title> 3. Molecular Docking Analysis </template>
            <template #content>
              <p>
                We employed the CB Dock online computational tool to execute molecular docking simulations. The three-dimensional (3D) structure of a protein and a ligand, predicting their binding sites and affinity is a key task for computer-aided simulations. CB Dock predicts binding sites of a given protein, calculates the centers and sizes with a novel curvature-based cavity detection approach, and performs docking using AutoDock Vina (Priya et al., 2022). 
                <br> <br>
                The purpose of this step is to evaluate the potential binding interactions between the enzyme DNAse I and the ligand, Maleimide. 
              </p>
            </template>
          </Section>
          
          <Section>
            <template #sub-title> 4. Active Site Identification and Literature Review </template>
            <template #content>
              <p>A comprehensive literature review was conducted to ascertain the active site of DNAse I. This information was important in the interpretation of the docking results, as it provided valuable context and insights into the biological relevance of the interactions observed.</p>
            </template>
          </Section>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Results </template>
        <template #body>
          <Section>
            <template #sub-title> Interaction between DNAse I and Maleimide </template>
            <template #content>
              <p>
                Using CB-Dock binding interaction between DNAse I and Maleimide was assessed. Vina score is used to estimate the binding affinity between a protein and a ligand. It calculates the binding energy of the protein-ligand complex, incorporating various parameters such as intermolecular interactions, steric clashes, and hydrogen bonding.
              </p>
              <br>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8">
                <CaptionedGraphics>
                  <template #graphics>
                      <div class="h-[15.8rem]">
                        <img
                          class="object-scale-down max-h-full"
                          :src="figure3" alt="Figure 3. Interaction between DNAse I and maleimide predicted by CB-Dock. The structure represents the binding site of DNAse I.">
                      </div>
                  </template>
                  <template #caption>
                    Figure 3. Interaction between DNAse I and maleimide predicted by CB-Dock. The structure represents the binding site of DNAse I.
                  </template>
                </CaptionedGraphics>
                <CaptionedGraphics>
                  <template #graphics>
                      <img
                        :src="figure4" alt="Figure 4. The Vina scoring function aims to predict the most energetically favourable binding conformation of a ligand within the binding site of a protein. Vina Score of -4.1 is associated with the most favourable binding site of DNAse I.">
                  </template>
                  <template #caption>
                    Figure 4. The Vina scoring function aims to predict the most energetically favourable binding conformation of a ligand within the binding site of a protein. Vina Score of -4.1 is associated with the most favourable binding site of DNAse I.
                  </template>
                </CaptionedGraphics>
              </div>
            </template>
          </Section>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Discussion </template>
        <template #body>
          <Section>
            <template #sub-title> 1. Literature Review </template>
            <template #content>
              <p>
                In this short literature review, we embark on a systematic exploration of the active site of DNAse I. By navigating the structural data available within the PDB and relevant scientific literature, we define the catalytic center of this enzyme. 
              </p>
              <br>
              <section>
                <h4 class="text-lg"> <b>a. DNAse I</b> </h4>
                <p>
                  The active site of DNase I includes histidine residues (His134 and His252), glutamic acid residue (Glu78) and aspartic acid residue (Asp 212) (Lazarus & Wagenert, 2019). 
                </p>
                <br>
                <CaptionedGraphics>
                  <template #graphics>
                      <img
                        class="max-h-[25rem]"
                        :src="figure5" alt="Figure 5. Cartoon representation of rhDNase I depicting the active site of the enzyme. The active site residues are shown as beige sticks where oxygen and nitrogen atoms are in red and blue, respectively. The Mg2+ ion is shown as a cyan sphere and Ca2+ ions are shown as grey spheres. The phosphate ion is shown in sticks with the phosphorus atom in orange. The figure was made using PyMOL using accession code 4AWN for rhDNase I (Parsiegla et al. 2012).">
                  </template>
                  <template #caption>
                    Figure 5. Cartoon representation of rhDNase I depicting the active site of the enzyme. The active site residues are shown as beige sticks where oxygen and nitrogen atoms are in red and blue, respectively. The Mg2+ ion is shown as a cyan sphere and Ca2+ ions are shown as grey spheres. The phosphate ion is shown in sticks with the phosphorus atom in orange. The figure was made using PyMOL using accession code 4AWN for rhDNase I (Parsiegla et al. 2012).
                  </template>
                </CaptionedGraphics>
              </section>
            </template>
          </Section>

          <Section>
            <template #sub-title> 2. Maleimide and DNAse I Interaction </template>
            <template #content>
              <p>
                In the context of developing an enzymosome for the delivery of DNAse I, the fact that Maleimide does not bind to the active site of DNAse I can be considered a positive outcome for the following reasons. 
              </p>
              <br>
              <section>
                <h4 class="text-lg"> <b>a. Preservation of Enzyme Activity</b> </h4>
                <p>
                  DNAse I is an enzyme with a specific catalytic function — cleaving DNA molecules. For this enzyme to be effective in its intended role within the enzymosome, it is crucial that its active site remains accessible and unobstructed. If Maleimide were to bind to the active site, it could potentially inhibit or disrupt the enzyme's function. The absence of binding to the active site ensures that DNAse I retains its enzymatic activity when encapsulated in the enzymosome. 
                </p>
              </section>
              <br>
              <section>
                <h4 class="text-lg"> <b>b. Specificity and Control</b> </h4>
                <p>
                  Enzymes are highly specific in their interactions with substrates. By not binding to the active site of DNAse I, control over the enzyme's function can be maintained and it can be ensured that the enzyme acts only on its intended target (in this case, DNA) when released from the enzymosome. This specificity is essential for targeted enzymatic reactions.
                </p>
              </section>
              <br>
              <section>
                <h4 class="text-lg"> <b>c. Customization</b> </h4>
                <p>
                  The enzymosome can be designed to have a controlled release mechanism for DNAse I. By not binding to the active site, the release and activation of DNAse I can be finely tuned, allowing for precise control of its enzymatic function.
                </p>
              </section>
            </template>
          </Section>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Conclusion </template>
        <template #body>
          <p>
            In conclusion, the study's use of advanced computational tools, including Pymol and CB-Dock, provided crucial insights into the interaction between DNAse I and Maleimide, a pivotal component of liposomes. The absence of binding between Maleimide and the active site of DNAse I indicated the potential for the successful binding of the enzyme without compromising its enzymatic activity. This finding not only ensures the preservation of DNAse I function within the enzymosome but also permits precise control over its release and activity, paving the way for targeted enzymatic reactions in drug delivery applications.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>Lazarus, R. A., & Wagener, J. S. (2019). Recombinant Human
            Deoxyribonuclease I. Pharmaceutical Biotechnology, 471–488.
            <a href="https://doi.org/10.1007/978-3-030-00710-2_22">https://doi.org/10.1007/978-3-030-00710-2_22</a></p>
            <p>Parsiegla, G., Noguere, C., Santell, L., Lazarus, R. A., & Bourne, Y. (2012). The Structure of Human DNase I Bound to Magnesium and Phosphate Ions Points to a Catalytic Mechanism Common to Members of the DNase I-like Superfamily. Biochemistry, 51(51), 10250–10258. <a href="https://doi.org/10.1021/bi300873f">https://doi.org/10.1021/bi300873f</a></p>
            <p>Priya, R., Vinoth, M., & Radha, M. (2022). In-silico analysis of polycystic kidney disease using molecular docking and virtual screening. International Journal of Advanced Research in Biological Sciences, 9(5), 98-107. <a href="http://doi.org/10.22192/ijarbs.2022.09.05.01.011">http://doi.org/10.22192/ijarbs.2022.09.05.01.011</a></p>
            <p>PubChem. (2021). Maleimide Chemical Structure. U.S. National Library of Medicine. <a href="https://pubchem.ncbi.nlm.nih.gov/compound/10935#section=InChIKey">https://pubchem.ncbi.nlm.nih.gov/compound/10935#section=InChIKey</a> </p>
            <p>Sadybekov, A. V., & Katritch, V. (2023). Computational Approaches Streamlining Drug Discovery. Nature, 616(7958), 673–685. <a href="https://doi.org/10.1038/s41586-023-05905-z">https://doi.org/10.1038/s41586-023-05905-z</a></p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>