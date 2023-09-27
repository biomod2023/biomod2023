<script setup lang="ts">
import Notebook from "@/components/lab-notebook/Notebook.vue"
import SingleColumn from "@/components/lab-notebook/SingleColumn.vue"
import DoubleColumn from "@/components/lab-notebook/DoubleColumn.vue"
</script>

<template>
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
            </template>
        </Notebook>
    </div>
</template>