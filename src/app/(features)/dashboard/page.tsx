import PageHeader from "@/components/page-header";
import DashboardHero from "./_components/hero";
import DashboardHeader from "./_components/header";
import TextInputPanel from "./_components/text-input-panel";
import QuickActionsPanel from "./_components/quick-actions-panel";

const DashboardPage = async () => {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <DashboardHero />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
};

export default DashboardPage;
