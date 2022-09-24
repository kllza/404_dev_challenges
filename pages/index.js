import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 NOT FOUND</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>

      <p className="text-2xl font-Inconsolata ml-6 mt-5 font-bold lg:ml-16 ">
        404 NOT FOUND
      </p>
      <div className="lg:flex lg:justify-start">
        <div className="flex justify-center mt-10 lg:hidden ">
          <Image
            src="/Scarecrow.png"
            alt="404 Not Found"
            width="286.83"
            height="238"
          />
        </div>
        <div className="lg:block hidden lg:mt-40 lg:w-96 lg:ml-16 lg:h-48">
          <Image
            src="/Scarecrow.png"
            alt="404 Not Found"
            width="539"
            height="447"
          />
        </div>
        <div className="lg:mt-32 lg:ml-36">
          <p className="text-5xl font-Spacemono tracking-tighter ml-6 leading-10 font-bold mt-1 mx-11 lg:w- lg:font-mono">
            I have bad news for you
          </p>
          <p className="text-lg font-Spacemono ml-6 mt-10 text-gray lg:w-80 lg:font-normal lg:text-gray-400 lg:font-mono">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="bg-gray-800 p-6 text-sm font-Spacemono ml-6 mt-10 text-white">
            BACK TO HOME PAGE
          </button>
        </div>
      </div>
      <footer className="flex justify-center text-sm font-Montserrat font-medium leading-4 text-gray-600 mt-10 lg:mt-52">
        <a
          className="text-gray-400"
          href="https://github.com/kllza"
          target="_blank"
          rel="noreferrer">
          created by <span className="font-bold">Kllza</span> devChallenges.io
        </a>
      </footer>
    </div>
  );
}
