import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background gap-4">
      <h1 className="text-2xl font-semibold">Welcome to Resonance AI</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
};

export default Home;
