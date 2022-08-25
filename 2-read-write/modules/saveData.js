const fs = require('fs');
const path = require('path');


function saveData(data, users, overwrite) {
    fs.readdir(path.join(__dirname, data), function (err, files) {
        if (err) {
            console.log(err);
        } else {
            fs.mkdir(path.join(__dirname, users), function (err) {
                if (err) {
                    if (err.code === 'EEXIST') {
                        console.log('Folder istnieje')
                    } else {
                        console.log(err)
                    }
                } else {
                    console.log("Folder stworzony")
                }
            })



            files.forEach(function (file) {
                fs.readFile(path.join(__dirname, data, file), 'utf-8', function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {

                        let userData = JSON.parse(data);
        



                        for (const user of userData) {

                            let userData = [`Name: ${user.name}`,
                            `Street: ${user.address.street}`,
                            `Zip Code:${user.address.zipcode}`,
                            `City: ${user.address.city}`,
                            `Phone: ${user.phone}`];

                            fs.open(path.join(__dirname, users, `${user.id}-${user.name}.txt`), "r", function (err, f) {
                                if (err){
                                    fs.writeFile(path.join(__dirname, users, `${user.id}-${user.name}.txt`), userData.join('\n').toString(), function (err) {
                                        if (err) {
                                            console.log(err);
                                        }
                                    })
                                } else {
                                    if (overwrite) {
                                        fs.writeFile(path.join(__dirname, users, `${user.id}-${user.name}.txt`), userData.join('\n').toString(), function (err) {
                                            if (err) {
                                                console.log(err);
                                            }
                                        })
                                    }
                                }
                            })

                           

                           
                        }
                    }

                })
            })
        }
    })
}



module.exports = saveData;