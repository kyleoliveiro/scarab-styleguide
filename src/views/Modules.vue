<template>
  <AppContainer>
    <AppSidebar
    :sidebarActive="sidebarActive" 
    :navItems="['selector-format'].concat( Object.keys(inventory['module']) )">
    </AppSidebar>

    <AppBody :debounce="this.debounce">
      <header class="d:b w:100 p:s p-b:0">
        <div class="fl:l">
          <ul class="fz:small p:xs m(p:s)">
            <li class="ff:secondary fw:b fz:heading lh:heading">{{options['__styleguide-title'] || 'scarab-styleguide'}}</li>
          </ul>
        </div>
      </header>

      <!-- <StyleguideSection :name="'selector-format'" class="gcol:12">
          <p class="ff:primary fz:subheading lh:subheading c:dark-grey m-b:s">
            <span class="c:grey">
              class="</span>{{buildSelector({
                selectorFormat   : options['selector-format'],
                module           : 'stack',
                rootPrefix       : options['root-prefix'],
                rootSuffix       : options['root-suffix'],
                variantPrefix    : options['variant-prefix'],
                variantSuffix    : options['variant-suffix'],
                modifierPrefix   : options['modifier-prefix'],
                modifierSuffix   : options['modifier-suffix'],
                breakpointPrefix : options['breakpoint-prefix'],
                breakpointSuffix : options['breakpoint-suffix'],
                statePrefix      : options['state-prefix'],
                stateSuffix      : options['state-suffix'],
                variant          : options['namescheme']['directions'][0],
                modifier         : Object.keys(inventory['spacing'])[0],
                breakpoint       : Object.keys(inventory['breakpoint'])[0],
                state            : options['namescheme']['states'][0]
              })}}<span class="c:grey">"
            </span>
          </p>

          <p class="ff:primary fz:tiny lh:tiny ls:m c:dark-grey">{{options['selector-format']}}</p>
      </StyleguideSection> -->

      <StyleguideSection :name="name" class="gcol:12" v-for="(module, name) in inventory['module']" :key="name">
        <ModuleDataTable
          :name="name"
          :headings="[
            {name: 'key',  width: 25},
            {name: 'value', width: 75}
          ]" 
          :data="inventory['module'][name]">
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
  props: ['scarab', 'inventory', 'options', 'constants', 'sidebarActive', 'debounce', 'mapValues', 'buildSelector', 'arrayToShadow', 'arrayToFontFamily'],
  components: {
    AppHeader, AppContainer, AppSidebar, AppBody,
    StyleguideSection,
    DataTable, ModuleDataTable
  }
}
</script>
