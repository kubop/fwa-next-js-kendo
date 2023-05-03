import { useState } from "react"
import { Grid, GridColumn, GridDataStateChangeEvent, GridExpandChangeEvent, GridFilterChangeEvent, GridSortChangeEvent } from "@progress/kendo-react-grid"

import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { User } from "../../../ts-types/types"

import React from "react" 
React.useLayoutEffect = React.useEffect 

import { CompositeFilterDescriptor, process as _process, SortDescriptor, State, DataResult } from "@progress/kendo-data-query"

export const getServerSideProps: GetServerSideProps<{users: User[]}> = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_PATH_USER)
    const users: User[] = await res.json()
  
    return {
      props: {
        users,
      },
    }
}

export default function Kendo({ users }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [dataState, setDataState] = useState<State>({})
  const [dataResult, setDataResult] = useState<DataResult>(_process(users, dataState))

  const dataStateChange = (event: GridDataStateChangeEvent) => {
    setDataResult(_process(users, event.dataState))
    setDataState(event.dataState)
  }

  const expandChange = (event: GridExpandChangeEvent) => {
    const isExpanded =
        event.dataItem.expanded === undefined ?
            event.dataItem.aggregates : event.dataItem.expanded
    
    event.dataItem.expanded = !isExpanded

    setDataResult({...dataResult, data: [...dataResult.data]})
  }

  return (
      <Grid 
        style={{ maxHeight: "calc(100vh - 60px)"}}
        data={dataResult}
        {...dataState}
        onDataStateChange={dataStateChange}
        
        sortable
        filterable
        reorderable
        groupable

        expandField="expanded"
        onExpandChange={expandChange}
      >
        <GridColumn field="userId" title="ID" filter="numeric" />
        <GridColumn field="firstName" title="First name" />
        <GridColumn field="lastName" title="Last name" />
        <GridColumn field="login" title="Login" />
        <GridColumn field="address" title="Address" />
      </Grid>
  )
}