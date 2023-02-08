import React, { useEffect} from 'react'
import Containers from '../shared-elements/Containers'
// import PropTypes from 'prop-types'

const ExplorePage = props => {

  useEffect(()=> {}, [])

  return (
    <>
      <Containers containerRight_Content={null} titleSectionRight={'Explore latest'} titleSectionLeft={'Your stats'}/>
      <button onClick={()=> console.log(props.bookData)}>Click</button>
    </>
  )
}

ExplorePage.propTypes = {}

export default ExplorePage