const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: "public_UnIZSzF/jGcYmBcEbfGU5I2uA/4=",
    privateKey: "private_npBu6yYvJ0DYmtPsUXPMYr+JCx0=",
    urlEndpoint: "https://ik.imagekit.io/JETHOOP"
});

async function uploadFile(file, filename) {
    const response = await imagekit.upload({
        file: file,
        filename: filename,
        folder: "/caption-generator"
    })
    return response
}

module.exports = uploadFile