import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useCartStore } from './cart';

export const useCouponStore = defineStore('coupon', () => {

    const cart = useCartStore()
    const couponInput = ref('')
    const couponVAlidatiionMessage = ref('')
    const discountPorcentage = ref(0)
    const discount = ref(0)

    const VALID_COUPONS = [
        { name: '10DESCUENTO', discount: .10 },
        { name: '20DESCUENTO', discount: .20 },
    ]

    watch(discountPorcentage, () => {
        discount.value = (cart.total * discountPorcentage.value).toFixed(2)
    })

    function applyCoupon() {
        if (VALID_COUPONS.some(coupon => coupon.name === couponInput.value)) {
            couponVAlidatiionMessage.value = 'Aplicando...'

            setTimeout(() => {
                discountPorcentage.value = VALID_COUPONS.find(coupon => coupon.name === couponInput.value).discount
                couponVAlidatiionMessage.value = `Descuento ${discountPorcentage.value*100}% Aplicado`
            }, 3000);
            
        } else {
            couponVAlidatiionMessage.value = 'No existe ese cupón'
        }
        setTimeout(() => {
            couponVAlidatiionMessage.value = ''            
        }, 6000);
    }

    function $reset() {
        couponInput.value = ''
        couponVAlidatiionMessage.value = ''
        discountPorcentage.value = 0
        discount.value = 0
    }

    const isValidCoupon = computed(() => discountPorcentage.value > 0)

    return {
        couponInput,
        applyCoupon,
        $reset,
        couponVAlidatiionMessage,
        discountPorcentage,
        discount,
        isValidCoupon

    }
})