import { OrganizationList } from "@clerk/nextjs";

const OrgSelectionPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/dashboard"
        afterSelectOrganizationUrl="/dashboard"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
};

export default OrgSelectionPage;
