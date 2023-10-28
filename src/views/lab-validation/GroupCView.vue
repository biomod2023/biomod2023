<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'
import Equation from '@/components/Equation.vue'
import CustomTable from '@/components/CustomTable.vue'

const tableData = {
  headers: [
    'Vital',
    'Volume of Manu Buffer (µL)',
    'Volume and source of BSA (µL)',
    'Final BSA concentration (µg/mL)'
  ],
  rowHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
  rowsPerRowHeader: 1,
  data: [
    ['0', '300 from ampule/stock', '2000'],
    ['125', '375 from ampule/stock', '1500'],
    ['325', '325 of ampule/stock', '1000'],
    ['175', '175 of vial B', '750'],
    ['325', '325 of vial C', '500'],
    ['325', '325 of vial E', '250'],
    ['325', '325 of vial F', '125'],
    ['400', '100 of vial G', '25'],
    ['400', '0', '0 = blank']
  ]
}

const sectionTitleStyle = 'text-subtitle-sm lg:text-subtitle text-white mb-4'
</script>

<template>
  <Notebook>
    <template #title> Thiolation and Conjunction </template>
    <template #body>
      <SingleColumn>
        <template #title> Intro </template>
        <template #body>
          <div class="flex flex-col items-center gap-y-5">
            <p>
              Thiolated enzymes attached to liposomes create a vesicle called enzymosomes. Thiol
              groups (S-H) are important for protein modifications and reactions but many proteins
              and enzymes lack these groups (Thermo Scientific, n.d.). To combat this, SATA
              (N-Succinimidyl S-Acetylthiolacetate) is commonly use to thiolate enzymes by the
              generation of a sulfhydryl group to be used in cross-linking, in this case with the
              enzyme, DNase 1 (Thermo Scientific, n.d.). Figure 1 shows how SATA thiolates enzymes
              to create a sulfhydryl group. Initially, primary amines that are covalently bonded
              with a molecule react with SATA, resulting in an amide bond (Thermo Scientific, n.d.).
              The amine and N-hydroxysuccinimide (NHS) esters react and form NHS, a by-product that
              is later discarded, leaving the SATA-modified molecule behind for the next reaction
              (Thermo Scientific, n.d.). The SATA-modified molecule then reacts with hydroxylamine
              through a process called deprotection, removing the protective group and finally
              generating the sulfhydryl group (Thermo Scientific, n.d.). Deoxyribonuclease 1 (DNase
              1) is an endonuclease that aids the breakdown of chromatin during apoptosis (Deng &
              Tsao, 2013). This enzyme was chosen as it contains an epsilon-amino group on the amino
              acid glutamine, which is located within its active site (Kishi et al, 2001). SATA will
              react with this amine group to form an S-H bond, causing the enzyme to undergo
              thiolation and prepare it for future reactions.
            </p>
            <CaptionedGraphics modifier="w-full">
              <template #graphics>
                <img src="../../assets/thiolation-and-conjunction/reaction-of-sata.png" alt="" />
              </template>
              <template #caption>
                <p>
                  Figure 1: Reacting SATA with amine to generate sulfhydryl group (Theule, n.d.).
                </p>
              </template>
            </CaptionedGraphics>

            <p>
              The other side of the equation to conjugate the thiolated enzyme, DNase 1 to the
              liposome, maleimide is the thiol-Michael addition reaction. Figure 2 depicts the
              sulfur group donating its electron to the olefin of a maleimide molecule, forming a
              covalent bond between the two. A proton is removed in this process, generating a
              thiosuccinimide molecule that is stable under non-aqueous conditions (Quanta
              BioDesign, n.d.). The Michael addition reaction allows for simple and fast
              modifications of cysteine residues to conjugate specific biomolecules (Quanta
              BioDesign, n.d.).
            </p>
            <CaptionedGraphics modifier="w-full">
              <template #graphics>
                <img
                  src="../../assets/thiolation-and-conjunction/michael-addition.png"
                  alt=""
                  class="lg:w-2/3"
                />
              </template>
              <template #caption>
                <p>
                  Figure 2: Michael Addition Reaction – A thiol-maleimide reaction that forms a
                  thiosuccinimide molecule. (Quanta BioDesign, n.d.).
                </p>
              </template>
            </CaptionedGraphics>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Technique </template>
        <template #body>
          <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">Thiolation</h3>
          <p>
            Through the process of thiolation, a thiol group (S-H) is first attached to the target
            enzyme (in our case, DNase 1). These thiolated enzymes are then reacted with the
            PEGylated liposomes containing the maleimide groups to create enzymosomes (Heeremans et
            al, 1992).
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Methods </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <section>
              <h3 :class="sectionTitleStyle">Preparation of HEPES Buffer Stock Solution</h3>
              <p>
                Start by combining 10 mM Hepes buffer (pH = 7.5), 55mM CaCl<sub>2</sub>, 10mM
                MgCl<sub>2</sub>, and 0.01mM TCEP to create 100 mL of stock solution.
              </p>
              <br />
              <p>
                Prepare another batch of 1L Hepes buffer using 13.7 mM NaCl, 10 mM HEPES buffer, and
                0.01 mM TCEP at pH 6.0. This is done using 800 mL of distilled water, 2.68 g
                potassium HEPES tribasic monohydrate, 523.20 mg citric acid, 0.80 g NaCl, 2.50 mg
                TCEP. Add 1mM HCL to increase the pH to 6.0 and add distilled water to create 1L
                solution.
              </p>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">BCA KIT</h3>
              <div class="flex flex-col gap-y-2">
                <p>
                  Set up an incubator to 37°C. Combine 100 mM Tris-HCl (pH = 7.5 at 2.5°C), 25 mM
                  MgCl<sub>2</sub>, and 1 mM CaCl<sub>2</sub> to create a 10x Reaction Buffer with
                  MgCl<sub>2</sub> to create Manu Buffer.
                </p>
                <br />
                <p>
                  Prepare 9 vials of bovine serum albumin (BSA) and dilute it according to Table 1.
                  To prepare BCA working reagent (WR), the following formula is used to determine
                  the total volume required:
                </p>
                <div class="flex flex-col items-center">
                  <Equation
                    formula="(\text{\# standards}+\text{\# unknowns)}(\text{\# replicates})(\text{volume of WE per sample}) = \text{total volume required}"
                  />
                  <Equation
                    formula="(9 \text{ standards}+3 \text{ unknowns})(3 \text{ replicates})(200 \text{ L})=7200 \text{ L required}"
                  />
                </div>
                <p>
                  WR will be prepared by fixing 50 parts of reagent A with one part of reagent B
                  (50:1). Reagent B is added to reagent A, turning the mixed solution into a clear
                  green solution.
                </p>

                <div class="text-center">
                  <div class="overflow-x-scroll w-full">
                    <CustomTable :table-data="tableData" />
                  </div>
                  <p><b>Table 1.</b> <em>BSA dilution</em></p>
                </div>
                <p>
                  DNase 1 dilutions are prepared on ice. Label three microcentrifuge tubes “DNase 1
                  Original”, “DNase 1 x 10 dilution”, “DNase 1 x 100 dilution” and fill each tube
                  with 75 µL, 7.5 µL, and 0.75 µL of DNase 1 stock respectively. Fill up each tube
                  with the Manu buffer until they have a total volume of 75 µL.
                </p>
                <p>
                  To make a microplate with WR and the DNase 1 dilution, add in a ratio of 1:8
                  (DNase 1: WR). 25 µL of each DNase 1 standard is pipetted into a microplate and
                  200 µL of WR were added to each well. Mix on a plate shaker for 30 seconds, cover
                  the plate, and incubate at 37°C for 30 minutes. After incubating, let the plate
                  cool to room temperature and measure the absorbance at 562 nm on the plate reader.
                  Subtract the average of replicate absorbances by the blank replicates.
                </p>
              </div>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">
                SATA Stock Solution Creation, Dilution, and Titration with DNase 1
              </h3>
              <p>
                In the fume hood, 1.5 mg SATA is dissolved in 150 µL dimethylformamide (DMF) or
                dimethylsulfoxide (DMSO) to create a 150 µL SATA stock solution. The SATA stock is
                diluted with water; 10 µL of SATA stock is used, 90 µL of water is added, this is
                repeated two more times to obtain the desired concentration. These volumes of SATA
                and 1 µL of DNase 1 were titrated together at a molar ratio of 1:1, 4:1, and 8:1,
                respectively. The mixtures were incubated at room temperature for 20 minutes at a pH
                of 7.5 under shaking conditions, then it was topped up with 100 µL of HEPES buffer.
              </p>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">
                Separation of Thiolated DNase 1 from Unbound SATA by Amicon Filtration
              </h3>
              <p>
                4mL of HEPES buffer was spun in a centrifuge at 4000 g for 10 minutes. 3.5-4 mL of
                HEPES buffer is added to the filter device. After capping the device, it was placed
                into the swinging-bucket centrifuge rotor or Amicon® Ultra devices and spun at
                4,000 x g maximum and 7,500 x g maximum, respectively, for approximately 10-40
                minutes. Immediately after centrifugation, a pipette is inserted into the bottom of
                the filter device and using a side-to-side sweeping motion, the concentrated solute
                could be recovered. 70% ethanol is added to the solute for storage, to prevent it
                from drying out.
              </p>
            </section>

            <section>
              <h3 :class="sectionTitleStyle">Conjugation of Thiolated Enzyme to Liposomes</h3>
              <p>
                50 mL of 10 mM HEPES stock, 625 µL of 0.01 mM TCEP at pH 7.5 was added to a falcon
                tube of 1 mL of 0.5M hydroxylamine-HCl. 0.1 mL of this solution was added to 1 mL of
                the thiolated DNase 1 and incubated for one hour at room temperature. This protein
                solution was then diluted to 12.5 µM with a buffer consisting of 13.6 mM HCl/10 mM
                citrate buffer with 0.01 mM TCEP at a pH of 6.0. This enzyme-buffer mixture was
                added to freshly prepared maleimide-liposomes (10 mM lipid) at
                liposome-to-thiolated-enzyme ratios of 1:1 and 10:1. After gentle mixing at room
                temperature overnight, the enzymosomes were measured using dynamic light scattering
                (DLS). Normally they would be separated from unconjugated enzymes through dilution
                and ultracentrifuged at 176 000 x g for 1.5h at 4°C on a L8-60 M ultracentrifuge.
                However, due to resource constraints, and the lack of an ultracentrifuge,
                unconjugated enzymes were not able to be separated in this experiment.
              </p>
            </section>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Results </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <CaptionedGraphics modifier="w-full">
              <template #graphics>
                <img
                  src="../../assets/thiolation-and-conjunction/thiolated-dnase-i.png"
                  alt=""
                  class="xl:w-1/2"
                />
              </template>
              <template #caption>
                <p>
                  Figure 3. Picogreen Assay Results of Thiolated DNase I. Generated DNA
                  concentration shown over time at 3 different ratios of SATA to DNase I (1:1, 4:1,
                  8:1).
                </p>
              </template>
            </CaptionedGraphics>
            <p>
              For determining the most optimal ratio of the SATA to DNase 1 in order to generate the
              most thiolated-DNase 1 while maintaining activity, different concentrations of SATA
              were used to titrate with the targeted enzyme. According to Figure 3, thiolated DNase
              1 still retain their activity. SATA: DNase 1, 1:1 and 4:1, had the greatest activity
              of degrading ~250ng/mL of DNA in ~30s. 8:1 had less activity as it only degraded
              ~130ng/mL of DNA in the same time and never got to 0ng/mL which could suggest loss of
              activity over time. 1:1 SATA: DNase 1 can be used for future thiolation procedures.
            </p>
            <CaptionedGraphics modifier="w-full">
              <template #graphics>
                <table class="table-fixed border-collapse w-full">
                  <tr class="bg-slate">
                    <th class="py-2 px-4 text-sm lg:text-base w-1/3"></th>
                    <th class="py-2 px-4 text-sm lg:text-base w-2/3" colspan="2">Sample Type</th>
                  </tr>
                  <tbody class="bg-dark">
                    <tr>
                      <th class="text-sm lg:text-base bg-slate"></th>
                      <td class="py-1 lg:text-lg text-center">
                        <b>1:1</b>
                      </td>
                      <td class="py-1 lg:text-lg text-center">
                        <b>10:1</b>
                      </td>
                    </tr>
                    <tr>
                      <th class="text-sm lg:text-base">Z-Average (d.nm)</th>
                      <td class="py-1 lg:text-lg text-center">74.09</td>
                      <td class="py-1 lg:text-lg text-center">76.77</td>
                    </tr>
                    <tr>
                      <th class="text-sm lg:text-base">PDI</th>
                      <td class="py-1 lg:text-lg text-center">0.239</td>
                      <td class="py-1 lg:text-lg text-center">0.254</td>
                    </tr>
                  </tbody>
                </table>
              </template>
              <template #caption>
                <p>
                  Table 2. Particle Size Distribution of Enzymosome Formulation. Sample types
                  represent formulations made at 2 ratios of 10 mM maleimide-liposomes to thiolated
                  DNase I (1:1 and 10:1). Samples measured using dynamic light scattering (DLS).
                  Z-Average (mean particle size) and PDI (polydispersity index) characterize
                  particle size and distribution, respectively.
                </p>
              </template>
            </CaptionedGraphics>
            <p>
              The particle size of the enzymosome formulation was evaluated with a Zetasizer Nano ZS
              machine to assess if the proposed conjugation of thiolated enzyme to liposomes caused
              a change in particle size. As seen in Table 2, formulations containing a 1:1 ratio of
              liposome to thiolated enzyme were on average about 74.09 d.nm in size, as represented
              by the z-average of the samples based on intensity, and had a poly-dispersive index
              (PDI) of 0.239. Similarly, formulations containing a 10:1 ratio of liposome to
              thiolated enzyme were on average about 76.77 d.nm in size and had a PDI of 0.254. It
              should be noted that, despite the formulation not undergoing centrifugation to
              separate unconjugated enzymes, only one population of particles was observed in DLS.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Discussion </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <p>
              Conjugation of maleimide-liposomes to thiolated DNase I is inconclusive; however,
              thiolation of DNase 1 was successful. It supported and confirmed the thiolation
              modelling’s findings that thiolation will not occur in the active site. Nevertheless,
              there was some reduction in activity at 8:1, SATA: DNase I ratio. A possible reason
              for the lower activity of the 8:1 could be due to the excess thiolation of the enzyme
              which causes deformation within the 3D structure. Changes in the structure and
              polarity of side groups could lead to changes elsewhere in the protein. For instance,
              those changes could occur at the active site, which explains why the optimation to
              ensure DNase 1 is thiolated but not in excess is critical. Different enzymes and
              proteins may have optimal SATA ratios to ensure through thiolation.
            </p>
            <p>
              According to Table 2, in both maleimide-liposomes to thiolated DNase I 1:1 and 10:1
              ratios, the mean particle size was 74.09 d.nm and 76.77 d.nm respectively and the
              Z-Average increased notably to the mean particle size of the maleimide-liposomes only,
              32.36 d.nm. The increase in the mean particle size suggests the conjugation of the
              thiolated DNase I to maleimide-liposomes. Additionally, the PDI of both 1:1 and 10:1
              ratios, 0.239 and 0.254 respectively, were higher than the PDI of only
              maleimide-liposomes, 0.206 (Table 2 & Liposome Formation, Table 1). As PDI refers to
              the distribution of molecular weights in a given solution, the higher PDI indicates
              the presence of multiple particle sizes. In other words, in this case refers to the
              presence of thiolated DNase I, liposomes, and conjugated maleimide-liposomes to
              thiolated DNase I in the given solution. There was not a substantial difference
              between the mean particle sizes of 1:1 and 10:1 ratios and despite that the given
              solution had not undergone purification, only one population was observed in DLS. The
              regularization method in DLS presumes the presence of multiple particle populations
              and could detect the particles if their sizes are 3-5 times different within the
              detection limits of the DLS (Wyatt Technology, n.d.). This technique can detect
              particle sizes approximately between 0.3nm-10µm (Raval et al., 2019). By using the
              molecular weight of DNase I (30.33 kDa) and the partial specific volume (0.73 cm³/g),
              the approximate diameter of DNase I is calculated to be 4.13 nm (Parsiegla et al.,
              2013 & Erickson, 2009). The reason why only one population of particles was observed
              in DLS could be that the subpopulations did not scatter the light strongly and only
              resulted in one peak (Filipe et al., 2010).
            </p>
            <p>
              To further verify the conjugation of the maleimide-liposomes to thiolated DNase I,
              techniques such as cyro-TEM (transmission electron microscopy), cyro-SEM (scanning
              electron microscopy, and size exclusion chromatography could be used before making
              conclusions regarding its effectiveness.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Deng, Y., & Tsao, B. P. (2013). Genetics of Human SLE. Dubois’ Lupus Erythematosus and
              Related Syndromes, 35–45. https://doi.org/10.1016/b978-1-4377-1893-5.00004-2
            </p>
            <p>
              Erickson, H. P. (2009, May 15). Size and shape of protein molecules at the nanometer
              level determined by sedimentation, gel filtration, and electron microscopy. Biological
              procedures online. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3055910/
            </p>
            <p>
              Filipe, V., Hawe, A., & Jiskoot, W. (2010, May). Critical evaluation of nanoparticle
              tracking analysis (NTA) by NanoSight for the measurement of nanoparticles and protein
              aggregates. Pharmaceutical research.
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2852530/
            </p>
            <p>
              Instructions SATA and SATP. Thermo Scientific. (n.d.).
              https://assets.fishersci.com/TFS-Assets/LSG/manuals/MAN0011179_SATA_SATP_UG.pdf
            </p>
            <p>
              Heeremans, J. L. M., Kraaijenga, J. J., Los, P., Kluft, C., & Crommelin, D. J. A.
              (1992). Development of a procedure for coupling the homing device glu-plasminogen to
              liposomes. BBA-General Subjects, 1117(3), 258-264. Doi: 10.1016/0304-4165(92)90022-M
            </p>
            <p>
              Kishi, K., Toshihiro, Y., & Takeshita, H. (2001). DNase I: structure, function, and
              use in medicine and forensic science. Legal Medicine, 3(2), 69-83. doi:
              10.1016/S1344-6223(01)00004-9
            </p>
            <p>
              Maleimide Reaction Chemistry. Quanta BioDesign. (n.d.).
              https://www.quantabiodesign.com/maleimide-reaction-chemistry/
            </p>
            <p>
              Parsiegla, G., Noguere, C., Santell, L., Lazarus, R. A., & Bourne, Y. (2013, January
              9). 4AWN: Structure of recombinant human dnase I (rhdnasei) in complex with magnesium
              and phosphate. RCSB PDB. https://www.rcsb.org/structure/4awn
            </p>
            <p>
              Raval , N., Maheshwari, R., Kalyane, D., Youngren-Ortiz , S. R., Chougule, M. B.,
              Tekade, R. K., 6, & AbstractWith increasing importance of nanoparticles in
              pharmaceutical applications. (2019, January 11). Importance of physicochemical
              characterization of nanoparticles in pharmaceutical product development. Basic
              Fundamentals of Drug Delivery.
              https://www.sciencedirect.com/science/article/pii/B9780128179093000108
            </p>
            <p>
              Theule, Stephanie. (n.d.). Reaction of SATA [Reaction Image]. ResearchGate.
              https://www.researchgate.net/figure/SATA-and-its-reaction-with-primary-amines-SATA-reacts-with-primary-amines-and_fig18_29529224
            </p>
            <p>
              Understanding Dynamic Light Scattering. Waters | Wyatt Technology. (n.d.).
              https://www.wyatt.com/library/theory/dynamic-light-scattering-theory.html#:~:text=In%20dynamic%20light%20scattering%20(DLS,to%20the%20particles%27%20hydrodynamic%20radii
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
