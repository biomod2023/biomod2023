<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'
import Equation from '@/components/Equation.vue'
import CustomTable from '@/components/CustomTable.vue'

</script>

<template>
    <Notebook>
        <template #title> Octahedron Formation</template>
        <template #body>
            <SingleColumn>
                <template #title> Intro </template>
                <template #body>
                    DNA origami structures were used as templates for liposome formation and eventual enzymes were attached to the liposome structure. The DNA origami template structure was an octahedron-type endoskeleton based on “Virus-Inspired Membrane Encapsulation of DNA Nanostructures To Achieve In Vivo Stability” (Perrault et al., 2014). The DNA endoskeleton was used as a design strategy to encapsulate a lipid membrane over the DNA endoskeleton to ensure high structural support. A software called CadNano, which runs on python, was used to design our structures. caDNAno uses 2D representations to design 3D DNA origami structures. Previous UBC BIOMOD teams have developed python scripts to check for issues that may arise, including DNA getting stuck in local energy minima during the folding process as well as the relative length of staple strands affecting the annealing process. The workflow started with determining the shape of the structure and the helix layout, followed by computational design and testing the structure using online simulation tools such as mrDNA and Cando. After verifying our structures computationally, the structures are formed in the lab using oligo annealing protocols and verified using a variety of imaging techniques.
                </template>
            </SingleColumn>
        </template>
    </Notebook>
</template>