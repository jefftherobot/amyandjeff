<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<h2 class="h2">Q&A</h2>

<div class="p-4 md:p-7 space-y-4 bg-gradient-to-br variant-gradient-primary-secondary">
  <Accordion autocollapse hover="hover:bg-tertiary-hover-token" padding="py-4 px-4" class="bg-surface-100-800-token">
    <AccordionItem open>
      <svelte:fragment slot="lead"><i class="fa-solid fa-paragraph text-xl w-6 text-center"></i></svelte:fragment>
      <svelte:fragment slot="summary">
        <p class="font-bold">
          Are children allowed?
        </p>
      </svelte:fragment>
      <svelte:fragment slot="content">
        <p>
          Sorry, no
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="lead"><i class="fa-solid fa-paragraph text-xl w-6 text-center"></i></svelte:fragment>
      <svelte:fragment slot="summary">
        <p class="font-bold">
          Is there a hotel reservation block?
        </p>
      </svelte:fragment>
      <svelte:fragment slot="content">
        <p>
          Yes see here
        </p>
      </svelte:fragment>
    </AccordionItem>
    <!-- ... -->
  </Accordion>
</div>

