const cloudinary = require('cloudinary').v2
const fs = require('fs');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    try {
        const options = { folder };
        if (height) {
            options.height = height;
        }
        if (quality) {
            options.quality = quality;
        }
        options.resource_type = "auto";

        console.log("FILE: ", file);
        const response = await cloudinary.uploader.upload(file.path, options);
        console.log("RESPONSE: ", response);

        return response;
    } catch (error) {
        console.log("Error in cloudinary", error)
        fs.unlinkSync(file.tempFilePath);
        return null;
    }
}