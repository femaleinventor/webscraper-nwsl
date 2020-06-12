// import fetch from 'isomorphic-fetch';
import axios from 'axios';
import cheerio from 'cheerio';

module.exports.getPlayersStats = () => {
    axios.get('http://www.nwslsoccer.com/stats#players')
        .then((response) => {
            if (response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                return $;
            };
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log('error: ', error);
            return error;
        })
};