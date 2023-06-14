import logo from '../assets/girlcode-icon.jpg'

const NavBar = () => {
    return (
        <div class="nav-bar py-3">
            <div class="container mx-auto flex justify-between font-manrope text-base font-semibold items-center align-middle">
                <a href="#" class="w-32 block">
                        <img src={logo} alt="Girlcode Store Logo">
                            
                        </img>                
                </a> 
                <div class="flex">
                    <ul class="flex m-0 justify-between list-none gap-6">
                        <li class="align-middle">Category <span class="align-middle material-symbols-outlined ">expand_more</span></li>
                        <li class="align-middle">Deals</li>
                        <li class="align-middle">What's New</li>
                        <li class="align-middle">Delivery</li>
                    </ul>
                </div>
                <div className="flex gap-6 items-center">
                    <form class="bg-gray-200 w-fit py-1.5 px-4 rounded-full">
                        <input type="text" name="search" placeholder="Search Products" class="bg-transparent border-none align-middle rounded-3xl" />
                        <button>
                            <span class="material-symbols-outlined align-middle">search</span>
                        </button>
                    </form>
                </div>
                    <a href="#"><span class="align-middle material-symbols-outlined">person</span>Account</a>
                    <a href="#"><span class="align-middle material-symbols-outlined">add_shopping_cart</span>Cart</a>
            </div>
        </div>

    )
} 

export default NavBar;