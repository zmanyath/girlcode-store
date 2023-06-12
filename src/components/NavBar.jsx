const NavBar = () => {
    return (
        <div className="navBar">
            <div className="cart">
               </div> 
            <div className="bar-pages">
                <ul className="list">
                    <li>Category <span class="align-middle material-symbols-outlined ">expand_more</span></li>
                    <li>Deals</li>
                    <li>What's New</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className="flex border rounded">
                
                <input
                    type="text"
                    className="block w-full px-4 py-2 border rounded-md "
                    placeholder="Search..."
                    
                />

                <span class="material-symbols-outlined">search</span>
            </div>
            <div className="account">
                <a href="#"><span class="material-symbols-outlined">person</span>Cart</a>
            </div>
            <div className="cart">
                <a href="#"><span class="material-symbols-outlined">add_shopping_cart</span>Cart</a>
            </div>
        </div>


    )
} 

export default NavBar;