import { useParams } from "react-router-dom"

export default function User() {
    // /users/1
    const param = useParams()
    // с помощью хука получаю параметр Url строки
    console.log(param);
    return (
        <div className="one_users">
            <h1>
          Пользователь под номером {param.id}

            </h1>
        </div>
    )
}