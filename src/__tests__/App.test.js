import { render } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {

  it('renders correctly', ()=> {
    const { getByAltText,asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByAltText('nasalogo')).toHaveClass("App-image");
  })
})
