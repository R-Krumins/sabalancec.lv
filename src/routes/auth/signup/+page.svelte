<script>
	import Form from '$lib/components/auth/Form.svelte';
	import Nav from '$lib/components/auth/Nav.svelte';

	export let form;
</script>

<div>
	<Nav currentPage="signup" />
	<Form method="POST" let:Item let:SubmitBtn let:Error>
		<Item name="fullname" required>Full name</Item>
		<Item name="email" required type="email">Email</Item>
		<Item name="address" required>Address</Item>
		<Item name="password" required type="password">Password</Item>
		<SubmitBtn>Sign up</SubmitBtn>
		<Error msg={form?.error} />
	</Form>
</div>
