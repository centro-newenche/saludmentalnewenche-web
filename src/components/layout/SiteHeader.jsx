import { FaBars, FaBrain, FaEnvelope} from 'react-icons/fa'

export default function SiteHeader({ isScrolled, menuOpen, onToggleMenu, onCloseMenu}){
    return (
        <>
            <header className={`fixed left-0 top-0 z-50 w-full px-6 py-3 backdrop-blur-xl transition-all duration-300 ${isScrolled ? 'border-b border-sky-200 bg-white/90 shadow-md shadow-sky-100/60' : 'border-b border-transparent bg-white/70'}`}>
                <div className='mx-auto flex w-full max-w-6xl items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 shadow-md shadow-sky-200'>
                            <FaBrain className='text-white'/>
                        </div>
                        <span className='text-lg font-semibold tracking-wide text-slate-800'>Salud Mental Newenche</span>
                    </div>

                    <nav className='hidden items-center gap-6 text-sm text-slate-500 md:flex'>
                        <a href='#features' className='transition hover:text-sky-500'>Caracteristicas</a>
                        <a href='#pricing' className='transition hover:text-sky-500'>Precios</a>
                        <a href='#about' className='transition hover:text-sky-500'>Quienes somos</a>
                        <a href='#faq' className='transition hover:text-sky-500'>FAQ</a>
                    </nav>

                    <button onClick={onToggleMenu} className='mr-2 cursor-pointer rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 transition hover:border-sky-400 hover:text-sky-500 md:hidden'>
                        <span className='flex items-center gap-2'>
                            <FaBars />
                            Menu
                        </span>
                    </button>

                    <button className='hidden cursor-pointer rounded-lg bg-sky-500 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-sky-200 transition hover:bg-sky-400 md:inline-flex md:items-center md:gap-2'>
                        <FaEnvelope />
                        Agenda tu consulta
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className='fixed left-0 top-[57px] z-40 w-full border-b border-sky-100 bg-white/95 p-4 shadow-lg shadow-sky-100/40 backdrop-blur-xl md:hidden'>
                    <div className='mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500'>
                        <a href="#features" onClick={onCloseMenu} className='transition hover:text-sky-500'>Características</a>
                        <a href="#pricing" onClick={onCloseMenu} className='transition hover:text-sky-500'>Precios</a>
                        <a href="#about" onClick={onCloseMenu} className='transition hover:text-sky-500'>Quienes somos</a>
                        <a href="#faq" onClick={onCloseMenu} className='transition hover:text-sky-500'>FAQ</a>
                        <button onClick={onCloseMenu} className='mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white shadow-sm shadow-sky-200'>
                            <FaEnvelope />
                            Agenda tu consulta
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
