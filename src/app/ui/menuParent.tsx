import { PlusCircleIcon } from '@heroicons/react/24/outline';

export default function MenuParent() {
  return (
    <div className='menu-parent pt-4'>
        
        <div className='div1 p-1 bg-gray-500'>
          <span className="inline-flex -space-x-px overflow-hidden rounded-md borde shadow-sm">
              <button
                className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-200 focus:relative"
              >
                menu 1
              </button>
            <button
              className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-200 focus:relative"
            >
              <PlusCircleIcon className="h-6 w-6 inline"/>
            </button>
          </span>
        </div>

        <div className='div2 p-1 bg-red-500 justify-self-end'>
          <span className="inline-flex flex-col overflow-hidden rounded-md borde shadow-sm">
              <button
                className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-200 focus:relative"
              >
                menu 2
              </button>
            <button
              className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-200 focus:relative"
            >
              <PlusCircleIcon className="h-6 w-6 inline"/>
            </button>
          </span>
        </div>
        <div className='div3 p-1 bg-green-400'>3</div>
      </div>
  );
}