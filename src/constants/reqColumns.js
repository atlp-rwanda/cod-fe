/* eslint-disable import/prefer-default-export */
import React from 'react';
import { AvatarCell, SelectColumnFilter, StatusPill } from '../components/tables/shared/reqActions';

const columns = [
  {
    Header: 'Trip Details',
    accessor: 'Accomodation.name',
    Cell: AvatarCell,
    imgAccessor: 'imgUrl',
    emailAccessor: 'email',
  },
  {
    Header: 'Destination',
    accessor: 'destination',
  },
  {
    Header: 'Departure',
    accessor: 'departure',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: StatusPill,
    Filter: SelectColumnFilter, // new
    filter: 'includes',
  },
];

export { columns };
