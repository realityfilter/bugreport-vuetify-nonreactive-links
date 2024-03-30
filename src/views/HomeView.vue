<template>
  <v-card>
    <v-card-title>Counter: {{ count }}</v-card-title>
    <v-card-text>
      Current href: <code>{{ href }}</code
      ><br />
      Link set via <code>:to</code> in button points to
      <code>/users/0</code>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="count = count + 1">Increment</v-btn>
      <v-btn :to="href" color="primary">Link to user </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
} from "vuetify/components";
const count = ref(0);
const href = computed(() => `/users/${count.value}`);
</script>
