import Texts from "../../shared-elements/Texts"
import Button from "../../shared-elements/Button"

const AddBookPopup = (props) => {
    return (
        <div className='addLibPopupContainer'>
            <div>
                <Texts
                    textContent={props.book.title}
                    textSize={'medium'}
                    textWeight={'boldText'}/>
                <Texts textContent={'Choose the book status:'} textSize={'medium'}/>
            </div>
            <select id="book-status" onChange={props.handleStatusSelect}>
                <option value={'reading'}>Currently reading</option>
                <option value={'read'}>Already read</option>
                <option value={'wtr'}>Want to read</option>
            </select>
            <div className="addLibPopupCTAs">
                <Button
                    buttonText={'Add'}
                    buttonSize={'small'}
                    buttonColor={'confirm'}
                    handleClick={() => props.addBookToLibrary(props.book)}/>
                <Button
                    buttonText={'Cancel'}
                    buttonSize={'small'}
                    buttonColor={'inactive'}
                    handleClick={() => props.setPopupOpen(false)}/>
            </div>
        </div>
    )
}

export default AddBookPopup