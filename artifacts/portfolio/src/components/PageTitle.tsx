import { useEffect } from "react";

interface PageTitleProps {
  title?: string;
}

export default function PageTitle({ title = "ótomundi" }: PageTitleProps) {

  useEffect(() => {

    document.title =
      title === "ótomundi"
        ? "ótomundi"
        : `${title} | ótomundi`;

  }, [title]);

  return null;

}