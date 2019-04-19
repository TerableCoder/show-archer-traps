module.exports = function ShowArcherTraps(mod) {

    const TrapSkills = [
        150720,//fire
        90920,//slow
        100520,//stun
        230320,//r-stun
        251020 //r-fire
    ];
    
    mod.hook('S_SPAWN_PROJECTILE', 5, (event) => {
        if(mod.game.me.gameId == (event.gameId)) return;
        if(TrapSkills.includes(event.skill.id)){
            event.gameId = mod.game.me.gameId;
            return true;
        }
    });
    
 }
