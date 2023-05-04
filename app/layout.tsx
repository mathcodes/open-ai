import ClientProvider from "../components/ClientProvider";
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <body className="">
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* Sidebar */}
              <div className="bg-gradient-to-r border-r border-[#fefecb]
              from-[#000e2d] to-[#092059] md:min-w-[20rem] max-w-xs overflow-y-auto h-screen">
  <SideBar />
</div>


              <ClientProvider />

              {/* Content */}
              <div className="bg-[#061b51] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
