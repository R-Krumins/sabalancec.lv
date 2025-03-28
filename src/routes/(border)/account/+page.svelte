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

	export let data;

	console.log(data);

	let profileImage = 'https://placehold.co/600x400';
	let name = data.fullName;
	let date_birth = '';
	let phone = '';
	let email = data.email;
	let address = data.address;
	let city = '';
	let state = '';
	let country = '';
</script>

<div class="align-center flex flex-wrap justify-center px-4 pt-16 pb-16">
	<div
		class="align-center flex grid w-7xl grid-cols-1 flex-wrap items-start gap-10 rounded-xl p-2 md:grid-cols-2 lg:gap-40"
	>
		<div class="flex flex-wrap">
			<p class="poppins-medium mb-6 h-6 w-full text-center text-gray-500 md:text-left">
				Personal Details
			</p>
			<div class="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
				<div
					class="ProfilePhotoDiv flex aspect-30/30 w-full rounded-3xl bg-blue-300 md:aspect-22/30"
					style="background-image: url({profileImage});"
				>
					<button
						class="poppins-regular m-2 mt-auto h-10 w-full cursor-pointer rounded-full bg-gray-200 text-sm opacity-85"
						onclick={changePhoto}
					>
						<p>Change photo</p>
					</button>
				</div>
				<div class="DetailsDiv flex w-full flex-wrap">
					<div class="InputDiv h-16 w-full">
						<label
							class="poppins-medium Label text-sm text-gray-500 {name ? 'FocusedLabel' : ''}"
							for="name"
						>
							Name:
						</label>
						<br />
						<input
							type="text"
							bind:value={name}
							placeholder="-"
							id="name"
							class="poppins-medium pointer-events-none w-full pt-1 pb-2"
						/>
					</div>
					<div class="InputDiv h-16 w-full">
						<label
							class="poppins-medium Label text-sm text-gray-500 {date_birth ? 'FocusedLabel' : ''}"
							for="date_birth"
						>
							Date of Birth:
						</label>
						<br />
						<input
							type="text"
							bind:value={date_birth}
							placeholder="-"
							id="date_birth"
							class="poppins-medium pointer-events-none w-full pt-1 pb-2"
						/>
					</div>
					<div class="InputDiv h-16 w-full">
						<label
							class="poppins-medium Label text-sm text-gray-500 {phone ? 'FocusedLabel' : ''}"
							for="phone"
						>
							Phone Number:
						</label>
						<br />
						<input
							type="text"
							bind:value={phone}
							placeholder="-"
							id="phone"
							class="poppins-medium pointer-events-none w-full pt-1 pb-2"
						/>
					</div>
					<div class="InputDiv h-16 w-full">
						<label
							class="poppins-medium Label text-sm text-gray-500 {email ? 'FocusedLabel' : ''}"
							for="email"
						>
							Email:
						</label>
						<br />
						<input
							type="text"
							bind:value={email}
							placeholder="-"
							id="email"
							class="poppins-medium pointer-events-none w-full pt-1 pb-2"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="flex h-full flex-wrap items-start">
			<p class="poppins-medium mb-6 h-6 w-full text-center text-gray-500 md:text-left">Address</p>
			<div class="AddressDiv flex flex-wrap">
				<div class="InputDiv h-16 w-full">
					<label
						class="poppins-medium Label text-sm text-gray-500 {address ? 'FocusedLabel' : ''}"
						for="address"
					>
						Address:
					</label>
					<br />
					<input
						type="text"
						bind:value={address}
						placeholder="-"
						id="address"
						class="poppins-medium pointer-events-none w-full pt-1 pb-2"
					/>
				</div>
				<div class="InputDiv h-16 w-full">
					<label
						class="poppins-medium Label text-sm text-gray-500 {city ? 'FocusedLabel' : ''}"
						for="city"
					>
						City:
					</label>
					<br />
					<input
						type="text"
						bind:value={city}
						placeholder="-"
						id="city"
						class="poppins-medium pointer-events-none w-full pt-1 pb-2"
					/>
				</div>
				<div class="InputDiv h-16 w-full">
					<label
						class="poppins-medium Label text-sm text-gray-500 {state ? 'FocusedLabel' : ''}"
						for="state"
					>
						State:
					</label>
					<br />
					<input
						type="text"
						bind:value={state}
						placeholder="-"
						id="state"
						class="poppins-medium pointer-events-none w-full pt-1 pb-2"
					/>
				</div>
				<div class="InputDiv h-16 w-full">
					<label
						class="poppins-medium Label text-sm text-gray-500 {country ? 'FocusedLabel' : ''}"
						for="country"
					>
						Country:
					</label>
					<br />
					<input
						type="text"
						bind:value={country}
						placeholder="-"
						id="country"
						class="poppins-medium pointer-events-none w-full pt-1 pb-2"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-6 flex w-7xl flex-wrap justify-center gap-4 sm:mt-0 sm:justify-end">
		<button
			class="cursor-pointer rounded-lg bg-green-600 px-4 py-1 text-white opacity-60"
			onclick={edit}><p>Edit</p></button
		>
		<button
			class="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white opacity-60"
			onclick={logout}><p>Logout</p></button
		>
	</div>
	<div class="mt-12 flex w-7xl flex-wrap justify-center">
		<p class="poppins-medium mb-6 w-full text-center text-gray-500 md:text-left">Order history</p>
		<div class="OrderHeader flex h-20 w-full items-center justify-between bg-gray-100">
			<div class="flex items-center">
				<img class="h-18 w-0 opacity-0 sm:w-18" src="https://placehold.co/200x200" alt="" />
				<p class="ms-4 mr-24">Name</p>
			</div>
			<p>Price</p>
			<p>Quantity</p>
		</div>
		<!-- {#each} -->
		<div
			class="Order flex min-h-20 w-full items-center justify-between border-b-2 border-gray-200 py-2"
		>
			<div class="flex items-center">
				<img class="mr-4 h-18" src="https://placehold.co/200x200" alt="" />
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
