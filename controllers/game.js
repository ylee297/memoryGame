let gameModel = require('../models/gameData');


exports.getBlocks = (req,res,next) => {
    let testData = gameModel.getall();
    // testData.then((data)=>{console.log(data[0][0].name)});
    res.render('blocks', {blockCSS: true});
};

exports.getScore = (req,res,next) => {
    gameModel.add(res.req.body);
    res.json('properly got it');
};

exports.end = (req,res,next) => {
    res.redirect('/');
};

// exports.getAddPeople = (req,res,next) => {
//     res.render('peopleadd' ,{formsCSS: true});
// };

// exports.getPeople = (req,res,next) => {
//     let id = req.params.id;
//     let People = peopleModel.getpeople(id);

//     // Need to pass the People Object (peopleModel.getpeople(id)) to the view
//     // As of now an empty object {} is being passed
//     People.then(([data,metadata])=>{

//     });
//     res.render('people', {people: {}, peopleCSS: true});
// }

// exports.postAddPeople = (req,res,next) => {
//     let p_name = req.body.name;
//     let p_about = req.body.about;
//     let p_imageURL = req.body.imageURL;
    
//     let pOject = {
//        name: p_name,
//        about: p_about,
//        imageURL: p_imageURL
//     }
 
//     peopleModel.add(pOject);
//     res.redirect(301, '/peoples');
// }