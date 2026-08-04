import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  const location = useLocation();

  useEffect(() => {
    // Sets the title to "Page Name | ótomundi"
    document.title = `${title} | ótomundi`;
  }, [location, title]);

  return null; // Renders nothing visible
};

export default PageTitle;   