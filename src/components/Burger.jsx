export default function Burger({ open, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={open ? 'Закрыть главное меню' : 'Открыть главное меню'}
      aria-expanded={open}
      aria-controls="main-navigation"
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
    >
      <span
        className={`h-[2px] w-6 bg-black transition-transform ${
          open ? 'rotate-45 translate-y-[6px]' : ''
        }`}
      />
      <span
        className={`h-[2px] w-6 bg-black transition-opacity ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`h-[2px] w-6 bg-black transition-transform ${
          open ? '-rotate-45 -translate-y-[6px]' : ''
        }`}
      />
    </button>
  )
}
