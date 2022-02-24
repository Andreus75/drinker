const {Restoration} = require('../dataBase');

module.exports = {
    getRestorationsFilter: (query = {}) => {
        const {
            perPage = 20,
            page = 1,
            sortBy = 'createdAt',
            order = 'asc',
            ...filters
        } = query;

        const findObject = {};
        const averageCheckFilter = {};

        Object.keys(filters).forEach((filterParam) => {
            switch (filterParam) {
                case 'min_check':
                    Object.assign(averageCheckFilter, { $gte: +filters['min_check'] });
                    break;
                case 'max_check':
                    Object.assign(averageCheckFilter, { $lte: +filters['max_check'] });
                    break;
                default:
                    findObject[filterParam] = filters[filterParam];
            }
        });

        if (Object.values(averageCheckFilter).length) {
            findObject.average_check = averageCheckFilter;
        }

        const orderBy = order === 'asc' ? -1 : 1;

        return Restoration
            .find(findObject)
            .sort({ [sortBy]: orderBy })
            .limit(+perPage)
            .skip((page - 1) * perPage);
    }
};

