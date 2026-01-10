import { usePageContext } from "../../hooks/contexts/usePageContext";
import { PageContentUI } from "../ui/page-content";

export default function PageContent() {
  const { children } = usePageContext();

  return <PageContentUI>{children}</PageContentUI>;
}
