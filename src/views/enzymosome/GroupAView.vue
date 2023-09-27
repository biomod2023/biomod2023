<script setup lang="ts">
import Notebook from "@/components/lab-notebook/Notebook.vue"
import SingleColumn from "@/components/lab-notebook/SingleColumn.vue"
import DoubleColumn from "@/components/lab-notebook/DoubleColumn.vue"
</script>

<template>
    <div class="m-auto">
        <h1 class="text-center text-title-sm lg:text-title text-gold">Enzyme Activity Assays</h1>
    </div>
    <div>
        <Notebook>
            <template #content>
                <SingleColumn>
                    <template #title>
                        Intro
                    </template>

                    <template #body>
                        <p>
                            Prior to using any enzymes in creating an enzymosome, the baseline activity of each enzyme in different solvent contexts
                            must be determined to control for the effects of various solvents on enzyme activity.
                        </p>
                        <br />
                        <p>
                            The enzyme DNase I has been selected for enzymosome creation, as it plays a key role in degrading biofilms.
                            DNase I disrupts bacterial biofilms by degrading the extracellular DNA within the biofilm,
                            which can be used as a nutrient source by the bacteria that produce the biofilm (Nijland et al., 2010).
                        </p>
                    </template>

                    <template #graphic>
                        <div class="w-48 h-48 bg-gray-300"></div>
                        <p>Figure 1. blah blah blah</p>
                    </template>
                </SingleColumn>

                <DoubleColumn>
                    <template #title>
                        Techniques
                    </template>

                    <template #left>
                        <h3 class="text-subtitle text-white mb-4">Enzyme Activity Assay</h3>
                        <p>
                            Enzyme activity assays determine the activity and amount of specific enzymes in a sample using a standardized procedure (Scopes, 2001). This procedure can vary depending on the enzyme being measured (Scopes, 2001).
                        </p>
                    </template>
                    <template #right>
                        <h3 class="text-subtitle text-white mb-4">Spectrometry</h3>
                        <p>Spectrometry can be used to determine the amount of enzyme activity through measuring the concentration of colour or fluorescence in the sample. For the Alpha Amylase assay, this is done through colorimetric spectrometry with p-nitrophenol (Sigma-Aldrich, 2014). For the DNase I assay, this is done through fluorescence spectrometry with picogreen (ThermoFischer Scientific, 2022).</p>
                    </template>
                </DoubleColumn>

                <SingleColumn>
                    <template #title>
                        Methods (DNA I Assay)
                    </template>

                    <template #body>
                        <p>
                            The DNase I assay was adapted from the standard protocol of the Picogreen Assay kit (ThermoFischer Scientific, 2022). This kit uses a reaction buffer containing 1 M Tris-HCl (pH 7.5), 1 M MgCl2, and 1 M CaCl2 (ThermoFischer Scientific, 2022), which will be referred to as the manufacturer’s buffer. 0.05 U/mL and 0.1 U/mL DNase I solutions were prepared in the manufacturer’s buffer and the HEPES buffer separately for use in the activity assay. 0.05 U/mL and 0.1 U/mL concentrations of DNase I in HEPES buffer contained 55mM CaCl₂ and 10mM MgCl. The HEPES buffer was also used for thiolation treatment and conjugation to the liposome.
                        </p>
                        <br />
                        <p>
                            1 μM DNA Probe was added to six wells of the 96 well plate to generate 0, 4, 8, 12, 16, and 20 pmol/well standards of 50 μL total volume. The manufacturer’s buffer, the HEPES buffer, and DNase I with the manufacturer’s buffer and DNase I with the HEPES buffer were added to separate wells of the 96-well plate, with each solution being added to two wells and 50 μL of solution in each well. These were the negative and experimental controls. 50 μL of molecular biology grade water was also added to two wells as a background control. 50 μL of only Sample Reaction Mix was also added to two wells as a positive control. 50 μL of Sample Reaction Mix was also added to each of the negative, background, experimental and positive control wells for a total of 100μL of solution in each well. Fluorescence was measured at an excitation wavelength of about 480 nm and an emission wavelength of about 520 nm to determine enzyme activity using a fluorometer-spectrophotometer in kinetic mode every minute for at least 10 minutes.
                        </p>
                    </template>
                </SingleColumn>
            </template>
        </Notebook>
    </div>
</template>