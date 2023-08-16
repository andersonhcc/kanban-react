import { Container } from './styles'
import MainContext from './context';
import { SpringValue, animated } from "@react-spring/web";
import { Header } from '../../header';
import { ListModel } from '../../../../domain/models';
import { ListTaskComponent } from '../../list-tasks/helper';

type Props = {
  list: ListModel[];
  move:(fromList: number, toList: number, from: number, to: number) => void;
  springs: {
    x: SpringValue<number>;
    opacity: SpringValue<number>;
  }
}

export const Home = ({list, move, springs}: Props) => {
  return (
    <>
      <Header />
      <MainContext.Provider value={{
       list,
        move
      }}>
        <animated.div
          style={{
            flex: 1,
            ...springs,
          }}
        >
          <Container>
            {list?.map((data, index) => (
              <ListTaskComponent indexList={index} key={data.nameCard} data={data} />
            ))}

          </Container>
        </animated.div>
      </MainContext.Provider>
    </>
  );
};
