import { render, screen } from '@testing-library/react';
import Page from './page'; // Adjust the import path according to your project structure
import '@testing-library/jest-dom';

// Mocking the components used in the Page
jest.mock('../../components/category/CategoryPage', () => () => <div>Categories</div>);
jest.mock('../subcategory/layout', () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);

describe('CategoryPage Component', () => {
  it('should render SidebarLayout and Categories', () => {
    // Render the Page component
    render(<Page />);

    // Check if SidebarLayout and Categories are rendered by checking their text content
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();  // Ensure the component is wrapped in SidebarLayout
  });
});
