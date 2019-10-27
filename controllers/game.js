let gameModel = require('../models/gameData');


exports.getBlocks = (req,res,next) => {
    let testData = gameModel.getall();
    // console.log(testData);
    res.render('blocks' ,{blockCSS: true});
};

// exports.getAllPeople = (req,res,next) => {
//    let Peoples = peopleModel.getall();
   
//    // Need to pass all peoples to the view using whats returned from
//    // peopleModel.getall(), as of now an empty array is passed []
//    res.render('peoples', { people: [], peoplesCSS: true });
   
// };

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