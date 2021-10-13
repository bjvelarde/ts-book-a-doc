import { render } from '@testing-library/react';
import { Provider } from '../context';
import { Formik} from 'formik';

const renderWithContext = (ui: any, options?: any) => render(ui, { wrapper: Provider, ...options });

const rwf = (ui: any, options?: any) => render(ui, { wrapper: Formik, ...options });

export const renderWithFormik = (ui: any, options?: any) => rwf(ui, { wrapper: Provider, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
