import { createLazyFileRoute } from "@tanstack/react-router";
import { PDFViewer, Document } from "@react-pdf/renderer";
import { twJoin } from "tailwind-merge";
import Resume from "../components/doc/Resume";
import { StylesContext, styles } from "../styles";

export const Route = createLazyFileRoute("/portrait")({
  component: Page,
});

function Page() {
  return (
    <div
      className={twJoin(
        "min-h-screen min-w-full",
        "flex flex-col justify-center items-stretch",
        "bg-gray-100"
      )}
    >
      <PDFViewer style={{ flex: 1 }}>
        <Document
          author="Li Ruochen"
          keywords="lirc572, resume"
          subject="The resume of Li Ruochen"
          title="Resume"
        >
          <StylesContext.Provider value={styles}>
            <Resume size="A4" />
          </StylesContext.Provider>
        </Document>
      </PDFViewer>
    </div>
  );
}
