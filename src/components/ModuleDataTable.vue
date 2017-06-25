<template>
	<table class="ModuleDataTable tl:f w:100 fz:small bc:c nm-x:xs s(nm-x:s)" v-if="data">
        <thead class="ta:l c:dark-grey" v-if="headings">
            <tr class="tt:l fw:b">
                <th class="p:xs m(p:s)" :style="{ width: heading.width + '%' }" v-for="heading in headings">{{heading.name}}</th>
            </tr>
        </thead>

        <tbody v-if="data">
            <tr v-for="(value, name) in data">
                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l">
                  <span class="fw:n c:dark-grey wb:bw">{{name}}</span>
                </td>

                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l" v-if="typeof value === 'object' && !Array.isArray(value)">
                    <table class="ModuleDataTable__SubTable  w:100 tl:f wrap:s">
                        <tr v-for="(_value, _name) in value">
                            <td class="w:50 p:xs p-l:0 bd-b:s bdc:grey bds:dash"><span class="d:b c:blue lh:1 wb:bw">{{_name}}</span></td>
                            <td class="w:50 p:xs of-x:a wb:bw">{{_value.toString().replace(',', ', ')}}</td>
                        </tr>
                    </table>
                </td>
                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l" v-else-if="typeof value === 'object' && Array.isArray(value)">
                    <div class="stack-x:m">
                      <span class="c:blue lh:1 wb:bw" v-for="(_value, _name) in value">
                        {{_value}}
                      </span>
                    </div>
                </td>
                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l" v-else>
                  <span class="d:b c:blue lh:1 wb:bw">{{value}}</span>
                </td>

                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey" v-if="headings.length > 2">
                  <slot name="example" :value="value" :valueName="name"></slot>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="p:xs m(p:s)" v-else>
      No {{name}} set.
    </div>
</template>

<script>
export default {
	name: 'ModuleDataTable',
    props: ['name', 'headings', 'data']
}
</script>
