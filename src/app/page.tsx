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
    </section>
  );
};

export default Home;
