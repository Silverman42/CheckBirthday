<script setup lang="ts">
import { useFooterHandler } from '@/assets/compositions/useFooterHandler'
import { useNavHandler } from '@/assets/compositions/useNavHandler'
import WishesHero from '@/components/Wishes/Hero.vue'
import WishesList from '@/components/Wishes/List.vue'
import { onMounted } from 'vue'

const { changeTheme, changeActiveId } = useNavHandler()
const { hideFooterPattern } = useFooterHandler()

onMounted(() => {
  changeTheme('light')
  changeActiveId('wishes')
  hideFooterPattern()
})
</script>
<template>
  <main>
    <WishesHero></WishesHero>
    <div class="relative z-[10] mt-[-40vh]">
      <WishesList></WishesList>
    </div>
  </main>
</template>
