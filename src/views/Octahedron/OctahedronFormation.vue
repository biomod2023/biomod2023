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
                <template #title> Intro </template>
                <template #body>
                    <p>
                        DNA origami structures were used as templates for liposome formation and eventual enzymes were attached to the liposome structure. The DNA origami template structure was an octahedron-type endoskeleton based on “Virus-Inspired Membrane Encapsulation of DNA Nanostructures To Achieve In Vivo Stability” (Perrault et al., 2014). The DNA endoskeleton was used as a design strategy to encapsulate a lipid membrane over the DNA endoskeleton to ensure high structural support. A software called CadNano, which runs on python, was used to design our structures. caDNAno uses 2D representations to design 3D DNA origami structures. Previous UBC BIOMOD teams have developed python scripts to check for issues that may arise, including DNA getting stuck in local energy minima during the folding process as well as the relative length of staple strands affecting the annealing process. The workflow started with determining the shape of the structure and the helix layout, followed by computational design and testing the structure using online simulation tools such as mrDNA and Cando. After verifying our structures computationally, the structures are formed in the lab using oligo annealing protocols and verified using a variety of imaging techniques.
                    </p>
                </template>
            </SingleColumn>

            <SingleColumn>
                <template #title> Aims </template>
                <template #body>
                    <p>
                        To prepare a 3D octahedron-like structure using sourced scaffold, staple sequences, reagents and a temperature gradient. The purpose is to create a modular enzymosome. To achieve this, an endo structure is designed where the enzymosome would be outside the DNA scaffolding.The DNA scaffolding would provide structural support to ensure a constant shape for the liposome. 
                    </p>
                </template>
            </SingleColumn>

            <SingleColumn>
                <template #title> Techniques </template>
                <template #body>
                    <p>
                        PCR using Thermoramp cycling and gel electrophoresis. 
                    </p>
                </template>
            </SingleColumn>

            <SingleColumn>
                <template #title> Methods </template>
                <template #body>
                    <p>
                        We began by using a thermocycler to mix the scaffold and staple strands together, increasing the probability of hydrogen bonding. The PCR tubes were labeled and the appropriate volumes of each reagent was put into the PCR tubes (MgCl<sub>2</sub> (if salt screening), Tris, EDTA, Scaffold, staple and water). The total volume in the PCR tubes added to 60 μL. We ensured to mix the solution with the P200 before aliquoting. Afterwards, the thermoramp was started by following the instructions listed below to ensure the formation of the structure.
                    </p>
                    <ol class="list-decimal list-inside relative left-8 w-fit">
                        <li>80 °C for 5 min</li>
                        <li>Decrease to 65 °C at a rate of -1°C per 5 minutes.</li>
                        <li>Incubate at 65 °C for 20 min</li>
                        <li>Decrease to 25 °C at -1°C per 20 minutes</li>
                    </ol>
                    <p>
                        Finally, to verify the structure that was formed, gel electrophoresis was utilized. A 1% agarose gel was made by adding 0.4 - 0.5 g agarose to 50ml of 0.5X TBE with 10mM MgCl2 in an erlenmeyer flask. This was microwaved for 15 seconds, swirling and repeated until a homogenous mixture was formed. A gel cast tray of 50 ml was prepared and once the gel had cooled, 2.5 μl of 10X Sybr safe was pipetted into the gel mix which was poured into the gel cast tray. The gel electrophoresis was run in a 0.5X TBE buffer with 10mM MgCl2 for 3 hours at 60V.
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
                                <b>Figure 1.</b> Referencing the ladder, a known reference of DNA sizes, the staple mole ratios are made at 1:1, 1:2, 1:3, 1:5, 1:7, 1:10. The brighter the dot is the more DNA there is therefore indicating that the was more DNA at a 1:10 scaffold ratio.
                                </p>
                            </template>
                        </CaptionedGraphics>
                        <p>
                            Ladder is the known sizes of DNA used as reference.
                            The bright dot at the bottom is staples, the brighter the dot the more dna there is (same logic for the band on top which is the octahedron).
                            Scaffold: staple mole ratios are made at 1:1, 1:2, 1:3, 1:5, 1:7, 1:10
                        </p>
                    </div>
                </template>
            </SingleColumn>

            <SingleColumn :always-dropdown="true">
                <template #title> References </template>
                <template #body>
                <div class="pl-6 -indent-6">
                    TBD!!!
                </div>
                </template>
            </SingleColumn>
        </template>
    </Notebook>
</template>