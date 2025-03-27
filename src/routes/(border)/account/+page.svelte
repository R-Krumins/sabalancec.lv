<script>
	import { goto } from '$app/navigation';

	async function logout() {
		const response = await fetch(`/auth/logout`, {
			method: 'POST'
		});

		const res = await response.json();
		if (res.success) {
			goto('/');
		}
	}

	async function edit() {
		//yes
	}

	async function changePhoto() {
		//yes
	}

	let profileImage = "https://placehold.co/600x400"
	let name = "John"
	let date_birth = "August 27th, 1599"
	let phone = "+371 12124545"
	let email = "onion@outlook.ee"
	let address = "35 Jimmy street"
	let city = "Compton"
	let state = "Massachusets"
	let country = "Canada"
</script>

<style>
	/*Uncomment to use info fields as inputs*/

	/* input {
		outline: none;
		transition: all 0.2s ease-in-out;
    }
    input:focus {
        color: black;
        border-color: black;
    }
    .Label {
        color: gray;
        transition: color 0.2s ease-in-out;
    }
    .FocusedLabel {
        color: black;
    } */

	.ProfilePhotoDiv {
		background-size: cover;
		background-position: center;
	}
</style>

<div class="align-center flex justify-center flex-wrap pt-16 pb-16 px-4">
    <div class="flex flex-wrap align-center w-7xl p-2 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 items-start">
		<div class="flex flex-wrap">
			<p class="poppins-medium text-gray-500 w-full mb-6 h-6 text-center md:text-left">Personal Details</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
				<div class="ProfilePhotoDiv aspect-30/30 md:aspect-22/30 bg-blue-300 w-full flex rounded-3xl" style="background-image: url({profileImage});">
					<button class="w-full h-10 cursor-pointer poppins-regular text-sm mt-auto bg-gray-200 opacity-85 rounded-full m-2" onclick={changePhoto}>
						<p>Change photo</p>
					</button>
				</div>
				<div class="DetailsDiv flex flex-wrap w-full">
					<div class="InputDiv w-full h-16">
						<label class="text-sm text-gray-500 poppins-medium Label {name ? 'FocusedLabel' : ''}" for="name">
							Name:
						</label>
						<br>
						<input type="text" bind:value={name} placeholder="-" id="name" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
					</div>
					<div class="InputDiv w-full h-16">
						<label class="text-sm text-gray-500 poppins-medium Label {date_birth ? 'FocusedLabel' : ''}" for="date_birth">
							Date of Birth:
						</label>
						<br>
						<input type="text" bind:value={date_birth} placeholder="-" id="date_birth" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
					</div>
					<div class="InputDiv w-full h-16">
						<label class="text-sm text-gray-500 poppins-medium Label {phone ? 'FocusedLabel' : ''}" for="phone">
							Phone Number:
						</label>
						<br>
						<input type="text" bind:value={phone} placeholder="-" id="phone" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
					</div>
					<div class="InputDiv w-full h-16">
						<label class="text-sm text-gray-500 poppins-medium Label {email ? 'FocusedLabel' : ''}" for="email">
							Email:
						</label>
						<br>
						<input type="text" bind:value={email} placeholder="-" id="email" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap h-full items-start">
			<p class="poppins-medium text-gray-500 w-full mb-6 h-6 text-center md:text-left">Address</p>
			<div class="AddressDiv flex flex-wrap">
				<div class="InputDiv w-full h-16">
					<label class="text-sm text-gray-500 poppins-medium Label {address ? 'FocusedLabel' : ''}" for="address">
						Address:
					</label>
					<br>
					<input type="text" bind:value={address} placeholder="-" id="address" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
				</div>
				<div class="InputDiv w-full h-16">
					<label class="text-sm text-gray-500 poppins-medium Label {city ? 'FocusedLabel' : ''}" for="city">
						City:
					</label>
					<br>
					<input type="text" bind:value={city} placeholder="-" id="city" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
				</div>
				<div class="InputDiv w-full h-16">
					<label class="text-sm text-gray-500 poppins-medium Label {state ? 'FocusedLabel' : ''}" for="state">
						State:
					</label>
					<br>
					<input type="text" bind:value={state} placeholder="-" id="state" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
				</div>
				<div class="InputDiv w-full h-16">
					<label class="text-sm text-gray-500 poppins-medium Label {country ? 'FocusedLabel' : ''}" for="country">
						Country:
					</label>
					<br>
					<input type="text" bind:value={country} placeholder="-" id="country" class="pointer-events-none w-full pb-2 pt-1 poppins-medium">
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-wrap justify-center sm:justify-end w-7xl gap-4 mt-6 sm:mt-0">
		<button class="bg-green-600 opacity-60 py-1 px-4 rounded-lg text-white cursor-pointer" onclick={edit}><p>Edit</p></button>
		<button class="bg-red-600 opacity-60 py-2 px-4 rounded-lg text-white cursor-pointer" onclick={logout}><p>Logout</p></button>
	</div>
	<div class="flex flex-wrap justify-center w-7xl mt-12">
		<p class="poppins-medium text-gray-500 w-full mb-6 text-center md:text-left">Order history</p>
		<div class="OrderHeader bg-gray-100 w-full justify-between flex h-20 items-center">
			<div class="flex items-center">
				<img class="h-18 w-0 sm:w-18 opacity-0" src="https://placehold.co/200x200" alt="">
				<p class="mr-24 ms-4">Name</p>
			</div>
			<p>Price</p>
			<p>Quantity</p>
		</div>
		<!-- {#each} -->
			<div class="Order w-full justify-between flex min-h-20 py-2 items-center border-b-2 border-gray-200">
				<div class="flex items-center">
					<img class="h-18 mr-4" src="https://placehold.co/200x200" alt="">
					<div>
						<p class="">Name</p>
						<p>15.02.2025</p>
					</div>
				</div>
				<p class="">$200.20</p>
				<p class="">1</p>
			</div>
		<!-- {/each} -->
	</div>
</div>