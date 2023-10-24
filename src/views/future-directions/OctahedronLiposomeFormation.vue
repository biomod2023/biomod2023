<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'
</script>

<template>
  <Notebook>
    <template #title> Octahedron Formation</template>
    <template #body>
      <SingleColumn>
        <template #title> Overview </template>
        <template #body>
          <p>
            This document outlines a proposed procedure for synthesizing lipid-oligonucleotide conjugates that would then
            be attached to our DNA octahedral structure (which in our experiments is used synonymously to describe the
            square bipyramid shape) to envelope the structure in a lipid membrane. In practical terms this procedure would
            prolong the lifespan of the structure in vivo by preventing denaturing and nuclease digestion. These
            experiments were not performed by UBC BIOMOD due to resource restraints.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Reagent List </template>
        <template #body>
          <ul class="list-disc list-inside relative left-8 w-fit">
            <li>P7308, 10 nM</li>
            <li>Staple strands, 10nM</li>
            <li>DOPC (Dioleoylphosphatidylcholine), 94.2%</li>
            <li>DOPE(Dioleoylphosphatidylethanolamine), 5%</li>
            <li>Cholesterol</li>
            <li>(Optional) Texas REd-DHPE and Oregon Green-DHPE (fluorescently labeled lipids)</li>
            <li>Tris, sodium chloride, 10 mM</li>
            <li>Glycerol</li>
            <li>EDTA, 1mM</li>
            <li>MgCl2, 10mM</li>
            <li>NaCl, 100mM</li>
            <li>Tris-HCL, 5mM</li>
            <li>Iodixanol, 60%</li>
            <li>Ethanol</li>
            <li>Triton-X 100</li>
            <li>RNase free water</li>
            <li>PEG-2K-pE</li>
            <li>Filter wash buffer in chloroform</li>
            <li>rhodamine-PE in chloroform</li>
            <li>Tween-20 (V/V), 0.05%</li>
            <li>Octyl-β-D-glucopyranoside surfactant.</li>
            <li>Bio-Beads SM-2 absorbent media</li>
            <li>Optiprep density gradient medium 54%</li>
          </ul>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Equipment List </template>
        <template #body>
          <ul class="list-disc list-inside relative left-8 w-fit">
            <li>RIbogreen assay kit</li>
            <li>CL-4B size exclusion column</li>
            <li>Polycarbonate membrane (pore size 50 nm)</li>
            <li>Spectrophotometer for DLS analysis</li>
            <li>Centrifuge (capable of 41000 rpm)</li>
            <li>Amicon 10K</li>
            <li>Ultracentrifuge Optima XPN-80 and SW-55 Ti rotor</li>
            <li>15 mL Amicon Ultra Centrifugal Filter 30 K</li>
            <li>Polyclear open-top centrifuge tubes</li>
            <li>Gradient station</li>
            <li>700 Molecular weight cut-off slide A lyzer dialysis cassette</li>
          </ul>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Procedure </template>
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
