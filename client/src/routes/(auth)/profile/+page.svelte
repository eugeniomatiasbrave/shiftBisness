<script>
  export let data;
  const { user } = data;

  let selectedImage; // Bien // 21/10 14:03 pm.
  let avatarPreview; // Bien // 21/10 14:03 pm.

  if (typeof window !== 'undefined') {
    avatarPreview = document.getElementById('avatar-preview');
  }  // Bien // 21/10 14:03 pm.
            

    const handleImagePreview = () => { // Bien // 21/10 14:03 pm.
        const reader = new FileReader();
        reader.onload = () => {
        avatarPreview.src = reader.result;
        };
        reader.readAsDataURL(selectedImage[0]);
    };

    $: selectedImage && handleImagePreview(); // Bien // 21/10 14:03 pm.

  

  console.log('Avatar', user.name);  
  // aqui llega la imagen .
  // 21/10 11.59 am

</script>


<h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to Profile</h1>
<div class="card shadow-lg bg-white rounded-xl w-full">
    <div class="card-body w-full transition-all duration-300">
        <h2 class="text-2xl font-bold mb-6">Actualización del perfil</h2>
        <form method="POST" action="?/updateProfile" enctype="multipart/form-data">
            <div class="flex flex-col lg:flex-row items-center lg:items-start">
                <div class="flex flex-col items-center mb-4 lg:mb-0 lg:mr-8">
                    <h4 class="font-medium text-md mb-2">Foto de Perfil</h4>
                    <label for="avatar" class="avatar-container w-56 h-56 rounded-full hover:cursor-pointer relative">

                          
                        <img 
                           src={selectedImage ? URL.createObjectURL(selectedImage[0]) : user.avatar} 
                           alt="avatar-preview"
                           id="avatar-preview"
                           class="w-full h-full object-cover rounded-full"
                        /> 

                        <input 
                           type="file"
                           id="avatar"
                           name="avatar"
                            bind:files={selectedImage}
                           accept="image/*"
                           class="hidden" 
                        />

                    </label>
                </div>
                <div class="flex-grow w-full">
                    <div class="form-control mb-4">
                        <label class="label" for="email">
                            <span class="label-text">Email 📩</span>
                        </label>
                        <input
                            type="email"
                            bind:value={user.email}
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
                            bind:value={user.name}
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
            <div class="divider my-4"></div>
            <div class="text-center text-gray-500">
                <p>Por favor, asegúrate de que tu información es correcta antes de actualizar tu perfil.</p>
            </div>
            <div class="mt-6">
                <details class="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <summary class="font-bold text-lg cursor-pointer">Más información del perfil</summary>
                    <div class="mt-4">
                        <div class="form-control mb-4">
                            <label class="label" for="phone">
                                <span class="label-text">Teléfono 📞</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Número de teléfono"
                                class="input input-bordered w-full"
                            />
                        </div>
                        <div class="form-control mb-4">
                            <label class="label" for="address">
                                <span class="label-text">Dirección 🏠</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Dirección"
                                class="input input-bordered w-full"
                            />
                        </div>
                        <div class="form-control mb-4">
                            <label class="label" for="bio">
                                <span class="label-text">Datos adicionales 📜</span>
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                placeholder="Usuario Farmacia o Paciente"
                                class="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>
                    </div>
                </details>
            </div>
        </form>
    </div>
</div>

<style>
    details {
        max-height: 30px;
        overflow: hidden;
    }

    details[open] {
        max-height: 1000px; /* Ajusta este valor según sea necesario */
    }

    details:not([open]) {
        max-height: 1000px;
    }
</style>