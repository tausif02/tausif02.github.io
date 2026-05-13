import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SocialBar from "../components/SocialBar";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <SocialBar />

      <main className="px-4 pb-10 pt-28 sm:px-6 lg:px-10">
        <Outlet />
      </main>
    </div>
  );
}
