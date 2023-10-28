<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import DoubleColumn from '@/components/lab-notebook/DoubleColumn.vue'
import CustomTable from '@/components/CustomTable.vue'

const tableOneData = {
  headers: [
    'Buffer',
    'Buffer DNase I Concentration (U/mL)',
    'Volume of Buffer (µL)',
    'Volume of DNase I (µL)'
  ],
  rowHeaders: ['Manufacturer’s buffer', 'TE', 'HEPES'],
  rowsPerRowHeader: 2,
  data: [
    [0.05, 32, 4],
    [0.1, 28, 8],
    [0.05, 32, 4],
    [0.1, 28, 8],
    [0.05, 32, 4],
    [0.1, 28, 8]
  ]
}
const tableTwoData = {
  headers: [
    'Buffer',
    'Buffer DNase I Concentration (U/mL)',
    'Approximate initial DNA concentration (ng/mL)',
    'Approximate final DNA concentration (ng/mL)'
  ],
  rowHeaders: ["Manufacturer's Buffer", 'TE', 'HEPES'],
  rowsPerRowHeader: 2,
  data: [
    [0.05, 80, 20],
    [0.1, 80, 50],
    [0.05, 80, 90],
    [0.1, 95, 90],
    [0.05, 75, 25],
    [0.1, 50, 20]
  ]
}

const sectionTitleStyle = 'text-subtitle-sm lg:text-subtitle text-white mb-4'
</script>

