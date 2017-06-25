<template>
	<header id="AppSidebar" class="AppSidebar pos:f ai:fe r:0 m(pos:s) d:b ord:2 m(ord:-1) h:100 of-y:a bgc:white ff:secondary fw:b fz:small lh:small ta:r m(ta:l) bd-l:s m(bd-l:0) m(bd-r:s) bdc:light-grey" :class="{ 'is-active' : sidebarActive }" style="min-width: 14rem;">
        <ul class="d:f fld:c ai:fe ws:nw p:xs p-b:l s(p-t:s)">
            <li class="d:b w:100" v-for="item in navItems"><span class="d:b p:xs s(p-x:s) c:grey hv(c:dark-grey) cursor:pointer router-link-active tsn-prop:c tsn-dur:m tsn-ease:o-quad" v-on:click="scrollTo(item)" :data-for="item">{{item}}</span></li>
        </ul>
    </header>
</template>

<script>
	export default {
		name: 'AppSidebar',
        props: ['navItems', 'sidebarActive'],
        methods: {
            scrollTo: function(id) {
                this.$SmoothScroll(document.getElementById(id), 250, false, document.getElementById('AppBody'));
            }
        }
	}
</script>
