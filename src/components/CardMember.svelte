<script lang="ts">
	type CardMember = {
		name: string;
		role: string;
		image: string;
		imageGrayedOut: string;
	};

	export let member: CardMember;
</script>

<article class="flex gap-4 lg:max-w-[450px] xl:max-w-[570px] 2xl:max-w-[650px] 3xl:max-w-[750px]">
	<div class="flex flex-col gap-2 w-full">
		<figure>
			<img class="object-cover" src={member.image} alt={`${member.name}, role: ${member.role}`} />
		</figure>

		<h3 class="text-lg">{member.name.toUpperCase()}</h3>

		<span class="text-lg font-bold">{member.role.toUpperCase()}</span>
	</div>

	<figure class="w-full">
		<img
			class="object-cover"
			src={member.imageGrayedOut}
			alt={`${member.name}, role: ${member.role}`}
		/>
	</figure>
</article>
