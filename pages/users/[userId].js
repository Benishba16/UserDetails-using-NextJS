function UserDetails({userInfo}) {
    return <div>
        <h1>{userInfo.name}</h1>
        <h2>{userInfo.email}</h2>
        <h3>{userInfo.phone}</h3>
    </div>
}

export default UserDetails

export async function getServerSideProps({params}) {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await response.json()

    return{
        props: {
            userInfo: data,
        }
    }
}
