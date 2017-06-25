<template>
  <AppContainer>
    <AppSidebar
    :sidebarActive="sidebarActive" 
    :navItems="['selector-format'].concat( Object.keys(scarab.SCARAB['modules']) )">
    </AppSidebar>

    <AppBody :debounce="this.debounce">
      <header class="d:b w:100 p:s p-b:0">
        <div class="fl:l">
          <ul class="fz:small p:xs m(p:s)">
            <li class="ff:secondary fw:b fz:heading lh:heading">{{scarab.SCARAB['__styleguide-title'] || 'scarab-styleguide'}} <span class="fz:small">v{{scarab.SCARAB['__styleguide-version'] || '0.1.0'}}</span></li>
            <li>scarab-scss v{{scarab.SCARAB['__scarab-version'] || '?.?.? < v6.0.0'}}</li>
            <li>scarab-carapace v{{scarab.SCARAB['__carapace-version'] || '?.?.? < v3.0.0'}}</li>
          </ul>
        </div>
      </header>

      <StyleguideSection :name="'selector-format'" class="gcol:12">
          <p class="ff:primary fz:subheading lh:subheading c:dark-grey m-b:s">
            <span class="c:grey">
              class="</span>{{buildSelector({
                selectorFormat   : scarab.SCARAB['selector-format'],
                module           : 'stack',
                rootPrefix       : scarab.SCARAB['root-prefix'],
                rootSuffix       : scarab.SCARAB['root-suffix'],
                variantPrefix    : scarab.SCARAB['variant-prefix'],
                variantSuffix    : scarab.SCARAB['variant-suffix'],
                modifierPrefix   : scarab.SCARAB['modifier-prefix'],
                modifierSuffix   : scarab.SCARAB['modifier-suffix'],
                breakpointPrefix : scarab.SCARAB['breakpoint-prefix'],
                breakpointSuffix : scarab.SCARAB['breakpoint-suffix'],
                statePrefix      : scarab.SCARAB['state-prefix'],
                stateSuffix      : scarab.SCARAB['state-suffix'],
                variant          : scarab.SCARAB['directions']['horizontal'],
                modifier         : Object.keys(scarab.SCARAB['sizes'])[0],
                breakpoint       : Object.keys(scarab.SCARAB['breakpoints'])[0],
                state            : scarab.SCARAB['states'][Object.keys(scarab.SCARAB['states'])[0]]
              })}}<span class="c:grey">"
            </span>
          </p>

          <p class="ff:primary fz:tiny lh:tiny ls:m c:dark-grey">{{scarab.SCARAB['selector-format']}}</p>
      </StyleguideSection>

      <StyleguideSection :name="name" class="gcol:12" v-for="(module, name) in scarab.SCARAB['modules']" :key="name">
        <ModuleDataTable
          :name="name"
          :headings="[
            {name: 'key',  width: 25},
            {name: 'value', width: 75}
          ]" 
          :data="scarab.SCARAB['modules'][name]">
        </ModuleDataTable>
      </StyleguideSection>
    </AppBody>
  </AppContainer>
</template>

<script>
import AppHeader         from '../components/AppHeader.vue'
import AppContainer      from '../components/AppContainer.vue'
import AppSidebar        from '../components/AppSidebar.vue'
import AppBody           from '../components/AppBody.vue'
import StyleguideSection from '../components/StyleguideSection.vue'
import DataTable         from '../components/DataTable.vue'
import ModuleDataTable   from '../components/ModuleDataTable.vue'

export default {
  name: 'Modules',
  props: ['scarab', 'sidebarActive', 'debounce', 'mapValues', 'buildSelector', 'arrayToShadow', 'arrayToFontFamily'],
  components: {
    AppHeader, AppContainer, AppSidebar, AppBody,
    StyleguideSection,
    DataTable, ModuleDataTable
  }
}
</script>
