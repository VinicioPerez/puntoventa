<script setup>
    import { formatCurrency } from '@/helpers';

    defineProps({
        product: {
            type: Object,
        }
    })

</script>

<template>
    <div 
        class="rounded bg-white shadow relative"
    >
        <img
            :src="product.image"
            :alt="'Imagen de ' + product.name"
        />
        <div class="p-3 space-y-3">
            <h3 class="text-xl font-black text-gray-500">{{ product.name }}</h3>
            <p class="text-gray-500">Disponibles: {{ product.availability }}</p>
            <p class="text-2xl font-extrabold text-gray-900">{{formatCurrency(product.availability) }}</p>
        </div>

        <button
            type="button"
            class="absolute top-2 right-2"
            
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="size-8 bg-green-600 hover:bg-green-700 rounded-full text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

        </button>


    </div>
</template>

