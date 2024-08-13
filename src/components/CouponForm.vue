<script setup>
import { useCouponStore } from '@/stores/coupons';

const store = useCouponStore()

</script>

<template>
    <p class="mt-5 py-5 font-bold border-t border-green-300">¿Tienes un Cupón?</p>
    <div class="flex">
        <input 
            type="text" 
            placeholder="Ingrese su código de cupon" 
            class="p-2 bg-white border-green-400 
            rounded-l-lg w-full "
            v-model="store.couponInput"
        >
        <button 
            type="button"
            class="p-3 bg-green-400 focus:ring-green-500 
            hover:bg-green-500 text-white font-bold 
            py-2 px-4 rounded-r-lg disabled:opacity-30"
            @click="store.applyCoupon"
            :disabled="store.isValidCoupon"
        >Canjear</button>
    </div>

    <p
        class="py-2 text-center text-sm font-extrabold "
    >{{ store.couponVAlidatiionMessage }}</p>
</template>