<template>
  <Notebook>
    <template #title>DNase I</template>
    <template #body>
      <SingleColumn>
        <template #title> Intro </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <p>
              Prior to using any enzymes in creating an enzymosome, the baseline activity of each
              enzyme in different solvent contexts must be determined to control for the effects of
              various solvents on enzyme activity. This is important for determining whether they
              will interfere with enzyme function, as well as which solvent is best for working with
              the enzyme.
            </p>
            <p>
              The enzyme DNase I has been selected for enzymosome creation, as it plays a key role
              in degrading biofilms. DNase I disrupts bacterial biofilms by degrading the
              extracellular DNA within the biofilm, which can be used as a nutrient source by the
              bacteria that produce the biofilm (Nijland et al., 2010).
            </p>
          </div>
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
          <div class="flex flex-col gap-y-4">
            <p>
              The DNase I assay was adapted from the standard protocol of the Picogreen Assay kit
              (ThermoFisher Scientific, 2022). This kit uses a reaction buffer containing 1 M
              Tris-HCl (pH 7.5), 1 M MgCl<sub>2</sub>, and 1 M CaCl<sub>2</sub> (ThermoFisher
              Scientific, 2022), which will be referred to as the manufacturer’s buffer. 0.05 U/mL
              and 0.1 U/mL DNase I solutions were prepared in the manufacturer’s buffer, the TE
              buffer and the HEPES buffer separately for use in the activity assay. Buffer DNase
              concentration is given in units of DNase activity per mL (U/mL), with the activity
              unit defined as the complete degradation of 1 µg of plasmid DNA at 37°C by one unit of
              DNase I in 10 minutes (ThermoFisher Scientific, 2011). The HEPES buffer was also used
              for thiolation treatment and conjugation to the liposome.
            </p>
            <p>
              An aqueous working solution of the Quant-iT™PicoGreen™ dsDNA Reagent was prepared in
              the TE buffer by using the buffer to dilute it 200 fold. A 2 µg/mL stock solution of
              lambda dsDNA was prepared in the TE buffer as well by using the buffer to dilute it 50
              fold. In a 96 well plate, the controls were created by adding water, the
              manufacturer's buffer, the TE buffer, and the HEPES buffer to twelve wells such that
              each solution type had three wells of 80 µL each. For the other treatments, 40 µL of
              the aqueous working solution of the Quant-iT™ PicoGreen™ dsDNA Reagent was added
              each well, followed by the designated amount of buffer for each treatment shown in
              Table 1 as well as 4 µL of the stock solution of lambda dsDNA. The wells were
              incubated for five minutes at room temperature with protection from light before
              adding the corresponding volume of DNase I indicated in Table 1. Fluorescence was
              measured at an excitation wavelength of about 480 nm and an emission wavelength of
              about 520 nm to determine enzyme activity using a fluorometer-spectrophotometer in
              kinetic mode every 2 minutes for at least 10 minutes. These treatments were performed
              three times to obtain a triplicate.
            </p>
            <div class="overflow-x-scroll w-full md:overflow-clip">
              <CustomTable :table-data="tableOneData" />
              <p class="text-center text-sm">
                Table 1: Designated buffer and DNA volumes for each treatment.
              </p>
            </div>
          </div>
        </template>
      </SingleColumn>
      <SingleColumn>
        <template #title>Results</template>
        <template #body>
          <div class="flex flex-col items-center gap-8 w-full mb-4">
            <div class="flex flex-col lg:flex-row lg:justify-center items-center gap-6">
              <div class="basis-1/2">
                <img
                  src="../../assets/dnase-i/manu-buffer.png"
                  alt="Graph of Manufacturer Buffer"
                />
              </div>
              <div class="basis-1/2">
                <img src="../../assets/dnase-i/te-buffer.png" alt="Graph of TE Buffer" />
              </div>
            </div>
            <div class="w-full">
              <img
                src="../../assets/dnase-i/hepes-buffer.png"
                alt="Graph of HEPES Buffer"
                class="lg:w-1/2 m-auto"
              />
            </div>
            <p class="text-center text-sm">
              Figure 1. Exhibits the DNase I Picogreen Assay in Manufacturer, HEPES, and TE buffers.
              It displays the generated DNA concentration in testing the activity of DNase I in
              different buffers. Panels a, b, and c display Manufacturer, HEPES, and TE buffers
              respectively.
            </p>
            <div class="flex flex-col items-center w-full gap-2">
              <div class="overflow-x-scroll w-full md:overflow-clip">
                <CustomTable :table-data="tableTwoData" />
              </div>
              <p class="text-center text-sm">
                Table 2. Approximate concentration of DNase I in each buffer at the beginning and
                end of the fluorescence measuring period, based on the combined information of
                Figure 1 and Figure 2.
              </p>
            </div>
          </div>
          <p>
            Figure 1 demonstrates the DNA concentration over time in solutions with various
            concentrations of DNase I and various buffers. This concentration appears to be
            relatively constant in the TE buffer, while decreasing gradually over time in the
            manufacturer’s buffer and the HEPES buffer.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title>Discussion</template>
        <template #body>
          <div class="flex flex-col gap-4 mb-4">
            <p>
              Since DNase I is an enzyme that degrades DNA (Nijland et al., 2010), the concentration
              of DNA determined from Figure 1 demonstrates that DNase I has minimal activity in the
              TE buffer and a relatively high amount of activity in the manufacturer's buffer and
              HEPES buffer. These results are supported because the EDTA in the TE buffer
              inactivates DNase by chelating with the metal cations it needs to function (Panda et
              al., 2019), causing less DNase I activity in the TE buffer than in the other buffers.
            </p>
          </div>

          <h3 :class="sectionTitleStyle">Future Directions</h3>
          <div class="flex flex-col gap-4">
            <p>
              While only DNase I has been selected, a combination of enzymes would ideally be used
              in conjunction on the enzymosome to combat bacterial biofilms. For example, alpha
              amylase and alginate lyase inhibit biofilm formation by degrading the polysaccharides
              that compose the biofilm (Lahiri et al., 2021; Zhu & Yin, 2015), and incorporating
              these enzymes would further enhance the efficacy of the enzymosome. Due to time
              constraints, these enzymes were not added and assayed.
            </p>
            <p>
              If alpha amylase were to be used, an assay would be performed adapted from the
              standard protocol of the Amylase Activity Assay kit (Sigma-Aldrich, 2014). 2mM
              Nitrophenol Standard would be added to solutions containing alpha amylase, and
              spectrometry would be used to determine alpha amylase activity from the absorbance of
              the Nitrophenol Standard. Absorbance would be measured at 405 nm to determine enzyme
              activity after 2 to 3 minutes, as well as every five minutes while the plate was
              incubated at 25°C and protected from light.
            </p>
            <p>
              If alginate lyase were to be used, it would be beneficial to perform an assay to
              determine baseline enzyme activity. However, no current commercially available assay
              kits exist for alginate lyase, and it would be difficult to execute the series of
              assays needed to determine its baseline activity. Thus, no alginate lyase assay was
              performed due to time constraints. If the baseline activity of alginate lyase had to
              be determined, it would be done through using an orcinol assay with a Dische
              modification of the orcinol reaction (Dische, 1953), a thiobarbituric acid assay
              involving a modification of Weissbach and Hurwitz, and an ultraviolet absorption assay
              (Preiss & Ashwell, 1962). The orcinol assay determines alginate stability in the
              presence of alginate lyase, while the thiobarbituric acid and ultraviolet absorption
              assays determine alginate lyase activity through the compounds produced by alginate
              degradation (Preiss & Ashwell, 1962).
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
              <a href="https://doi.org/10.1016/S0021-9258(18)66101-0"
                >https://doi.org/10.1016/S0021-9258(18)66101-0</a
              >
            </p>
            <p>
              Lahiri, D., Nag, M., Banerjee, R., Mukherjee, D., Garai, S., Sarkar, T., Dey, A.,
              Sheikh, H. I., Pathak, S. K., & Edinur, H. A. (2021). Amylases: Biofilm inducer or
              biofilm inhibitor? Frontiers in Cellular and Infection Microbiology, 11, 660048.
              <a href="https://doi.org/10.3389/fcimb.2021.660048"
                >https://doi.org/10.3389/fcimb.2021.660048</a
              >
            </p>
            <p>
              Nijland, R., Hall, M. J., & Burgess, J. G. (2010). Dispersal of biofilms by secreted,
              matrix degrading, bacterial DNase. PloS One, 5(12), e15668.
              <a href="https://doi.org/10.1371/journal.pone.0015668"
                >https://doi.org/10.1371/journal.pone.0015668</a
              >
            </p>
            <p>
              Panda, B. B., Meher, A. S., & Hazra, R. K. (2019). Comparison between different
              methods of DNA isolation from dried blood spots for determination of malaria to
              determine specificity and cost effectiveness. Journal of Parasitic Diseases, 43(3),
              337–342.
              <a href="https://doi.org/10.1007/s12639-019-01136-0"
                >https://doi.org/10.1007/s12639-019-01136-0</a
              >
            </p>
            <p>
              Preiss, J., & Ashwell, G. (1962). Alginic acid metabolism in bacteria: I. Enzymatic
              formation of unsaturated oligosaccharides and 4-deoxy-L-erythro-5-hexoseulose uronic
              acid. Journal of Biological Chemistry, 237(2), 309–316.
              <a href="https://doi.org/10.1016/S0021-9258(18)93920-7"
                >https://doi.org/10.1016/S0021-9258(18)93920-7</a
              >
            </p>
            <p>
              Scopes, R. K. (2001). Enzyme activity and assays. Encyclopedia of Life Sciences.
              <a href="https://doi.org/10.1038/npg.els.0000712"
                >https://doi.org/10.1038/npg.els.0000712</a
              >
            </p>
            <p>
              Sigma-Aldrich. (2014). Amylase Activity Assay Kit.
              <a
                href="https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/377/793/mak009bul.pdf"
                >https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/377/793/mak009bul.pdf</a
              >
            </p>
            <p>
              ThermoFisher Scientific. (2011). COA: DNase I, RNase-free, #EN0521.
              <a href="https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2Fbrochures%2Fcoa_en0521.pdf">https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2Fbrochures%2Fcoa_en0521.pdf</a>
            </p>
            <p>
              ThermoFisher Scientific. (2022). Quant-iTTM PicoGreenTM dsDNA Reagent and Kit.
              <a
                href="https://www.thermofisher.com/document-connect/document-connect.html?url=https://assets.thermofisher.com/TFS-Assets%2FLSG%2Fmanuals%2Fmp07581.pdf"
                >https://www.thermofisher.com/document-connect/document-connect.html?url=https://assets.thermofisher.com/TFS-Assets%2FLSG%2Fmanuals%2Fmp07581.pdf</a
              >
            </p>
            <p>
              Zhu, B., & Yin, H. (2015). Alginate lyase: Review of major sources and classification,
              properties, structure-function analysis and applications. Bioengineered, 6(3),
              125–131.
              <a href="https://doi.org/10.1080/21655979.2015.1030543"
                >https://doi.org/10.1080/21655979.2015.1030543</a
              >
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
