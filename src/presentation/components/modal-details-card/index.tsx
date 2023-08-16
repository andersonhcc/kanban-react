import { Container } from './styles'
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"

type Props = {
  closeModal: () => void
  data: any
}

export const ModalDetailsCard = ({ closeModal, data }: Props) => {
  return (
    <Container>
      <div>
        <header>
          <p>{data.nomeTarefa}</p>
          <button onClick={closeModal}><AiOutlineClose size={20} /></button>
        </header>

        <div className='detailsTask'>
          <p><h3>Descricao: </h3>{data.descricao}</p>
          <p><h3>Atribuido por: </h3>{data.atribuidoPor}</p>
          <p><h3>Dicas: </h3>{data.dicasResolucao}</p>
          <p><h3>Usuário atribuido: </h3>{data.user.name}</p>
        </div>
      </div>
    </Container>
  );

};
