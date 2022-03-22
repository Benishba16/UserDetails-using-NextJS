import Link from "next/link";

function User({ userData, detail }) {
  return (
    <div>
      <div className='flex text-left border-2 border-teal-500 rounded-xl'>
        <div className='p-3 w-1/2 font-bold  text-2xl'>Name</div>
        <div className='p-3 w-1/2 font-bold text-2xl'>Email</div>
      </div>
      {userData
        .filter(
          (data) => data.name.toLowerCase().includes(detail) || data === ""
        )
        .map((data) => (
          <Link key={data.id} href={`/users/${data.id}`} passHref>
            <div className='cursor-pointer m-1 bg-white hover:bg-slate-100 flex text-left bg-white-500 rounded-xl p-2 text-xl'>
              <div className='w-1/2'>{data.name}</div>
              <div className='w-1/2'>{data.email}</div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default User;
