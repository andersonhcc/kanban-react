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
          <h5>Descricao:</h5> <p>{data.descricao}</p>
          <h5>Atribuido por:</h5> <p>{data.atribuidoPor}</p>
          <h5>Dicas: </h5> <p>{data.dicasResolucao}</p>
          <h5>Usuário atribuido: </h5><span className='box-user'><img src={data.user.avatarUser} alt="" /><p>{data.user.name}</p></span>
 

        </div>
      </div>
    </Container>
  );

};
