import { USerRow } from "./UserRow"

export const UsersList = ({ users }) => {
    return (
        <>
            <p>Tabla</p>
            <table className="table table-hover table-stripped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            ({id, username, email}) => (
                                <USerRow 
                                key={id} 
                                id={id} 
                                username= {username} 
                                email={email} />
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    )
}