const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://un:pw@cluster0-w7riv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true});
const data = [
    {name: "browser", count: 0},
    {name: "nodejs", count: 0},
    {name: "javascript", count: 0},
    {name: "esnext", count: 0},
    {name: "typescript", count: 0},
    {name: "nightwatch", count: 0},
    {name: "playwright", count: 0},
    {name: "protractor", count: 0},
    {name: "puppeteer", count: 0},
    {name: "testcafe", count: 0},
    {name: "webdriverio", count: 0},
    {name: "noframework", count: 0},
    {name: "cypress", count: 0},
    {name: "seleniumwebdriver", count: 0},
    {name: "typescript", count: 0},
    {name: "wd", count: 0},
];

// To reset db once development finished
client.connect(err => {
    const collection = client.db("picker").collection("click");
    collection.insertMany(data, (err, res) => {
        if (err) throw err;
        client.close();
    });
});
