import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import cat from '@/public/images/cat.jpg';
import { Metadata } from 'next';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className='relative h-screen'>
      {/* <Image src={cat} alt='cat' /> */}
      <Image
        src='https://bit.ly/react-cover'
        alt='cat'
        // width={300}
        // height={170}
        fill
        // style={{ objectFit: 'cover' }}
        className='object-cover'
        sizes='(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw'
        quality={100}
        priority
      />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: '...',
// };

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');

  return {
    title: 'product.title...',
    description: '...',
  };
}
