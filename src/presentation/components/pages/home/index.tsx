import { useSpring } from "@react-spring/web";
import { produce } from "immer";
import { useEffect, useState } from "react";
import { Home } from "../../templates/home";
import { AxiosHttpClient } from "../../../../infra/gateways";
import { GetAllListImplements } from "../../../../use-cases";

const httpClient = new AxiosHttpClient();

const getAllListDone = new GetAllListImplements(
  "http://localhost:3000/done",
  httpClient
);

const getAllListTasks = new GetAllListImplements(
  "http://localhost:3000/tasks",
  httpClient
);

const getAllListDoing = new GetAllListImplements(
  "http://localhost:3000/doing",
  httpClient
);

export const HomePage = () => {
  const [list, setList] = useState<any>([]);
  
  const getAllList = async () => {
    try {
      const responseDone = await getAllListDone.execute();
      const responseTasks = await getAllListTasks.execute();
      const responseDoing = await getAllListDoing.execute();
      setList([
        {
          nameCard: "Tasks",
          data: responseTasks,
        },
        {
          nameCard: "Doing",
          data: responseDoing,
        },
        {
          nameCard: "Done",
          data: responseDone,
        }
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllList();
  }, [])

  const springs = useSpring({
    from: { x: -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 200,

  })

  const move = (fromList: number, toList: number, from: number, to: number) => {
    setList(produce(list, (draft: any) => {
      const dragged = draft[fromList].data[from];
      draft[fromList].data.splice(from, 1);
      draft[toList].data.splice(to, 0, dragged);
    }))
  }

  return (
    <Home
      list={list}
      springs={springs}
      move={move}
    />
  )

}
