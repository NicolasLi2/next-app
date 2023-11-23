'use client';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import cat from '@/public/images/cat.jpg';
import { Metadata } from 'next';
// import HeavyComponent from './components/HeavyComponent';
import { useState } from 'react';
import dynamic from 'next/dynamic';
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   // set server side rendering to false
//   // when using browser API, set to false to avoid error
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// import _ from 'lodash';

export default function Home() {
  // const [isVisible, setIsVisible] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    <main className='relative h-screen'>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Sort
      </button>
      {/* <button onClick={() => setIsVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}
      {/* <Image src={cat} alt='cat' /> */}
      {/* <Image
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
      /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: '...',
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title...',
//     description: '...',
//   };
// }
