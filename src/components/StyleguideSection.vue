<template>
	<section class="StyleguideSection  p:s p-t:l" :id="name">
        <header class="p:xs m(p:s)">
          <h1 class="ff:secondary fz:subheading lh:subheading fw:b">{{name}}</h1>
        </header>

        <div class="p:xs m(p:s)">
            <slot></slot>
        </div>
    </section>
</template>

<script>
	export default {
		name: 'StyleguideSection',
        props: ['name']
	}
</script>
