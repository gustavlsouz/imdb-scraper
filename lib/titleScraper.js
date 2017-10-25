const cheerio = require('cheerio');
const date = require('date-and-time');

exports.makeTitleObject = function(dataObj, html, callback) {
    let link = dataObj.link
    , number = dataObj.number
    ;
    
    let $ = cheerio.load(html);
    let movie = new Object();

    if (dataObj.position) {
        movie.top250 = dataObj.position;
    }

    let getText = ($el) => {
        return $el.text().trim();
    };
    
    
    movie.link = link;
    movie.idImdb = +number;
    
    movie.year = +getText($('#titleYear').children());
    
    // remove ano do titulo
    $('div .title_wrapper h1 span').remove();
    movie.title = getText($('div .title_wrapper h1'));
    
    movie.rating = +getText($("div .ratingValue span[itemprop='ratingValue']"));
    movie.ratingCount = getText($("div .imdbRating span[itemprop='ratingCount']"));
    movie.createdAt = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    
    $("div .title_bar_wrapper div .originalTitle span").remove()
    movie.originalTitle = getText($("div .title_bar_wrapper div .originalTitle"));

    movie.duration = getText($("div .subtext time[itemprop='duration']"));
    movie.director = getText($('div span[itemprop="director"] [itemprop="name"]'));

    movie.cast = [];
    
    movie.description = getText($('div [ itemprop="description" ]'));

    $('span .itemprop[ itemprop="name" ]').each(function(idx, el){
        movie.cast.push(getText( $(el) ) );
    });

    movie.genre = [];

    $('div [ itemprop="genre" ] a').each(function(idx, el) {
        movie.genre.push(getText($(el)));
    });


    callback(movie);
}