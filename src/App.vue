<template>
  <main id="app" class="App d:f fld:c h:100vh ff:primary lh:small">

    <AppHeader
      :navTitle="scarab.SCARAB['__styleguide-title'] || 'styleguide'"
      
      :filterSearch="this.filterSearch"
      :toggleSidebar="this.toggleSidebar">
    </AppHeader>

    <router-view
      :scarab="scarab"
      :sidebarActive="sidebarActive"

      :mapValues="this.mapValues"
      :buildSelector="this.buildSelector"
      :declareAnimations="this.declareAnimations"
      :arrayToShadow="this.arrayToShadow"
      :arrayToFontFamily="this.arrayToFontFamily">
    </router-view>

  </main>
</template>

<script>
import scarab            from '../scarab.config.json'
import _                 from 'lodash';

import AppHeader         from './components/AppHeader.vue'
import AppContainer      from './components/AppContainer.vue'
import AppSidebar        from './components/AppSidebar.vue'
import AppBody           from './components/AppBody.vue'

import StyleguideSection from './components/StyleguideSection.vue'
import DataTable         from './components/DataTable.vue'

export default {
  name: 'app',
  data: function() {
    return {
      scarab,
      sidebarActive: false
    }
  },
  components: {
    AppHeader, AppContainer, AppSidebar, AppBody,
    StyleguideSection,
    DataTable
  },
  created: function() {
    this.declareAnimations(this.scarab.SCARAB['animations']);
  },
  methods: {
    toggleSidebar: function() {
      this.sidebarActive = !this.sidebarActive;
    },
    filterSearch: function(searchQuery) {
      const $this = this;
      const $StyleguideSections = [].slice.call(document.querySelectorAll('.StyleguideSection'));
      const $AppSidebarLinks = [].slice.call(document.querySelectorAll('#AppSidebar [data-for]'));

      $StyleguideSections.forEach(function($section) {
        $section.style.display = 'none';
        if( $this.slugify($section.id, true).includes($this.slugify(searchQuery, true)) ) {
          $section.style.display = "block";
        }
      });

      $AppSidebarLinks.forEach(function($link) {
        $link.parentNode.style.display = 'none';
        if( $this.slugify($link.dataset.for, true).includes($this.slugify(searchQuery, true)) ) {
          $link.parentNode.style.display = 'block';
        }
      });
    },
    mapValues: _.mapValues,
    slugify: function(text, removeSymbols) {
      var slugifiedText = text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text

      if( removeSymbols ) {
        slugifiedText = slugifiedText.replace(/[^a-zA-Z0-9]/g, '');
      }

      return slugifiedText
    },
    buildSelector: function(options) {
      return options.selectorFormat
        .replace('{{b}}',  options.breakpoint)
        .replace('{{bp}}', options.breakpointPrefix)
        .replace('{{bs}}', options.breakpointSuffix)
        .replace('{{s}}',  options.state)
        .replace('{{sp}}', options.statePrefix)
        .replace('{{ss}}', options.stateSuffix)
        .replace('{{r}}',  scarab.SCARAB.modules[options.module]['root'])
        .replace('{{rp}}', options.rootPrefix)
        .replace('{{rs}}', options.rootSuffix)
        .replace('{{v}}',  options.variant)
        .replace('{{vp}}', options.variantPrefix)
        .replace('{{vs}}', options.variantSuffix)
        .replace('{{m}}',  options.modifier)
        .replace('{{mp}}', options.modifierPrefix)
        .replace('{{ms}}', options.modifierSuffix)
        .replace(/\\/g, '')
    },
    declareAnimations: function( animations ) {
      // Create style tag for animations
      var animationStyles = document.createElement('style');
      document.head.appendChild( animationStyles );
      animationStyles.type = 'text/css'

      _.forEach(animations, (data, name) => {
        var rule = `@keyframes ` + name + ' {';

        _.forEach(data, (styles, frame) => {
          rule += frame + ' {';
          _.forEach(styles, (value, property) => {
            rule += property + ':' + value + ';';
          });
          rule += '}';
        });
        rule += '}';

        animationStyles.sheet.insertRule(rule, animationStyles.sheet.cssRules.length);
      });
    },
    arrayToShadow: function (value) {
      return value.toString().replace(/,(?=(?:"[^"]*"|\([^()]*\)|\[[^\[\]]*\]|\{[^{}]*}|[^"\[{}()\]])*$)/g, ' ');
    },
    arrayToFontFamily: function( value ) {
      return value.toString().replace(',', ', ');
    }
  }
}
</script>
