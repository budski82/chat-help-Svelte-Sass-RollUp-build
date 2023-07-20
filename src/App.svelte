<!-- src/App.svelte -->
<script>
	let log = console.log
	let name = `SvelteMan and here to Server`
</script>

<style lang="scss">

	div.q{background:linear-gradient(
		-45deg,
		 #346 20%,
		 #0000 50%,
		#788 80%);
		}
	h1{color:purple;}

</style>

<div class="q">
	<h1>Hello {name}! Buggerhead</h1>
</div>