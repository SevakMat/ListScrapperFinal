import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeList, models } from '../../searchTypes/searchtypes';
import { ISearchForm } from './Dashboard';

interface ISelectVariants {
  setSearchForm: React.Dispatch<React.SetStateAction<ISearchForm>>
}

export default function SelectVariants({ setSearchForm }: ISelectVariants) {
  const [brand, setBrand] = React.useState<string>('');
  const [modelList, setModelList] = React.useState<Array<any>>([]);
  const [model, setModel] = React.useState<string>("");

  const handleBrandChange = (event: any) => {
    setBrand(event.target.value);
    const model: string = event.target.value.split('-')
    setModelList(models[model[1]])
    setSearchForm((state: ISearchForm) => {
      return {
        ...state,
        bid: model[0]
      }
    })

  };

  const handleModelChange = (event: any) => {
    setModel(event.target.value);
    setSearchForm((state: ISearchForm) => {
      return {
        ...state,
        mid: event.target.value
      }
    })

  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Car Brand</InputLabel>
        <Select
          value={brand}
          onChange={handleBrandChange}
          label="Car brand"
        >
          {
            makeList.map((item: any) => {
              return (
                <MenuItem key={item.id} value={`${item.id}-${item.maknish}`}>{item.maknish}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Model</InputLabel>
        <Select
          value={model}
          onChange={handleModelChange}
          label="Model"
          disabled={!modelList.length}
        >
          {
            modelList.map((item: any) => {
              return (
                <MenuItem key={item.id} value={item.id}>{item.maknish}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>

    </div>
  );
}