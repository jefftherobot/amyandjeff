<script>
  let name = '';
  let hasGuest = '';
  let guest = '';
  let email = '';
  let diet = '';
  //let inviteCode = '';
  let attending = '';
  let submitted = false;
  let error = '';
	let loading = false;

  //https://script.google.com/u/0/home/projects/1GUCSVw3lZa0_ED_zCTXnTU_cCzANdORG1C3R4RPxh4Je4OTYKzyJF7At/edit

  const submitForm = async () => {
		loading = true;
    const payload = { name, hasGuest, guest, email, diet, attending };
   
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbxGSplIY8fOIdTrNnDiWneA6hi937fNI4K8Udbx1HUZrIS4DlQm5Z7BSLBdah3XBhL9YQ/exec", {
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
				loading = false;
        submitted = true;
      } else {
				loading = false;
        error = "Something went wrong.";
      }
    } catch (err) {
      error = "Network or server error.";
    } finally {
      loading = false;
    }
  };
</script>

<div class="p-4 md:p-20 space-y-4 bg-gradient-to-br variant-gradient-primary-secondary "> 
  <h2 class="h2 mb-10">RSVP</h2>
  <div class="mx-auto max-w-screen-md bg-surface-100-800-token ">
    <div class="card p-6 w-full text-token space-y-4">
			
      {#if submitted}
				{#if attending=="no"}
        <p>We'll raise a <i class="fa-solid fa-martini-glass"></i> in your honor!</p>
				{:else}
        <p>Fantastic! Bring your dancing shoes, questionable party tricks, and your charming self. We'll pretend we weren't worried you'd <i class="fa-solid fa-ghost"></i> us.</p>
				{/if}
      {:else}
      <form on:submit|preventDefault={submitForm} class:opacity-25={loading}>


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
          <div class="input-group-shim"><i class="fa-solid fa-envelope-open-text mr-2"></i> Coming?</div>
          <select class="select" bind:value={attending} required>
            <option value="yes">Can't wait!</option>
            <option value="no">I'll be there in spirit</option>
          </select>
        </div>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-utensils"></i></div>
          <input type="text" placeholder="Any Dietary Restrictions?" bind:value={diet} />
        </div>

				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-user-plus mr-2"></i> Do you have a guest?</div>
          <select class="select" bind:value={hasGuest} required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]" class:hidden={hasGuest!="yes"}>
          <div class="input-group-shim"><i class="fa-solid fa-bars-staggered"></i></div>
          <input type="text" placeholder="Your guest name..." bind:value={guest} required={hasGuest=="yes"} />
        </div>
        <!-- <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
          <div class="input-group-shim"><i class="fa-solid fa-key"></i></div>
          <input class="input" type="text" placeholder="Your invite code..." bind:value={inviteCode} required />
        </div> -->
      </div>
        <button type="submit" class="btn variant-filled-primary mt-5" disabled={loading}>Submit RSVP</button>

        {#if error}
          <p style="color:red;">{error}</p>
        {/if}
      </form>
			{#if loading}
			<div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
					<svg class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-secondary-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
					<span class="sr-only">Loading...</span>
			</div>
		{/if}
    {/if}
    </div>
  </div>
</div>