<script>
  let name = '';
  let guest = '';
  let email = '';
  let diet = '';
  let inviteCode = '';
  let attending = 'Yes';
  let submitted = false;
  let error = '';

  const submitForm = async () => {
    const payload = { name, guest, email, diet, attending, inviteCode };
   
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbyQA5qCRmGJ-91tkl5MKTQDyngGmZLvQMOnf9GXHfYNbYVLkfGdCiOYm3-EbwhwKBaUvA/exec", {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        }
      });

      const data = await res.json();
      console.log(data)
      if (data.result === "success") {
        submitted = true;
      } else {
        error = "Something went wrong.";
      }
    } catch (err) {
      error = "Network or server error.";
    }
  };
</script>

<div class="p-4 md:p-10 space-y-4 bg-gradient-to-br variant-gradient-primary-secondary "> 
  <h2 class="h2 mb-10">RSVP</h2>
  {#if submitted}
    <p>Thank you for your RSVP!</p>
  {:else}
  <form on:submit|preventDefault={submitForm}>
    <label>
      Name:
      <input type="text" bind:value={name} required />
    </label>

    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>
    <label>
      Guest:
      <input type="number" bind:value={guest} required />
    </label>
    <label>
      Diet Restrictions:
      <input type="text" bind:value={diet} required />
    </label>

    <label>
      Will you attend?
      <select bind:value={attending}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </label>

    <label>
      Invite Code:
      <input type="text" bind:value={inviteCode} required />
    </label>

    <button type="submit">Submit RSVP</button>

    {#if error}
      <p style="color:red;">{error}</p>
    {/if}
  </form>
{/if}
</div>
<!-- <div class="p-4 md:p-10 space-y-4 bg-gradient-to-br variant-gradient-primary-secondary "> 
  <h2 class="h2 mb-10">RSVP</h2>
  <div class="mx-auto max-w-screen-md bg-surface-100-800-token ">
    <div class="card p-4 w-full text-token space-y-4">
      <label class="label"><span>Input</span> <input class="input" type="text" placeholder="Input"></label> 
      <label class="label"><span>Select</span> 
        <select class="select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
      </label> 
      <label class="label"><span>Textarea</span>
        <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
      </label>
    </div>
  </div>
</div> -->