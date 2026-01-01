import { FC, lazy, Suspense } from "react";

import { Preloader } from "../ui/preloader/preloader.tsx";
import { PageProvider } from "./page-provider.tsx";
import { SEO } from "../seo";
import { Layout } from "../../layouts/layout";

import { TPageProps } from "./type.ts";

const PageContent = lazy(() => import("../page-content/page-content.tsx"));

export const Page: FC<TPageProps> = ({ seo, children, layout }) => {
  const pageContextValue = {
    seo,
    children,
    layout,
  };

  return (
    <Suspense fallback={<Preloader />}>
      <PageProvider value={pageContextValue}>
        <SEO />
        <Layout>
          <PageContent />
        </Layout>
      </PageProvider>
    </Suspense>
  );
};
