import { useState } from 'react'

import resource from './data.json'
import { useStateParams } from './hooks/useStateParams'
import { TableComponent } from './components/Table'
import { columns } from './helper/table'
function App() {
  const [data] = useState<ParkingDataResponse[]>(resource as ParkingDataResponse[])
  const [pageSize, setPageSize] = useStateParams(
    'pageSize',
    10,
    (data) => data.toString(),
    (data) => (!Number.isNaN(data)) ? Number(data) : 10
  )

  return (
    <div>
      <TableComponent
        columns={columns}
        data={data}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />
    </div>
  )
}

export default App
