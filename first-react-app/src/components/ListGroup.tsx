// in react a component cannot return more than one element -> to do this we use fragments in react -> use empty-angular-brackets <> to wrap-the-content

// how to do the type annotation in react
import { useState } from 'react'

interface Props {
   items: string[]
   heading: string
   onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
   // hook
   const [selectedIndex, setSelectedIndex] = useState(-1)

   return (
      <>
         <h1>{heading}</h1>
         {items.length === 0 && <p>No item found</p>}

         <ul className='list-group'>
            {items.map((item, index) => (
               <li
                  className={
                     selectedIndex === index
                        ? 'list-group-item active'
                        : 'list-group-item'
                  }
                  key={item}
                  onClick={() => {
                     setSelectedIndex(index)
                     onSelectItem(item)
                  }}
               >
                  {item}
               </li>
            ))}
         </ul>
      </>
   )
}

export default ListGroup
