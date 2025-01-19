import FileUpload from "@/components/FileUpload";
import Logo from "@/components/Logo";
import Image from "next/image";

const Home = () => {
  return (
    <section className="bg-clairvoyant min-h-screen">
      <div className="p-12 md:grid md:grid-cols-2 border-b-2 border-white flex flex-col-reverse">
        <main className="flex flex-col gap-y-4 justify-center items-center p-10">
          <h1 className="text-white text-4xl font-semibold xl:text-5xl max-sm:text-center">
            Streamline Your Financial Tasks Effortlessly
          </h1>

          <h3 className="text-white text-xl xl:text-3xl max-sm:text-center">
            Managing documents shouldn&apos;t be a hassle. Streamline your
            workflow and declutter your folders with our easy and efficient
            system.
          </h3>

          <div className="flex md:justify-start justify-center w-full">
            <button className="p-2 bg-white rounded-md text-clairvoyant text-base items-start">
              Get Started
            </button>
          </div>
        </main>

        <article className="flex justify-center items-center">
          <Image
            src="/img.png"
            alt="img"
            height={300}
            width={300}
          />
        </article>
      </div>

      <div className="flex flex-col justify-center items-center p-12 border-b-2 border-white">
        <div className="m-4 mt-6">
          <Logo />
        </div>

        <main className="flex flex-col justify-center items-center gap-y-6 w-[80%]">
          <h1 className="text-white text-4xl font-semibold mt-4 text-center xl:text-5xl">
            Struggling to Manage Your Folders? Drag, Drop, and Watch Them
            Transform!
          </h1>

          <h3 className="text-white text-lg text-center xl:text-xl">
            &quot;Say goodbye to clutter and confusion. Our smart system
            organizes your files into neat, accessible folders in seconds.&quot;
          </h3>

          <div className="p-1 bg-white rounded-md">
            <FileUpload />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Home;
