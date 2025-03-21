<script>
	import Item from './FormItem.svelte';
	import SubmitBtn from './FormSubmitBtn.svelte';
	import Error from './FormError.svelte';
	const { children, ...props } = $props();
</script>

<form {...props}>
	<slot {Item} {SubmitBtn} {Error} />
</form>
