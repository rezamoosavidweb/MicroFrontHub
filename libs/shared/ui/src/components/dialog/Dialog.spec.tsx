import { render } from '@testing-library/react';

import Dialog from './Dialog';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dialog open={true} onClose={() => console.log('lose')}>
        <div>Dialog</div>
      </Dialog>
    );
    expect(baseElement).toBeTruthy();
  });
});
