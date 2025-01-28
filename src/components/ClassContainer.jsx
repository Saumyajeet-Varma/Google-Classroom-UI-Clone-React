import Class from "./Class"
import usersData from "../utils/data"

function ClassContainer() {
    return (
        <div className="w-4/5 px-6 py-6 flex gap-6 flex-wrap overflow-y-scroll">
            {usersData.map(user => <Class user={user} key={user.id} />)}
        </div>
    )
}

export default ClassContainer
