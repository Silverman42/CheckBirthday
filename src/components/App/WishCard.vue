<template>
  <div class="bg-[#F3F4F7] rounded-[24px] pt-11 px-3 pb-3 relative">
    <img src="/img/pin.svg" class="absolute w-[40px] left-[50%] translate-x-[-50%] top-2" alt="" />
    <div class="rounded-[16px] bg-white p-8 flex flex-col w-full gap-8 h-full">
      <img src="/img/quote-up.svg" class="w-[32px]" alt="" />

      <p class="text-[#010101]">
        <slot></slot>
      </p>

      <p class="font-medium text-[#010101] mt-auto">
        <slot name="footer"></slot>
      </p>
    </div>
  </div>
</template>
