const express = require("express");

const getContacts=((req, res) =>{
    res.status(200).json({ message:"Get all Contacts" });
});

const getContact=((req, res) =>{
    res.status(200).json({ message:`Get contact for ${req.params.id}` });
});

const createContact=((req, res) =>{
    const {name,email,phone}=req.body;
    if(name && email && phone)
        console.log(req.body);
    else
        console.log("error");
    res.status(200).json({ message: `Create contact` });
});

const updateContact=((req, res) =>{
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact=((req, res) =>{
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});
  


module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};