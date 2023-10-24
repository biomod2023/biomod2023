<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'

const sectionTitleStyle = 'text-subtitle-sm lg:text-subtitle text-white mb-4'
</script>

<template>
  <Notebook>
    <template #title> Docking of Alginate Lyase and Alpha-Amylase </template>
    <template #body>
      <SingleColumn>
        <template #title> Abstract </template>
        <template #body>
          <p>
            This section focuses on investigating the potential interactions between Maleimide and
            two key enzymes, Alginate Lyase and Alpha-Amylase, through molecular docking analysis.
            Utilizing computational tools, we identified the active sites of the enzymes and
            evaluated their compatibility with Maleimide binding. The results indicate that neither
            enzyme is hindered by the presence of Maleimide, suggesting potential applicability for
            future delivery systems.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Introduction </template>
        <template #body>
          <p>
            We explore the potential binding of Maleimide with Alginate Lyase and Alpha-Amylase. By
            leveraging molecular docking analysis and active site identification using Pymol,
            CB-Dock, and literature review we draw conclusions on the compatibility of these enzymes
            with a liposome, considering the implications for future applications in drug delivery
            systems.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Methods </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <section>
              <h3 :class="sectionTitleStyle">1. Protein Structure Acquisition</h3>
              <p>
                3D structures of the described enzymes used were retrieved from the Protein Data
                Bank (PDB). The specific PDB identifiers for the enzymes are as follows:
              </p>
            </section>

            <section>
              <div class="flex flex-col items-center lg:items-start gap-y-4">
                <h4 class="font-bold">Alginate Lyase: PDB Identifier 1HV6 (Figure 1)</h4>
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alginate-lyase-3d.png"
                      alt="Picture of Alginate Lyase"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>Figure 1. 3D representation of Alginate Lyase in Pymol</p>
                  </template>
                </CaptionedGraphics>
              </div>
            </section>

            <section>
              <div class="flex flex-col items-center lg:items-start gap-y-4">
                <h4 class="font-bold mb-2">Alpha-Amylase: PDB Identifier 1MWO (Figure 2)</h4>

                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alpha-amylase-3d.png"
                      alt="Picture of Alpha Amylase"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>Figure 2. 3D representation of Alpha-Amylase in Pymol.</p>
                  </template>
                </CaptionedGraphics>
              </div>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">2. Molecular Docking Analysis</h3>
              <p>
                CB-Dock was used to predict the binding interactions between each enzyme and
                Maleimide. The binding site of the enzymes allows us to understand whether it would
                be possible to deliver these in the future using a liposome.
              </p>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">
                3. Active Site Identification and Literature Review
              </h3>
              <p>
                We conducted a literature review to identify the active site of Alginate Lyase and
                Alpha-Amylase. This information allowed us to interpret the docking results and
                identify whether the activity of the enzymes is being compromised.
              </p>
            </section>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Results </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <section>
              <h3 :class="sectionTitleStyle">1. Interaction Between Alpha-Amylase and Maleimide</h3>
              <div class="flex flex-col gap-y-8">
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alpha-amylase-maleimide.png"
                      alt="Picture of Alpha Amylase and Maleimide interaction"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>
                      Figure 3. Interaction between Alpha Amylase and maleimide predicted by
                      CB-Dock. The structure represents the binding site of Alpha-Amylase.
                    </p>
                  </template>
                </CaptionedGraphics>
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alpha-amylase-maleimide-vina-score.png"
                      alt="Table showing Alpha Amlyse/Maleimide Vina Score"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>
                      Figure 4. Vina Score of -4.6 is associated with the most favourable binding
                      site of Alpha-Amylase.
                    </p>
                  </template>
                </CaptionedGraphics>
              </div>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">
                2. Interaction Between Alginate Lyase and Maleimide
              </h3>
              <div class="flex flex-col gap-y-8">
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alginate-lyase-maleimide.png"
                      alt="Picture of Alginate Lyase and Maleimide interaction"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>
                      Figure 5. Interaction between Alginate Lyase and maleimide predicted by
                      CB-Dock. The structure represents the binding site of Alginate Lyase.
                    </p>
                  </template>
                </CaptionedGraphics>
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alginate-lyase-maleimide-vina-score.png"
                      alt="Table showing Alginate Lyase/Maleimide Vina Score"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>
                      Figure 6. Vina Score of -4.3 is associated with the most favourable binding
                      site of Alginate Lyase.
                    </p>
                  </template>
                </CaptionedGraphics>
              </div>
            </section>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Discussion </template>
        <template #body>
          <div class="flex flex-col gap-y-6">
            <section>
              <h3 :class="sectionTitleStyle">1. Literature Review</h3>
            </section>

            <section>
              <h4 class="font-bold">a. Alginate Lyase</h4>

              <div class="flex flex-col gap-y-6">
                <p>
                  The active site of Alginate Lyase includes glutamine residues (Gln134, Gln138),
                  tyrosine residues (Tyr180, Tyr246, Tyr249) histidine residues (His192, His245),
                  tryptophan residue (Trp141), asparagine residue (Asn191), aspartic acid residue
                  (Asp314), and arginine residues (Arg88, Arg342, Arg306, Arg312) (Yoon, et. al,
                  2001).
                </p>
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alginate-lyase-active-site.jpg"
                      alt="Picture of Alginate Lyase Active Site"
                      class="w-full lg:w-1/2"
                    />
                  </template>
                  <template #caption>
                    <p>
                      Figure 7. The bound trisaccharide molecule on the active site of Alginate
                      Lyase. The Figure shows the bound trisaccharide molecule and the surrounding
                      amino acid residues and water molecules interacting with the trisaccharide.
                      The trisaccharide molecule is represented by means of an orange ball-and-stick
                      model. The side chains of Tyr and Trp, Asn and Gln, Asp, Arg, and His residues
                      are coloured yellow, green, red, cyan and purple, respectively (Yoon, et. al,
                      2001).
                    </p>
                  </template>
                </CaptionedGraphics>
              </div>
            </section>

            <section>
              <h4 class="font-bold">b. Alpha-Amylase</h4>

              <div class="flex flex-col gap-y-6">
                <p>
                  The active site of Alpha-Amylase includes tyrosine residue (Tyr199, Tyr62),
                  tryptophan residue (Trp224), lysine residue (Lys201), histidine residue (His288),
                  phenylalanine residue (Phe159), aspartic acid residue (Asp289, Asp198), arginine
                  residue (Arg196), and glutamic acid residue (Glu222).
                </p>
                <CaptionedGraphics modifier="w-full">
                  <template #graphics>
                    <img
                      src="../../assets/aa-docking/alpha-amylase-active-site.jpg"
                      alt="Picture of Alpha Amylase Active Site"
                      class="w-full lg:w-1/4"
                    />
                  </template>
                  <template #caption>
                    <p>
                      Figure 8. Active site residues of Alpha-Amylase. W stands for Trp, K stands
                      for Lys, Y stands for Tyr, E stands for Glu, F stands for Phe, D stands for
                      Asp, H stands for His, and R stands for Arg (Linden, et. al, 2003).
                    </p>
                  </template>
                </CaptionedGraphics>
              </div>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">Maleimide and Alpha-Amylase Interaction</h3>
              <p>
                Based on the literature review we performed, Alpha-Amylase does not bind to
                maleimide with its active site. The residues predicted by CB-Dock software do not
                align with the documented active site residues. This means that the active site of
                Alpha-Amylase would remain unobstructed and the enzyme’s function will not be
                disrupted.
              </p>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">3. Maleimide and Alginate Lyase Interaction</h3>
              <p>
                Based on the literature review we performed, Alginate Lyase also does not bind to
                maleimide with its active site. The residues predicted by CB-Dock software do not
                align with the documented active site residues.
              </p>
            </section>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Conclusion </template>
        <template #body>
          <p>
            Through a computational investigation, we have revealed that both Alginate Lyase and
            Alpha-Amylase maintain their enzymatic functionalities without significant hindrance
            from Maleimide. Our study underscores the potential feasibility of utilizing these
            enzymes for drug delivery purposes, without compromising their essential catalytic
            activities.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Linden, A., Mayans, O., Meyer-Klaucke, W., Antranikian, G., & Wilmanns, M. (2003).
              Differential regulation of a hyperthermophilic α-amylase with a novel (ca,Zn)
              two-metal center by zinc. Journal of Biological Chemistry, 278(11), 9875–9884.
              https://doi.org/10.1074/jbc.m211339200
            </p>
            <p>
              Yoon, H.-J., Hashimoto, W., Miyake, O., Murata, K., & Mikami, B. (2001). Crystal
              structure of alginate lyase A1-III complexed with Trisaccharide product at 2.0 Å
              Resolution. Journal of Molecular Biology, 307(1), 9–16.
              https://doi.org/10.1006/jmbi.2000.4509
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
