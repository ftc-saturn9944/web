const fs = require('fs');
const exif = require('exifr');

const baseDir = "./public/images/gallery/";

const dirs = ["Skystone", "RoverRuckus", "RelicRecovery"];

let index = {
    season: {
        skystone: {
            seasonName: "Skystone",
            folderName: dirs[0],
            period: "2019-2020",
            files: []
        },
        roverRuckus: {
            seasonName: "Rover Ruckus",
            folderName: dirs[1],
            period: "2018-2019",
            files: []
            
        },
        relicRecovery: {
            seasonName: "Relic Recovery",
            folderName: dirs[2],
            period: "2017-2018",
            files: []
        }
    }
}
const run = async function() {
    for (let [i, dir] of dirs.entries()) {
        dir = baseDir + dir + "/";
        console.log("Indexing " + dir);
        let files = fs.readdirSync(dir);
        files = files.filter((file) => {
            return file.match(/.*\.(jpe?g|png|svg)$/ig);
        });
        let fileDates = {};
        for (file of files) {
            let date = new Date();
            //{pick: ['CreateDate']}
            date = (await exif.parse(dir + file).catch((err) => {
                console.log(err);
                return null;
            }));
            //console.log(date);
            if (date != null && date['CreateDate'] != undefined)
                fileDates[file] = date['CreateDate'];
        }
        files.sort((fileA, fileB) => {
            return (fileDates[fileB] ? fileDates[fileB].getTime() : 0) - (fileDates[fileA] ? fileDates[fileA].getTime() : 0);
        });
        index.season[Object.keys(index.season)[i]].files = files;
    }
    console.log(JSON.stringify(index));
    fs.writeFileSync(baseDir + "index.json", JSON.stringify(index, null, 4));
}

run();

//exif.parse("D:\\Users\\Ricky\\Development\\SaturnWebsite\\client\\public\\images\\gallery\\Skystone\\SS-Stacking.jpg").then(console.log)