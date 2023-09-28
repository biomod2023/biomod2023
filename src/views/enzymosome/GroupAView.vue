<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import DoubleColumn from '@/components/lab-notebook/DoubleColumn.vue'
import CustomTable from '@/components/CustomTable.vue'

const tableData = {
  headers: [
    'Buffer',
    'Buffer Concentration (U/mL)',
    'Approximate beginning DNase I concentration (ng/mL)',
    'Approximate final DNase I concentration (ng/mL)'
  ],
  rowHeaders: ["Manufacturer's Buffer", 'TE', 'HEPES'],
  rowsPerRowHeader: 2,
  data: [
    [0.05, 70, 20],
    [0.1, 70, 35],
    [0.05, 90, 90],
    [0.1, 90, 90],
    [0.05, 35, 10],
    [0.1, 65, 10]
  ]
}
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
        <template #title> Methods </template>
        <template #body>
          <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">DNA I Assay</h3>
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
      <SingleColumn>
        <template #title>Results</template>
        <template #graphic>
          <div class="flex flex-col items-center">
            <div class="w-48 h-48 bg-gray-300"></div>
            <p>
              Figure 1: Fluorescence of the DNase I Picogreen assay in the manufacturer’s buffer,
              HEPES buffer and TE buffer.
            </p>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-48 h-48 bg-gray-300"></div>
            <p>
              Figure 2: Calibration curve of the DNase I picogreen assay at DNA concentrations of 1,
              10, 25, 50 and 100 ng/mL.
            </p>
          </div>

          <div class="flex flex-col items-center w-full">
            <div class="overflow-x-scroll w-full">
              <CustomTable :table-data="tableData" />
            </div>
            <p>
              Table 1: Approximate concentration of DNase I in each buffer at the beginning and end of the fluorescence measuring period, based on the combined information of Figure 1 and Figure 2.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title>Discussion</template>
        <template #body>
          <div class="flex flex-col gap-4">
            <p>
              Since DNase I is an enzyme that degrades DNA (Nijland et al., 2010), the concentration of DNA determined from Figures 1 and 2 demonstrates that DNase I has minimal activity in the TE buffer and a relatively high amount of activity in the manufacturer's buffer and HEPES buffer. These results are supported because the EDTA in the TE buffer inactivates DNase by chelating with the metal cations it needs to function (Panda et al., 2019), causing less DNase I activity in the TE buffer than in the other buffers.
            </p>
            <p>
              While only DNAse I has been selected, a combination of enzymes would ideally be used in conjunction on the enzymosome to combat bacterial biofilms. For example, alpha amylase and alginate lyase inhibit biofilm formation by degrading the polysaccharides that compose the biofilm (Lahiri et al., 2021; Zhu & Yin, 2015), and incorporating these enzymes would further enhance the efficacy of the enzymosome. Due to time constraints, these enzymes were not added and assayed.
            </p>
            <p>
              If alpha amylase were to be used, an assay would be performed adapted from the standard protocol of the Amylase Activity Assay kit (Sigma-Aldrich, 2014). 2mM Nitrophenol Standard would be added to solutions containing alpha amylase, and spectrometry would be used to determine alpha amylase activity from the absorbance of the Nitrophenol Standard. Absorbance would be measured at 405 nm to determine enzyme activity after 2 to 3 minutes, as well as every five minutes while the plate was incubated at 25°C and protected from light.
            </p>
            <p>
              If alginate lyase were to be used, it would be beneficial to perform an assay to determine baseline enzyme activity. However, no current commercially available assay kits exist for alginate lyase, and it would be difficult to execute the series of assays needed to determine its baseline activity. Thus, no alginate lyase assay was performed due to time constraints. If the baseline activity of alginate lyase had to be determined, it would be done through using an orcinol assay with a Dische modification of the orcinol reaction (Dische, 1953), a thiobarbituric acid assay involving a modification of Weissbach and Hurwitz, and an ultraviolet absorption assay (Preiss & Ashwell, 1962). The orcinol assay determines alginate stability in the presence of alginate lyase, while the thiobarbituric acid and ultraviolet absorption assays determine alginate lyase activity through the compounds produced by alginate degradation (Preiss & Ashwell, 1962).
            </p>
          </div>
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
