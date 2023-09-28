<script setup lang="ts">
import Notebook from "@/components/lab-notebook/Notebook.vue"
import SingleColumn from "@/components/lab-notebook/SingleColumn.vue"
import DoubleColumn from "@/components/lab-notebook/DoubleColumn.vue"
</script>

<template>
    <Notebook>
        <template #title>Title</template>
        <template #body>
            <SingleColumn>
                <template #title>
                    Heading 1
                </template>
                <template #body>
                    <p>
                        Some body text
                    </p>
                    <br />
                    <p>
                        Some more body text
                    </p>
                </template>
                <template #graphic>
                    <div class="w-48 h-48 bg-gray-300"></div> <!-- replace with an <img> -->
                    <p>Figure 1. blah blah blah</p>
                </template>
            </SingleColumn>
            <DoubleColumn>
                <template #title>
                    Heading 2
                </template>
                <template #left-title>Subheading 1</template>
                <template #left-body>
                    <p>
                        More body text
                    </p>
                </template>
                <template #right-title>Subheading 2</template>
                <template #right-body>
                    <p>
                        Even more body text
                    </p>
                </template>
            </DoubleColumn>

            <SingleColumn :always-dropdown="true">
                <template #title>
                    References
                </template>
                <template #body>
                    <p>
                        Blah blah blah
                    </p>
                </template>
            </SingleColumn>
        </template>
    </Notebook>
</template>