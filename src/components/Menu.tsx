import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { type FC, useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import Select from 'react-select'
import { capitalize, selectOptions } from 'src/utils/helpers'
import { trpc } from 'src/utils/trpc'

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const { data: menuItems } = trpc.menu.getMenuItems.useQuery()
  const [filter, setFilter] = useState<undefined | string>('')

  const filteredMenuItems = menuItems?.filter((menuItem) => {
    if (!filter) return true
    return menuItem.categories.includes(filter)
  })

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex w-full justify-between'>
          <h2 className='flex items-center gap-4 text-2xl font-bold tracking-tight text-gray-900'>
            On our menu
          </h2>
          <Select
            onChange={(e) => {
              if (e?.value === 'all') setFilter(undefined)
              else setFilter(e?.value)
            }}
            className='border-none outline-none'
            placeholder='Filter by...'
            options={selectOptions}
          />
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {filteredMenuItems?.map((menuItem) => (
            <div key={menuItem.id} className='group relative'>
              <div className='min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 lg:h-80'>
                <Image
                  src={menuItem.url}
                  alt={menuItem.name}
                  width={200}
                  height={200}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <p>{menuItem.name}</p>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    {menuItem.categories.map((c) => capitalize(c)).join(', ')}
                  </p>
                </div>
                <p className='text-sm font-medium text-gray-900'>${menuItem.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
