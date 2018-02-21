<template>
  <AppContainer>
    <AppSidebar 
    :sidebarActive="sidebarActive"
    :navItems="[
        'baseline',
        'breakpoint',
        'color',
        'gradient',
        'opacity',
        'background-image',
        'letter-spacing',
        'line-height',
        'font-family',
        'font-size',
        'font-weight',
        'line-style',
        'line-width',
        'measure',
        'wrap',
        'spacing',
        'coordinate',
        'flex-grid',
        'ratio',
        'angle',
        'duration',
        'easing',
        'border-radius',
        'box-shadow',
        'text-shadow',
        'keyframe',
        'module'
    ]">
    </AppSidebar>

    <AppBody>
      <header class="d:b w:100 p:s p-b:0">
        <div class="fl:l">
          <ul class="fz:small p:xs m(p:s)">
            <li class="ff:secondary fw:b fz:heading lh:heading">{{options['__styleguide-title'] || 'scarab-styleguide'}}</li>
          </ul>
        </div>
      </header>

      <StyleguideSection :name="'breakpoints'" class="gcol:12">
        <DataTable
          :name="'breakpoints'"
          :headings="[
            {name: 'name',  width: 50},
            {name: 'value', width: 50}
          ]" 
          :data="inventory['breakpoint']">
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'baseline'" class="gcol:12">
        <span class="d:b ff:primary c:dark-grey m-b:s" :style="{ fontSize: inventory['baseline'], lineHeight: inventory['baseline'] }">{{inventory['baseline']}}</span>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: inventory['baseline'], lineHeight: inventory['baseline'] }"></i>
      </StyleguideSection>

      <StyleguideSection :name="'color'" :class="'gcol:12'">
        <table class="tl:f w:100 fz:small bc:c" v-if="inventory['color']">
          <thead class="ta:l c:dark-grey">
            <tr class="tt:l fw:b">
              <th class="p:xs m(p:s)  w:50 s(w:25)">Palette</th>
              <th class="p:xs m(p:s)  w:50 s(w:75)">Shades</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(paletteValue, paletteName) in inventory['color']">
              <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l">
                <span class="fw:b c:dark-grey">{{paletteName}}</span>
              </td>
              <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l">
                <ul class="d:f flw:w">
                  <li class="p-t:0 p-l:0 p:s" v-for="(shadeValue, shadeName) in paletteValue">
                    <div class="cf">
                      <span class="d:b w:xl h:l va:m fl:n" :style="{ backgroundColor: shadeValue }"></span>
                      <span class="d:b w:l h:l va:m fl:l bd:s p:xs fz:small lh:small va:m fw:b" :style="{ color: shadeValue, borderColor: shadeValue }">
                        ABCabc<br>
                        123456<br>
                        !@#$%^
                      </span>
                      <span class="d:b w:l h:l va:m fl:l bd:s bd-l:0 p:xs fz:small lh:small va:m" :style="{ color: shadeValue, borderColor: shadeValue }">
                        ABCabc<br>
                        123456<br>
                        !@#$%^
                      </span>
                    </div>

                    <span class="d:b m-t:xs fw:b c:dark-grey" >{{shadeName}}</span>
                    <span class="d:b fz:tiny c:dark-grey">{{shadeValue}}</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="p:xs m(p:s)" v-else>
          No colors set.
        </div>
      </StyleguideSection>

      <StyleguideSection :name="'line-width'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'line-width'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['line-width']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:100 bdc:black" :style="{ borderTopWidth: dataTable.value, borderTopStyle: lineStyle }" v-for="lineStyle in inventory['line-style']"></i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'line-style'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'line-style'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['line-style']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:100 bd-t:s bdc:black" :style="{ borderTopStyle: dataTable.value, borderTopWidth: lineWidth }" v-for="lineWidth in inventory['line-width']"></i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'border-radius'" :class="'gcol:12'">
        <DataTable
          :name="'border-radius'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['border-radius']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:s h:m bgc:black" :style="{ borderRadius: dataTable.value }"></i>
              <i class="d:b w:m h:m bgc:black" :style="{ borderRadius: dataTable.value }"></i>
              <i class="d:b w:l h:m bgc:black" :style="{ borderRadius: dataTable.value }"></i>
              <i class="d:b w:s h:m bd:s" :style="{ borderRadius: dataTable.value }"></i>
              <i class="d:b w:m h:m bd:s" :style="{ borderRadius: dataTable.value }"></i>
              <i class="d:b w:l h:m bd:s" :style="{ borderRadius: dataTable.value }"></i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'box-shadow'" :class="'gcol:12'">
        <DataTable
          :name="'box-shadow'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="mapValues(inventory['box-shadow'], function(shadow) {
            return arrayToShadow(shadow);
          })
        ">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:l h:l" :style="{ boxShadow: arrayToShadow(dataTable.value) }"></i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'text-shadow'" :class="'gcol:12'">
        <DataTable
          :name="'text-shadow'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="mapValues(inventory['text-shadow'], function(shadow) {
            return arrayToShadow(shadow);
          })
        ">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <p class="fz:subheading lh:subheading" :style="{ textShadow: arrayToShadow(dataTable.value) }">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'opacity'" :class="'gcol:12'">
        <DataTable
          :name="'opacity'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['opacity']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:100 h:m bgc:black" :style="{ opacity: dataTable.value }">
                <span class="d:b p:xs c:white" :style="{ opacity: dataTable.value }">{{dataTable.valueName}}</span>
              </i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'spacing'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'spacing'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['spacing']">

          <template scope="dataTable" slot="example">
            <span class="d:b bgc:light-grey" :style="{ width: dataTable.value, height: dataTable.value }"></span>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'coordinate'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'coordinate'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['coordinate']">

          <template scope="dataTable" slot="example">
            <div class="pos:r d:b w:xl h:xl bd:s bdc:light-grey">
              <span class="pos:a d:b bgc:black rad:round" :style="{ width: '3px', height: '3px', left: dataTable.value, top: dataTable.value }"></span>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'font-family'" :class="'gcol:12'">
        <DataTable
          :name="'font-family'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="mapValues(inventory['font-family'], function(typeface) {
            return arrayToFontFamily(typeface);
          })
        ">

          <template scope="dataTable" slot="example">
            <p class="fz:subheading lh:subheading m-b:s" :style="{ fontFamily: dataTable.value }">{{arrayToFontFamily(dataTable.value)}}</p>
            <p class="fz:body lh:body" :style="{ fontFamily: dataTable.value }">{{arrayToFontFamily(dataTable.value)}}</p>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'font-size'" :class="'gcol:12'">
        <DataTable
          :name="'font-size'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['font-size']">

          <template scope="dataTable" slot="example">
            <div class="d:b m-b:s" :style="{ fontSize: dataTable.value, fontFamily: familyValue, lineHeight: '1' }" v-for="(familyValue, familyName) in inventory['font-family']">
              {{dataTable.valueName}}
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'line-height'" :class="'gcol:12'">
        <DataTable
          :name="'line-height'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['line-height']">

          <template scope="dataTable" slot="example">
            <div class="d:b ln:s lnc:grey" :style="{ lineHeight: dataTable.value }">
              {{dataTable.valueName}}
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'letter-spacing'" :class="'gcol:12'">
        <DataTable
          :name="'letter-spacing'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['letter-spacing']">

          <template scope="dataTable" slot="example">
            <div class="m-b:xs fz:body lh:body" :style="{ letterSpacing: dataTable.value, fontFamily: familyValue }" v-for="(familyValue, familyName) in inventory['font-family']">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'font-weight'" :class="'gcol:12'">
        <DataTable
          :name="'font-weight'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['font-weight']">

          <template scope="dataTable" slot="example">
            <div class="m-b:xs fz:body lh:body" :style="{ fontWeight: dataTable.value, fontFamily: familyValue }" v-for="(familyValue, familyName) in inventory['font-family']">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'duration'" :class="'gcol:12'">
        <DataTable
          :name="'duration'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['duration']">

          <template scope="dataTable" slot="example">
            <span class="d:b w:100 h:xs bd-b:s anim:growX anim-count:i origin:l" :style="{ animationDuration: dataTable.value }"></span>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'easing'" :class="'gcol:12'">
        <DataTable
          :name="'easing'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['easing']">

          <template scope="dataTable" slot="example">
            <span class="d:b w:100 h:xs bd-b:s anim:growX anim-count:i anim-dur:l origin:l" :style="{ animationTimingFunction: dataTable.value }"></span>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'animation'" :class="'gcol:12'">
        <DataTable
          :name="'animation'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="inventory['animation']">

          <template scope="dataTable" slot="example">
            <span class="d:ib w:l h:l bgc:light-grey bd:s anim-count:i anim-dur:l" :style="{ animationName: dataTable.valueName }"></span>
          </template>
        </DataTable>
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

export default {
  name: 'Theme',
  props: ['scarab', 'inventory', 'options', 'constants', 'sidebarActive', 'debounce', 'mapValues', 'buildSelector', 'declareAnimations', 'arrayToShadow', 'arrayToFontFamily'],
  components: {
    AppHeader, AppContainer, AppSidebar, AppBody,
    StyleguideSection,
    DataTable
  }
}
</script>
