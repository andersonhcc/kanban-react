import { useContext, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CardModel } from "../../../domain/models";
import { Card } from ".";
import MainContext from "../templates/home/context";

interface PropsCard {
  index: number;
  indexlist: number;
  data: CardModel
}

export const CardComponent = ({ data, index, indexlist }: PropsCard) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const dataContext: any = useContext(MainContext)
  
 
  const [{ isDragging }, dragRef] = useDrag({
    type: "cards",
    item: { index, indexlist, data: data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  const [, dropRef] = useDrop({
    accept: 'cards',
    hover(item: any, monitor) {
      const dListIndex = item.indexlist;
      const tListIndex = indexlist;
      const dIndex = item.index;
      const tIndex = index;

      if (dIndex === tIndex && dListIndex === tListIndex) {
        return;
      }
      
      const targetSize: any = ref.current?.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset: any = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;
      if (dIndex < tIndex && draggedTop < targetCenter) {
        return;
      }
      if (dIndex > tIndex && draggedTop > targetCenter) {
        return;
      }
      dataContext.move(dListIndex, tListIndex, dIndex, tIndex);
      item.index = tIndex;
      item.indexlist = tListIndex;
    }
  })

  dragRef(dropRef(ref));

  const closeModal = () => {
    setVisibleModal(false);
  }

  const openModal = () => {
    setVisibleModal(true);
  }

  return (
    <Card
      closeModal={closeModal}
      openModal={openModal}
      refDrop={ref}
      isDragging={isDragging}
      data={data}
      visibleModal={visibleModal}
    />
  )

}
