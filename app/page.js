import Index from "@/components/Index";
import Layout from "@/layouts/layout";
import { AuthProvider } from "@/context/authContext";

export default function Home() {
  return (
    <AuthProvider>
      <Layout>
        <Index />
      </Layout>
    </AuthProvider>
  );
}
