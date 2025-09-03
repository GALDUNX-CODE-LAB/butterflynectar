import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardCard2 from "@/components/dashboard/dashboardCard2";
import PostsTable from "@/components/post/PostsTable";

export default function Dashboard() {
  return (
    <div className="transition-all transform ease-in-out duration-500 delay-700">
      <h1 className="text-2xl lg:text-4xl font-bold font-Ruska mb-7">HEY THERE, SHERIFF</h1>
      <div className="flex flex-col gap-5">
        <DashboardCard />
        <DashboardCard2 />
        <PostsTable />
      </div>
    </div>
  );
}
