import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Chat() {
  const { data: session } = useSession()

  if (!session) {
    return <p>Access Denied</p>
  }

  return (
    <Layout>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Chat Room</h2>
          <div className="mt-5">
            <p>Chat interface will be implemented here.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
