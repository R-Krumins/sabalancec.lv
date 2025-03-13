<script lang="ts">
	import AuthNav from '../AuthNav.svelte';
	import Form from '../Form.svelte';
	const formData = {
		items: [
			{ label: 'Email address', name: 'email' },
			{ label: 'Password', name: 'password' },
			{ label: 'Phone number', name: 'phone' }
		],
		onsubmit,
		submitBtnName: 'Sign Up'
	};

	function onsubmit(e: Event) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	}
</script>

<AuthNav currentPage="signup" />
<Form {...formData} />
