<template>
	<table class="DataTable tl:f w:100 fz:small bc:c nm-x:xs s(nm-x:s)" v-if="data">
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
                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey  ta:l">
                  <span class="d:b c:blue lh:1 wb:bw">{{value}}</span>
                </td>
                <td class="p:xs m(p:s) va:t bd-t:s bdc:light-grey" v-if="headings.length > 2">
                  <div class="of-x:a of-y:v">
                    <slot name="example" :value="value" :valueName="name"></slot>
                  </div>
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
	name: 'DataTable',
    props: ['name', 'headings', 'data']
}
</script>
