const { Restoration } = require('../dataBase');
const { SuccessCreated } = require('../configs/error-enum');
const { s3Service, restorationService} = require("../services");

module.exports = {
    createRestoration: async (req, res, next) => {
        try {
            const { name, persons, average_check, start_day_work, end_day_work, start_hour, end_hour, weekend, vi_fi, parking, music } = req.body;
            const address = req.address;
            const contact = req.contact;

            let restoration = await Restoration.create({name, persons, average_check, start_day_work, end_day_work, start_hour, end_hour, weekend, vi_fi, parking, music, address_id: address._id, contact_id: contact._id });

            const { photo } = req.files || {};

            if (photo) {
                const uploadInfo = await s3Service.uploadImage(photo, 'restoration', restoration._id.toString());

                restoration = await Restoration.findByIdAndUpdate(
                    restoration._id,
                    {photo: uploadInfo.Location},
                    {new: true}
                );
            }

            res.status(SuccessCreated).json(restoration);
        } catch (e) {
            next(e);
        }
    },

    getRestorations: async (req, res, next) => {
        try {
            const restorations = await Restoration.find();

            res.json(restorations);
        } catch (e) {
            next(e);
        }
    },

    getRestorationById: (req, res, next) => {
        try {
            const restoration = req.restoration;

            res.json(restoration);
        } catch (e) {
            next(e);
        }
    },

    getRestorationsFilter: async (req, res, next) => {
        try {
            console.log(req.query);
            const restorationsFilter = await restorationService.getRestorationsFilter(req.query);

            res.json(restorationsFilter);
        } catch (e) {
            next(e);
        }

    }
};
