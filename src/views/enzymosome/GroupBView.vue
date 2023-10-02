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
                    <div class="flex flex-col gap-4">
                        <p>
                            To prevent enzyme degradation by conjugating enzymes to liposomes, both components must be treated to possess compatible functional groups (Nanjwade, Hundekar, et al., 2015). Maleimide, or H2C2(CO)2NH, is a chemical compound often used in synthetic products with thiols due to maleimide’s reactivity and ability to be readily conjugated with thiols via the mechanism of a thiol-maleimide Michael addition reaction to form thioether bonds (Darling, Nicole J., et al., 2016). Maleimide derivatives in biological systems often act as lipid anchors binding polypeptides to phospholipid membranes (Elliott & Prestwich, 2000). To synthesize enzymosomes composed of thiolated enzymes and liposomes containing maleimide requires maleimide groups that are able to readily react with excess thiols and form thioether bonds (Girão et al., 2021). We needed to synthesize liposomes in a method that preserves the maleimide groups in formulated liposomes and would be able to react with modified enzymes, without compromising the structure of the liposome.
                        </p>

                        <p>
                            <b>Aim: To create liposomes for the enzymosome structure that are formulated with maleimide groups</b>
                        </p>
                    </div>
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

            <SingleColumn>
                <template #title>
                    Results
                </template>
                <template #body>
                        <p>Lipid stock solutions were made and used in liposome formulation. Liposome formation was evaluated with a Zetasizer Nano ZS machine to assess consistency in size so that succeeding steps of liposome and enzyme conjugation were not complicated by variable liposome sizes. As seen in Images 1 and 2, unpurified liposome samples were on average about 99.03 d.nm in size, as represented by the z-average of the samples based on intensity, and had a poly-dispersive index (PDI) of 0.250. Image 3 and 4 of purified liposome samples show a z-average of 100.7 d.nm and a PDI of 0.167. Image 5 and 6, representing liposome samples with attached maleimide groups, had an average size of 32.36 d.nm, and a PDI of 0.206. It should be noted that the maleimide treated liposomes were formed with low volume sizing cuvettes unlike the other samples, which likely led to the smaller liposome size.</p>
                </template>
                <template #graphic>
                    <i>Super sick image gallery for graphs</i>
                </template>
            </SingleColumn>

            <SingleColumn>
                <template #title>
                    Discussion
                </template>
                <template #body>
                    <div class="flex flex-col gap-4">
                        <p>
                            The results of liposome formation found that both purified and unpurified samples of liposomes (without maleimide) yielded similar sized liposome products on average–100.7 d.nm sized liposomes for purified and 99.03 d.nm for unpurified samples. However, an important factor to consider is the increased consistency in size seen in trials with purified samples. This can be detected in the significantly low poly-dispersive index (PDI) of 0.167 seen in Images 3 and 4, which indicated that the purified liposomes formed in the experimentation were all quite similar in size. Unpurified samples had a slightly higher PDI of 0.250, indicating greater variation and inconsistency in liposome sizes produced within each sample compared to the purified samples. These results align with previous experiments involving formation of comparably sized liposomes by similar manners, such as a 2019 study that prepared liposomes to co-load with antitumor drugs for cancer treatment that characterized the liposomes produced in their trials as being on average about 85-120 d.nm with a PDI of 0.183 to 0.230 (Song, Maoyuan, et al., 2019). While the past literature does support and provide confidence in the consistency and replicability of the results of these trials, our intention is to further reduce this PDI in the future with the use of our DNA octahedron to produce more precise size-controlled liposomes. An interesting result is the variation of size distribution by number seen between samples in the graph shown in Image 4. While the overlapping graphs in Image 3 confirmed that between purified samples there were similar sized particles produced based on dynamic light scattering, the deviation seen between graphs in Image 4 suggests that there may be variation between the absolute number of each particle size within the sample compositions. It is our intention, that with the use of our DNA octahedron, this inconsistency will be reduced and more homogenous sized liposomes will be produced across samples.
                        </p>
                        <p>
                            Image 5 and 6 represent liposomes that have been treated with maleimide, in preparation to being conjugated with DNase I, and show uniformity in results with a PDI of 0.206 which is between the PDI of purified and unpurified samples without maleimide. While the addition of maleimide does seem to have increased the standard deviation, it is still within an acceptable range and comparable to past literature results of untreated liposomes between the 0.183 to 0.230 PDI range (Song, Maoyuan, et al., 2019). The average liposome size of the sample was 32.36 d.nm, but the divergence from the previous liposome sample sizes can be cited as a result of the low volume sizing cuvettes that were used for only the liposomes with maleimide. Future experiments could include investigation of whether liposome size remains stable before and after maleimide addition when using the same size cuvettes.
                        </p>
                        <p>
                            Additionally, experimentation to quantitatively test for the presence and amount of maleimide groups yielded from the liposome formulation could be done to verify the presence of maleimide on products and ensure the liposome is suitable for reacting with enzymes in successive steps of the enzymosome structure formation. This could be done in further investigations with a maleimide assay. A maleimide assay would involve reacting a known amount of excess thiol to the liposome solution and then treating the solution with a thiol-reactive chemical, such as 4,4'-dithiodipyridine (DTDP), to quantify maleimide presence on the surface of the final liposome structures and show liposomes were successfully formulated. This assay would quantify the presence of maleimide groups, which are highly reactive in the presence of thiols, by measuring the difference between initial excess thiol amounts and the amount of unreacted thiol after the complete reaction to the maleimides by assaying unreacted thiols with another agent (Singh, 1994). Doing so in future experimentations would provide evidence that liposomes formed are capable of being conjugated with enzymes and confirm consistency of results yielded from this methodology.
                        </p>
                    </div>
                </template>
            </SingleColumn>

            <SingleColumn :always-dropdown="true">
                <template #title>
                    References
                </template>
                <template #body>
                    <div class="pl-6 -indent-6">
                        <p>Darling, Nicole J., Hung, Yiu-Sun, Sharma, Shruti, & Segura, Tatiana. (2016) “Controlling the Kinetics of Thiol-Maleimide Michael-Type Addition Gelation Kinetics for the Generation of Homogenous Poly(Ethylene Glycol) Hydrogels.” Biomaterials, 101,199–206. https://doi.org/10.1016/j.biomaterials.2016.05.053</p>
                        <p>Elliott, J. T., & Prestwich, G. D. (2000). Maleimide-functionalized lipids that anchor polypeptides to lipid bilayers and membranes. Bioconjugate Chemistry, 11(6), 832–841. https://doi.org/10.1021/bc000022a</p>
                        <p>Girão, L. F. C., Carvalheiro, M. C., Ferreira-Silva, M., da Rocha, S. L. G., Perales, J., Martins, M. B. F., Ferrara, M. A., Bon, E. P. S., & Corvo, M. L. (2021). ASP-Enzymosomes with Saccharomyces cerevisiae Asparaginase II Expressed in Pichia pastoris: Formulation Design and In Vitro Studies of a Potential Antileukemic Drug. International Journal of Molecular Sciences, 22(20), 11120. https://doi.org/10.3390/ijms222011120</p>
                        <p>Nanjwade, B. K., Hundekar, Y., Mohamied, A. S., Idris, N. F., Srichana, T., & Shafioul, A. S. M. (2015). Nanomedicine to Tumor by Enzymosomes. Nanotechnology: Nanomedicine&Nanobiotechnology, 2(1), 1–5. https://doi.org/10.24966/NTMB-2044/100004</p>
                        <p>Singh, R. (1994). A Sensitive Assay for Maleimide Groups. Bioconjugate Chemistry, 5(4), 348–351. https://doi.org/10.1021/bc00028a011</p>
                        <p>Song, M., Wang, J., Lei, J., Peng, G., Zhang, W., Zhang, Y., Yin, M., et al. (2019). Preparation and Evaluation of Liposomes Co-Loaded with Doxorubicin, Phospholipase D Inhibitor 5-Fluoro-2-Indolyl Deschlorohalopemide (FIPI) and D-Alpha Tocopheryl Acid Succinate (α-TOS) for Anti-Metastasis. Nanoscale Research Letters, 14, 138. https://doi.org/10.1186/s11671-019-2964-4 </p>
                        <p>Wang, X., Liu, S., Sun, Y., Yu, X., Lee, S. M., Cheng, Q., Wei, T., Gong, J., Robinson, J., Zhang, D., Lian, X., Basak, P., & Siegwart, D. J. (2022). Preparation of selective organ-targeting (SORT) lipid nanoparticles (LNPs) using multiple technical methods for tissue-specific mRNA delivery. Nature Protocols, 18, 265-291.</p>
                    </div>
                </template>
            </SingleColumn>
        </template>
    </Notebook>
</template>