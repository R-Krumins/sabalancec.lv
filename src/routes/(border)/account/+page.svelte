<script>
	import { goto } from '$app/navigation';

	async function logout() {
		const response = await fetch(`/auth/logout`, {
			method: 'POST'
		});

		const res = await response.json();
		console.log(res);
	}
</script>

<div>
	<h1>Account page</h1>
	<button onclick={logout}>Logout</button>
</div>
