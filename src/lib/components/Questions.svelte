<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  const DATA = {
  "faqs": [
    {
      "question": "Are children allowed?",
      "answer": "Take the night off and leave the little ones at home! Get ready for the best adults-only wedding you'll ever go to."
    },
    {
      "question": "Is there a hotel reservation block?",
      "answer": "Yes"
    }
  ]
}
</script>



<div class="p-4 md:p-7 space-y-4 bg-gradient-to-br variant-gradient-primary-secondary ">
  <h2 class="h2 mb-10">Q&A</h2>
  <Accordion autocollapse hover="hover:bg-tertiary-hover-token" padding="py-4 px-4" class="mx-auto max-w-screen-md bg-surface-100-800-token">

    {#each DATA.faqs as faq }
      <AccordionItem>
        <svelte:fragment slot="lead"><i class="fa-solid fa-paragraph text-xl w-6 text-center"></i></svelte:fragment>
        <svelte:fragment slot="summary">
          <p class="font-bold">
            {faq.question}
          </p>
        </svelte:fragment>
        <svelte:fragment slot="content">
          <p>
            {faq.answer}
          </p>
        </svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>
</div>

