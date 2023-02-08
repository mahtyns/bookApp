import React from 'react'
import '../styles/MainStyles.css'

import PropTypes from 'prop-types'
import Texts from './Texts'

const Containers = props => {
  return (
    <div className='containersMain'>
        <div className="containersLeft">
          <Texts textContent={props.titleSectionLeft} textSize={'xlarge'} fontStyle={'decorFont'} />
            {props.containerLeft_Content}
        </div>
        <div className="containersRight">
              <Texts textContent={props.titleSectionRight} textSize={'xlarge'} fontStyle={'decorFont'}/>
              {props.containerRight_Content}
        </div>

    </div>
  )
}

Containers.propTypes = {
    containerLeft_Content: PropTypes.object,
    containerRight_Content: PropTypes.object,

}

export default Containers