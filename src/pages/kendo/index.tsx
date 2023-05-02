import { useState, useEffect} from "react"
import { Grid, GridColumn } from "@progress/kendo-react-grid"

export default function Kendo() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://localhost:7005/api/user`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <Grid data={data}>
            <GridColumn field="userId" title="ID" width="40px" />
            <GridColumn field="firstName" title="First name" />
            <GridColumn field="lastName" title="Last name" />
            <GridColumn field="login" title="Login" />
            <GridColumn field="address" title="Address" />
        </Grid>
    )
}