<script>
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import BackButton from "$lib/components/BackButton.svelte";
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.css';
  import { onMount } from 'svelte';

  export let data;
  const { shifts } = data;
  console.log(shifts);
  
  $: st = 0;
  let enhanceResult;
  let selectedDate = '';
  let filteredShifts = [];
  let calendarContainer;

  function formatDate(date) {
    return date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD
  }

  function filterShiftsByDate(selectedDates) {
    if (selectedDates.length > 0) {
      selectedDate = formatDate(selectedDates[0]);
      filteredShifts = shifts.filter(shift => shift.date === selectedDate);
    } else {
      filteredShifts = [];
    }
  }

  onMount(() => {
    flatpickr(calendarContainer, {
      inline: true,
      onChange: filterShiftsByDate
    });
  });

  $: if (selectedDate) {
    filterShiftsByDate([new Date(selectedDate)]);
  }
</script>

<h1 class="my-10 text-4xl font-bold text-center text-white">Page Shift</h1>
<div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <BackButton></BackButton>
  <div bind:this={calendarContainer}></div>
  <form method="POST"
    use:enhance={() => {
      return async ({ result }) => {
        enhanceResult = result;
        st = enhanceResult.st;
        Swal.fire({
          title: "¡Guardado con éxito!",
          text: "El registro fue creado con éxito",
          icon: "success",
          confirmButtonColor: "#0a7399",
          confirmButtonText: "Aceptar",
        }).then((result) => {
          if (result.isConfirmed) {
            goto("/shifts/myShifts");
          }
        });
      };
    }}
  >
  <p> Fecha {selectedDate}</p>
    <div class="overflow-x-auto">
      <table>
        <thead class="text-center">
          <tr>
            <th>Select</th>
            <th>Hour</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="text-center">
          {#each filteredShifts as shift }
            <tr>
              <input type="checkbox">
              <td>{shift.date}</td>
              <td>{shift.hour}</td>         
              <td>{shift.status}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    
    
    
    <div class="mt-6 form-control">
      <button class="btn btn-info" type="submit">Create Shift</button>
    </div>
    <div class="mt-3 form-control">
      <a href="/" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>