<script setup lang="ts">
  defineOptions({ inheritAttrs: false })

  const model = defineModel({ default: '' })
  const { label, error, placeholder } = defineProps<{ label: string, error?: string, placeholder?: string }>()
  const id = useId()
</script>
<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <label :for="id" class="text-sm font-medium">{{ label }}</label>
      <slot name="label-action"></slot>
    </div>
    <input
        :id="id"
        v-model="model"
        v-bind="$attrs"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${id}-error` : undefined"
        :placeholder="placeholder"
        class="h-12 rounded-xl border border-line bg-base px-4 outline-none transition placeholder:text-muted/60 focus:border-folder-blue focus:ring-4 focus:ring-folder-blue/25"
    >
  </div>
</template>