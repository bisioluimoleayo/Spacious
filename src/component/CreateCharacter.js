import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { characters } from "../data";



const CreateCharacter = () => {
    const [char, setChar] = useState(characters)
    const [newChar, setNewChar] = useState({})
    const [name, setName] = useState()
    const [description, setDescription] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmission = (e) => {
e.preventDefault()

        setNewChar({
            id: char.length + 1,
            name: name,
            description: description,
            image : "",
            friends : []
        })
        const c = characters.concat(newChar)
        console.log(c);
        // setChar(char.concat(newChar))

        console.log(newChar)
        console.log(char);

        localStorage.setItem("newChar", JSON.stringify(newChar));
     setChar(char.concat(JSON.parse(localStorage.getItem("newChar"))))
    //  if (savedChars) {
    //      setChar(char.concat)
    //  }
        // console.log(savedChars);

    }

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Character</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmission}>

          <Modal.Body>
                  Name
                  <input type="text" name="name" placeholder="full name" onChange={(e) => setName(e.target.value)}/>
                  <textarea type="text" name="description" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button variant="primary" type="submit">
              Submit
            </button>
          </Modal.Footer>
          </form>

        </Modal>
      </>
    );
}
 
export default CreateCharacter;