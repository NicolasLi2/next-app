import Link from 'next/link';
import UserTable from './UserTable';
import { Suspense } from 'react';

interface Props {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({
  searchParams: { sortOrder },
}: Props) {
  return (
    <>
      <h1>Users</h1>
      <Link href='/users/new' className='btn'>
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
}
