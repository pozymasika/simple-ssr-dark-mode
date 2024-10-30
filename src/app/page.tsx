import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <section className="flex flex-col p-5 h-screen w-screen bg-white dark:bg-black dark:text-white text-black">
      <h1 className="my-4 text-4xl">Hello World!</h1>
      <MainContent />
    </section>
  );
}
