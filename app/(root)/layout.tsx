import LeftSidebar from "@/components/ui/LeftSidebar";
import RightSidebar from "@/components/ui/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex bg-black-3">
            <LeftSidebar />

            <section className="border-2 border-red-500 flex min-h-screen
             flex-1 flex-col px-4 sm:px-14">
              <div>
                <div>
                  {/* <Image /> */}
                  MobileNav
                </div>
                <div>
                  Toaster (Notification Popups)
                  {children}
                </div>
              </div>
            </section>

           <RightSidebar />
        </main>
    </div>
  );
}
