<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'
import figure1 from '@/assets/octahedron-formation/Scaffold-staple_ratio.png'

const tableData = {
  headers: [' ', 'Volumes for each Ratio (μL)'],
  rowHeaders: [
    'Reagents',
    'p7308 Scaffold (100 nM)',
    'Staple Master Mix (100 μM)',
    'Folding Buffer (10 X)',
    'MgCl2 (100 mM)',
    'Autoclaved Milli Q Water',
    'Total Volume'
  ],
  rowsPerRowHeader: 1,
  data: [
    ['Reagents', '1:1', '1:2', '1:3', '1:5', '1:7', '1:10'],
    ['p7308 Scaffold (100 nM)', '6', '6', '6', '6', '6', '6'],
    ['Staple Master Mix (100 μM)', '3', '6', '9', '15', '21', '30'],
    ['Folding Buffer (10 X)', '6', '6', '6', '6', '6', '6'],
    ['MgCl2 (100 mM)', '8.4', '8.4', '8.4', '8.4', '8.4', '8.4'],
    ['Autoclaved Milli Q Water', '36.6', '33.6', '30.6', '24.6', '18.6', '9.6'],
    ['Total Volume', '60', '60', '60', '60', '60', '60']
  ]
}
</script>

<template>
  <Notebook>
    <template #title> Octahedron Formation</template>
    <template #body>
      <SingleColumn>
        <template #title> Intro </template>
        <template #body>
          <p>
            DNA origami structures were used as templates for liposome formation and eventual
            enzymes were attached to the liposome structure. In DNA origami design, the 'scaffold'
            serves as the foundational single-stranded DNA molecule, while 'staple strands' are
            short synthetic DNA strands designed to bind to and guide the folding of the scaffold
            into specific structures. The DNA origami template structure was an n-gonal
            bipyramid-type endoskeleton based on “Virus-Inspired Membrane Encapsulation of DNA
            Nanostructures To Achieve In Vivo Stability” (Perrault & Shih, 2014). The more common
            name ‘octahedron’ is employed to describe the n=4 square bipyramid, as the structure
            formed is a member of both classes. The DNA endoskeleton was used as a design strategy
            to encapsulate a lipid membrane over the DNA endoskeleton to ensure high structural
            support. A software called CadNano, which runs on python, was used to design our
            structures. CaDNAno uses 2D representations to design 3D DNA origami structures.
            Previous UBC BIOMOD teams have developed python scripts to check for issues that may
            arise, including DNA getting stuck in local energy minima during the folding process as
            well as the relative length of staple strands affecting the annealing process. The
            workflow started with determining the shape of the structure and the helix layout,
            followed by computational design and testing the structure using online simulation tools
            such as mrDNA and Cando. After verifying our structures computationally, the structures
            are formed in the lab using oligo annealing protocols and verified using a variety of
            imaging techniques. This experiment focused on testing different ratios of scaffold to
            staple strands to examine which ratio resulted in the most amount of octahedron formed.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Aims </template>
        <template #body>
          <p>
            To prepare a 3D octahedron structure using sourced scaffold, staple sequences, reagents
            and a temperature gradient. The purpose is to create a modular enzymosome. To achieve
            this, an endo structure is designed where the enzymosome would be outside the DNA
            scaffolding.The DNA scaffolding would provide structural support to ensure a constant
            shape for the liposome.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Methods </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <p>
              We began by preparing various samples with different scaffold:staple ratios to
              investigate their impact on structure formation. The ratios included 1:1, 1:2, 1:3,
              1:5, 1:7, and 1:10. To create these samples, we first produced a 1000 nM master mix of
              staple strands based on the work done by Perrault & Shih (2016). This master mix
              included the following components: 432 μL of the 'Core' oligo pool, 288 μL of the
              'Outer Handle' oligo pool, and 144 μL of the 'Inner Handle' oligo pool (Perrault &
              Shih, 2016).
            </p>
            <br />
            <p>
              Subsequently, for each of the scaffold:staple ratios, we combined the appropriate
              volumes of the reagents as outlined in Table 1 into PCR tubes.
            </p>
            <div class="overflow-x-scroll">
              <table class="table-auto border-collapse lg:w-full">
                <tr class="bg-slate h-12">
                  <th colspan="7">Volumes for each Ratio (μL)</th>
                </tr>
                <tbody class="bg-dark">
                  <tr v-for="(row, i) in tableData.data.slice(0, -1)" :key="i">
                    <th scope="row" class="w-1/4 text-sm lg:text-md">
                      {{ row[0] }}
                    </th>
                    <td
                      v-for="(item, j) in row.slice(1)"
                      :key="j"
                      class="py-1 px-2 lg:text-lg text-center"
                    >
                      {{ item }}
                    </td>
                  </tr>
                </tbody>
                <tfoot class="bg-slate">
                  <tr>
                    <th scope="row">{{ tableData.data[tableData.data.length - 1][0] }}</th>
                    <td
                      v-for="(item, j) in tableData.data[tableData.data.length - 1].slice(
                        1,
                        tableData.data.length
                      )"
                      :key="j"
                      class="py-1 px-2 lg:text-lg text-center"
                    >
                      {{ item }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p class="text-sm text-center">Table 1. Reagent Volumes for Scaffold:Staple Ratios.</p>
            <p>
              Using a thermocycler to cause the scaffold and staple strands to anneal and form a
              structure, a thermoramp was started by following the instructions listed below to
              ensure the formation of the structure (Perrault & Shih, 2014) .
            </p>
            <ol class="list-decimal list-inside relative left-8 w-fit">
              <li>80 °C for 5 min</li>
              <li>Decrease to 65 °C at a rate of -1°C per 5 minutes.</li>
              <li>Incubate at 65 °C for 20 min</li>
              <li>Decrease to 25 °C at -1°C per 20 minutes</li>
            </ol>
            <p>
              Finally, to verify the structure that was formed, gel electrophoresis was utilized. A
              1% agarose gel was made by adding 0.4 - 0.5 g agarose to 50ml of 0.5X TBE with 10mM
              MgCl<sub>2</sub> in an erlenmeyer flask. This was microwaved for 15 seconds, swirling
              and repeated until a homogenous mixture was formed. A gel cast tray of 50 ml was
              prepared and once the gel had cooled, 5 μl of 10X Sybr safe was pipetted into the gel
              mix which was poured into the gel cast tray. The gel electrophoresis was run in a 0.5X
              TBE buffer with 10mM MgCl<sub>2</sub> for 3 hours at 60V.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Results </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <CaptionedGraphics>
              <template #graphics>
                <img :src="figure1" alt="Image shows the scaffold:staples ratio" />
              </template>
              <template #caption>
                <p>
                  Figure 1. Annotated agarose gel of DNA octahedron samples at scaffold:staple
                  ratios of 1:1,1:2,1:3,1:5,1:7, and 1:10. Lanes labelled “Scaffold” and “Staples”
                  correspond to positive controls where either only p7308 scaffold or staple master
                  mix were added, respectively.
                </p>
              </template>
            </CaptionedGraphics>
            <p>
              As seen in Figure 1, the gel results indicate that the optimal scaffold-to-staple
              ratios for successful octahedron formation are 1:5 and 1:7. This is evident in the
              presence of a distinct band at approximately 1.5kb on the gel. The intensity of the
              band directly correlates with the amount of DNA, which suggests that the 1:5 and 1:7
              ratios yield the highest octahedron formation and are thus considered the optimal
              assembly ratios.
            </p>
            <p>
              Near the lower end of the gel, approximately at 100 base pairs (bp), a prominent band
              is visible. This band corresponds to excess staples and aligns with the position of
              the band found in the lane containing only staples. Furthermore, the band associated
              with the control scaffold appears slightly lower than the bands related to the DNA
              structures, signifying that the formed DNA structures are larger than the scaffold
              strands. This data supports the successful formation of a DNA structure.
            </p>
            <p>
              Lastly, as the scaffold-to-staple ratio increases, this band becomes brighter,
              indicating a surplus of unreacted staple strands. Notably, the 1:1 ratio shows some
              presence of staples (Figure 1), suggesting that not all staples were able to
              participate in octahedron formation, resulting in less than 100% efficiency in the
              formation process.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Discussion </template>
        <template #body>
          <p>
            The formation of the octahedron was most pronounced in the 1:5 and 1:7
            scaffold-to-staple ratios. To optimize future assembly processes, we selected the 1:5
            ratio due to its reduction in reagent waste. Of note, there was no clear positive
            correlation between the ratio of scaffold-to-staple and the brightness of the formed
            band. For instance, the 1:10 ratio exhibited relatively the same amount of brightness as
            the 1:3 ratio (Figure 1). This discrepancy may be attributed to the excessive amount of
            staple material, hindering the correct positioning of staples on the scaffold.
            Consequently, there may have been increased competition for binding sites on the
            scaffold, reducing the likelihood of a staple binding to its intended positions.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Perrault, S. D., & Shih, W. M. (2014). Virus-inspired membrane encapsulation of DNA
              nanostructures to achieve in vivo stability. ACS nano, 8(5), 5132–5140.
              https://doi.org/10.1021/nn5011914
            </p>
            <p>
              Perrault, S. D., & Shih, W. M. (2016). Lipid membrane encapsulation of a 3D DNA nano
              octahedron. Methods in Molecular Biology, 165–184.
              https://doi.org/10.1007/978-1-4939-6454-3_12
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
