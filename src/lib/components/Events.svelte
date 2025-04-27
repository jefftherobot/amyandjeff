<script lang="ts">

  const DATA = {
  "events": [
    {
      "date": "11th October",
      "time": "5pm - 5:30pm",
      "title": "Ceremony",
      "description": ""
    },
    {
      "date": "11th October",
      "time": "5:30pm - 6:30pm",
      "title": "Cocktail Hour",
      "description": ""
    },
    {
      "date": "11th October",
      "time": "6:30pm - 10:00pm",
      "title": "Reception",
      "description": ""
    } ,
    {
      "date": "11th October",
      "time": "10:30pm",
      "title": "After Party*",
      "description": "*Guests are welcome back to our home for late-night snacks, refreshments, and a fire spinning performance in the cul-de-sac"
    }
  ]
}
</script>



<div class="p-4 md:p-7 space-y-4 bg-gradient-to-br variant-gradient-primary-secondary ">
  <h2 class="h2 mb-10 mt-10">Schedule</h2>
  <div class="table-container mx-auto max-w-screen-md bg-surface-100-800-token">
    <!-- Native Table Element -->
    <table class="table">
      <!-- <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Symbol</th>
        </tr>
      </thead> -->
      <tbody>
        {#each DATA.events as row, i}
          <tr>
            <td class="text-right" style="white-space:nowrap!important" width="50%">{row.time}</td>
            <td class="text-left">{row.title}
              <!-- <br>
              <span class="text-xs">{row.description}</span> -->
            </td>
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-center"><span class="text-xs"> {DATA.events[3].description}</span></td>

        </tr>
      </tfoot>
    </table>
  </div>
</div>
<style lang="postcss">

</style>
