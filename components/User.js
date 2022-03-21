import Link from "next/link"

function User({ userData, detail }) {
    return <div>
        <h1>User</h1>
        {
            userData.filter((data) => data.name.toLowerCase().includes(detail) || data === "" )
            // userData
            .map((data) => (
                <div key={data.id}>
                    <Link href={`/users/${data.id}`}>
                    <p>{data.name}</p>
                    </Link>
                </div>
            ))
        }
    </div>
}

export default User