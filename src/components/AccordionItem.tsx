import AngleDown from '../assets/angle-down.svg?react'
import AngleUp from '../assets/angle-up.svg?react'
import type { AccordionItemProps } from '../utils/types'

const AccordionItem = ({ title, children, isOpen, onToggle } : AccordionItemProps) =>{

  return(
    <>
      <div 
        className="accordion-header" 
        onClick={onToggle}
      >
        <h4 className="accordion-title">{title}</h4>
        {isOpen ? 
          <AngleUp className='angle-down-svg'/> : 
          <AngleDown className='angle-down-svg'/>
        }
      </div>
      {isOpen && 
        <div className='accordion-content'>
          {children}
        </div>
      }
    </>
  )
}

export default AccordionItem;