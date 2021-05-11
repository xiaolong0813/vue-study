<template>
    <button @click="count++">SFC Button {{count}} </button>
</template>
 
<script>
// import { xxx } from '@/xxx';
export default {
    name: 'SfcButton',
    data() {
        return {
            count: 0
        }
    }
};
</script>
 
<style scoped lang="scss">
 
</style> 