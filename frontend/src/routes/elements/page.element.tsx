import { useEffect } from "react";

import { IRoute } from "@/@types/routes";
import { DocumentUtils } from "@/utils/document";

import PageTransition from "@/components/PageTransition";

export default function PageElement({ route }: { route: IRoute }) {
  const { header, hideTransition, element: Element } = route;

  useEffect(() => {
    DocumentUtils.setWindowTitle(`Energy Gen. | ${header}`);
  }, [header]);

  return (
    <PageTransition hideTransition={hideTransition}>
      <Element />
    </PageTransition>
  );
}
