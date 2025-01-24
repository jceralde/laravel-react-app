const NavigationListItem = ({ navDescription }: { navDescription: string }) => {
  return (
    <a
      href={`#${navDescription}`}
      className="group flex items-center gap-x-4 text-xs font-semibold"
    >
      <div className="w-8 border-t border-t-gray-500 duration-100 group-hover:w-16 group-hover:border-t-white group-hover:transition-all"></div>
      <span className="uppercase tracking-widest text-gray-400 group-hover:text-white">
        {navDescription}
      </span>
    </a>
  )
}

export default NavigationListItem
