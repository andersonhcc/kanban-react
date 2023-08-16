import { Container, Label, stylesModal } from './styles'
import Modal from 'react-modal';
import { ModalDetailsCard } from '../modal-details-card';
import { CardModel } from '../../../domain/models';

type Props = {
  closeModal: () => void;
  openModal: () => void;
  visibleModal: boolean;
  refDrop: React.RefObject<HTMLInputElement>;
  isDragging: boolean;
  data:CardModel;
}

export const Card = ({ data, isDragging, refDrop, visibleModal, closeModal, openModal }: Props) => {

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
        style={stylesModal}
        ariaHideApp={false}
      >
        <ModalDetailsCard closeModal={closeModal} data={data} />
      </Modal>
    </>

  );
};

