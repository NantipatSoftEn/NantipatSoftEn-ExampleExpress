exports.aboutMe  =  (req,res) => {
    const img =  `../images/me.jpg`;
    res.render('index', { 
        title: 'aboutMe' ,
        name : `Army rank 1`,
        img : img,
        age : 22,
        hobby :  `play dota2`,

    });
}