<template>
  <AppContainer>
    <AppSidebar 
    :sidebarActive="sidebarActive"
    :navItems="[
        'breakpoints',
        'directions',
        'states',
        'baseline',
        'palettes',
        'line-widths',
        'line-styles',
        'radii',
        'box-shadows',
        'text-shadows',
        'opacity',
        'sizes',
        'coordinates',
        'typefaces',
        'font-sizes',
        'line-heights',
        'tracking',
        'font-weights',
        'durations',
        'easings',
        'animations'
    ]">
    </AppSidebar>

    <AppBody>
      <header class="d:b w:100 p:s p-b:0">
        <div class="fl:l">
          <ul class="fz:small p:xs m(p:s)">
            <li class="ff:secondary fw:b fz:heading lh:heading">{{scarab.SCARAB['__styleguide-title'] || 'scarab-styleguide'}} <span class="fz:small">v{{scarab.SCARAB['__styleguide-version'] || '0.1.0'}}</span></li>
            <li>scarab-scss v{{scarab.SCARAB['__scarab-version'] || '?.?.? < v6.0.0'}}</li>
            <li>scarab-carapace v{{scarab.SCARAB['__carapace-version'] || '?.?.? < v3.0.0'}}</li>
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
          :data="scarab.SCARAB['breakpoints']">
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'directions'" class="gcol:12 s(gcol:6)">
        <DataTable
          :name="'directions'"
          :headings="[
            {name: 'name',  width: 50},
            {name: 'value', width: 50}
          ]" 
          :data="scarab.SCARAB['directions']">
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'states'" class="gcol:12 s(gcol:6)">
        <DataTable
          :name="'states'"
          :headings="[
            {name: 'name',  width: 50},
            {name: 'value', width: 50}
          ]" 
          :data="scarab.SCARAB['states']">
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'baseline'" class="gcol:12">
        <span class="d:b ff:primary c:dark-grey m-b:s" :style="{ fontSize: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }">{{scarab.SCARAB['baseline']}}</span>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:white fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
        <i class="d:b p-x:xs m(p-x:s) bgc:light-grey fz:tiny" :style="{ height: scarab.SCARAB['baseline'], lineHeight: scarab.SCARAB['baseline'] }"></i>
      </StyleguideSection>

      <StyleguideSection :name="'palettes'" :class="'gcol:12'">
        <table class="tl:f w:100 fz:small bc:c" v-if="scarab.SCARAB['palettes']">
          <thead class="ta:l c:dark-grey">
            <tr class="tt:l fw:b">
              <th class="p:xs m(p:s)  w:50 s(w:25)">Palette</th>
              <th class="p:xs m(p:s)  w:50 s(w:75)">Shades</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(paletteValue, paletteName) in scarab.SCARAB['palettes']">
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
          No palettes set.
        </div>
      </StyleguideSection>

      <StyleguideSection :name="'line-widths'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'line-widths'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['line-widths']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:100 bdc:black" :style="{ borderTopWidth: dataTable.value, borderTopStyle: lineStyle }" v-for="lineStyle in scarab.SCARAB['line-styles']"></i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'line-styles'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'line-styles'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['line-styles']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:100 bd-t:s bdc:black" :style="{ borderTopStyle: dataTable.value, borderTopWidth: lineWidth }" v-for="lineWidth in scarab.SCARAB['line-widths']"></i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'radii'" :class="'gcol:12'">
        <DataTable
          :name="'radii'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['radii']">

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

      <StyleguideSection :name="'box-shadows'" :class="'gcol:12'">
        <DataTable
          :name="'box-shadows'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="mapValues(scarab.SCARAB['box-shadows'], function(shadow) {
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

      <StyleguideSection :name="'text-shadows'" :class="'gcol:12'">
        <DataTable
          :name="'text-shadows'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="mapValues(scarab.SCARAB['text-shadows'], function(shadow) {
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
          :data="scarab.SCARAB['opacity']">

          <template scope="dataTable" slot="example">
            <div class="stack-y:0">
              <i class="d:b w:100 h:m bgc:black" :style="{ opacity: dataTable.value }">
                <span class="d:b p:xs c:white" :style="{ opacity: dataTable.value }">{{dataTable.valueName}}</span>
              </i>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'sizes'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'sizes'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['sizes']">

          <template scope="dataTable" slot="example">
            <span class="d:b bgc:light-grey" :style="{ width: dataTable.value, height: dataTable.value }"></span>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'coordinates'" :class="'gcol:12 s(gcol:6)'">
        <DataTable
          :name="'coordinates'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['coordinates']">

          <template scope="dataTable" slot="example">
            <div class="pos:r d:b w:xl h:xl bd:s bdc:light-grey">
              <span class="pos:a d:b bgc:black rad:round" :style="{ width: '3px', height: '3px', left: dataTable.value, top: dataTable.value }"></span>
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'typefaces'" :class="'gcol:12'">
        <DataTable
          :name="'typefaces'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="mapValues(scarab.SCARAB['typefaces'], function(typeface) {
            return arrayToFontFamily(typeface);
          })
        ">

          <template scope="dataTable" slot="example">
            <p class="fz:subheading lh:subheading m-b:s" :style="{ fontFamily: dataTable.value }">{{arrayToFontFamily(dataTable.value)}}</p>
            <p class="fz:body lh:body" :style="{ fontFamily: dataTable.value }">{{arrayToFontFamily(dataTable.value)}}</p>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'font-sizes'" :class="'gcol:12'">
        <DataTable
          :name="'font-sizes'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['font-sizes']">

          <template scope="dataTable" slot="example">
            <div class="d:b m-b:s" :style="{ fontSize: dataTable.value, fontFamily: familyValue, lineHeight: '1' }" v-for="(familyValue, familyName) in scarab.SCARAB['typefaces']">
              {{dataTable.valueName}}
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'line-heights'" :class="'gcol:12'">
        <DataTable
          :name="'line-heights'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['line-heights']">

          <template scope="dataTable" slot="example">
            <div class="d:b ln:s lnc:grey" :style="{ lineHeight: dataTable.value }">
              {{dataTable.valueName}}
            </div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'tracking'" :class="'gcol:12'">
        <DataTable
          :name="'tracking'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['tracking']">

          <template scope="dataTable" slot="example">
            <div class="m-b:xs fz:body lh:body" :style="{ letterSpacing: dataTable.value, fontFamily: familyValue }" v-for="(familyValue, familyName) in scarab.SCARAB['typefaces']">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'font-weights'" :class="'gcol:12'">
        <DataTable
          :name="'font-weights'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['font-weights']">

          <template scope="dataTable" slot="example">
            <div class="m-b:xs fz:body lh:body" :style="{ fontWeight: dataTable.value, fontFamily: familyValue }" v-for="(familyValue, familyName) in scarab.SCARAB['typefaces']">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'durations'" :class="'gcol:12'">
        <DataTable
          :name="'durations'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['durations']">

          <template scope="dataTable" slot="example">
            <span class="d:b w:100 h:xs bd-b:s anim:growX anim-count:i origin:l" :style="{ animationDuration: dataTable.value }"></span>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'easings'" :class="'gcol:12'">
        <DataTable
          :name="'easings'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['easings']">

          <template scope="dataTable" slot="example">
            <span class="d:b w:100 h:xs bd-b:s anim:growX anim-count:i anim-dur:l origin:l" :style="{ animationTimingFunction: dataTable.value }"></span>
          </template>
        </DataTable>
      </StyleguideSection>

      <StyleguideSection :name="'animations'" :class="'gcol:12'">
        <DataTable
          :name="'animations'"
          :headings="[
            {name: 'name',  width: 25},
            {name: 'value', width: 25},
            {name: 'example', width: 50}
          ]"
          :data="scarab.SCARAB['animations']">

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
  props: ['scarab', 'sidebarActive', 'debounce', 'mapValues', 'buildSelector', 'declareAnimations', 'arrayToShadow', 'arrayToFontFamily'],
  components: {
    AppHeader, AppContainer, AppSidebar, AppBody,
    StyleguideSection,
    DataTable
  }
}
</script>
