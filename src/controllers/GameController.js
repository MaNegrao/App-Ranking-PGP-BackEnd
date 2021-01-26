const { Match, Team, Player }  = require('../models');
const { status, sendError } = require('../status');

module.exports = {
    async storeResult(req, res){
        try {
            const { t1, t2 } = req.body;

            const [p1t1, p2t1] = t1.players;
            const [p1t2, p2t2] = t2.players;

            const p1 = await Player.findOne({ where: { nick: p1t1 }});
            const p2 = await Player.findOne({ where: { nick: p2t1 }});
            const p3 = await Player.findOne({ where: { nick: p1t2 }});
            const p4 = await Player.findOne({ where: { nick: p2t2 }});

            if (!(p1 && p2 && p3 && p4)){
                return sendError(res, status.USER_DOES_NOT_EXIST);
            }

            match = await Match.create({ date: new Date(), status: 'TERMINADO' });

            const { id } = match;

            time1 = await Team.create({ score: t1.score , win: t1.win });
            time2 = await Team.create({ score: t2.score , win: t2.win });

            await time1.setMatch(id);
            await time1.addPlayers([p1, p2]);
            
            await time2.setMatch(id);
            await time2.addPlayers([p3, p4]);

            return sendError(res, status.OK);
        } catch (error) {
            return sendError(res, status.SERVER_ERROR);
        }        
    },

}

