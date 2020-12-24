class SiteController {
  // [GET] /
  index(req, res) {
    console.log(req.params)
    
    switch (req.params.slug) {
        case 've-chung-toi':
        let isVechungtoi = true;
        res.render('home',{layout:"hmd" , isVechungtoi});     
        break;
        case 'nha-may':
        let isNhamay = true;    
        res.render('home',{layout:"hmd",isNhamay}); 
        break;
        case 'san-pham':
        let isSanpham = true;    
        res.render('home',{layout:"hmd",isSanpham}); 
        break;
        case 'doi-tac':
        let isDoitac = true;    
        res.render('home',{layout:"hmd",isDoitac}); 
        break;
        case 'tin-tuc':
        let isTintuc = true;    
        res.render('home',{layout:"hmd",isTintuc}); 
        break;
        case 'tuyen-dung':
        let isTuyendung = true;    
        res.render('home',{layout:"hmd",isTuyendung}); 
        break;
        case 'lien-he':
        let isLienhe = true;    
        res.render('home',{layout:"hmd",isLienhe}); 
        break;
        default:
          let isTrangchu = true;  
        res.render('home',{layout:"hmd",isTrangchu}); 
        break;
    }
    
  }  
 
}

module.exports = new SiteController();
