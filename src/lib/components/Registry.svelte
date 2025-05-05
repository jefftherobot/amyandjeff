<script lang="ts">
	import HorizontalRule from "$lib/components/HorizontalRule.svelte";
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const ndHover: PopupSettings = {
		event: 'hover',
		target: 'ndHover',
		placement: 'top'
};
</script>

<h2 class="h2 mt-10 md:mt-20">Registry</h2>
<!-- https://www.charitynavigator.org/ -->
 <HorizontalRule/>

<div class="p-10 md:p-20 pt-2 md:pt-3 space-y-8 "> 
  <div class="mx-auto max-w-screen-md flex justify-center">
    <p>In lieu of traditional gifts, we invite you to celebrate our wedding by supporting a cause close to our hearts. We've chosen to include a couple donation options to nonprofits dedicated to neurodiversity, advocating for inclusion, understanding, and empowerment of neurodivergent individuals. Your gift will help create a more accepting and supportive world for all minds—thank you for being part of something meaningful on our special day.</p>
  </div>
  <div class="flex justify-center items-center mx-auto transition-[width] duration-200 w-full ">
    <div class="gap-4">
      <a href="https://thendalliance.org/support/" class="btn variant-filled-tertiary [&>*]:pointer-events-none" use:popup={ndHover}>ND Alliance</a>
      <a href="#" class="btn variant-filled-secondary">Option 2</a>
    </div>
  </div>
</div>

<div class="card p-4 variant-filled-secondary max-w-sm" data-popup="ndHover">
	<p>The Neurodiversity Alliance, or “ND Alliance” for short, is the leading nonprofit organization founded by and for students who learn differently with the largest online community and national network of neurodiversity clubs in the country.</p>
	<div class="arrow variant-filled-secondary" />
</div>