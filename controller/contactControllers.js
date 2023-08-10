const express = require("express");
const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel")


//////////////////////////// Get All /////////////////////////////////////////////
const getContacts = asyncHandler(async (req, res) => {
    const contact =await Contact.find();
    if (!contact) {
        return res.status(404).json({ message: "Data Not Found shiva do something" });
    }
    else { 
        console.log(contact);
    }
    res.status(200).json({contact});
});



//////////////////////////// GetContact /////////////////////////////////////////////
const getContact = asyncHandler(async (req, res) => {
    const contact =await Contact.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message : "Data Not Found shiva do something" });
    }
    else { 
        console.log(contact)
    }
    return res.status(200).json({contact});
});



//////////////////////////// Create /////////////////////////////////////////////
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    console.log(req.body);
    if (!name || !email || !phone) {
        return res.status(400).json({
            message: "All feilds are mandetory",
            success: "false"
        });
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    return res.status(200).json({ contact });
});


//////////////////////////// Update /////////////////////////////////////////////
const updateContact = asyncHandler(async (req, res) => {
    const contact =await Contact.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: "Data Not Found " });
    }
    const updated=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new:true }
    );
    res.status(200).json({ message: `Update contact for ${updated}` });
});



//////////////////////////// Delete /////////////////////////////////////////////
const deleteContact = asyncHandler(async (req, res) => {
    const contact =await Contact.deleteOne({_id:req.params.id});
    if (!contact) {
        return res.status(404).json({ message: "Data Not Found shiva do something" });
    }
    else { 
        console.log(contact)
    }
    res.status(200).json({ message: `Deleted contact for ${req.params.id}` });
});



module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };