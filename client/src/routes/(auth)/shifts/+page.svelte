<script>
  import BackButton from "$lib/components/BackButton.svelte";
  export let data;
  const { shifts } = data;
  console.log(shifts);

  let selectedDate = '';
  let filteredShifts = shifts;

function handleDateChange(event) {
  selectedDate = event.target.value;
  console.log('Selected Date:', selectedDate);
  // Aquí puedes agregar la lógica para filtrar los turnos por fecha
  filterShiftsByDate(selectedDate);
}

function filterShiftsByDate(date) {
    filteredShifts = shifts.filter(shift => {
      const shiftDate = new Date(shift.date).toISOString().split('T')[0];
      return shiftDate === date;
    });
  }

  
</script>

<h1 class="my-10 text-4xl font-bold text-center text-white">Page Shift</h1>
<div class="mx-auto bg-white p-8 rounded-lg shadow-md">
  <BackButton></BackButton>
  <form method="POST">

  <input type="date" on:change={handleDateChange}>

    <div class="mt-6 form-control">
      <button class="btn btn-info" type="submit">Select Shift</button>
    </div>
    <div class="mt-3 form-control">
      <a href="/" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>

<div class="mx-auto bg-white p-8 my-2 rounded-lg shadow-md">
<table>
  <thead class="text-center">
    <tr>
      <th>Select</th>
      <th>Id</th>
      <th>User Id</th>
      <th>Date</th>
      <th>Day Of Week</th>
      <th>Hour</th>
      <th>Duration</th>
      <th>Status</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody class="text-center">
    {#each filteredShifts as shift} 
      <tr>
        <td><input type="checkbox"></td>
        <td>{shift._id}</td>
        <td>{shift.userId}</td>
        <td>{shift.date}</td>
        <td>{shift.dayOfWeek}</td>
        <td>{shift.hour}</td>         
        <td>{shift.duration}</td>
        <td>{shift.status}</td>
        <td>{shift.description}</td>
        <td>{shift.price}</td>
      </tr>
    {/each}
  </tbody>
</table>
</div>