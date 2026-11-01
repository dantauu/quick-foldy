<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const model = defineModel({ default: '' })
const { label, error, hint, placeholder } = defineProps<{
  label: string
  error?: string
  hint?: string
  placeholder?: string
}>()
const id = useId()
</script>
<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <label :for="id" class="text-sm font-medium">{{ label }}</label>
      <slot name="label-action"></slot>
    </div>
    <div class="relative">
      <input
        :id="id"
        v-model="model"
        v-bind="$attrs"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined"
        :placeholder="placeholder"
        class="h-12 w-full rounded-xl border border-line bg-base px-4 outline-none transition placeholder:text-muted/60 focus:border-folder-blue focus:ring-4 focus:ring-folder-blue/25 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-muted"
      />
      <div v-if="$slots['input-action']" class="absolute inset-y-0 right-4 flex items-center">
        <slot name="input-action"></slot>
      </div>
    </div>
    <p v-if="error" :id="`${id}-error`" role="alert" class="text-sm text-folder-terracotta">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="`${id}-hint`" class="text-sm text-muted">{{ hint }}</p>
  </div>
</template>
