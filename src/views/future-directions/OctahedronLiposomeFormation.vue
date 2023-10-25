<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'

const sectionTitleStyle = 'text-subtitle-sm lg:text-subtitle text-white mb-4'
</script>

<template>
  <Notebook>
    <template #title> Liposome Formation Using Octahedron </template>
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
          <ul class="list-disc list-inside relative overflow-x-scroll">
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
          <ul class="list-disc list-inside relative w-fit">
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

          <div class="flex flex-col gap-y-6">
            <SingleColumn :always-dropdown="true" dark nested>
              <template #title> Vesicle Preparation </template>
              <template #body>
                <div class="flex flex-col gap-y-4 overflow-x-scroll lg:overflow-x-clip">
                  <h3 :class="sectionTitleStyle">Purpose: Attach DNA nanostructure to the lipid</h3>
                  <p>
                    The following steps are derived from (1), with minor modifications made to relate steps to (2).
                  </p>
                  <ol class="list-decimal list-outside relative left-8">
                    <li>
                      The following lipids are required (purchased from avanti polar lipids):
                      <ol class="list-outside relative left-8">
                        <li>a. DOPC</li>
                        <li>b. Chol</li>
                      </ol>
                    </li>
                    <li>
                      (OPTIONAL) obtain Texas REd-DHPE and Oregon Green-DHPE (fluorescently labeled lipids)
                      <ol class="list-outside relative left-8">
                        <li>a. Prepare another set of vesicles by adding 0.5 nol % TR-DHPE and 0.5 mol % OG-DHPE to the
                          lipid mixture</li>
                      </ol>
                    </li>
                    <li>Mix (with DNA) the lipids detailed in step 1 in chloroform in a 2:1:1 mole ratio of DOPC:DOPE:Chol
                    </li>
                    <li>Lipid mixing buffer solution: 10 mM Tris, 100 mM NaCl, pH 7.5</li>
                    <li>
                      <i>Mutable</i>: Resuspend the dried lipid film in lipid mixing buffer to achieve a concentration of
                      &lt;2 mg/mL&gt;.
                      <ol class="list-outside relative left-8">
                        <li>a. Achieve 2 mg/mL: measure 2.0 grams of dried lipid film using an analytical scale and then
                          measure 1 mL of buffer using a pipette.</li>
                        <li>b. Resuspend the lipid film in buffer solution</li>
                      </ol>
                    </li>
                    <li>
                      For lipid mixing experiments (step 2), add Texas Red-DHPE (0.5 mol %) and Oregon Green-DHPE (0.05
                      mol %) to the vesicle mixture
                    </li>
                    <li>
                      <i>Mutable</i>: Add the appropriate amount of DNA-lipid stock (typically 2.8 μl to 50 μl) to the
                      vesicle stocks to achieve an average copy number of &lt;50 DNA-lipids per vesicle&gt;
                    </li>
                    <li>Incubate the DNA-labeled vesicles overnight at 4°C</li>
                    <li>
                      <i>Mutable</i>: Pass the DNA-labeled vesicle aliquots through a CL-4B size exclusion column
                      equilibrated with a &lt;10 mM&gt; Tris buffer, pH 7.5, containing &lt;100 mM&gt; sodium chloride for
                      purification to remove any TbCL and dipicolinic acid
                    </li>
                    <li>Characterize the lipid concentration after purification using an enzymatic assay for choline.</li>
                    <li>
                      (1) PC, LPC, or SM is hydrolyzed by phospholipase D (PLD) from Streptomyces sp. to release choline.
                      (2) Choline is oxidized by choline oxidase to betaine, which simultaneously generates H2O2.
                      (3) In the presence of peroxidase, H2O2 couples phenol and 4-AA to produce a chromogen.
                    </li>
                  </ol>
                </div>
              </template>
            </SingleColumn>
            <SingleColumn :always-dropdown="true" dark nested>
              <template #title> DNA Structure Encapsulation </template>
              <template #body>
                <div class="flex flex-col gap-y-4 overflow-x-clip">
                  <h3 :class="sectionTitleStyle">Purpose: Encapsulate DNA octahedron in a lipid membrane with radius 50 nm
                  </h3>
                  <p>
                    The following steps were derived from methods used in (3) and (4)
                  </p>
                  <p>
                    <b>Encapsulation buffer: to assist folding:</b> 5 mM Tris-HCl, 1 mM EDTA, 10 Mm MgCl2, 10 mM NaCl
                  </p>
                  <p>
                    <b>Rest of the steps:</b>
                  </p>
                  <ol class="list-decimal list-outside relative left-8">
                    <li>Prepare 20x encapsulation buffer </li>
                    <li>Fill filter wash buffer into 15mL Amicon Ultra Centrifugal Filter 30 K. Centrifuge at max speed
                      (max 5000 x g) for 15 min </li>
                    <li>Discard flow through any buffer in upper filter chamber</li>
                    <li>Transfer 2400 μL of folded product into filter and centrifuge at max for 10 min, if volume is
                      above 1.0mL spin until its approx. 1.0mL</li>
                    <li>Resuspend the fluid in the filter thoroughly with a pipette for concentration barrier</li>
                    <li>Transfer product from filter into microcentrifuge tube and wash filter with 100 μL folding buffer
                      and add to concentrated product. Repeat until the total volume is about 1200 μL. </li>
                    <li>Set aside 20 μL of concentrated product for agarose gel</li>
                    <li>Prepare four glycerol gradients with light and heavy buffer according to manufacturer instruction
                      gradient specification: 59 s of rotation 20 RPM, 85 degree tilt</li>
                    <li>Use disposable 1 mL syringe without needle tip to remove 500 μL from top gradient</li>
                    <li>Use a clean disposable 1 mL syringe to transfer 300 μL of concentrated product to the top of each
                      of the four gradient</li>
                    <li>Transfer tubes into buckets of SW-55 Ti rotor of a ultracentrifuge and spin samples at 367000 x g
                      for 1 hour</li>
                    <li>Using gradient station and instructions, fractionate samples into 24 fractions in a 96-well plate.
                    </li>
                    <li>Prepare 1.5% agarose gel with 0.5x TBE, 10mM MgCl2 and SYBR safe double stranded DNA stain. Mix
                      2.5 μL of sample from step 8 and 10 μL of each fraction with loading buffer. Load gel and separate
                      for 2.5 hours at 60 V Image and determine which fraction contain primary product and combine the
                      fractions containing the separated product band into microcentrifuge tube</li>
                    <li>Wash new 15mL Amicon 30 K centrifugal filter by filling upper chamber with filter wash buffer and
                      centrifuge on max for 15 min. Discard flow through and any buffer remaining in upper chamber</li>
                    <li>Transfer collected product into filter and top up with folding buffer. Centrifuge for 20 min at
                      max speed. Top up upper chamber with folding buff and repeat</li>
                    <li>Resuspend concentrated product with pipette and transfer volume to microcentrifuge tube wash
                      filter as previous done with two rinses of 100 μL folding buffer to </li>
                    <li>Prepare a 1:100 dilution of sample to folding buffer and measure absorbance in spectrometer at 260
                      and 280 nm</li>
                    <li>Use absorbance at 260 to calculate the molar concentration of final product (260 absorbance / 660
                      x 100)</li>
                    <li>Mutable: use negative stain transmission electron microscopy to image final product</li>
                    <li>Store solution at 4 C until used</li>
                    <li>To begin preparation of liposome stock solution, use hamilton syringes to combine 133.3μL of DOPC,
                      63 μL of PEG-2 K-PE, and 47 μL of rhodamine-PE (all will be in chloroform)to a glass test tube</li>
                    <li>Place in vacuum overnight in a light-protected area to remove chloroform</li>
                    <li>Add 300 μL folding buffer to lipid film and mix using eppendorf thermomixer at high rpm for 1 hour
                    </li>
                    <li>Dip the solution contained in the glass tube in liquid nitrogen until frozen. Place in beaker of
                      room temp water until thawed. Repeat 7 times to ensure the vesicle have separated</li>
                    <li>Prepare min-extruder with 0.2 μL membrane.</li>
                    <li>Fill one of the extruder syringes with folding buffer. Place both syringes into the extruder and
                      pass folding buffer back and forth through extruder to ensure it is sealed</li>
                    <li>Draw back the empty syringe to pull as much folding buffer out </li>
                    <li>Discard folding buffer from both syringes</li>
                    <li>Use one extruder syringe to draw out vesicle solution back and forth 21 times (produces 200 nm
                      diameter)</li>
                    <li>Remove the solution from the opposite syringe in which you started</li>
                    <li>Transfer to microcentrifuge tube and store at 4 C in a light-protected area</li>
                    <li>Prepare 20 μL of 100 nM DNA octahedron in 1x folding buffer from the stock solution prepared
                      previously </li>
                    <li>Make annealing master mix by adding the following reagents in a PCR tube in the following order to
                      prevent aggregation and denaturation. 53 μL of water, 5 μL of 20x folding buffer, 20 μL of 100 nM
                      DNA octahedron, 2.4 μL of 100 μM ANti-inner handle _Cy5 oligonucleotide, 10 μL of 1% OG surfactant,
                      and 9.6 μL of 100 μM anti-outer handle cholesterol </li>
                    <li>Incubate the sample on thermal cycler at 35 C for 2 hours or overnight</li>
                    <li>After incubation, prepare single glycerol gradient on gradient station with light glycerol + 1% OG
                      and heavy glycerol with 1% OG</li>
                    <li>Remove 300 μL from top of the gradient. Layer the 100 μLof annealed sample onto the gradient and
                      centrifuge for 1 hour at 367,000 x g. Fractionate the sample into 24 fractions using gradient stage
                    </li>
                    <li>Prepare 1.5% agarose gel with 0.5x TBE, 10mM MgCl, and 0.05% DSD. Load μL of each fraction into
                      gel. Separate for 2.5 hours at 60 V, image gel to determine which fractions contain annealed product
                      Note: SDS in gel will prevent fluorescence detection with SYBR safe stain</li>
                    <li>Combine appropriate fraction into a microcentrifuge tube and store at 4 C</li>
                    <li>Estimate the volume of annealed product from the step above. Divide this volume by 2. Add that
                      volume of lock liposomes prepared in steps 21-31, now the OG concentration is 0.66%</li>
                    <li>Glently mix for 1 hour</li>
                    <li>triple the volume by adding twice the volume of folding buffer folding buffer. Now the OG
                      concentration is 0.33%</li>
                    <li>Transfer to oa 7000 molecular weight cut-off Slide A-Lyzer dialysis cassette</li>
                    <li>Dialyze fro 48 hours in 2L of 1 x folding buffer, 2 g bio-beads SM-2 ABsorbent Media and stir
                      gently</li>
                    <li>To begin enrichment of the encapsulated structures mix 9 mL 60% Optiprep and 1 mL 10x folding
                      buffer</li>
                    <li>To make 3, 2mL solutions of Otiporep concentration 28, 18, and 8% mix Otiprep and 1x folding
                      buffer with volumes 1.04 mL and 0.96 mL, 0.67 mL and 1.33 mL, 0.3 and 1.7 mL respectively</li>
                    <li>Create a 35% Optiprep solution by combining 0.72 mL 54% Optiprep, 0.3 mL of encapsulated product,
                      and 0,13 mL 1x folding buffer</li>
                    <li>Pipette the entirety of the 35% solution into SW-55 open top centrifuge tube and use a disposable
                      1 mL syringe without the needle to layer the 28, 18, and 8% solutions on in the order written. Layer
                      1 x folding buffer on top until there is about 300 μL of space left in the tube</li>
                    <li>Centrifuge at 367000 for 16 hours at 4 C. Fractionate samples into 24 fractions in a fluorescence
                      plate</li>
                    <li>Measure fluorescence of DNA (Cy5) and vesicle rhodamine for the 24 fraction and determine which
                      fractions may have encapsulated DNA octahedron by the distribution on the 2 fluorescent channels
                      that should display overlapping peaks</li>
                    <li>Combine fractions with encapsulated octahedron</li>
                    <li>Dialyze the combined fractions overnight in 1 L of 1x folding buffer in a 700 molecular weight
                      cutoff Slide-A-Lyzer Dialysis Cassette. This should remove all Optiprep solution </li>
                    <li>Transfer product into buffer (1 x folding buffer or PBS)</li>
                  </ol>
                </div>
              </template>
            </SingleColumn>
          </div>
        </template>
      </SingleColumn>



      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Chan, Y. M., Van Lengerich, B., & Boxer, S. G. (2009). Effects of linker sequences on vesicle fusion
              mediated by lipid-anchored DNA oligonucleotides. Proceedings of the National Academy of Sciences of the
              United States of America, 106(4), 979–984. https://doi.org/10.1073/pnas.0812356106
            </p>
            <p>
              Leung, A. K. K., Hafez, I., Baoukina, S., Belliveau, N. M., Zhigaltsev, I. V., Afshinmanesh, E., Tieleman,
              D. P., Hansen, C. L., Hope, M. J., & Cullis, P. R. (2012). Lipid nanoparticles containing siRNA synthesized
              by microfluidic mixing exhibit an Electron-Dense nanostructured core. Journal of Physical Chemistry C,
              116(34), 18440–18450. https://doi.org/10.1021/jp303267y
            </p>
            <p>
              Perrault, S. D., & Shih, W. M. (2014). Virus-Inspired Membrane Encapsulation of DNA Nanostructures To
              Achieve In Vivo Stability. ACS Nano, 8(5), 5132–5140. https://doi.org/10.1021/nn5011914
            </p>
            <p>
              Perrault, S. D., & Shih, W. M. (2016). Lipid membrane encapsulation of a 3D DNA nano octahedron. In Methods
              in molecular biology (pp. 165–184). https://doi.org/10.1007/978-1-4939-6454-3_12
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
