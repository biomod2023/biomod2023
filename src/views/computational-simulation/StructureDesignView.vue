<script setup lang="ts">
import Notebook from '@/components/lab-notebook/Notebook.vue'
import SingleColumn from '@/components/lab-notebook/SingleColumn.vue'
import CustomTable from '@/components/CustomTable.vue'
import CaptionedGraphics from '@/components/CaptionedGraphics.vue'
import Equation from '@/components/Equation.vue'

import FourGon1 from '@/assets/structure-design/4gon_view1.png'
import FourGon2 from '@/assets/structure-design/4gon_view2.png'
import FourGon3 from '@/assets/structure-design/4gon_view3.png'
import ThreeGon1 from '@/assets/structure-design/3gon_view1.png'
import ThreeGon2 from '@/assets/structure-design/3gon_view2.png'
import ThreeGon3 from '@/assets/structure-design/3gon_view3.png'
import FiveGon1 from '@/assets/structure-design/5gon_view1.png'
import FiveGon2 from '@/assets/structure-design/5gon_view2.png'
import FiveGon3 from '@/assets/structure-design/5gon_view3.png'
import Figure5 from '@/assets/structure-design/geometric-perspective.png'
import Figure6 from '@/assets/structure-design/Octahedron.png'
import Figure7 from '@/assets/structure-design/Trigonal.png'
import Figure8 from '@/assets/structure-design/Pentagonal.png'
import Figure9 from '@/assets/structure-design/nanoscale_polymerization_v2_w_trans.png'
import Figure11 from '@/assets/structure-design/polygons-with-flat-spherical-tiling.png'

const sectionStyle = 'text-subtitle-sm lg:text-subtitle text-white mt-6 mb-4'
const structureHeadings = ['Highest RMSF (nm)', 'LOWEST RMSF (nm)', '95% CI  (nm)']
const structures = [
  {
    label: 'Structure (Octahedron): CONTROL',
    preview: Figure6,
    graphics: [FourGon1, FourGon2, FourGon3],
    captions:
      'Figure 6. A schematic of the Octahedron showing the number of edges and position of edges relative  to each other. Labelling of edges is the same as the CADnano files.',
    values: [1.090856, 2.946035, 2.508811]
  },
  {
    label: 'Structure: Trigonal Bipyramid',
    preview: Figure7,
    graphics: [ThreeGon1, ThreeGon2, ThreeGon3],
    captions:
      'Figure 7. A systematic of the Trigonal Bipyramid showing the number of edges and position of edges to each other. Labelling of edges is the same as the CADnano files.',
    values: [0.891485, 2.505012, 2.098468]
  },
  {
    label: 'Structure: Pentagonal Bipyramid',
    preview: Figure8,
    graphics: [FiveGon1, FiveGon2, FiveGon3],
    captions:
      'Figure 8. A systematic of the Pentagonal Bipyramid showing the number of edges and position of edges to each other. Labelling of edges is the same as the CADnano files.',
    values: [0.956679, 2.518227, 1.793869]
  }
]
const tableData = {
  headers: ['Software', 'Key Features', 'Functionality'],
  rowHeaders: ['caDNAno2', 'CanDo', 'Nanoval'],
  rowsPerRowHeader: 1,
  data: [
    [
      'Graphical User Interface (GUI) for user interaction.',
      'Allows users to set 3D positions, linking mechanisms, and hybridization zones of staple and scaffold strands.'
    ],
    [
      'Web application with temperature-specific simulations.',
      'Generates color-coded images show the relative stability of different areas in the DNA structure and 3D structure modelling.'
    ],
    [
      'Automated analysis of oligonucleotide connectivity and binding domains.',
      'Ensures optimal structure design by identifying potential issues that could lead to misfolding and incorrect structure formation'
    ]
  ]
}
</script>

