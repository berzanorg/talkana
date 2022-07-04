import Link from 'next/link'
import tailt from 'tailt'

export const TopBar = tailt.header`
    sticky top-0 z-30
    flex items-center justify-between
    h-16 px-4
    bg-[#dbfff8]
    dark:bg-[#112320]
    border-b border-b-neutral-200
    bg-opacity-70
`
export const BrandLabel = () => (
    <Link href='/'>
        <h1 className='font-bold text-2xl'>Talkana</h1>
    </Link>
)