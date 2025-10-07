export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-4xl md:text-6xl font-playfair text-primary mb-4">
        Make Men See and Become
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Helping people see clearly, build boldly, and live purposefully — in faith, work, and life.
      </p>
      <a
        href="/media"
        className="bg-accent text-white px-6 py-3 rounded-xl shadow hover:bg-amber-500 transition"
      >
        Discover My Work
      </a>
    </div>
  );
}
