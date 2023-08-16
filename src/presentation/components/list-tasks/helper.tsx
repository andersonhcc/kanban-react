import { useEffect, useState } from "react";
import { ListTask } from "."
import { ListModel } from "../../../domain/models"
import { AxiosHttpClient } from "../../../infra/gateways";
import { SearchPriorityListImp } from "../../../use-cases";

type Props = {
  data: ListModel;
  indexList: number;
}

const httpClient = new AxiosHttpClient();

export const ListTaskComponent = ({data, indexList} : Props) => {

  const searchListOfPriority = new SearchPriorityListImp(
  `http://localhost:3000/${data.nameCard}`,
   httpClient
 );

  const [search, setSearch] = useState("");
  const [dataFilter, setDataFilter] = useState<any>([]);

  const searchPriority = async () => {
    try {
      const response = await searchListOfPriority.execute({
        priority: search
      });
      setDataFilter(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    searchPriority();
  },[search])


  return (
    <ListTask 
      data={data}
      indexList={indexList}
      setSearch={setSearch}
      dataFilter={dataFilter}
      search={search}
    />
  )

}