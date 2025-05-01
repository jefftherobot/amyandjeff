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
      "answer": "August 30, 2025"
    },
    {
      "question": "Is there a hotel reservation block?",
      "answer": "Yes! Reservations can be made at the Hampton Inn & Suites Philadelphia/Media, which is a 5 minute drive to the wedding venue. Please <a class='text-primary-400' href='#hotel'>see here</a> for hotel block and information"
    },
    {
      "question": "Are the ceremony and reception happening at the same venue?",
      "answer": "Yes! Both are happening at The Old Mill"
    },
    {
      "question": "Is there parking at the venue?",
      "answer": "Yes! The venue will have plenty of parking for our guests onsite. <br> There is no valet parking for this event."
    },
    {
      "question": "Is the wedding indoor or outdoor?",
      "answer": "Both the ceremony and cocktail hour will be held outdoors in spaces adjacent to the indoor reception hall. In the case of inclement weather, the ceremony will shift to the pavilion and the cocktail hour and reception will occur indoors. The weather in early October may be slightly chilly, so plan accordingly!"
    },
    {
      "question": "Is there a theme for the wedding?",
      "answer": "The decor and style of the wedding will be Gothic Victorian. The dress code is cocktail formal attire, and guests are welcome to incorporate the theme as much or as little as they would like!"
    },
    {
      "question": "What is the dress code?",
      "answer": "The dress code is cocktail formal attire. Any color is fine! The bride won't be wearing white or black and no color is off limits. <br> <br> <p class='text-sm'>TIP: Cocktail formal attire is a semi-formal dress code that typically involves a suit and tie for men, and knee-length/midi dresses, jumpsuits, or fun separates for women (in addition to a longer dress option).</p>"
    },
    {
      "question": "What are flow arts?",
      "answer": "Flow arts are a unique art form based on combining object manipulation with other movement arts such as dance or martial arts. In other words, flow arts it's like dancing and moving with different, not only, juggling props. Another term often used to describe the flow arts or juggling is spinning. The most well-known props of flow arts include poi, staffs/sticks, fans, buugeng, hula hoops, dragonstaff, contact balls and many others."
    },{
      "question": "What is fire spinning?",
      "answer": "Fire spinning, also known as fire performance or fire dancing, is an art form that combines flow arts (like juggling and twirling) with the use of fire."
    },
    {
      "question": "What's with the after party?",
      "answer": "Yes! We'd like to welcome guests to visit our home afterwards for light snacks and refreshments and some casual fire spinning in our cul-de-sac. We will need to close out the venue between 10:00 and 11:00 pm, but some family members will be at the house to welcome folks prior to our arrival back home."
    },
    {
      "question": "Will there be other events to attend on the wedding weekend?",
      "answer": "We will be holding a family brunch the next morning at a local restaurant. Details will be communicated closer to the wedding, but we wanted to mention it here so you can plan with that in mind!"
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
            {@html faq.answer}
          </p>
        </svelte:fragment>
      </AccordionItem>
    {/each}
  </Accordion>
</div>

