<script>
  import BackButton from "$lib/components/BackButton.svelte";

  export let form;

  
  export let status = 'confirmed';
  export let duration = 45;
  export let description = 'Terapia individual';
  export let price = 20000;
</script>

<h1 class="my-10 text-4xl font-bold text-center text-white">Page Shift</h1>
<div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <BackButton></BackButton>
  <form method="POST">
    <div class=" mt-6 form-control">
      <label class="label" for="date">
        <span class="label-text">Date</span>
      </label>
      <input
        type="date"
        name="date"
        value={form?.date}
        placeholder="Name of Product"
        class="input input-bordered"
        required
      />
    </div>
    <div class="form-control">
      <label class="label" for="hour">
        <span class="label-text">Hours</span>
      </label>
      <select name="hour" value={form?.hour} class="input input-bordered" >
        <option value={form?.hour} disabled selected >Select a time</option>
        <option value="10:00">10:00 hs</option>
        <option value="11:00">11:00 hs</option>
        <option value="12:00">12:00 hs</option>
        <option value="13:00">13:00 hs</option>
        <option value="14:00">14:00 hs</option>
        <option value="15:00">15:00 hs</option>
        <option value="16:00">16:00 hs</option>
        <option value="17:00">17:00 hs</option>
        <option value="18:00">18:00 hs</option>
      </select>
    </div>
    
    <input type="hidden" name="status" bind:value={status}/>
  
    <div class="mt-6 form-control">
      <p>Duration {duration}</p>
      <input type="hidden" name="duration" value={duration} />
    </div>
    <div class="mt-1 form-control">
      <p>{description}</p>
      <input type="hidden" name="description" value={description} />
    </div>
      <div class="mt-1 form-control">
        <p>${price}</p>
        <input type="hidden" name="price" value={price} />
    </div>
    <div class="mt-6 form-control">
      <button class="btn btn-info" type="submit"
        >Create Shift</button>
    </div>
    <div class="mt-3 form-control">
      <a href="/" class="btn btn-secondary" 
        >Cancel</a>
    </div>
  </form>
</div>
