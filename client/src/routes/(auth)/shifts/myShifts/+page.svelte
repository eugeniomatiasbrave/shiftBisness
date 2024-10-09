
<script>
    export let data;
	const {shifts} = data;

	console.log(shifts.data);
  
</script>

<h2 class="my-4 text-4xl font-bold text-center text-white">List of Shifts</h2>
<div class="bg-slate-100 p-2 rounded-md mt-11">
<div class="pb-2">
    <a href="/shifts" class="btn btn-info">Create Shifts</a>  
</div>
<div class="w-full rounded-md shadow-xl card bg-base-50 border">
    <div class="card-body">
        <div class="container-table">
            <div class="overflow-x-auto">
                <table class="table">
                    <thead class="text-center">
                        <tr>
                            <th>Date</th>
                            <th>Hour</th>
                            <th>Duration</th>
                            <th>Price</th>
							<th>Description</th>
                            <th>Status</th>
							<th>change date</th>
							<th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                       
						{#each shifts.data as shift (shift._id)}
							<tr>
								<td>{shift.date}</td>
								<td>{shift.hour}</td>
								<td>{shift.duration}</td>
								<td>{shift.price}</td>
								<td>{shift.description}</td>
								<td>{shift.status}</td>
								<td>
									<form method="POST" action={`/myShifts/${shift._id}/edit`}>
										<input type="hidden" name="sid" value={shift._id} />
										<button type="submit" class="btn btn-info">change date</button>
									</form>
								</td>
								<td>
									<form method="POST" action={`/myShifts/${shift._id}/delete`}>
										<input type="hidden" name="sid" value={shift._id} />
										<button type="submit" class="btn btn-secondary">Cancel</button>
									</form>
								</td>
							</tr>
						{/each}
					
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>