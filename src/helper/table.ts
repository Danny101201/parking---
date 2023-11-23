import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper<ParkingDataResponse>()

export const columns = [
  columnHelper.accessor('no', {
    header: '編號',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('district', {
    header: '行政區',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('parkingname', {
    header: '停車場名稱',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('address', {
    header: '地址',
  }),
  columnHelper.accessor('numbersOfCells', {
    header: '設置格數',
  }),
]