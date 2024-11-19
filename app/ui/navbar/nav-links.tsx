'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
const links = [
    { name: 'WOMEN', href: 'products/product/1' },
    { name: 'MEN', href: 'products/product/2' },
    { name: 'TEEN', href: 'products/product/3' },

]
function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            <div className={`flex justify-between gap-1 flex-col  md:flex-row `}>
                {
                    links.map((link) => {
                        return (

                            <Link key={link.name} href={link.href} className={clsx(`hover:underline-offset-1`, { 'underline-offset-1': pathname === link.href })} >
                                < p className='hidden lg:block'> {link.name}</p >
                            </Link >


                        )
                    })
                }</div>
        </>
    )

}
export default NavLinks;