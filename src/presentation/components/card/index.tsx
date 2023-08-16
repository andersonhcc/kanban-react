import { Container, Label, stylesModalWeb, stylesModalMobile } from './styles'
import Modal from 'react-modal';
import { ModalDetailsCard } from '../modal-details-card';
import { CardModel } from '../../../domain/models';
import { useMediaQuery } from "react-responsive";

type Props = {
  closeModal: () => void;
  openModal: () => void;
  visibleModal: boolean;
  refDrop: React.RefObject<HTMLInputElement>;
  isDragging: boolean;
  data:CardModel;
}

export const Card = ({ data, isDragging, refDrop, visibleModal, closeModal, openModal }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <>
      <Container onClick={openModal} ref={refDrop} isDragging={isDragging} priority={data.colorLabel}>
        <header>
          <Label color={data.colorLabel} />
          <p>{data.nomeTarefa}</p>
        </header>
        <img src={data.user.avatarUser} alt="" />


        <p>A tarefa deve ser executada até: {data.dataExecucao}</p>
        <p>A tarefa deve ser executada em: {data.localExecucao}</p>
        <p>Prioridade:</p>
        <p className='text-priority'>{data.prioridade}</p>

      </Container>

      <Modal
        isOpen={visibleModal}
        style={isMobile ? stylesModalMobile : stylesModalWeb}
        ariaHideApp={false}
      >
        <ModalDetailsCard closeModal={closeModal} data={data} />
      </Modal>
    </>

  );
};

