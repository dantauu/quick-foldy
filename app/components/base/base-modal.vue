<script setup lang="ts">
  const open = defineModel<boolean>('open', { required: true })
  const dialog = useTemplateRef('dialog')
  const visible = ref(false)

  function show() {
    dialog.value?.showModal()
    visible.value = true
  }

  watch(open, (value) => {
    if (value) show()
    else visible.value = false
  })

  onMounted(() => {
    if (open.value) show()
  })
</script>

<template>
  <dialog
      ref="dialog"
      class="fixed inset-0 size-full max-h-none max-w-none bg-black/60 bg-transparent backdrop:bg-transparent outline-none"
      @cancel.prevent="open = false"
      @close="open = false"
  >
    <Transition
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
    >
      <div v-if="visible" class="fixed inset-0 bg-black/60" @click="open = false" />
    </Transition>

    <div class="pointer-events-none flex min-h-full items-center justify-center p-4">
      <Transition
          enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-150 ease-in"
          enter-from-class="scale-95 opacity-0"
          leave-to-class="scale-95 opacity-0"
          @after-leave="dialog?.close()"
      >
        <div v-if="visible" class="pointer-events-auto relative rounded-3xl bg-surface text-fg">
          <slot />
        </div>
      </Transition>
    </div>
  </dialog>
</template>