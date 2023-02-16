import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <div>
        <section>
          <div className="h-screen m-auto align-middle text-center bg-gray-50 text-gray-800 py-64 px-6">
            <h1 className="text-6xl font-bold tracking-tight">
              Next.js boilerplate with
              <br />
              <span className="text-blue-600">
                eslint, prettier, tailwindcss, sequelize with postgres.
              </span>
            </h1>
          </div>
        </section>
      </div>
    </Layout>
  );
}
