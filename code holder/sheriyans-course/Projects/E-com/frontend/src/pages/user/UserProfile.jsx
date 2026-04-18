import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { asyncdeleteuser, asyncupdateuser } from "../../store/actions/userActions"

const UserProfile = () => {



    const { id } = useParams()
    const { usersReducer: { users } } = useSelector((state) => state)
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            username: users?.username,
            email: users?.email,
            password: users?.password,
        }
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const UpdateUserHandler = (user) => {
        dispatch(asyncupdateuser(users.id, user))
    }



    const LogoutUserHandler = () => {
        dispatch(asynclogoutuser())
        navigate("/login")

    }
    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(users.id))
        navigate("/login")

    }

    return users ? (
        <div>
            <h1 className="font-thin text-5xl text-gray-700">{users.username}</h1>
            <h1 className="font-thin text-xl text-gray-700">{users.email}</h1>
            <hr className="my-10"/>
            < form
                onSubmit={handleSubmit(UpdateUserHandler)}
                className='w-full flex flex-col  justify-start items-start'>

                <input
                    {...register("username")}
                    className='outline-0 border-b p-2 text-2xl mb-3'
                    type="text"
                    placeholder='John-Doe'
                />

                <input
                    {...register("email")}
                    className='outline-0 border-b p-2 text-2xl mb-3'
                    type="email"
                    placeholder='john@doe.com'
                />

                <input
                    {...register("password")}
                    className='outline-0 border-b p-2 text-2xl mb-3'
                    type="password"
                    placeholder='******'
                />

                <button className='mt-5 px-4 py-2 bg-blue-400 rounded'
                >Update user
                </button>

                <button
                    type="button"
                    onClick={DeleteHandler}
                    className='mt-5 px-4 py-2 bg-red-600 rounded'
                >Delete user
                </button>

                <button
                    type="button"
                    onClick={DeleteHandler}
                    className='mt-5 px-4 py-2 bg-red-400 rounded'
                >Logout user
                </button>


            </form>
        </div>
    ) : "loading"
}

export default UserProfile
