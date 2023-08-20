"use client";
interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="md:px-10 lg:px-20 sm:px-2 px-4 max-w-[2520px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
