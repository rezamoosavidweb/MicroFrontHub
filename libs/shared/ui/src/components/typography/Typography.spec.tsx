import { render } from '@testing-library/react';

import Typography from './Typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typography size="body1" weight="normal" />);
    expect(baseElement).toBeTruthy();
  });
});
