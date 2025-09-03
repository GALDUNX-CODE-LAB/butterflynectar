import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardCard2 from "@/components/dashboard/dashboardCard2";
import ClubIvyDetails from "@/components/home/ClubIvy";
import Explore from "@/components/home/Explore";
import Faqs from "@/components/home/Faqs";
import FlightWidget from "@/components/home/FlightWidget";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Header from "@/components/home/HomeHeader";
import InstantBooking from "@/components/home/InstantBooking";
import Review from "@/components/home/Reviews";
import SocialMediaFeed from "@/components/home/SocialMediaFeed";
import PostsTable from "@/components/post/PostsTable";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <InstantBooking />
      <ClubIvyDetails />
      <Explore />
      <FlightWidget />
      <SocialMediaFeed />
      <Review />
      <Faqs />
      <Footer />
    </div>
  );
}
