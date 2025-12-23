import { usePageContext } from "../../hooks/usePageContext";
import { PageContentUI } from "../ui/page-content";

export default function PageContent() {
  const { children } = usePageContext();

  return <PageContentUI>{children}</PageContentUI>;
}
