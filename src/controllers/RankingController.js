const { sequelize } = require('../models/index');

/*
select 
	*,
	row_number() over() as ranking
	from (
	select
		name,
		nick,
		count(*) as "wins"
		from (
			select p.name, 
			p.nick 
			from team t 
			join player_team pt on pt.team_id = t.id 
			join player p on p.id = pt.player_id 
			where t.win = 1 ) z
 	group by 
		name, 
		nick
	 order by 
		count(*) desc
) x
*/

module.exports = {
  async showRanking(req, res) {
    sequelize.query('select *, row_number() over() as ranking from ( select name, nick, count(*) as "wins" from ( select p.name, p.nick from team t join player_team pt on pt.team_id = t.id join player p on p.id = pt.player_id where t.win = 1 ) z group by  name, nick order by count(*) desc ) x', { type: sequelize.QueryTypes.SELECT })
      .then((players) => res.json(players));
  },
};
