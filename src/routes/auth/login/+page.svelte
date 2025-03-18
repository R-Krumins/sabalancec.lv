<script lang="ts">
	import AuthNav from '../AuthNav.svelte';
	import Form from '../Form.svelte';

	const formData = {
		items: [
			{ label: 'Email address', name: 'email' },
			{ label: 'Password', name: 'password' }
		],
		onsubmit,
		submitBtnName: 'Log in'
	};

	async function onsubmit(e: Event) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		const response = await fetch(`/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: data.email, password: data.password })
		});
		const res = await response.json();
		console.log(res);
	}
</script>

<AuthNav currentPage="login" />
<Form {...formData} />
<p class="poppins-thin mt-6 text-right">
	<a href="https://www.nhs.uk/conditions/dementia/care-and-support/help-and-support/"
		>Forgot password?</a
	>
</p>
