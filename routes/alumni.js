import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let alumni = [
    {
    firstName: "John",
    lastName: "Doe",
    batch: 2021
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        batch: 2022
        }
]
//Alumni routes already start with /alumni
router.get('/', (req, res) => {
    console.log(alumni);
    res.send(alumni);
});

router.post('/', (req, res) => {
    const alumniPost = req.body;
    alumni.push({ ...alumniPost, id: uuidv4()});
    res.send(`Alumni with the name ${alumniPost.firstName} added to the database`);
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    
    res.send(alumni.find((alumni) => alumni.id === id));
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    alumni = alumni.filter((alumni) => alumni.id != id)

    res.send(`User with the id ${id} deleted from the database`);

})
export default router;