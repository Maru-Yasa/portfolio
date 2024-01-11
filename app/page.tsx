import CopyEmail from '@/components/copy-email';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Particles from '@/components/particles';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



export default function Home() {

  return (
    <div className="antialiased">
      <Navbar />

      <main className="flex flex-col min-h-screen overflow-hidden relative">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <div className="px-7 md:px-16 lg:px-24 relative pt-24 flex flex-col items-center">
          <div className="w-[550px] aspect-square block absolute blur-3xl opacity-10 bg-gradient-to-br animate-spin-slow from-primary to-orange-600 rounded-full -left-56 -bottom-64 -z-[20]"></div>
          <div className="w-[550px] aspect-square block absolute blur-3xl opacity-10 bg-gradient-to-br animate-spin-slow from-primary to-orange-600 rounded-full -right-56 -top-64 -z-[20]"></div>
          <div className="md:pt-24 flex flex-col md:flex-row items-center gap-8" id="about">
            <div className="relative">
              <img src="/assets/me.png" className="aspect-square rounded-full w-64" alt="" />
            </div>
            <div>
              <h3 className="text-4xl font-semibold leading-snug">
                Hello There 👋
                <br />
                I'm{" "}
                <span className="relative">
                  Ma'ruf
                  <img src="/assets/underline-1.svg" className="w-32 absolute right-0 -bottom-1 fill-primary" alt="" />
                </span>
                <br />
                Full Stack Web <span className="relative">
                  Developer
                  <img src="/assets/smile.svg" className="w-16 absolute -right-9 -bottom-[2.7rem] fill-primary" alt="" />
                </span>
              </h3>
              <CopyEmail />
            </div>
          </div>
          <div className="">

          </div>
          <div className="pt-9 relative">
            <img src="/assets/arrow-2.svg" className="w-16 absolute -left-[3.7rem] bottom-[7rem]" alt="" />
            <p className="text-justify md:w-[45rem]">
              Hello, my name is Muhammad Ma'ruf Ilyasa. I'm a Full Stack Web Developer Enthusiast. I'm currently studying software engineering. I like technologies that's why I'm choosing software engineering as my major. Web technologies is my favorite subject, espicially at back-end, but i would like to create front-end too.
              <br />
            </p>
            <p className="text-justify md:w-[45rem] pt-7">
              I possess strong skills in various areas that are essential for modern software development. I am familiar with the concepts of REST API and proficient in building REST APIs using Node.js and PHP (specifically Laravel). Additionally, I have a comprehensive understanding of different types of databases, including SQL databases such as MySQL and PostgreSQL, as well as NoSQL databases like MongoDB.
            </p>
          </div>
        </div>

        <div className="px-7 md:px-16 lg:px-64 relative flex flex-col items-center py-16">
          <div className="bg-gradient-to-tl overflow-hidden from-primary to-purple-700 w-full rounded-xl p-7 flex flex-col items-center gap-7 relative z-10 md:w-[45rem]">
            <div className="rounded-full aspect-square w-[500px] -z-[15] bg-white shadow-2xl bg-opacity-25 -left-20 absolute"></div>
            <div className="rounded-full aspect-square w-[500px] -z-10 bg-white bg-opacity-25 shadow-2xl -top-[20rem] -right-[20rem] absolute"></div>
            <h2 className="text-center text-2xl font-bold">Explore My Work <br /> Let's Create Something Incredible Together</h2>
            <Button size={'lg'} className="bg-white text-primary font-bold" asChild>
              <Link href={'/reachme'}>
                Reach Me
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
