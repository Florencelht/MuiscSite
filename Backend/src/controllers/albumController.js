import {v2 as cloudinary} from 'cloudinary';
import albumsModel from '../models/albumModel.js';

const addAlbum = async (req,res)=>{
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        
        const albumData= {
            name,
            desc,
            bgColour,
            image:imageUpload.secure_url
        }

        const album = albumsModel(albumData);
        await album.save();

        res.json({satisfies:"success", messsage:"Album added successfully"})

    } catch (error) {
        res.json({success:false, error:error})
    }
}

const listAlbum= async (req,res)=>{
    try {
        const allAlbums = await albumsModel.find({});
        res.json({success:true, albums:allAlbums});

    } catch (error) {
        res.json({success:false,error:error})
    }
}

const removeAlbum = async (req,res)=>{
    try {
        await albumsModel.findByIdAndDelete(req.body.id);
        res.json({satisfies:"success", messsage:"Album removed successfully"})

    } catch (error) {
         res.json({success:false,error:error})
    }
}

export {addAlbum,listAlbum,removeAlbum  }