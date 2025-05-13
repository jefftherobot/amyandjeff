<script lang="ts">
	// import { popup } from '@skeletonlabs/skeleton';
	// import type { PopupSettings } from '@skeletonlabs/skeleton';

	// const venuePopup: PopupSettings = {
	// 	event: 'click',
	// 	target: 'venuePopup',
	// 	placement: 'bottom'
	// };

	function onClick (e) {
		window.open("https://theoldmillrosevalley.com/", "_blank");
	}
</script>

<div class="photo">
  <div on:click={onClick} class="flex items-center justify-center photo-overlay bg-secondary-700/60 cursor-pointer">
		<div>
    <h2 class="h2 mb-10">The Old Mill</h2>
			<p>9 Old Mill Ln, Rose Valley, PA 19063</p>
	</div>
  </div>
</div>

<h3 class="m-10 h3">How do I get there?</h3>
<p class="mb-10">Drive Carefully!</p>

<!-- <button class="btn variant-filled-tertiary" use:popup={venuePopup}>Show Popup</button> -->

<iframe width="100%" height="450" style="border:0; filter: grayscale(100%) invert(92%)" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjXSog_joxokRg8Tl6xKN9Ow&key=AIzaSyCe8pbI7wgSmHE69F-0gQWBQVyG5GGMYOI"></iframe> 


<div class="card p-4 w-72 shadow-xl" data-popup="venuePopup">
	<div><p>Demo Content</p></div>
</div>

<style>
  dl {
    margin-top: 50px !important;
  }
  img{
    width: 100%;
  }
  .photo{
    width:100%;
    height: 350px;
    background-image:url('https://cdn0.weddingwire.com/vendor/654780/original/1280/jpg/1472564405262-fullerphotography-zawadzki-0461.webp');
    background-size: cover;
  }

  .photo-overlay {
    width:100%;
    height: 100%;
  }
</style>