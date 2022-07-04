import Link from 'next/link'
import tailt from 'tailt'

export const TopBar = tailt.header`
    sticky top-0 z-30
    flex items-center justify-between
    h-16 px-4
    bg-white
    dark:bg-[#152b27]
    bg-opacity-70
`
export const BrandLabel = () => (
    <Link href='/'>
        <h1 className='font-bold text-2xl'>Talkana</h1>
    </Link>
)