<script lang="ts">
	import HorizontalRule from "$lib/components/HorizontalRule.svelte";
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const ndHover: PopupSettings = {
		event: 'hover',
		target: 'ndHover',
		placement: 'top'
	};
	const pflagHover: PopupSettings = {
		event: 'hover',
		target: 'pflagHover',
		placement: 'top'
	};
</script>

<h2 class="h2 mt-10 md:mt-20">Registry</h2>
<!-- https://www.charitynavigator.org/ -->
 <HorizontalRule/>

<div class="p-10 md:p-20 pt-2 md:pt-3 space-y-8 "> 
  <div class="mx-auto max-w-screen-md flex justify-center">
    <p>In lieu of traditional gifts, we invite you to celebrate our wedding by supporting causes close to our hearts.
			<br><br>
			We've chosen to include a couple donation options to nonprofits dedicated to neurodiversity, advocating for inclusion, understanding, and empowerment of neurodivergent individuals, as well as PFLAG, an organization committed to advancing equality and acceptance for LGBTQ+ individuals.
			<br><br>
		Your gift will help create a more accepting and supportive world for all minds and identities—thank you for being part of something meaningful on our special day.</p>
  </div>
  <div class="flex justify-center items-center mx-auto transition-[width] duration-200 w-full ">
    <div class="gap-4">
      <a href="https://thendalliance.org/support/" target="_blank" class="btn variant-filled-tertiary [&>*]:pointer-events-none" use:popup={ndHover}>ND Alliance</a>
      <a href="https://pflag.org/donate/" target="_blank" class="btn variant-filled-secondary [&>*]:pointer-events-none" use:popup={pflagHover}>PFLAG</a>
    </div>
  </div>
</div>

<div class="card p-4 variant-filled-tertiary max-w-sm" data-popup="ndHover">
	<p>The Neurodiversity Alliance, or "ND Alliance" for short, is the leading nonprofit organization founded by and for students who learn differently with the largest online community and national network of neurodiversity clubs in the country.</p>
	<div class="arrow variant-filled-tertiary" />
</div>

<div class="card p-4 variant-filled-secondary max-w-sm" data-popup="pflagHover">
	<p> PFLAG is the nation's largest organization dedicated to supporting, educating, and advocating for LGBTQ+ people and those who love them.</p>
	<div class="arrow variant-filled-secondary" />
</div>