const fs = require('fs')

const getData = (req, res) => {
    const filters = req.query;
    let response = [];
    const statusCode = 200;
    fs.readFile("./data/people.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
        }
        try {
            const people = JSON.parse(jsonString);
            response = people.filter((item) => {
                // if isactive filter set, check its value
                const statusFlag = (filters.hasOwnProperty("isActive")) ? ((Boolean(filters.isActive) === item.isActive) ? true : false) : true;

                let balanceRangeFlag = true;
                if (statusFlag) {
                    // if balance range set, check whether data falls into the range
                    const balance = Number(item.balance.replace(/[^0-9.-]+/g, ""));
                    if (filters.hasOwnProperty("balanceMin")) {
                        const min = parseFloat(filters.balanceMin)
                        balanceRangeFlag = (balance >= min) ? true : false
                    }
                    if (balanceRangeFlag && filters.hasOwnProperty("balanceMax")) {
                        const max = parseFloat(filters.balanceMax)
                        balanceRangeFlag = (balance <= max) ? true : false
                    }
                }

                return (statusFlag && balanceRangeFlag)
            });
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
        finally {
            res.status(statusCode).json({
                count: response.length,
                data: response
            });
        }
    });
}

exports.getData = getData