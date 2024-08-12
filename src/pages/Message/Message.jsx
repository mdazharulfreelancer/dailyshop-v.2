import MessageBody from "../../component/Message/MessageBody"


const Message = () =>{

 return (
  <>
 {
    window.innerWidth < 425 && (
        <MessageBody />
    )
 }
  </>
 )
      
}
export default Message
