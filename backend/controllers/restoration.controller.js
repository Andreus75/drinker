const { Restoration } = require('../dataBase');
const { SuccessCreated } = require('../configs/error-enum');
const { s3Service } = require("../services");

module.exports = {
    createRestoration: async (req, res, next) => {
        try {
            console.log('createRestoration');
            console.log(req.body);
            const { name, persons, average_check, start_day_work, end_day_work, start_hour, end_hour, weekend } = req.body;
            const address = req.address;
            const contact = req.contact;

            let restoration = await Restoration.create({name, persons, average_check, start_day_work, end_day_work, start_hour, end_hour, weekend, address_id: address._id, contact_id: contact._id });

            const { photo } = req.file || {};

            if (photo) {
                const uploadInfo = await s3Service.uploadImage(photo, 'restoration', restoration._id.toString());

                await Restoration.findByIdAndUpdate(
                    restoration._id,
                    {photo: uploadInfo.Location},
                    {new: true}
                );
            }

            res.status(SuccessCreated).json(restoration);
        } catch (e) {
            next(e);
        }
    }
};
