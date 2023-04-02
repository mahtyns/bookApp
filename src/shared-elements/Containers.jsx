import '../styles/MainStyles.css'
import useMedia from '../hooks/useMedia'
import PropTypes from 'prop-types'
import Texts from './Texts'

const Containers = props => {

  const changeContainers = useMedia("(min-width: 1300px)")

  return (
    <div className='containersMain'>
      {changeContainers ? (
        <div className="containersLeft">
          <Texts textContent={props.titleSectionLeft} textSize={'xlarge'} fontStyle={'decorFont'} />
          {props.containerLeft_Content}
        </div>
      ) : null}
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