
<script setup>
    import { storeToRefs } from 'pinia';
    import MainNav from '@/components/MainNav.vue';
    import ProductCard from '@/components/ProductCard.vue';
    import { useProductsStore } from '@/stores/products';

    const products = useProductsStore()
    const { filteredProductos, noResults} = storeToRefs(products)

</script>

<template>  
    <MainNav />
    
    <main class="pt-20 lg:flex lg:h-screen lg:overflow-y-hidden">
        <div class="lg:w-2/3 lg:screen lg:overflow-y-scroll py-24 px-10">
            <p v-if="noResults" class="text-center text-4xl">No hay Prodcutos</p>

            <div
                v-else
                class="grid gird-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5"
            >
                <ProductCard
                    v-for="product in filteredProductos"
                    :key="product.id"
                    :product="product"
                />

            </div>
        </div>

        <aside class="lg:w-1/3 lg:screen lg:overflow-y-scroll pt-16 pb-32 px-10">
            <p>Carrito Aquí</p>
        </aside>
    </main>
</template>
