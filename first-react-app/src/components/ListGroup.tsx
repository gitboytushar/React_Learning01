// in react a component cannot return more than one element -> to do this we use fragments in react -> use empty-angular-brackets <> to wrap-the-content

// how to do the type annotation in react
import { useState } from 'react'

function ListGroup() {
   let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
   // hook
   const [selectedIndex, setSelectedIndex] = useState(-1)

   return (
      <>
         <h1>List</h1>

         {/* to render content dynamically -> the way to use js inside react components is by using {} */}
         {/* in below code we used && instead of ? to-set-output based on condition we defined in starting as pet better approach */}
         {items.length === 0 && <p>No item found</p>}

         <ul className="list-group">
            {items.map((item, index) => (
               <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                  key={item}
                  onClick={() => {
                     setSelectedIndex(index)
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
