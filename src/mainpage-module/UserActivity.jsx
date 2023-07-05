import { useContext } from "react"
import { UserLibContext } from "../contexts/BookContext"
import LatestBookActivity from "./components/LatestBookActivity"

const UserActivity = () => {

    const { userLibrary } = useContext(UserLibContext)
    const lastBookInd = userLibrary.length - 1

    
  return (
    <div>
        <div>
              <h3>Your latest activity</h3>
        </div>
        <LatestBookActivity lastBook={userLibrary[lastBookInd]} />


    </div>
  )
}

export default UserActivity