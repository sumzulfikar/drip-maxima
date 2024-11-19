import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function NavIcons() {
    return (
        <div className='flex flex-row justify-between'>
            <div>
                <SearchOutlinedIcon />
                <FavoriteBorderOutlinedIcon />
            </div>
            <div className=''>
                <ShoppingBasketOutlinedIcon />
                <span className='rounded-full bg-slate-900 px-1 py-0.5 bg-right-top text-white text-sm -translate-y-6 z-10'>0</span>
            </div>
        </div>
    )
}

export default NavIcons;