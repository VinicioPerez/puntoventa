<script setup>
import Link from '@/components/Link.vue';

</script>

<template>
    <div>
        <Link
            to="products"
        >Volver</Link>
        <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

        <div class="flex justify-center bg-white shadow">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                
                <FormKit
                    type="form"
                    submit-label="Agregar Producto"
                >
                    <FormKit
                        type="text"
                        label="Nombre del Producto"
                        name="name"
                        placeholder="Ingrese el nombre del producto"
                        validation="required"
                        :validation-messages="{required: 'El nombre del producto es obligatorio'}"
                    />

                    <FormKit
                        type="file"
                        label="Imagen Producto"
                        name="image"
                        validation="required"
                        :validation-messages="{required: 'La imagen del producto es obligatoria'}"
                        accept=".jpg, .png"
                    />

                    <FormKit
                        type="select"
                        label="Categoria"
                        name="category"
                        validation="required"
                        :validation-messages="{required: 'La categoria del producto es obligatoria'}"
                        :options="[1,2,3,4,5]"
                    />
                    <FormKit
                        type="number"
                        label="Precio"
                        name="price"
                        placeholder="Precio del Producto"
                        validation="required"
                        :validation-messages="{required: 'El Precio del producto es obligatoria'}" 
                        min="1"
                    />
                    <FormKit
                        type="number"
                        label="Disponibles"
                        name="availabity"
                        placeholder="Cantidad disponible"
                        validation="required"
                        :validation-messages="{required: 'La cantidad es obligatoria'}" 
                        min="1"
                    />
                
                </FormKit>

            </div>
        </div>


    </div>
</template>

