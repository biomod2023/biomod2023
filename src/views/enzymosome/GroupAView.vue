<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import DoubleColumn from '@/components/lab-notebook/DoubleColumn.vue'
</script>

<template>
  <Notebook>
    <template #title>Enzyme Activity Assays</template>
    <template #body>
      <SingleColumn>
        <template #title> Intro </template>
        <template #body>
          <p>
            Prior to using any enzymes in creating an enzymosome, the baseline activity of each
            enzyme in different solvent contexts must be determined to control for the effects of
            various solvents on enzyme activity.
          </p>
          <br />
          <p>
            The enzyme DNase I has been selected for enzymosome creation, as it plays a key role in
            degrading biofilms. DNase I disrupts bacterial biofilms by degrading the extracellular
            DNA within the biofilm, which can be used as a nutrient source by the bacteria that
            produce the biofilm (Nijland et al., 2010).
          </p>
        </template>
        <template #graphic>
          <div class="w-48 h-48 bg-gray-300"></div>
          <p>Figure 1. blah blah blah</p>
        </template>
      </SingleColumn>
      <DoubleColumn>
        <template #title> Techniques </template>
        <template #left-title>Enzyme Activity Assay</template>
        <template #left-body>
          <p>
            Enzyme activity assays determine the activity and amount of specific enzymes in a sample
            using a standardized procedure (Scopes, 2001). This procedure can vary depending on the
            enzyme being measured (Scopes, 2001).
          </p>
        </template>
        <template #right-title>Spectrometry</template>
        <template #right-body>
          <p>
            Spectrometry can be used to determine the amount of enzyme activity through measuring
            the concentration of colour or fluorescence in the sample. For the Alpha Amylase assay,
            this is done through colorimetric spectrometry with p-nitrophenol (Sigma-Aldrich, 2014).
            For the DNase I assay, this is done through fluorescence spectrometry with picogreen
            (ThermoFischer Scientific, 2022).
          </p>
        </template>
      </DoubleColumn>
      <SingleColumn>
        <template #title> Methods (DNA I Assay) </template>
        <template #body>
          <p>
            The DNase I assay was adapted from the standard protocol of the Picogreen Assay kit
            (ThermoFischer Scientific, 2022). This kit uses a reaction buffer containing 1 M
            Tris-HCl (pH 7.5), 1 M MgCl2, and 1 M CaCl2 (ThermoFischer Scientific, 2022), which will
            be referred to as the manufacturer’s buffer. 0.05 U/mL and 0.1 U/mL DNase I solutions
            were prepared in the manufacturer’s buffer and the HEPES buffer separately for use in
            the activity assay. 0.05 U/mL and 0.1 U/mL concentrations of DNase I in HEPES buffer
            contained 55mM CaCl₂ and 10mM MgCl. The HEPES buffer was also used for thiolation
            treatment and conjugation to the liposome.
          </p>
          <br />
          <p>
            1 μM DNA Probe was added to six wells of the 96 well plate to generate 0, 4, 8, 12, 16,
            and 20 pmol/well standards of 50 μL total volume. The manufacturer’s buffer, the HEPES
            buffer, and DNase I with the manufacturer’s buffer and DNase I with the HEPES buffer
            were added to separate wells of the 96-well plate, with each solution being added to two
            wells and 50 μL of solution in each well. These were the negative and experimental
            controls. 50 μL of molecular biology grade water was also added to two wells as a
            background control. 50 μL of only Sample Reaction Mix was also added to two wells as a
            positive control. 50 μL of Sample Reaction Mix was also added to each of the negative,
            background, experimental and positive control wells for a total of 100μL of solution in
            each well. Fluorescence was measured at an excitation wavelength of about 480 nm and an
            emission wavelength of about 520 nm to determine enzyme activity using a
            fluorometer-spectrophotometer in kinetic mode every minute for at least 10 minutes.
          </p>
        </template>
      </SingleColumn>
      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Dische, Z. (1953). Qualitative and quantitative colorimetric determination of
              heptoses. Journal of Biological Chemistry, 204(2), 983–997.
            </p>
            <p>
              Lahiri, D., Nag, M., Banerjee, R., Mukherjee, D., Garai, S., Sarkar, T., Dey, A.,
              Sheikh, H. I., Pathak, S. K., & Edinur, H. A. (2021). Amylases: Biofilm inducer or
              biofilm inhibitor? Frontiers in Cellular and Infection Microbiology, 11, 660048.
            </p>
            <p>
              Nijland, R., Hall, M. J., & Burgess, J. G. (2010). Dispersal of biofilms by secreted,
              matrix degrading, bacterial DNase. PloS One, 5(12), e15668.
            </p>
            <p>
              Panda, B. B., Meher, A. S., & Hazra, R. K. (2019). Comparison between different
              methods of DNA isolation from dried blood spots for determination of malaria to
              determine specificity and cost effectiveness. Journal of Parasitic Diseases, 43(3),
              337–342.
            </p>
            <p>
              Preiss, J., & Ashwell, G. (1962). Alginic acid metabolism in bacteria: I. Enzymatic
              formation of unsaturated oligosaccharides and 4-deoxy-L-erythro-5-hexoseulose uronic
              acid. Journal of Biological Chemistry, 237(2), 309–316.
            </p>
            <p>Scopes, R. K. (2001). Enzyme activity and assays. E LS.</p>
            <p>
              Sigma-Aldrich. (2014). Amylase Activity Assay Kit.
              https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/377/793/mak009bul.pdf
            </p>
            <p>
              ThermoFischer Scientific. (2022). Quant-iTTM PicoGreenTM dsDNA Reagent and Kit.
              https://www.thermofisher.com/document-connect/document-connect.html?url=https://assets.thermofisher.com/TFS-Assets%2FLSG%2Fmanuals%2Fmp07581.pdf
            </p>
            <p>
              Zhu, B., & Yin, H. (2015). Alginate lyase: Review of major sources and classification,
              properties, structure-function analysis and applications. Bioengineered, 6(3),
              125–131.
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
