<template>
  <component :is="this.$route.meta.layoutComponent">
    <slot/>
</component>
</template>

<script setup>
// import Posts from "./components/views/Posts.vue";
import { Layout } from "lucide";
import AppLayout from "@/components/layouts/AppLayout.vue";
</script>
