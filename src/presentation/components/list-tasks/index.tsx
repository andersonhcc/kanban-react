import { useMemo } from 'react';
import { Container, Input } from './styles'
import { BsFileCheck } from "@react-icons/all-files/bs/BsFileCheck";
import { AiOutlineFile } from "@react-icons/all-files/ai/AiOutlineFile";
import { GrInProgress } from "@react-icons/all-files/gr/GrInProgress";
import { AiOutlineQuestion } from "@react-icons/all-files/Ai/AiOutlineQuestion";
import { CardComponent } from '../card/helper';
import { ListModel } from '../../../domain/models';

type Props = {
  data: ListModel;
  indexList: number;
  search: string;
  dataFilter: ListModel[];
  setSearch(value: string): void
}

export const ListTask = ({ search, setSearch, dataFilter, data, indexList }: Props) => {
  const typesCard = {
    TASKS: "Tasks",
    DOING: "Doing",
    DONE: "Done"
  };

  const iconsCard = {
    [typesCard.TASKS]: <AiOutlineFile />,
    [typesCard.DOING]: <GrInProgress />,
    [typesCard.DONE]: <BsFileCheck />
  };

  const verifyIconHeader = useMemo(() => {
    const icon = iconsCard[data.nameCard] || <AiOutlineQuestion />;
    return icon;
  }, [data]);

  return (
    <Container>
      <header>
        {verifyIconHeader}
        <h2>{data.nameCard}</h2>

      </header>
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder='Pesquise aqui por prioridade...' />

      <ul>

        {!dataFilter[0] && data.data.map((item, index) => (
          <CardComponent key={item.id} index={index} data={item} indexlist={indexList} />))}

        {dataFilter?.map((item: any, index: any) => (
          <CardComponent key={item.id} index={index} data={item} indexlist={indexList} />))}

      </ul>
    </Container>

  );
};
