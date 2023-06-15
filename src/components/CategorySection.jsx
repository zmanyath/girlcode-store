import furnImg from '../assets/furniture.jpg'

const CategorySection = () => {
    return (
        <section class="pt-20 font-manrope">
            <div class="container mx-auto">
                <div class="mb-9">
                   <h2 class="text-2xl font-extrabold">Shop Our Top Categories</h2> 
                </div>
                <div class="grid grid-cols-6 gap-8">
                    <div class="rounded-xl overflow-hidden relative">
                        <h3 class="absolute top-3 left-1/2  text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                        <img src={furnImg} alt="Furniture Category"/>
                    </div>
                    <div class="rounded-xl overflow-hidden relative">
                        <h3 class="absolute top-3 left-1/2  text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                        <img src={furnImg} alt="Furniture Category"/>
                    </div>
                    <div class="rounded-xl overflow-hidden relative">
                        <h3 class="absolute top-3 left-1/2  text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                        <img src={furnImg} alt="Furniture Category"/>
                    </div>
                    <div class="rounded-xl overflow-hidden relative">
                        <h3 class="absolute top-3 left-1/2  text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                        <img src={furnImg} alt="Furniture Category"/>
                    </div>
                    <div class="rounded-xl overflow-hidden relative">
                        <h3 class="absolute top-3 left-1/2  text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                        <img src={furnImg} alt="Furniture Category"/>
                    </div>
                    <div class="rounded-xl overflow-hidden relative">
                        <h3 class="absolute top-3 left-1/2  text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">Furniture</h3>
                        <img src={furnImg} alt="Furniture Category"/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CategorySection