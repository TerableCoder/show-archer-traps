module.exports = function ShowArcherTraps(dispatch) {

    const TrapSkills = [
        67259584,//fire
        67199584,//slow
        67209284,//stun
        67339084,//r-stun
        67359884 //r-fire
    ];
    
    let gameId = 0;
    
    dispatch.hook('S_LOGIN', 12, event => {
        gameId = event.gameId;
    })
    
    dispatch.hook('S_SPAWN_PROJECTILE', 5, (event) => {
        if(gameId == (event.gameId)) return;
        if(TrapSkills.includes(event.skill)){
            event.gameId = gameId;
            return true;
        }
    });
    
 }
