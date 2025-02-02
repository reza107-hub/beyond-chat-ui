"use client";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex flex-col gap-4 items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
