<script setup>
    import CouponForm from './CouponForm.vue';
    import ShoppingCartItem from './ShoppingCartItem.vue';
    import Amount from './Amount.vue';
    import { useCartStore } from '@/stores/cart';
    import { useCouponStore } from '@/stores/coupons';
    import { formatCurrency } from '@/helpers';

    const cart = useCartStore()
    const coupon = useCouponStore()
        
</script>

<template>
    <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">El Carrito esta vacio</p>
    
    <div v-else>
        <p class="text-4xl fontbold text-gray-900">Resumen de Venta</p>
        <ul
            role="list"
            class="mt-6 divide-y divide-green-300 border-t border-b border-green-300"
        >
            <ShoppingCartItem
                v-for="item in cart.items"
                :key="item.id"
                :item="item"            
            />

        </ul>

        <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
            <Amount>
                <template #label>Subtotal:</template>
                {{ formatCurrency(cart.subtotal) }}
            </Amount>
            <Amount v-if="coupon.isValidCoupon">
                <template #label>Descuento:</template>
                {{ formatCurrency(coupon.discount) }}
            </Amount>
            <Amount>
                <template #label>Impuestos:</template>
                {{ formatCurrency(cart.taxes) }}
            </Amount>
            <Amount>
                <template #label>Total a Pagar:</template>
                {{ formatCurrency(cart.total    ) }}
            </Amount>

        </dl>

        <CouponForm />

    </div>
</template>

