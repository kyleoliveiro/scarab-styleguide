<template>
	<header id="AppHeader" class="AppHeader bd-b:s bdc:light-grey bgc:white ff:secondary fw:b fz:small lh:small s(fz:body) s(lh:body)">
      <nav class="d:f jc:sb">
        <div class="flg:0 s(p-r:s) m(p-r:m) m(m-r:s)">
            <ul class="s(stack-x:xs) m(m-r:s) p-x:s d:f fld:r ws:nw" style="max-width: 10rem;">
                <li v-for="item in navMenu"><router-link :to="item" class="d:b p:s p-x:xs c:grey tsn-prop:c tsn-dur:s tsn-ease:o-quad hv(c:dark-grey)">{{item}}</router-link></li>
            </ul>
        </div>

        <div class="flg:1">
            <input class="AppSearchInput appearance:n d:b w:100 bd:0 p:s c:blue lnw:0 lnc:dark-grey ff:primary fz:small fw:b o:50 tsn:s tfunc:o-quad hv(o:75) fc(bgc:light-grey) fc(lnw:s) fc(o:75) s(lh:body) s(fz:body)" type="search" placeholder="search..." v-model="searchQuery" @keyup="filterSearch(searchQuery)">
        </div>

        <div class="flg:0 d:f m(d:n)">
            <button class="p:s appearance:n bgc:white c:black bd:0 bd-l:s bdc:light-grey ff:secondary fz:body lh:0 tt:l ln:0 hv(c:dark-grey) ac(c:black) tsn:s" @click="toggleSidebar()">=</button>
        </div>
      </nav>  
    </header>
</template>

<script>
	export default {
		name: 'AppHeader',
        props: ['navTitle', 'filterSearch', 'toggleSidebar'],
		data() {
			return {
                navMenu: [
                    'theme',
                    'modules'
                ],
                searchQuery: ''
            };
		}
	}
</script>
