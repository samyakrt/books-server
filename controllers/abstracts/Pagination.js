class Pagination {

    /**
     * @param {array} data
     */
    paginationResponse(data,page,per_page,total_items) {
        return {
            data,
            page,
            per_page,
            total_items
        }
    }
}

module.exports = Pagination