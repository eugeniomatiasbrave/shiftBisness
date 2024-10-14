<script>

  
  
  let hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  let duration = ["30 min","40 min", "45 min", "60 min"];
  let selectedDate = '';
  let dayOfWeek = '';
  let status = 'Vacant';
  let price = 20000;
  let description = 'Terapia individual';


  function updateDayOfWeek(event) {
    const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const date = new Date(event.target.value);
    dayOfWeek = daysOfWeek[date.getDay()];
  }

</script>

<h1 class="my-10 text-4xl font-bold text-center text-white">Create One Shift</h1>
<form method="POST" class="space-y-4 bg-slate-200 p-2">
  <table class="table-auto w-full p-2">
    <thead>
      <tr>
        <th>Date</th>
        <th>Day of Week</th>
        <th>Hour</th>
        <th>Duration</th>
        <th>Status</th>
        <th>Price</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input type="date" name="date" bind:value={selectedDate} on:change={updateDayOfWeek} class="input input-bordered" />
        </td>
        <td>
          <input type="text" name="dayOfWeek" bind:value={dayOfWeek} placeholder="Day" readonly class="input input-bordered"/>
        </td>
        <td>
          <select name="hour" class="select select-bordered" required>
            {#each hours as hour}
              <option value={hour}>{hour}</option>
            {/each}
          </select>
        </td>
        <td>
          <select name="duration" class="select select-bordered">
            {#each duration as dur}
              <option value={dur}>{dur}</option>
            {/each}
          </select>
        </td>
        <td>
          <input type="text" name="status"  bind:value={status} class="input input-bordered">
        </td>
        <td>
          <input type="number" name="price" bind:value={price} class="input input-bordered">
        </td>
        <td>
          <input type="text" name="description" bind:value={description} class="input input-bordered">
        </td>
        <td class="text-center">
          <button type="submit" class="btn btn-info">Create One Shift</button>
        </td> 
      </tr>
    </tbody>
  </table>
</form>