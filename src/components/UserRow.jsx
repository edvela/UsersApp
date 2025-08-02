export const USerRow = ({id, username, email}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button className="btn btn-warning btn-sm" type="button">Editar</button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" type="button">Eliminar</button>
            </td>
        </tr>
    )
}