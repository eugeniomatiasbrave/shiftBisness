<script>
	/*
    import { enhance } from '$app/forms';
    import Swal from 'sweetalert2';
    import 'iconify-icon';
    import { goto } from '$app/navigation';
    import BackButton from '$lib/components/BackButton.svelte';   
    export let form;
    export let data;

    console.log('data', data);
    
    const user = form?.user ?? data?.user ?? {};

    $: status = 0;
    let enhanceResult;
    let selectedImage = user.avatar || '';

    let hasNumber = false;
    let isFormValid = false;
    let isNameValid = false;
    let isEmailValid = false;
    let name = form?.user?.name ?? user?.name ?? '';
    let email = form?.user?.email ?? user?.email ?? '';
    let phone = form?.user?.phone ?? user?.phone ?? '';
    let address = form?.user?.address ?? user?.address ?? '';
    let bio = form?.user?.bio ?? user?.bio ?? '';
    
    let fileInput;
    let avatarFile;

    $: {
        hasNumber = /\d/.test(name);
        isNameValid = name !== '' && !hasNumber;
        isEmailValid = email !== '';
        isFormValid = isNameValid && isEmailValid;
    }

    const handleFileChange = (event) => {
        const input = event.target;
        const file = input.files ? input.files[0] : null;
        if (file) {
            selectedImage = URL.createObjectURL(file);
            avatarFile = file; // guardo el archivo seleccionado
        }
    };
*/
</script>
<!--
<h1 class="my-10 text-4xl font-bold text-center text-white"> Welcome to Profile</h1>
    <div class="card shadow-lg bg-white rounded-xl w-full">
        <div class="card-body w-full transition-all duration-300">
            <BackButton></BackButton>
            <h2 class="text-2xl font-bold mb-6">Actualización del perfil</h2>
            <form
                method="POST"
                action="?/updateProfile"
                enctype="multipart/form-data"
                use:enhance={({ formData }) => {

                    // Incluyo el archivo de imagen en el FormData
                    if (avatarFile) {
                        formData.append('avatar', avatarFile);
                    }

                    return async ({ result, update }) => {
                        enhanceResult = result;
                        const name = user.name = formData.get('name');
                        const email = user.email = formData.get('email');
                        
                        if (enhanceResult.status !== 200) {
                            Swal.fire({
                                title: 'Error',
                                icon: 'error',
                                text: enhanceResult.data.message || 'Error updating profile',
                                confirmButtonColor: '#d33',
                                confirmButtonText: 'Aceptar'
                            });
                            return;
                        }

                        user.avatar = enhanceResult.data.body.avatar || selectedImage;

                        status = enhanceResult.status;
                        Swal.fire({
                            title: '¡Actualizado con éxito!',
                            icon: 'success',
                            html: `
                           <p><strong>Nombre:</strong> ${enhanceResult.data.body.name ?? name}</p>
                           <p><strong>Email:</strong> ${enhanceResult.data.body.email ?? email}</p>`,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Aceptar'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                goto('/profile');
                            }
                        });
                    };
                }}>
                <div class="flex flex-col lg:flex-row items-center lg:items-start">
                    <div class="flex flex-col items-center mb-4 lg:mb-0 lg:mr-8">
                        <h4 class="font-medium text-md mb-2">Foto de Perfil</h4>
                        <label for="avatar" class="avatar-container w-56 h-56 rounded-full hover:cursor-pointer relative">
                            <input
                                bind:this={fileInput}
                                type="file"
                                id="avatar"
                                accept="image/*"
                                on:change={handleFileChange}
                                class="hidden"
                            />                    
                            <img
                                src={selectedImage}
                                alt="user avatar"
                                id="avatar-preview"
                                class="w-full h-full object-cover rounded-full"
                            />
                            <button type="button" class="absolute bottom-2 right-2 btn btn-sm btn-secondary" on:click={() => fileInput.click()}>
                                Cambiar Foto
                            </button>
                        </label>
                    </div>

                    <div class="flex-grow w-full">
                        <div class="form-control mb-4">
                            <label class="label" for="email">
                                <span class="label-text">Email 📩</span>
                            </label>
                            <input
                                bind:value={email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="mail@mail.com"
                                class="input input-bordered w-full"
                                required
                            />
                            {#if !isEmailValid}
                                <p class="text-xs text-error">Este campo es obligatorio</p>
                            {/if}
                        </div>

                        <div class="form-control mb-4">
                            <label class="label" for="nombre">
                                <span class="label-text">Nombre 👤</span>
                            </label>
                            <input
                                bind:value={name}
                                type="text"
                                id="nombre"
                                name="name"
                                placeholder="Nombre"
                                class="input input-bordered w-full"
                                required
                            />
                            {#if !isNameValid}
                                <p class="text-xs text-error">Este campo es obligatorio</p>
                            {/if}
                            {#if hasNumber}
                                <p class="text-xs text-error">El nombre no debe contener números</p>
                            {/if}
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-info w-full" disabled={!isFormValid} type="submit">Actualizar perfil</button>
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
                                    bind:value={phone}
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
                                bind:value={address}
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
                                    bind:value={bio}
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

	-->