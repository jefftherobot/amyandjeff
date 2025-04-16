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
  <div class="mx-auto max-w-screen-md bg-surface-100-800-token ">
    <div class="card p-4 w-full text-token space-y-4">
      {#if submitted}
        <p>Thank you for your RSVP!</p>
      {:else}
      <form on:submit|preventDefault={submitForm}>


        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-envelope"></i></div>
          <input type="email" placeholder="Your email..." bind:value={email} required />
        </div>


        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-user"></i></div>
          <input type="text" placeholder="Your first and last name..." bind:value={name} required />
        </div>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-users"></i></div>
          <input type="number" placeholder="Your guest count" bind:value={guest} required />
        </div>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-utensils"></i></div>
          <input type="text" placeholder="Any Dietary Restrictions?" bind:value={diet} required />
        </div>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-envelope-open-text"></i></div>
          <select class="select" bind:value={attending} required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-key"></i></div>
          <input class="input" type="text" placeholder="Your invite code..." bind:value={inviteCode} required />
        </div>
      </div>
        <button type="submit" class="btn variant-filled-primary mt-5">Submit RSVP</button>

        {#if error}
          <p style="color:red;">{error}</p>
        {/if}
      </form>
    {/if}
    </div>
  </div>
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