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
            This section focuses on investigating the potential interactions between Maleimide and two key enzymes,
            Alginate Lyase and Alpha-Amylase, through molecular docking analysis. Utilizing computational tools, we
            identified the active sites of the enzymes and evaluated their compatibility with Maleimide binding. The
            results indicate that neither enzyme is hindered by the presence of Maleimide, suggesting potential
            applicability for future delivery systems.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Introduction </template>
        <template #body>
          <p>
            We explore the potential binding of Maleimide with Alginate Lyase and Alpha-Amylase. By leveraging molecular
            docking analysis and active site identification using Pymol, CB-Dock, and literature review we draw
            conclusions on the compatibility of these enzymes with a liposome, considering the implications for future
            applications in drug delivery systems.
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
                3D structures of the described enzymes used were retrieved from the Protein Data Bank (PDB). The specific
                PDB identifiers for the enzymes are as follows:
              </p>
            </section>

            <section>
              <h4 class="font-bold">Alginate Lyase: PDB Identifier 1HV6 (Figure 1)</h4>

              <CaptionedGraphics modifier="w-full">
                <template #caption>
                  <p>Figure 1. 3D representation of Alginate Lyase in Pymol</p>
                </template>
              </CaptionedGraphics>
            </section>

            <section>
              <h4 class="font-bold">Alpha-Amylase: PDB Identifier 1MWO (Figure 2)</h4>

              <CaptionedGraphics modifier="w-full">
                <template #caption>
                  <p>Figure 2. 3D representation of Alpha-Amylase in Pymol.</p>
                </template>
              </CaptionedGraphics>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">2. Molecular Docking Analysis</h3>
              <p>
                CB-Dock was used to predict the binding interactions between each enzyme and Maleimide. The binding site
                of the enzymes allows us to understand whether it would be possible to deliver these in the future using a
                liposome.
              </p>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">3. Active Site Identification and Literature Review</h3>
              <p>
                We conducted a literature review to identify the active site of Alginate Lyase and Alpha-Amylase. This
                information allowed us to interpret the docking results and identify whether the activity of the enzymes
                is being compromised.
              </p>
            </section>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Methods </template>
        <template #body>
          <p>
            We began by using a thermocycler to mix the scaffold and staple strands together,
            increasing the probability of hydrogen bonding. The PCR tubes were labeled and the
            appropriate volumes of each reagent was put into the PCR tubes (MgCl<sub>2</sub> (if
            salt screening), Tris, EDTA, Scaffold, staple and water). The total volume in the PCR
            tubes added to 60 μL. We ensured to mix the solution with the P200 before aliquoting.
            Afterwards, the thermoramp was started by following the instructions listed below to
            ensure the formation of the structure.
          </p>
          <ol class="list-decimal list-inside relative left-8 w-fit">
            <li>80 °C for 5 min</li>
            <li>Decrease to 65 °C at a rate of -1°C per 5 minutes.</li>
            <li>Incubate at 65 °C for 20 min</li>
            <li>Decrease to 25 °C at -1°C per 20 minutes</li>
          </ol>
          <p>
            Finally, to verify the structure that was formed, gel electrophoresis was utilized. A 1%
            agarose gel was made by adding 0.4 - 0.5 g agarose to 50ml of 0.5X TBE with 10mM MgCl2
            in an erlenmeyer flask. This was microwaved for 15 seconds, swirling and repeated until
            a homogenous mixture was formed. A gel cast tray of 50 ml was prepared and once the gel
            had cooled, 2.5 μl of 10X Sybr safe was pipetted into the gel mix which was poured into
            the gel cast tray. The gel electrophoresis was run in a 0.5X TBE buffer with 10mM MgCl2
            for 3 hours at 60V.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Results </template>
        <template #body>
          <div class="flex flex-col gap-y-5">
            <CaptionedGraphics>
              <template #caption>
                <p>
                  <b>Figure 1.</b> Referencing the ladder, a known reference of DNA sizes, the
                  staple mole ratios are made at 1:1, 1:2, 1:3, 1:5, 1:7, 1:10. The brighter the dot
                  is the more DNA there is therefore indicating that the was more DNA at a 1:10
                  scaffold ratio.
                </p>
              </template>
            </CaptionedGraphics>
            <p>
              Ladder is the known sizes of DNA used as reference. The bright dot at the bottom is
              staples, the brighter the dot the more dna there is (same logic for the band on top
              which is the octahedron). Scaffold: staple mole ratios are made at 1:1, 1:2, 1:3, 1:5,
              1:7, 1:10
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">TBD!!!</div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
