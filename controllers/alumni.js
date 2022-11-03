import { v4 as uuidv4 } from 'uuid';

//temp db
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

export const createAlumni = (req, res) => {
    const alumniPost = req.body;
    alumni.push({ ...alumniPost, id: uuidv4()});
    res.send(`Alumni with the name ${alumniPost.firstName} added to the database`);
}

export const getAlumni = (req, res) => {
    const {id} = req.params;

    res.send(alumni.find((alumni) => alumni.id === id));
}

export const getAlumnis = (req, res) => {
    console.log(alumni);
    res.send(alumni);
}

export const deleteAlumni =  (req, res) => {
    const {id} = req.params;

    alumni = alumni.filter((alumni) => alumni.id != id)

    res.send(`User with the id ${id} deleted from the database`);

}

export const updateAlumni = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, batch} = req.body;
    const alumniUpdate = alumni.find((alumni) => alumni.id === id);

    if(firstName){
        alumniUpdate.firstName = firstName;
    }
    if(lastName){
        alumniUpdate.lastName = lastName;
    }
    if(batch){
        alumniUpdate.batch = batch;
    }

    res.send(`User with the id ${id} has been updated`);

}