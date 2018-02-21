<template>
	<article id="AppBody" class="AppBody flg:1 h:100 of-y:a" v-on:scroll="updateSidebar">
		<div class="g:12 wrap:xl m-x:a">
        	<slot></slot>
        </div>
    </article>
</template>

<script>
    import scarab from '../../scarab.json'

	export default {
		name: 'AppBody',
		props: ['debounce'],
		data() {
			return {
				scarab
			};
		},
		methods: {
			updateSidebar: _.throttle(function() {
				const $AppSidebarLinks    = [].slice.call(document.querySelectorAll('#AppSidebar [data-for]'));
				const $StyleguideSections = [].slice.call(document.querySelectorAll('.StyleguideSection'));
				const AppHeaderBottom     = document.getElementById('AppHeader').getBoundingClientRect().bottom;

				$AppSidebarLinks.forEach(function($link) {
					$link.classList.remove('router-link-active');
				});

				$StyleguideSections.forEach(function($section) {
					const id = $section.id;
					const rect = $section.getBoundingClientRect();
					const $link = document.querySelector('#AppSidebar [data-for=' + id + ']');

					if( rect.top >= AppHeaderBottom )  {
						$link.classList.add('router-link-active');
					}
				});
			}, 66)
		}
	}
</script>
