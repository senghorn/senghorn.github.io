<script>
	import Icon from '@iconify/svelte';
</script>

<div class="p-8 mx-auto w-full max-w-screen-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
	<h1 class="text-md lg:text-2xl font-bold">
		<span>Welcome! 🙏 </span>
		<span>
			I'm <span class="name">Seng Rith</span>.
		</span>
	</h1>
	<div class="body">
		<div class="container">
			<p>
				I am a Master's student at the <span class="highlight">University of Utah</span>. I am
				studying <span class="brighten">Computer Science</span> with focus on
				<span class="brighten">AI/ML(NLP, Deep Learning)</span>
				and <span class="brighten">Cybersecurity</span>. I'm graduating in
				<span class="highlight">May 2025</span>.
			</p>
			<br />
			<p>
				Besides engineering, my passion extends into culinary exploration, reveling in both crafting
				and enjoying new dishes. From the zest of Birria Tacos and the freshness of Papaya Salad to
				the warmth of Vietnamese Pho, I've explored diverse flavors. Send me your favorite recipe!
			</p>
			<br />
			<p>
				Let's connect and share our stories. I'm always open to new experiences and opportunities.
			</p>
		</div>
		<div class="container">
			<img src="portrait.jpg" alt="Your Name" />
		</div>
	</div>
	<div class="grid-contact-container">
		<div class="grid-item">
			<a href="https://github.com/senghorn" target="_blank">
				<Icon icon="mdi:github" style="font-size: 32px;" />
			</a>
		</div>
		<div class="grid-item">
			<a href="mailto:sun_rsh@outlook.com" target="_blank">
				<Icon icon="mdi:email" style="font-size: 32px; color: #00D1FF" />
			</a>
		</div>
		<div class="grid-item">
			<a href="https://www.linkedin.com/in/seng-horn-rith-550991187/" target="_blank">
				<Icon icon="mdi:linkedin" style="font-size: 32px; color: #3D6CB9" />
			</a>
		</div>
	</div>
</div>

<style>
	div {
		text-align: center;
		max-width: 1000px;
		margin: auto;
	}
	img {
		max-width: 350px;
		max-height: 550px;
		border-radius: 2%;
		margin: auto;
	}
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.name {
		color: var(--accent-color);
	}

	.highlight {
		color: var(--primary-color);
		font: bold;
	}

	.brighten {
		color: var(--font-color);
	}

	p {
		color: var(--secondary-color);
	}

	.body {
		display: flex;
		flex-direction: row;
		place-items: center;
		padding: 2rem;
		gap: 4rem;
	}
	.grid-contact-container {
		display: flex;
		flex-direction: row;
		width: fit-content;
		border-radius: 1rem;
		padding: 0.5rem;
		gap: 1rem;
		border: 1px solid var(--accent-color);
	}


	/* Style for anchoring tags in contact-list */
	.grid-item a {
		color: var(--font-color);
		font-size: 20px;
	}
	@media (max-width: 500px) {
		img {
			max-width: 200px;
			max-height: 400px;
			border-radius: 2%;
			margin: auto;
		}
	}
	@media (max-width: 800px) {
		.body {
			flex-direction: column;
		}
		img {
			max-width: 250px;
			max-height: 400px;
			border-radius: 2%;
			margin: auto;
		}
		.grid-contact-container {
			grid-template-columns: auto auto;
		}
	}
</style>
