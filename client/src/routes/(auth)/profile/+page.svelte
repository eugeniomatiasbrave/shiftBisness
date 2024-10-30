<script>
  export let data;
  const { user } = data;

</script>


<h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to Profile</h1>
<div class="card shadow-lg bg-white rounded-xl w-full">
    <div class="card-body w-full transition-all duration-300">
        <h2 class="text-2xl font-bold mb-6">Actualización del perfil</h2>

        <form method="POST" enctype="multipart/form-data">
            <div class="flex flex-col lg:flex-row items-center lg:items-start">
                 <div class="flex flex-col items-center mb-4 lg:mb-0 lg:mr-8">
                    <h4 class="font-medium text-md mb-2">Foto de Perfil</h4>
                     <input type="hidden" name="id" value={user.data._id} />
                      <div class="avatar">
                        <div class="w-40 rounded-full" >
                          {#each user.data.avatar as av}
                            <img src={"http://localhost:8080" + av.path} alt={user.data.name} />
                          {/each}
                        </div>
                      </div>

                      <div class="form-control">
						<input type="file" 
							   accept="image/png , .jpg , .jpeg , image/gif, image/webp" 
							   multiple
						       name="image"
							   />
					   </div>
                 </div>
                <div class="flex-grow w-full">
                    <div class="form-control mb-4">
                        <label class="label" for="email">
                            <span class="label-text">Email 📩</span>
                        </label>
                        <input
                            type="email"
                            bind:value={user.data.email}
                            id="email"
                            name="email"
                            placeholder="mail@mail.com"
                            class="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div class="form-control mb-4">
                        <label class="label" for="nombre">
                            <span class="label-text">Nombre 👤</span>
                        </label>
                        <input
                            type="text"
                            bind:value={user.data.name}
                            id="nombre"
                            name="name"
                            placeholder="Nombre"
                            class="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-info w-full" type="submit">Actualizar perfil</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<style>
    
</style>