const fs = require('fs')

const getData = (req, res) => {
    const filters = req.body.hasOwnProperty("filters")?req.body.filters:{};
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
                const statusFlag = (filters.hasOwnProperty("isActive")) ? ((filters.isActive === item.isActive) ? true : false) : true; 

                let balanceRangeFlag = true;
                if(statusFlag)
                {
                    // if balance range set, check whether data falls into the range
                    if (filters.hasOwnProperty("balanceRange")) {
                                        
                        const min = parseFloat(filters.balanceRange[0])
                        const max = parseFloat(filters.balanceRange[1])
                        const balance = Number(item.balance.replace(/[^0-9.-]+/g,""));
                        
                        if(min != -1)
                        {
                            balanceRangeFlag = (balance >= min)?true:false
                        }
                        if(max != -1 && balanceRangeFlag)
                        {
                            balanceRangeFlag = (balance <= max)?true:false
                        }
                    }
                }
                
                return (statusFlag && balanceRangeFlag)
            });            
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
        finally {
            res.status(statusCode).json({
                count : response.length,
                data: response
            });
        }
    });
}

exports.getData = getData