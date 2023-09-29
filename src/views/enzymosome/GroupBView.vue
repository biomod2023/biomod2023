<script setup lang="ts">
import Notebook from "@/components/lab-notebook/Notebook.vue"
import SingleColumn from "@/components/lab-notebook/SingleColumn.vue"
import TripleColumn from "@/components/lab-notebook/TripleColumn.vue"
</script>

<template>
    <Notebook>
        <template #title>Liposome Formation</template>
        <template #body>
            <SingleColumn>
                <template #title>
                    Intro
                </template>
                <template #body>
                    <p>
                        To prevent enzyme degradation by conjugating enzymes to liposomes, both components must be treated to possess compatible functional groups (Nanjwade, Hundekar, et al., 2015). Maleimide, or H2C2(CO)2NH, is a chemical compound often used in synthetic products with thiols due to maleimide’s reactivity and ability to be readily conjugated with thiols via the mechanism of a thiol-maleimide Michael addition reaction to form thioether bonds (Darling, Nicole J., et al., 2016). Maleimide derivatives in biological systems often act as lipid anchors binding polypeptides to phospholipid membranes (Elliott & Prestwich, 2000). To synthesize enzymosomes composed of thiolated enzymes and liposomes containing maleimide requires maleimide groups that are able to readily react with excess thiols and form thioether bonds (Girão et al., 2021). We needed to synthesize liposomes in a method that preserves the maleimide groups in formulated liposomes and would be able to react with modified enzymes, without compromising the structure of the liposome. 
                    </p>
                </template>
            </SingleColumn>
            <TripleColumn>
                <template #title>Methods</template>
                <template #left-title>Lipid Stock Mixtures Preparation</template>
                <template #left-body>
                    <div class="flex flex-col gap-4">
                        <p>
                            DOPC and Maleimide-PEG2000 were purchased through Avanti Polar Lipids.
                            <br />
                            Three initial 10mg/mL stock solutions were prepared:
                        </p>
                        <ul class="list-disc ml-6">
                            <li>10mg of DOPC dissolved in 1.0mL of pure ethanol</li>
                            <li>10mg of cholesterol dissolved in 1.0mL of pure ethanol</li>
                            <li>10mg of Maleimide-PEG2000 dissolved in 1.0mL of pure ethanol</li>
                        </ul>
                        <p>
                            The lipid stock solution was then prepared by reverse pipetting 572.6µL of DOPC solution, 134.8µL of cholesterol solution, and 100µL of PEG solution and mixed.
                        </p>
                        <p>
                            Phosphate-buffered saline (PBS) solution prepared by combining 8g of 0.137M sodium chloride, 0.2g of 0.0027M potassium chloride, 1.44g of 0.01M sodium phosphate dibasic, 0.245g of 0.0018M potassium phosphate monobasic with water to create a 1L solution.
                        </p>
                    </div>
                </template>
                <template #mid-title>Liposome Formation</template>
                <template #mid-body>
                    <p>
                        Liposome formation methodology was developed based upon the protocol outlined in a paper on lipid nanoparticle synthesis (Wang, et al., 2022). Liposomes were synthesized by mixing 19.44µL of lipid stock mixture and 0.56µL of ethanol in an RNase-free tube at room temperature. The solution was then treated with 60µL of 1x PBS buffer and thoroughly mixed by pipetting up and down rapidly for about 30s, to ensure fully formed uniform lipid nanoparticles. Before proceeding, the solution was incubated at room temperature for up to 15 minutes. Initial liposome formation was checked by analyzing the diffraction pattern from a red laser beam.
                    </p>
                </template>
                <template #right-title>Ethanol Removal</template>
                <template #right-body>
                    <div class="flex flex-col gap-4">
                        <p>
                            Amicon Filtration was used to remove ethanol from the liposome solution. After equilibrating 100kDa Amicon filter membrane, the liposome sample was added to filter with excess water and centrifuged at 2500g for 30 minutes twice. Then, the filter was reversed in a new tube and centrifuged at 1000g for 2 minutes to produce about a 25µL solution.
                        </p>
                        <p>
                            The solution was then transferred into a cuvette and placed into a Zetasizer Nano ZS Machine with a He-Ne laser (λ = 632 nm) where the particle sizes were measured. The volume of the solution was measured before being stored at 4°C for use, as recommended by the lipid nanoparticle synthesis paper (Wang, et al., 2022).
                        </p>
                    </div>
                </template>
            </TripleColumn>

            <SingleColumn :always-dropdown="true">
                <template #title>
                    References
                </template>
                <template #body>
                    <div class="pl-6 -indent-6">
                        <p>
                            Blah blah blah
                        </p>
                    </div>
                </template>
            </SingleColumn>
        </template>
    </Notebook>
</template>