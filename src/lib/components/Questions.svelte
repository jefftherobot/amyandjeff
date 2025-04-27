<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  const DATA = {
  "faqs": [
    {
      "question": "Are children allowed?",
      "answer": "Take the night off and leave the little ones at home! Get ready for the best adults-only wedding you'll ever go to."
    },
    {
      "question": "What date should I RSVP by?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
    },
    {
      "question": "What's the easiest way to get to and from your wedding?",
      "answer": "Est consectetur ut amet mollit velit esse culpa. Est esse ea est quis. Do irure est excepteur non. Mollit anim proident anim veniam id. Laborum ex pariatur velit veniam veniam veniam laborum reprehenderit eiusmod ipsum Lorem cillum. Sit consequat consequat adipisicing ex eiusmod consectetur dolore voluptate fugiat ut eu reprehenderit minim."
    },
    {
      "question": "Is there parking available near your wedding venue?",
      "answer": "Consequat duis dolor qui aute cillum esse tempor veniam do tempor magna. Dolor non voluptate nostrud sunt aliquip exercitation sunt ad do anim sint esse sit. Irure ipsum aliqua tempor mollit fugiat quis occaecat tempor dolore officia. Laborum officia irure do nisi cupidatat et laboris duis pariatur. Id voluptate proident dolore et eu velit occaecat dolore laboris esse voluptate consectetur officia. Aute Lorem nostrud cupidatat pariatur amet sit aliquip. Cupidatat nisi in exercitation pariatur qui qui irure amet."
    },
    {
      "question": "Will your wedding be indoors or outdoors",
      "answer": "Tempor eiusmod proident ipsum tempor elit irure esse irure velit id anim proident proident. Reprehenderit commodo labore sint aliquip consectetur qui enim proident. Dolore quis duis Lorem esse aute magna in. Amet laboris aliqua consectetur nisi incididunt laborum do in adipisicing cillum sunt excepteur. Id eu sunt occaecat sit Lorem mollit Lorem non aliqua excepteur ad labore esse. Veniam aliqua minim amet adipisicing exercitation sint duis est."
    },
    {
      "question": "Will there be a shuttle to and/or from the hotel?",
      "answer": "Aute eu cupidatat nisi Lorem id ullamco dolor commodo eiusmod velit incididunt laborum dolor occaecat. Non duis do pariatur do ullamco pariatur eiusmod amet adipisicing excepteur ut et. Non deserunt ex reprehenderit aute velit cillum dolore duis consequat consequat nulla mollit labore. Tempor commodo nostrud laborum sint sit id tempor eiusmod officia labore amet. Consectetur eiusmod officia veniam eiusmod sunt aliqua cupidatat dolore anim eiusmod tempor nulla nulla et. Tempor qui enim et commodo ex est excepteur."
    },
    {
      "question": "What's the dress code for your wedding?",
      "answer": "Pariatur irure ipsum nulla commodo consequat amet qui consequat. Nulla proident ipsum enim velit nulla sunt amet. Consequat officia exercitation veniam cupidatat velit dolore Lorem mollit. Ut minim commodo est deserunt magna cillum ad velit elit elit consectetur. Ut ad nisi excepteur in nisi officia aliqua qui minim consectetur consequat sit reprehenderit esse. Est proident in Lorem aute officia eiusmod voluptate dolore culpa qui."
    },
    {
      "question": "What time should I arrive at your wedding ceremony?",
      "answer": "Anim eu do ullamco aute. Excepteur labore fugiat deserunt nulla sit enim do et ea labore ad ullamco irure. Consectetur id commodo elit adipisicing nisi voluptate eiusmod duis."
    },
    {
      "question": "What is fire spinning?",
      "answer": "Minim non cupidatat laborum duis consectetur exercitation sit veniam cupidatat. In labore laboris est elit. Aliquip sint officia non labore enim nulla adipisicing nostrud deserunt dolore exercitation in. Reprehenderit et sint non cillum veniam id culpa commodo amet enim do commodo ad reprehenderit. Deserunt minim sunt aute nostrud cupidatat nostrud eu ex velit. Id nostrud laboris proident consectetur fugiat sunt magna elit commodo eu qui."
    },
    {
      "question": "What's with the after party?",
      "answer": "Amet esse ipsum ex excepteur dolor magna deserunt ut. Adipisicing sit occaecat nisi nisi pariatur occaecat quis fugiat labore dolore ad consequat sunt. Irure esse do aliquip laborum duis sit nisi velit."
    }
  ]
}
</script>



<div class="p-4 pb-10 md:p-20 bg-gradient-to-br variant-gradient-primary-secondary ">
  <h2 class="h2 mb-10">Q&A</h2>
  <Accordion autocollapse hover="hover:bg-tertiary-hover-token" padding="py-4 px-4" class="mx-auto max-w-screen-md bg-surface-100-800-token">

    {#each DATA.faqs as faq, i }
      <AccordionItem open={i==0}>
        <svelte:fragment slot="lead"><i class="fa-solid fa-circle-question text-xl w-6 text-center"></i></svelte:fragment>
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

