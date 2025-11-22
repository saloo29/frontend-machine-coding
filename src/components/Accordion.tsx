import AccordionItem from './AccordionItem'
import { useState } from 'react'

const Accordion = () => {
  const[isExpanded, setIsExpanded] = useState<number | null>(null);

  const handleToggle = (key : number) => {
    setIsExpanded((prev) => (prev === key ? null : key));
  }

  return (
    <>
      <h3 className="heading">Accordion Component</h3>
      <div className='accordion-wrapper'>
        {
          AccordionData.map((data) => (
            <AccordionItem 
              key={data.key}
              title={data.title}
              isOpen={isExpanded === data.key}
              onToggle={() => handleToggle(data.key)}
            >
              {data.children}
            </AccordionItem>
          ))
        }
      </div>
    </>
  )
}

const AccordionData = [
  { 
    key: 1,
    title: "Section 1",
    children: `Content for the first dropdown panel.
              It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`
  },
  {
    key: 2,
    title: "Section 2",
    children: `Content for the second dropdown panel.
              It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`
  },
  {
    key: 3,
    title: "Section 3",
    children: `Content for the third dropdown panel.
              It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`
  }
]


export default Accordion;