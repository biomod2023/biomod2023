<template>
  <v-timeline :side="$windowWidth < 768 ? 'end' : undefined">
    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold">
          <h2 class="text-subtitle font-semibold text-slate">
            April
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
            <ul class="list-dic pl-2">
              <li>Research and protocol development for liposome formation, enzyme activity 
                and enzyme conjugation</li>
              <li>Beginning of de novo structure design of Trigonal and Pentagonal Bipyrimidal DNA Origami
                shapes</li>
              <li>Replication of the design of the scaffold and staple strands of the Octahedron structure 
                in Cadnano</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold justify-end">
          <h2 class="me-4 text-subtitle font-semibold text-slate">
            May
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
          <ul class="list-dic pl-2">
              <li>Simulation of the formation stability of Octahedron using CanDO</li>
              <li>Finalization of the enzyme conjugation protocols and ordering of required reagents</li>
              <li>Carrying out enzyme docking simulations to pick an enzyme to test conjugation with 
                liposome</li>
              <li>Implementation of Trigonal and Pentagonal Bipyramid into Cadnano</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold">
          <h2 class="text-subtitle font-semibold text-slate">
            June
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
          <ul class="list-dic pl-2">
              <li>Ordering of p7308 scaffold and staple strand sequences for octahedron structure to test in lab</li>
              <li>Performing activity assays on chosen enzyme (DNAseI) in different buffer components required for
                conjugation (via thiolation)</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold justify-end">
          <h2 class="me-4 text-subtitle font-semibold text-slate">
            July
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
          <ul class="list-dic pl-2">
              <li>Testing of different methods to produce liposomes within 100 d.nm</li>
              <li>Optimize production of octahedron by testing different ratios of scaffold: staples</li>
              <li>Finalize Cadnano designs of Trigonal and Pentagonal structures</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold">
          <h2 class="text-subtitle font-semibold text-slate">
            August
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
          <ul class="list-dic pl-2">
              <li>Produce liposomes with and without maleimide linkages</li>
              <li>Test methods of thiolating DNase I in lab performing PicoGreen activity assays to 
                verify enzyme function</li>
              <li>Run CanDo simulations on trigonal and pentagonal bipyramid structures</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold justify-end">
          <h2 class="me-4 text-subtitle font-semibold text-slate">
            September
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
          <ul class="list-dic pl-2">
              <li>Attempt to prepare Octahedron samples for visualization through atomic force microscopy (AFM)</li>
              <li>Purify thiolated DNase I and attempt conjugation with maleimide-liposomes</li>
              <li>If resources availible, form liposome using octahedron structure</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#E2B764"
      size="small"
      fill-dot
    >
      <v-card>
        <v-card-title class="bg-gold">
          <h2 class="text-subtitle font-semibold text-slate">
            October
          </h2>
        </v-card-title>
        <v-card-text class="bg-[#303030] text-white">
          <ul class="list-dic pl-2">
              <li>Troubleshooting for enzyme thiolation and/or conjugation</li>
              <li>Finalization of data analysis of results and completion of writeups for competiion</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>

  </v-timeline>
</template>