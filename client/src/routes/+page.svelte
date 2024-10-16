<script>
   export let data;
   export let form;
   console.log(form)
</script>


{#if data.user}
	{#if data.user.role === 'admin'}
	<div class="flex items-center justify-center min-h-screen">
		<div class="mx-auto bg-base-200 p-5 rounded-lg shadow-md">
		  <div class="hero-content text-center">
			<div class="max-w-md">
			  <h1 class="text-5xl font-bold">Hello {data.user.name}</h1>
			  <p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			  </p>
			  <a href="/adminShifts" class="btn btn-primary">Get to Admin Shift</a>
			</div>
		  </div>
		</div>
	  </div>
	{:else}
	<div class="flex items-center justify-center min-h-screen">
		<div class="mx-auto bg-base-200 p-5 rounded-lg shadow-md">
		  <div class="hero-content text-center">
			<div class="max-w-md">
			  <h1 class="text-5xl font-bold">Hello {data.user.name}</h1>
			  <p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			  </p>
			  <a href="/shifts" class="btn btn-primary">Get Started</a>
			</div>
		  </div>
		</div>
	  </div>
{/if}
{:else}
  <h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to ShiftBisnnes</h1>
  <h1 class="my-10 text-4xl font-bold text-center text-white"> Please register and log in</h1>
{/if}