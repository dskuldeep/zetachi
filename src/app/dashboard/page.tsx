import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

async function Page() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    return <div>{user ? user.email : "User not found"}</div>
}

export default Page