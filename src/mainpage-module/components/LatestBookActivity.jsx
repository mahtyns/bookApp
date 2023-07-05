
const LatestBookActivity = (props) => {
  return (
    <div>
        <div className='bookDetailsCoverImg'>
            <img alt={props.lastBook.title} src={props.lastBook.image_url} />
        </div>
        <div>
            {props.lastBook.title}
        </div>
    </div>
  )
}

export default LatestBookActivity