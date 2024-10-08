<script>
   export let data;
   export let form;
   console.log(form)
</script>


{#if data.user}
	{#if data.user.role === 'admin'}
	<h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to ShiftBisnnes {data.user.name}</h1>
	{:else}
	
	<h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to ShiftBisnnes {data.user.name}</h1>

    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
       <form method="POST">
		<div class="mt-6 form-control">
		  <a href="/shifts" class="btn btn-info" type="submit"
			>Quiero sacar un Turno </a>
		</div>
	    <div class="mt-6 form-control">
	    </div>
	    <div class="mt-6 form-control">
		  <button class="btn btn-info" type="submit"
		    >Mis Turnos</button>
	    </div>
	  </form>
  </div>
{/if}
{:else}

<h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to ShiftBisnnes</h1>

<h1 class="my-10 text-4xl font-bold text-center text-white"> Por favor registrate y logueate</h1>
	
{/if}