import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';

test('calls onFilterChange when a filter option is selected', () => {
    const onFilterChange = jest.fn();
    render(<Filter onFilterChange={onFilterChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'true' } });
    expect(onFilterChange).toHaveBeenCalledWith('true');
});