<template>
  <Notebook>
    <template #title> Structure Design </template>
    <template #body>
      <SingleColumn>
        <template #title> Overview </template>
        <template #body>
          <p>
            Our goal was to create a 3-dimensional nanostructure with the potential to serve as a
            template for homogenous liposomes, while also being modular in design. To validate this
            concept, we adapted the structure (affectionately termed the 4-gon) and developed our
            own variations of the structure (3-gon and 5-gon) . The initial designs were carried out
            using cadnano software, and subsequent computational simulations were performed to
            evaluate the 3D conformation and structural stability of these newly engineered
            nanostructures.
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Introduction </template>
        <template #body>
          <p>
            DNA origami technologies can aid in synthetic nanostructure production and emulate the
            atomic-precision of biological assembly seen in living cells (Dey et al., 2021). In DNA
            origami, the self-assembly of nano-structures entails binding single-stranded DNA
            scaffolds to shorter staple strands of DNA by complementary base pairings. Depending on
            the pairings, the scaffold can be folded into the programmed 2D or 3D structure
            (Rothemund, 2006). We wanted to exploit DNA origami structures as templates for enhanced
            precision liposome formation. The concept was developed from previous research on virus
            encapsulation of genetic material inside a lipid membrane (Perrault & Shih, 2014). DNA
            origami would serve as an endoskeleton our developing lipid membrane would envelope
            around, and this was predicted to increase the uniformity and structural stability of
            subsequently assembled liposomes. Our structures were designed as n–gonal bipyramid
            nanostructures, in which n could potentially be any natural number that formed a polygon
            with n number of sides. In our practical experimentations, we focused only on triangular
            bipyramid, square bipyramid, and pentagonal bipyramid structures, where n = 3, 4, and 5
            respectively. Please note that the term “octahedron” is commonly used in our research to
            refer to the n=4 square bipyramid due to the structure being accurately described by
            both titles as a result of self-imposed restrictions on the programming of our
            structure. We employed caDNAno software in addition to simulation tools, such as mrDNA
            and Cando, to computationally design and validate our structures prior to conducting in
            lab oligo-annealing and imaging. New python scripts and workflow were developed based
            upon research conducted by UBC BIOMOD members in previous years (Law et al., 2023).
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Background </template>
        <template #body>
          <p>
            In DNA origami, one elongated "scaffold" strand, typically containing 3000 to 8000 base
            pairs, is shaped into a specific form by numerous shorter "staple" strands, which
            usually range from 24 to 64 base pairs. This specific architecture is sustained through
            "crossover events." These events take place when a staple strand shifts from binding to
            one section of the scaffold strand to a different section, even if those sections are
            not immediately next to each other. For instance , if a length of DNA has areas labeled
            A, B, and C, the introduction of a staple strand can make the DNA curve, pulling areas A
            and C closer in a three-dimensional configuration. This folding process is crucial for
            the creation of DNA origami structures (Figure 1).
          </p>

          <CaptionedGraphics>
            <template #graphics>
              <img src="../../assets/structure-design/origami-overview.png" />
            </template>
            <template #caption>
              <p>Figure 1. A quick overview of DNA origami.</p>
            </template>
          </CaptionedGraphics>

          <p>
            The design of DNA origami involves formulating nanostructures by determining the
            locations and binding patterns of the staple strands relative to the scaffold strand. In
            this framework, the "coordinate" of a staple strand indicates its 3D position as
            calculated by design software, in relation to other strands. The scheme for
            hybridization specifies the points at which the staple strands connect to the scaffold.
            These factors collectively establish the groundwork for building elaborate DNA origami
            structures, which can range from simple 2D shapes to intricate 3D mechanisms with
            diverse functionalities (see Supplementary Material).
          </p>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title>Design Process</template>
        <template #body>
          <p>
            The development of DNA Origami Structures is iterative consisting of 3 general
            processes:
          </p>
          <ol class="list-decimal list-inside my-2 pl-4 lg:px-8">
            <li>
              Finding the 3D locations folding and hybridization for the shorter staple strands
              relative to the long scaffold strand.
            </li>
            <li>Scrutinizing the design files to pinpoint any potential weak spots or errors.</li>
            <li>
              Utilizing simulations or predictive models to forecast the eventual formation of the
              structure
            </li>
          </ol>
          There are a number of computational software tools used:
          <div class="w-full overflow-x-scroll">
            <CustomTable :table-data="tableData" />
          </div>

          <h3 :class="sectionStyle">Specific N-gonal Bipyramid Design Workflow</h3>
          <p>The design process for the N-gonal Bipyramidal consists of the following steps:</p>
          <ol class="list-decimal list-inside lg:px-8">
            <li class="py-2">
              <b>Creating a 2D Blueprint from Our 3D Design (Net-Like Structure):</b> Throughout the
              development process, we envisioned putting our 3D model into a 2D surface. It's
              similar to visualizing the edges of the 3D structure as strings. When you pull upward
              from the string, these strings lay flat, effectively transitioning the design from
              three dimensions to two. By then compressing this flattened net perpendicular to the
              direction of the initial pull, we further refine it into a distinct net-like pattern.
              Figure 2 shows what happens to the labelled strings when this transformation occurs.
              <CaptionedGraphics>
                <template #graphics>
                  <img src="../../assets/structure-design/net-like-structure.png" alt="" />
                </template>
                <template #caption>
                  Figure 2. Conversion from the intended 3D conformation of a triangular bipyramid
                  to a net-like structure. The vector used here is the p7308 vector which is 7308
                  base pairs long.
                </template>
              </CaptionedGraphics>
            </li>

            <li class="py-2">
              <b>Formulating the side view through software and scaffold design:</b> Upon completing
              the initial layout, we devised a scaffold strand to guarantee the structure's accurate
              folding. This tailored strand incorporates the correct number of base pairs,
              consistent with the scaffold we employed.
              <CaptionedGraphics>
                <template #graphics>
                  <img src="../../assets/structure-design/arb-scaffold.png" alt="" />
                </template>
                <template #caption> Figure 3. An arbitrary DNA scaffold </template>
              </CaptionedGraphics>
            </li>

            <li class="py-2">
              <b>Securing structural stability with staple strands:</b> To reinforce the scaffold's
              integrity, we developed staple strands that link the scaffold together. These staple
              crossovers are additionally employed to fold the scaffold into shapes that align with
              the cross-sectional layout.
              <CaptionedGraphics>
                <template #graphics>
                  <img src="../../assets/structure-design/arb-scaffold-staples.png" alt="" />
                </template>
                <template #caption>
                  Figure 4. An Arbitrary DNA scaffold with staples. This will fold into a specific
                  conformation afterwards.
                </template>
              </CaptionedGraphics>
            </li>

            <li class="py-2">
              <b>Fine-tuning with calculated insertions and deletions:</b> After introducing breaks
              to achieve desired staple lengths, we performed calculations to determine the number
              of insertions and deletions needed. Each insertion added a base pair to both the
              scaffold and staple, while each deletion removed a base pair from them. The total
              number of insertions matched the final number of deletions. These insertions and
              deletions aimed to introduce curvature into the structure without geometrically
              stiffening the crossovers, thereby leading to a thermodynamically favorable, curved
              formation.

              <CaptionedGraphics>
                <template #graphics>
                  <img :src="Figure5" alt="Geometric Perspective" class="mt-2" />
                </template>
                <template #caption>
                  Figure 5. The effect of insertions and deletions on the bending of a structure,
                  shown from a geometric perspective in CanDO
                </template>
              </CaptionedGraphics>
            </li>

            <li class="py-2">
              <b>Uploading to Nanoval and Computational Analysis:</b> The structure was uploaded to
              the nanoval library for manual inspection of sandwich or staple strands. After
              correction, we then obtained Root Mean Square Fluctuation Values and Stability Maps
              using CanDO, which helped in computationally predicting the structural stability and
              topology. Ensuring the simulation displayed the intended shape and stability was key
              to averting the formation of kinetic traps and sandwich strands.

              <img
                src="../../assets/structure-design/rmsf-anim.gif"
                alt=""
                class="w-full lg:w-1/2 m-auto"
              />
            </li>

            <li>
              <b>Cross-Comparisons with Existing Literature:</b> Once we acquired Perrault et al.'s
              structure (Rajkumar, Perrault, UBC BIOMOD, personal correspondence), we undertook a
              comparative analysis between our design and existing structures documented in the
              literature.
            </li>
          </ol>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Results and Discussion </template>
        <template #body>
          <div class="flex flex-col gap-y-4">
            <p>
              We primarily used CanDO for structure prediction. This tool is useful if we
              effectively eliminate the requirement for mechanism-dependent fluctuations —
              variations in the DNA structure that could be influenced by adjacent DNA strands, such
              as the nanohinge done by our team previously (UBC BIOMOD 2022). In CanDO, the Root
              Mean Square Deviation (RMSD) is visualized through a gradient transitioning from red
              to blue, illustrating the average distance molecules stray from their starting
              positions. Importantly, our post-design evaluation revealed no major discrepancies,
              and the peak Root Mean Square Fluctuation (RMSF) values remained notably low for all
              studied structures. The subsequent schematic illustrates the minimum, maximum, and
              average RMSF values, all presented within the 95% CI, for the 3-gon, 4-gon, and 5-gon,
              respectively. These are paired with their respective CanDO images. To clarify, when we
              reference the "RMSF values at the 95% CI," we are indicating the range of RMSF values
              (minimum, maximum, and average) for each structure, where we possess 95% confidence
              that the actual RMSF value resides within this interval. A broad confidence interval
              signifies increased uncertainty, while a tighter interval reflects a higher level of
              precision.
            </p>
            <section v-for="(structure, i) in structures" :key="i" class="py-2">
              <h3 :class="sectionStyle">{{ structure.label }}</h3>
              <p v-if="i == 0">
                Note while this structure has been formed already, it is easier for us to take the
                original Cadnano structure to provide a relative comparison. The original Cadnano
                structure was obtained from Dr. Steven Perrault.
              </p>
              <CaptionedGraphics>
                <template #graphics>
                  <img :src="structure.preview" class="w-[80%]" />
                </template>
                <template #caption>
                  {{ structure.captions }}
                </template>
              </CaptionedGraphics>
              <br />
              <p class="text-center text-xl mt-4"><b>RMSF View</b></p>
              <div class="grid grid-cols-3">
                <div v-for="j in 3" :key="j">
                  <CaptionedGraphics>
                    <template #graphics>
                      <img :src="structure.graphics[j - 1]" alt="" />
                    </template>
                  </CaptionedGraphics>
                  <p class="text-center text-sm lg:text-md mt-2">{{ structureHeadings[j - 1] }}</p>
                  <p class="text-center text-sm lg:text-md">{{ structure.values[j - 1] }}</p>
                </div>
              </div>
            </section>
            <p>
              In the realm of DNA modeling, CanDo is a notable tool, but it's not without its
              limitations . Specifically, it doesn't account for the natural repelling forces
              between DNA strands, such as electrostatic or Van der Waals forces (Kim et. al, 2012).
              The CanDo models don't offer a universal measurement scale, but rather, each model has
              its own relative scale (Kim et. al, 2012). However, it's reassuring to note that when
              assessing the minimum, maximum, and average values across these models, the units of
              measurement remain consistent.
            </p>
            <p>
              This consistent approach enables a more structured comparison across various DNA
              structures. Our observations indicate that, for the most part, these structures
              maintain a similar level of stability. Our reference structure, which serves as a
              benchmark, displays certain intertwined edges (Perrault, Shih 2019). This
              interconnectedness is also evident, albeit to a reduced degree in the pentagonal
              bipyramid and trigonal bipyramids.
            </p>
            <p>
              A point of interest across these structures is the presence of a segment or edge that
              isn't as stable as the others. This unstable segment could be a pivotal factor in
              understanding why some DNA structures have the ability to connect or polymerize. While
              the octahedral structure is more prone to polymerization due to its high RMSF values
              at the edges, both trigonal and pentagonal bipyramids are less likely to undergo
              polymerization due to either lower maximum RMSF values or due to different
              localization. This is because their maximum RMSF values are significantly lower,
              suggesting that purification processes may be easier in comparison to the octahedral
              structure. Research by Lin et. al supports this notion, demonstrating that the
              octahedron can link together using edges and vertices, forming chains that are
              illustrated in Figure 9 (Lin et al., 2019).
            </p>
            <br />
            <CaptionedGraphics>
              <template #graphics>
                <img :src="Figure9" alt="" class="w-full lg:w-[70%]" />
              </template>
              <template #caption>
                Figure 9. A schematic illustration of the polymerization potential of the
                octahedrons. Adapted from Lin et al. 2019.
              </template>
            </CaptionedGraphics>
          </div>
        </template>
      </SingleColumn>

      <SingleColumn>
        <template #title> Appendix</template>
        <template #body>
          <section>
            <h3 :class="sectionStyle + ' mt-0'">GEOMETRY BASICS</h3>
            <p>
              To calculate the approximate length of our scaffolds, we created a simple geometric
              model of our structures as spherical regular n-gonal bipyramids.
            </p>
          </section>

          <section>
            <h3 :class="sectionStyle">Regular N-gon</h3>
            <p>
              <i>N</i>-gon refers to a polygon with n edges, where n ∈ Z+ and regular refers to the
              polygons' equilateral edges (which are all of the same length). Within our
              experiments, we specifically used only n = 3, 4, and 5. Figure 10 shows examples of
              polygons. Note that any line intersecting the centre of the polygon and the midpoint
              of any edge will be orthogonal to that edge.
            </p>
            <CaptionedGraphics>
              <template #graphics>
                <img src="../../assets/structure-design/regular-polygons.png" alt="" />
              </template>
              <template #caption>
                Figure 10. A few examples of regular n-polygons, where n is stated above each
                polygon (Fauske, 2007).
              </template>
            </CaptionedGraphics>
            <p>
              All vertices of the polygon also intersect the circumference of a circle whose origin
              is the centre of the polygon. Further, the angle each edge occupies can be calculated
              using this equation:
            </p>
            <div class="text-center">
              <Equation formula="\theta=\frac{2\pi}{n}" />
            </div>
            <p>
              Since all edges of the polygon existed on the same plane, and our structure
              incorporated another axis, we refer to the edges of these n-polygons as ‘equatorial
              edges’ or ‘short edges’.
            </p>
          </section>

          <section class="flex flex-col gap-y-4">
            <h3 :class="sectionStyle">Spherical Bipyramids</h3>
            <p>
              We formed regular, right, and symmetric bipyramids from the n-polygons. A pyramid was
              formed when all vertices of a polygon were connected to a separate point–usually on a
              different vertical plane–called the apex. A bipyramid is two pyramids joined base to
              base. Regular now refers to the n–gon base being regular, right refers to the
              apex/apices being above or below the centre of the polygon, and symmetric means that
              the two pyramids are mirror images of each other. Since we employed right-angled
              pyramids, the two pyramids are always identical. We restricted the distance between
              the apices to the diameter of the circle which encloses the polygon, such that the
              entire geometry can be circumscribed within a sphere. This restriction results in
              equilateral triangle faces for the
              <Equation formula="n=4" /> square bipyramid structure, so it is commonly referred to
              by its other moniker, as an ‘octahedron’. Note that since all of the new edges were
              translated from a polygon plane to an orthogonal axis, they all cover an angle of
              <Equation formula="\theta=\pi/2" />.
            </p>

            <p>
              Spherical refers to the tiling of the bipyramid, where the surfaces of the bipyramids
              are “mapped" to the bounding spheres, as seen in Figure 11.
            </p>
            <CaptionedGraphics>
              <template #graphics>
                <img :src="Figure11" alt="" />
              </template>
              <template #caption>
                Figure 11. Examples of polygons with flat and spherical tiling ("Bipyramid," 2022)
              </template>
            </CaptionedGraphics>
            <p>
              We drew
              <Equation formula="n" /> new edges for each pyramid, or <Equation formula="2n" /> new
              edges for the bipyramid, and called these edges ‘axial’ or simply ‘the long edges’.
            </p>
            <p>
              We first derived functions
              <Equation
                formula="f : \mathbb{R}^+ \to \mathbb{R}^+, g : \mathbb{R}^+ \to \mathbb{R}^+"
              />
              to find the shorter arc length, <Equation formula="a" />, and the longer arc length,
              <Equation formula="b" />, respectively, from the diameter <Equation formula="d" />.
              This enabled us to convert from diameter units of measurements to number of base
              pairs, and vice versa. For finding the arc length, we relied on the following
              equation:
            </p>
            <div class="text-center">
              <Equation formula="s = r\theta" />
            </div>
          </section>

          <section>
            <h3 :class="sectionStyle">Equatorial Edge</h3>
            <p>
              Given diameter
              <Equation formula="d" /> and the polygon side count <Equation formula="n" />, we
              attempted to find function <Equation formula="f" /> for the equatorial arc length
              <Equation formula="a" />. From the arc equation, we had that
              <Equation formula="\theta = 2\pi/n" /> .
            </p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                            f(d) = a &= r\theta \\
                                     &= \frac{d}{2}\frac{2\pi}{n} \\
                                     &= \frac{d\pi}{n}
                            \end{align*}"
                :display-mode="true"
              />
            </div>
          </section>

          <section>
            <h3 :class="sectionStyle">Axial Edge</h3>
            <p>
              Given diameter
              <Equation formula="d" />, we seeked to find function <Equation formula="g" /> for the
              equatorial arc length <Equation formula="b" />. We know from geometry that
              <Equation formula="\theta = \pi/2" />. Then, we posited that:
            </p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                            g(d) = b &= r\theta \\
                                     &= \frac{d}{2}\frac{\pi}{2} \\
                                     &= \frac{d\pi}{4}
                            \end{align*}"
                :display-mode="true"
              />
            </div>
          </section>

          <section>
            <h3 :class="sectionStyle">Diameter to Number of Nucleotides</h3>
            <p>
              Suppose we had
              <Equation formula="h=6" /> helices per edge. We would require a conversion factor to
              convert from length to nucleotides. We can take
              <Equation formula="\alpha \approx 0.332 \text{nm/bp} = 0.664 \text{nm/nt}" />. Then,
              the total scaffold length <Equation formula="L" /> in nucleotides should be:
            </p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                            L &= [nhf(d) + 2nhg(d)] / \alpha \\
                              &= nh[f(d) + 2g(d)] / \alpha.
                            \end{align*}"
                :display-mode="true"
              />
            </div>
            <p>
              For more precise results, we needed to round the number of base pairs for each edge:
            </p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                            L &= nh[\lceil f(d) / \alpha \rceil + 2\lceil g(d) / \alpha \rceil],
                            \end{align*}"
                :display-mode="true"
              />
            </div>
            <p>in which the rounding mode can be adjusted.</p>
          </section>
          <section>
            <h3 :class="sectionStyle">Number of Base Pairs to Diameter</h3>
            <p>We rearranged to find:</p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                                L &= nh[f(d) + 2g(d)] / \alpha \\
                                  &= nh\left[\frac{d\pi}{n} + \frac{d\pi}{2}\right] / \alpha \\
                                  &= dnh\left(\frac{\pi}{n} + \frac{\pi}{2}\right) / \alpha \\
                                d &= \frac{\alpha L}{nh\left(\frac{\pi}{n} + \frac{\pi}{2}\right)}.
                            \end{align*}"
                :display-mode="true"
              />
            </div>
            <p>
              This code can be used to calculate the length on online servers such as GitHub
              (Rajkumar, Inaba, & Geng, 2023).
            </p>
          </section>

          <section>
            <h3 :class="sectionStyle">Integer Lengths</h3>
            <p>
              We were interested in finding
              <Equation formula="a', b' \in \mathbb{Z}^+" /> where
              <Equation formula="a' \backsim a, b' \backsim b" /> since the length of the edges
              would be in integer base pairs. However, this is often not possible. For example,
              suppose we use a scaffold p7249. Then, we would see that there exists no integer
              solutions <Equation formula="a', b'" /> for a trigonal bipyramid. We can find a
              general guideline:
            </p>
            <p>
              For a scaffold of integer length
              <Equation formula="N" /> with shorter edge length, <Equation formula="a" />, with
              longer edge length, <Equation formula="b" />, it must satisfy
            </p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                                n | N \land N/n \equiv a\text{ mod } 2
                            \end{align*}"
                :display-mode="true"
              />
            </div>
            <p>
              for integer solutions of
              <Equation formula="a, b" /> to exist. It should be noted that, given
              <Equation formula="a \in \mathbb{Z}" />,
              <Equation formula="N/n \equiv a\text{ mod }2 \Longrightarrow n | N" />. However,
              <Equation formula="n|N" /> is a difficult criteria to satisfy, while the parity
              equation developed above is less complicated to employ since only tiny adjustments to
              <Equation formula="a,b" /> would be necessary to obtain the closest even or odd number
              that satisfies the condition.
            </p>
            <p>
              Suppose
              <Equation formula="a, b \in \mathbb{Z}" />, and both are integer edge lengths of an
              n–gonal bipyramid with total length <Equation formula="N \in \mathbb{Z}" /> where
              <Equation formula="a" /> is the shorter equatorial edge length and
              <Equation formula="b" /> is the longer axial edge length. Then,
            </p>
            <div class="text-center">
              <Equation
                formula="
                            \begin{align*} 
                                N &= na + 2nb \\
                                2b&= \frac{N}{n} + a.
                            \end{align*}"
                :display-mode="true"
              />
            </div>
            <p>
              Let us denote
              <Equation formula="\eta \coloneqq N/n" />, such that we have
              <Equation formula="2b = \eta + a" />. From this, we see that we must have
              <Equation formula="n | N" />, or integer <Equation formula="\eta" />, or that the
              number of edges of the polygon must divide the length of the scaffold. Further,
              <Equation formula="\eta" /> must have the same parity as <Equation formula="a" />,
              since an even number and an odd number cannot sum to an even number, which
              <Equation formula="2b" /> is. However, two even numbers or two odd numbers can sum to
              an even value.
              <br />
              In order to achieve smoother curvature, critical for homogenous liposomes, insertions
              and deletions were added to each edge such that one side of each edge was longer than
              the other, creating curvature and more rigid connections between units.
            </p>
          </section>
        </template>
      </SingleColumn>

      <SingleColumn always-dropdown>
        <template #title> References </template>
        <template #body>
          <div class="pl-6 -indent-6">
            <p>
              Bipyramid. (2022, February 3). In Wikipedia.
              <a href="https://en.wikipedia.org/w/index.php?title=Bipyramid&oldid=1069671629"
                >https://en.wikipedia.org/w/index.php?title=Bipyramid&oldid=1069671629</a
              >
            </p>
            <p>
              Dey, S., Fan, C., Gothelf, K. V., Li, J., Lin, C., Liu, L., Liu, N., Nijenhuis, M. A.
              D., Saccà, B., Simmel, F. C., Yan, H., & Zhan, P. (2021). DNA Origami. Nat. Rev.
              Methods Primer, 1(13).
              <a href="https://doi.org/10.1038/s43586-020-00009-8"
                >https://doi.org/10.1038/s43586-020-00009-8</a
              >
            </p>
            <p>
              Fauske, K. M (2007). Example: Regular Polygons. TeXample.net.
              <a href="https://texample.net/tikz/examples/regular-polygons/"
                >https://texample.net/tikz/examples/regular-polygons/</a
              >
              (Online; accessed 19th March 2022).
            </p>
            <p>
              Kim, D. N., Kilchherr, F., Dietz, H., & Bathe, M. (2012). Quantitative prediction of
              3D solution shape and flexibility of nucleic acid nanostructures. Nucleic acids
              research, 40(7), 2862–2868.
              <a href="https://doi.org/10.1093/nar/gkr1173">https://doi.org/10.1093/nar/gkr1173</a>
            </p>
            <p>
              Law, M., Susham, C., Mackay, D., Nguyen, S., Nicholas, R., Tsai, M. R. G., Rajkumar,
              E., Inaba, F., Maheden, K., Abdi, I., Ho, J. C. H., Kieft, B., & Hallam, S. J. (2023).
              Self-Assembly of a Repeatable DNA Nanohinge System Supporting Higher Order Structure
              Formation. bioRxiv.
              <a href="https://doi.org/10.1101/2023.05.26.542516"
                >https://doi.org/10.1101/2023.05.26.542516</a
              >
            </p>
            <p>
              Lin, Z., Xiong, Y., Xiang, S., & Gang, O. (2019). Controllable covalent-bound
              nanoarchitectures from DNA frames. Journal of the American Chemical Society, 141(17),
              6797–6801.
              <a href="https://doi.org/10.1021/jacs.9b01510"
                >https://doi.org/10.1021/jacs.9b01510</a
              >
            </p>
            <p>
              Perrault, S. D., & Shih, W. M. (2014). Virus-Inspired Membrane Encapsulation of DNA
              Nanostructures To Achieve In Vivo Stability. ACS Nano, 8(5), 5132–5140.
              <a href="https://doi.org/10.1021/nn5011914">https://doi.org/10.1021/nn5011914</a>
            </p>
            <p>
              Rajkumar, E., Inaba, F., Geng, Q. (2023). UBC Biomod DNA Origami Design. Github.
              <a href="https://github.com/ubcbiomod/DNA_Origami_Design/tree/main/BIOMOD_2023"
                >https://github.com/ubcbiomod/DNA_Origami_Design/tree/main/BIOMOD_2023</a
              >
            </p>
            <p>
              Rothemund, P. W. K. (2006). Folding DNA to Create Nanoscale Shapes and Patterns.
              Nature, 440, 297–302.
              <a href="https://doi.org/10.1038/nature04586">https://doi.org/10.1038/nature04586</a>
            </p>
          </div>
        </template>
      </SingleColumn>
    </template>
  </Notebook>
</template>
