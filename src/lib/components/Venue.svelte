<script lang="ts">
	import HorizontalRule from "$lib/components/HorizontalRule.svelte";
</script>

<div class="photo">
  <div class="flex items-center justify-center photo-overlay bg-secondary-700/50">
    <h2 class="h2 mb-10">The Old Mill</h2>
  </div>
</div>

<h3 class="m-10 h3">How do I get there?</h3>
<p class="mb-10">Drive Carefully!</p>

<iframe width="100%" height="450" style="border:0; filter: grayscale(100%) invert(92%)" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjXSog_joxokRg8Tl6xKN9Ow&key=AIzaSyCe8pbI7wgSmHE69F-0gQWBQVyG5GGMYOI"></iframe> 


<h3 class="mt-10 h3">Hotel</h3>
<HorizontalRule/>
<div class="flex justify-center m-10">
  <div>
  <p>
  Hampton Inn & Suites <br>
  Philadelphia/Media<br>
  300 Beatty Rd, Media, PA 19063, USA<br>

  (484) 443-8899<br>

  Check-In: Friday, October 10, 2025 | Check-Out: Sunday, October 12, 2025<br>

  Hotel block info coming soon!
  </p>
  <p class="mt-20">
    <a class="btn variant-filled-tertiary" href="https://www.hilton.com/en/hotels/phlsphx-hampton-suites-philadelphia-media/">Book Hotel Room</a>
  </p>
</div>
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
  .book-room{

  }
</style>