import React, { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  // hook de routing
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>CRM - client administrator</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossorigin="anonymous"
        />

        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      {router.pathname === "/login" || router.pathname === "/nuevaCuenta" ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>
          {children}
          </div>
        </div>
      ) : (
        <div className="bg-gray-200 min-h-screen">
          <div className="flex min-h-screen">
            <Sidebar />

            <main className="sm:w-2/3 xl:w-4/5 sm: min-h-screen p-5">
              {children}
            </main>
          </div>
        </div>
      )}
    </Fragment>
  );
};
//commit

export default Layout;
