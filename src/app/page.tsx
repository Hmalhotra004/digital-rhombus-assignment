import FileUpload from "@/components/FileUpload";
import Logo from "@/components/Logo";
import Image from "next/image";

const Home = () => {
  return (
    <section className="h-full bg-clairvoyant">
      <div className="p-12 grid grid-cols-2 border-b-2 border-white">
        <main className="flex flex-col gap-y-4 justify-center items-start">
          <h1 className="text-white text-4xl font-semibold">
            Streamline Your Financial Tasks Effortlessly
          </h1>

          <h3 className="text-white text-xl">
            Managing documents shouldn&apos;t be a hassle. Streamline your
            workflow and declutter your folders with our easy and efficient
            system.
          </h3>

          <button className="p-2 bg-white rounded-md text-clairvoyant text-base">
            Get Started
          </button>
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

      <div className="flex flex-col justify-center items-center p-12 pb-16">
        <div className="m-4 mt-6">
          <Logo />
        </div>

        <main className="flex flex-col justify-center items-center gap-y-4 w-[80%]">
          <h1 className="text-white text-4xl font-semibold mt-4 text-center">
            Struggling to Manage Your Folders? Drag, Drop, and Watch Them
            Transform!
          </h1>

          <h3 className="text-white text-lg text-center">
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
