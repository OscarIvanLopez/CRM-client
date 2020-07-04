import React, { Fragment } from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Fragment>
      <Layout>
        <h1 className="text-center text-2xl text-white font-light">Login</h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email Usuario"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Password Usuario"
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Login;
