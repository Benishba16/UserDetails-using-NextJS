function UserDetails({ userInfo }) {
  return (
    <div>
        {/* <div class="flex flex-col justify-center items-center"> */}
      <div class='m-5 border border-red-500 flex flex-col justify-center items-center rounded overflow-hidden shadow-lg w-1/2 p-5'>
        <div className='text-center'>
          <p className='text-teal-500 font-bold text-5xl'>{userInfo.name}</p>
          <p className='font-bold text-xl'>{userInfo.company.name}</p>
          <div className="border border-red-500 block">
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
            <p>{userInfo.phone}</p>
          </div>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <p>{userInfo.email}</p>
          </div>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <p>
              {userInfo.address.street}, {userInfo.address.city}
            </p>
          </div>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
              />
            </svg>
            <p>{userInfo.website}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await response.json();

  return {
    props: {
      userInfo: data,
    },
  };
}
