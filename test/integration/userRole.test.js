import React from 'react';
import '@testing-library/jest-dom';
import { within } from '@testing-library/dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../jest.setup';
import UserRoleDashboard from '../../src/components/superAdmin/UserRoleDashboard';

const users = {
  userDetails: [
    {
      id: 'b66cfc7c-be2c-41f5-b459-e888bfe881a1',
      firstname: 'Demo',
      lastname: 'User',
      email: 'demouser@cod.be',
      isVerified: true,
      rolename: { roleName: 'Requester' },
    },
    {
      id: 'b66cfc7c-be2c-41f5-b459-e888bfe881a2',
      firstname: 'Demo',
      lastname: 'User2',
      email: 'demouser2@cod.be',
      isVerified: false,
      rolename: { roleName: 'Requester' },
    },
  ],
};

describe('Fetch All Users As Super Admin', () => {
  test('Super Admin Can Retrieve All Users', async () => {
    render(<UserRoleDashboard userDetails={users} />);
    expect(screen.getByTestId('userRole_dash_header')).toBeInTheDocument();
    expect(screen.getByTestId('userRole_dash_content')).toBeInTheDocument();
    expect(screen.getByTestId(`test-${users.userDetails[0].id}`)).toBeInTheDocument();
    expect(screen.getByTestId(`test-${users.userDetails[1].id}`)).toBeInTheDocument();
    const activeSetRoleBtn = screen.getByTestId(`setRole_btn-${users.userDetails[0].id}`);
    const disabledSetRoleBtn = screen.getByTestId(`setRole_btn-${users.userDetails[1].id}`);
    expect(activeSetRoleBtn).toBeInTheDocument();
    expect(disabledSetRoleBtn).toBeInTheDocument();
    expect(disabledSetRoleBtn).toBeDisabled();
    userEvent.click(activeSetRoleBtn);
    await waitFor(() => {
      const view = screen.getByTestId('userRole_assign_dash');

      expect(within(view).getByText(/first name/i)).toBeInTheDocument();
      expect(within(view).getByText(/last name/i)).toBeInTheDocument();
      expect(within(view).getByText(/email address/i)).toBeInTheDocument();
      expect(within(view).getByText(/last name/i)).toBeInTheDocument();
      const assignRoleBtn = screen.getByRole('button', { name: /assign role/i });
      expect(assignRoleBtn).toBeInTheDocument();
    });
  });
});
