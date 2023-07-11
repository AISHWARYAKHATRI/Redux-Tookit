import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/UserSlice";
import { deleteUsers } from "../store/actions/index";

const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  }

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteAllUsers}>Delete All Users</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
  `

export default DeleteAllUsers