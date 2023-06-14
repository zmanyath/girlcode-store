const TopBar = () => {
    return (
        <div class="flex bg-girlcode-pink justify-between text-white m-0 font-manrope text-xs px-20 py-0.5"> 
            <div >
                <a href="tel: +27123456789"><span class="align-middle material-symbols-outlined">call</span>+27123456789</a>
            </div>
            <div class="flex">
                <p class="flex m-0 justify-between">Get 50% off on selected items  |  <a href="#">Shop Now</a></p>
            </div>
            <div class="flex">
                <ul class="m-0 p-0 list-none flex gap-6 align-middle"> 
                    <li class="align-middle">End <span class="align-middle material-symbols-outlined ">expand_more</span> </li>
                    <li class="align-middle">Location <span class="align-middle material-symbols-outlined">expand_more</span> </li>
                </ul>
            </div>
        </div>
        
        
        
    )
}

export default TopBar;