<script setup lang="ts">
import HomeHero from '@/components/Home/Hero.vue'
import HomeMeetChuks from '@/components/Home/MeetChuks.vue'
import HomeImages from '@/components/Home/Images.vue'
import HomeWishes from '@/components/Home/Wishes.vue'
import { useNavHandler } from '@/assets/compositions/useNavHandler'
import { onMounted } from 'vue'
import { useFooterHandler } from '@/assets/compositions/useFooterHandler'

const { changeTheme } = useNavHandler()
const { showFooterPattern } = useFooterHandler()

onMounted(() => {
  changeTheme('dark')
  showFooterPattern()
})
</script>

<template>
  <main>
    <HomeHero></HomeHero>
    <HomeMeetChuks></HomeMeetChuks>
    <HomeImages></HomeImages>
    <HomeWishes></HomeWishes>
  </main>
</template>
