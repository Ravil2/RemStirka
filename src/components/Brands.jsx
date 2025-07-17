export default function Brands() {
  const brands = ['Samsung', 'LG', 'Bosch', 'Whirlpool', 'Electrolux']

  return (
    <section
      className="border-t-2 border-b-2 border-gray-300 py-8 md:py-12"
      aria-label="Популярные бренды стиральных машин"
    >
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        <h2 className="sr-only">Мы ремонтируем технику следующих брендов</h2>
        <ul
          className="flex flex-wrap justify-center md:justify-between gap-3 md:gap-6"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {brands.map((brand, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="cursor-pointer"
            >
              <span
                itemProp="name"
                className="bg-black text-white px-4 py-2 rounded-md font-bold hover:bg-gray-800 transition-colors duration-200 text-sm md:text-xl whitespace-nowrap"
              >
                {brand}
              </span>
              <meta itemProp="position" content={index + 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
