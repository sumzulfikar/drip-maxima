'use client'
import SearchIcon from '@mui/icons-material/Search';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../navbar/navbar.module.css'
function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div >
                        <CurrencyPoundIcon />
                    </div>
                    <div > <span>GBP</span></div>
                </div>
                <div className={styles.center}>
                    <Link key={1} href={'/'}>Drip Maxima</Link></div>
                <div className={styles.right}>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div><ShoppingCartOutlinedIcon /> <span className=' absolute flex align-middle justify-center backdrop:bg-lime-100'>0</span></div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;