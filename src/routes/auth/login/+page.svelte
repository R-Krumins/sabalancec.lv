<script lang="ts">
	import Form from '$lib/components/auth/Form.svelte';
	import Nav from '$lib/components/auth/Nav.svelte';

	export let form;
	console.log(form);
</script>

<div>
	<Nav currentPage="login" />
	<Form method="POST" let:Item let:SubmitBtn let:Error>
		<Item name="email" value={form?.email ?? ''} type="email" required>Email</Item>
		<Item name="password" value={form?.password ?? ''} type="password" required>Password</Item>
		<Error msg={form?.error} />
		<SubmitBtn>Log in</SubmitBtn>
	</Form>
</div>
