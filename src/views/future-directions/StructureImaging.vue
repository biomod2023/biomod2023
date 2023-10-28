<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'

const sectionTitleStyle = 'text-subtitle-sm lg:text-subtitle text-white mb-4'
</script>

<template>
  <Notebook>
    <template #title> Structure Imaging </template>
    <template #body>
      <SingleColumn>
        <template #title> Overview </template>
        <template #body>
          <p>
            To visualize the formation of the octahedron, Atomic Force Microscopy (AFM) was employed
            due to its capacity for high-resolution imaging and its established utility in
            visualizing DNA origami structures. An attempt was made to observe octahedron formation;
            however, this endeavor was impeded by a machine calibration malfunction, preventing a
            conclusive determination of the success of octahedron formation. Although the acquired
            images suggest a probable formation of the octahedron structure, future attempts are
            imperative, using the same methods outlined below, in order to definitively confirm its
            formation.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Background </template>
        <template #body>
          <p>
            Atomic Force Microscopy (AFM) is a technique used to obtain high-resolution images of
            nanoscale structures, including DNA origami and protein assemblies (Kolbeck et al.,
            2023). AFM employs a sharp probe to scan the surface of the sample mechanically. The
            interaction between the probe tip and the sample surface generates a topographical/3D
            map, which can be magnified for detailed examination(Kolbeck et al., 2023). This allows
            researchers to visualize intricate structures at the nanometer scale without the need
            for electron beams (Kolbeck et al., 2023). AFM is particularly useful for studying
            biological samples, as it does not require a vacuum environment or special sample
            preparation, making it more versatile for a wide range of applications (Kolbeck et al.,
            2023).
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Aims </template>
        <template #body>
          <ol class="list-decimal pl-8">
            <li>
              To observe and confirm the synthesis of DNA origami structures, to serve as a scaffold
              for imaging
            </li>
            <li>To determine the extent of chaining/polymerization for octahedrons</li>
            <li>To demonstrate the viability of using AFM for DNA origami methods</li>
          </ol>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Methods </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <p>
              The method was adapted by Lv et al., 2015. To capture detailed AFM (Atomic Force
              Microscopy) images of DNA nanostructures, a mica surface was employed as the
              substrate. Mica is a silicate mineral that is frequently used in microscopy due to its
              smooth, reactive surface. Initially, the mica surface was prepared by cleaving it with
              a sterilized, sharp scalpel, although Scotch tape can also be employed for this task.
              Following the cleavage, we applied a prepared buffer onto the mica and let it incubate
              for 5 minutes. To ensure complete removal of the buffer, the surface was washed with 1
              mL of double-distilled water (ddH2O). This washing step was conducted three times.
            </p>
            <p>
              Subsequently, 2.5µL of previously prepared DNA nanostructures were applied onto the
              mica. The sample was then allowed to incubate for 5 minutes, ensuring that the DNA
              would securely adhere to the mica surface for stable imaging. To minimize the risk of
              salt contamination, we rinsed the mica surface with 1 mL of either Millipore water or
              ddH2O. After washing, the mica surface was immediately dried under Argon for 1 minute.
            </p>
            <p>
              Finally, with both the mica surface and DNA nanostructures properly prepared, the
              sample was ready for AFM imaging.
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
                <div class="grid md:grid-cols-2 grid-rows-2 gap-10 lg:w-3/4">
                  <img src="../../assets/structure-imaging/sample-1.jpeg" alt="" class="h-full" />
                  <img src="../../assets/structure-imaging/sample-2.jpeg" alt="" class="h-full" />
                  <img src="../../assets/structure-imaging/sample-3.jpeg" alt="" class="h-full" />
                  <img src="../../assets/structure-imaging/sample-4.jpeg" alt="" class="h-full" />
                </div>
              </template>
              <template #caption>
                <p>
                  Figure 1. Four AFM images of the area of Octahedron sample (25 nM). The X axis
                  represents width and the Y axis represents length of the samples. The range of
                  values on the sidebars represent the heights of samples (length in the Z
                  dimension). It should be noted that these values are not reliable due to
                  calibration errors of the machine.
                </p>
              </template>
            </CaptionedGraphics>
            <p>
              In the acquired images, we observed distinct white "blobs" that may potentially
              represent octahedron structures. However, it is important to note that the reliability
              of the xyz axes is compromised due to a calibration malfunction in the imaging
              machine. As a result, we are unable to provide conclusive information regarding the
              sizes of these structures, even when using a standard reference sample.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Discussion </template>
        <template #body>
          <div class="flex flex-col gap-y-6">
            <p>
              While the features observed in the AFM images resemble octahedrons, they could also
              potentially be salt crystals, specifically MgCl2, which is commonly used in the
              thermoramp protocol for forming octahedrons from scaffold and staple strands. However,
              it's important to note that the absence of an accurate scale bar makes it
              inappropriate to draw conclusions without further verification. Therefore, retesting
              AFM or employing an alternative validation method is necessary. The gel
              electrophoresis results did exhibit a noticeable band shift for the formed structure
              compared to the scaffold. Nevertheless, it's worth noting that gel electrophoresis
              provides more of a qualitative assessment, and for greater confidence in the
              successful formation of octahedrons, we need to complement it with AFM or other
              visualization techniques. In our future experiments, we plan to utilize AFM in
              conjunction with TEM (Transmission Electron Microscopy) to establish two reliable
              methods for confirming the structure's formation. AFM will be our initial choice due
              to its quicker results. However, it's essential to recognize that AFM primarily
              confirms the DNA aspects of the octahedron. For a comprehensive understanding of
              liposome formation templated on the octahedron, cryo-TEM remains the most suitable
              method.
            </p>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn :always-dropdown="true">
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Kolbeck, P. J., Dass, M., Martynenko, I. V., van Dijk-Moes, R. J. A., Brouwer, K. J.
              H., van Blaaderen, A., Vanderlinden, W., Liedl, T., & Lipfert, J. (2023). DNA Origami
              Fiducial for Accurate 3D Atomic Force Microscopy Imaging. Nano Letters, 23(4),
              1236–1243. https://doi.org/10.1021/acs.nanolett.2c04299
            </p>
            <p>
              Lv, Y., Hu, R., Zhu, G., Zhang, X., Mei, L., Liu, Q., Qiu, L., Wu, C., & Tan, W.
              (2015). Preparation and biomedical applications of programmable and multifunctional
              DNA nanoflowers. Nature Protocols, 10(10), 1508–1524.
              https://doi.org/10.1038/nprot.2015.078
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
