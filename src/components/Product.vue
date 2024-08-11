
<script setup>
    import { formatCurrency } from '@/helpers';
    defineProps({
        product: {
            type: Object
        }
    })

</script>

<template>
    <li class="flex items-center space-x-6 rounded border border-green-300 p-6 bg-white shadow">
        <img 
            :src="product.image" 
            :alt="product.name" 
            class="h-24 w-24"
        />
        <div class="space-y-2">
            <h3 class="text-green-600 font-bold">{{product.name}}</h3>
            <p class="font-bold">{{ formatCurrency(product.price)}}</p>
            <p class="font-bold">{{product.availability}} en Existencia</p>


        </div>
    </li>
</template>
