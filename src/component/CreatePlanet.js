import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { planets } from "../data";



const CreateCharacter = () => {
    const [plan, setPlan] = useState(planets)
    const [newPlanet, setNewPlanet] = useState({})
    const [name, setName] = useState()
    const [description, setDescription] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmission = (e) => {
e.preventDefault()

        setNewPlanet({
            id: plan.length + 1,
            name: name,
            description: description,
            image : "",
            character : []
        })
        setPlan(plan.concat(newPlanet))

        console.log(newPlanet)
        console.log(plan);

        localStorage.setItem("newChar", JSON.stringify(plan));


    }

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Planet</Modal.Title>
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