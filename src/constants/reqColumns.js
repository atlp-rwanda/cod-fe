import {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
  ReviewTrip,
} from '../components/tables/shared/reqActions';

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
    Header: 'Return Date',
    accessor: 'dateOfReturn',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: StatusPill,
    Filter: SelectColumnFilter, // new
    filter: 'includes',
  },
  {
    Header: 'Review',
    Cell: ReviewTrip,
  },
];

export { columns };
