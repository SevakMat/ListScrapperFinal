
import React, { useState } from "react"
import { Box } from "@mui/system"
import { Button } from '@mui/material';

import BrandSelect from "./BrandSelect"
import { SendCarData } from "../../services/scrapping.service";
import { RootState, useAppSelector } from "../../store";

export interface ISearchForm {
    cmtype?: string; //anhatakan kam diler
    type?: string; //vacharq kam pntrumem
    po?: string;  // lusankarov
    n?: string; //??????????????
    bid: string;   //--- maknish
    mid: string; //--- model
    price1?: string;//--- giny sksac
    price2?: string; //--- giny verjacrac
    crc?: string; //taradram
    _a27?: string; //tapqi tesak
    _a2_1?: string; //tarin sksac
    _a2_2?: string; //tarin verjacrac
    _a15?: string;
    _a28_1?: string; //sharjichi caval sksac (2.6) nuyn 26
    _a28_2?: string; //sharjichi caval verjacrac (2.6) nuyn 26
    _a13?: string; //poxancman tup
    _a23?: string;  //qarshak
    _a1_1?: string; //vazqy sksac
    _a1_2?: string; //vazqy verjacrac
    _a43?: string;  //gazi sarqavorum
    _a16?: string;  //xek
    _a17?: string;  //maxazercvac
    _a22?: string;  //tapki guyny
    _a102?: string; //interyeri guyny
    _a103?: string; //lyuki tesak
}


const Dashboard = () => {
    const { user } = useAppSelector((state: RootState) => state.auth)

    const [searchForm, setSearchForm] = useState<ISearchForm>({
        bid: "",
        mid: ""
    })

    const confirmSearch = () => {
        console.log(user);

        SendCarData(searchForm, user?.userId as string)
    }

    return (
        <Box>
            <BrandSelect setSearchForm={setSearchForm} />
            <Button
                variant="contained"
                onClick={confirmSearch}
            >
                Confirm search
            </Button>
        </Box>
    )
}

export default Dashboard















